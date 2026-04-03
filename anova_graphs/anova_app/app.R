library(shiny)
library(bslib)
library(ggplot2)
library(dplyr)
library(DT)

# ---------------------------------------------------------------------------
# Sample data generator – simulates a clinical trial comparing blood-pressure
# reduction across three treatment groups, stratified by age group and sex.
# ---------------------------------------------------------------------------
generate_sample_data <- function() {
  set.seed(42)
  n_per_cell <- 20
  treatments <- rep(c("Drug A", "Drug B", "Placebo"), each = n_per_cell * 2)
  age_groups  <- rep(rep(c("18-40", "41-65"), each = n_per_cell), 3)

  means <- c(17, 13, 12, 8, 7, 3)
  sds   <- c(4, 4, 4, 4, 3, 3)
  outcome <- unlist(mapply(
    function(m, s) rnorm(n_per_cell, m, s), means, sds
  ))

  data.frame(
    SubjectID   = seq_len(n_per_cell * 6),
    Treatment   = treatments,
    AgeGroup    = age_groups,
    Sex         = sample(c("Male", "Female"), n_per_cell * 6, replace = TRUE),
    BPReduction = round(outcome, 1),
    stringsAsFactors = FALSE
  )
}

# ---------------------------------------------------------------------------
# Compute group-level summary statistics
# ---------------------------------------------------------------------------
compute_summary <- function(df, outcome, group, subgroup = NULL) {
  grp_vars <- if (!is.null(subgroup)) c(group, subgroup) else group
  df %>%
    group_by(across(all_of(grp_vars))) %>%
    summarise(
      mean     = mean(.data[[outcome]], na.rm = TRUE),
      sd       = sd(.data[[outcome]], na.rm = TRUE),
      n        = sum(!is.na(.data[[outcome]])),
      se       = sd / sqrt(n),
      ci_lower = mean - qt(0.975, df = max(n - 1, 1)) * se,
      ci_upper = mean + qt(0.975, df = max(n - 1, 1)) * se,
      .groups  = "drop"
    )
}

# ---------------------------------------------------------------------------
# Build the ggplot object
# ---------------------------------------------------------------------------
build_plot <- function(summ, df, params) {
  outcome   <- params$outcome
  group     <- params$group
  subgroup  <- params$subgroup
  graph_type <- params$graph_type
  error_type <- params$error_type
  show_pts   <- params$show_points

  if (error_type == "se") {
    summ$ymin <- summ$mean - summ$se
    summ$ymax <- summ$mean + summ$se
    err_label <- "Mean \u00b1 SE"
  } else if (error_type == "ci") {
    summ$ymin <- summ$ci_lower
    summ$ymax <- summ$ci_upper
    err_label <- "Mean \u00b1 95% CI"
  } else {
    summ$ymin <- summ$mean - summ$sd
    summ$ymax <- summ$mean + summ$sd
    err_label <- "Mean \u00b1 SD"
  }

  has_sub <- !is.null(subgroup)

  if (has_sub) {
    if (graph_type == "bar") {
      p <- ggplot(summ, aes(x = .data[[group]], y = mean,
                            fill = .data[[subgroup]])) +
        geom_col(position = position_dodge(0.8), width = 0.7) +
        geom_errorbar(aes(ymin = ymin, ymax = ymax),
                      position = position_dodge(0.8), width = 0.25)
      if (show_pts) {
        p <- p + geom_point(
          data = df,
          aes(x = .data[[group]], y = .data[[outcome]],
              fill = .data[[subgroup]]),
          position = position_jitterdodge(jitter.width = 0.15,
                                          dodge.width = 0.8),
          shape = 21, size = 1.5, alpha = 0.4, show.legend = FALSE
        )
      }
    } else {
      p <- ggplot(summ, aes(x = .data[[group]], y = mean,
                            color = .data[[subgroup]],
                            group = .data[[subgroup]])) +
        geom_line(linewidth = 0.8) +
        geom_point(size = 3) +
        geom_errorbar(aes(ymin = ymin, ymax = ymax), width = 0.15)
      if (show_pts) {
        p <- p + geom_point(
          data = df,
          aes(x = .data[[group]], y = .data[[outcome]],
              color = .data[[subgroup]]),
          position = position_jitter(width = 0.1),
          size = 1.5, alpha = 0.3, show.legend = FALSE
        )
      }
    }
  } else {
    if (graph_type == "bar") {
      p <- ggplot(summ, aes(x = .data[[group]], y = mean,
                            fill = .data[[group]])) +
        geom_col(width = 0.6) +
        geom_errorbar(aes(ymin = ymin, ymax = ymax), width = 0.2)
      if (show_pts) {
        p <- p + geom_point(
          data = df,
          aes(x = .data[[group]], y = .data[[outcome]]),
          position = position_jitter(width = 0.15),
          shape = 21, size = 1.5, alpha = 0.4, show.legend = FALSE
        )
      }
    } else {
      p <- ggplot(summ, aes(x = .data[[group]], y = mean, group = 1)) +
        geom_line(linewidth = 0.8, color = "#2C3E50") +
        geom_point(size = 3, color = "#2C3E50") +
        geom_errorbar(aes(ymin = ymin, ymax = ymax),
                      width = 0.15, color = "#2C3E50")
      if (show_pts) {
        p <- p + geom_point(
          data = df,
          aes(x = .data[[group]], y = .data[[outcome]]),
          position = position_jitter(width = 0.1),
          size = 1.5, alpha = 0.3, color = "#7F8C8D", show.legend = FALSE
        )
      }
    }
  }

  p + labs(
    title    = paste("Mean Comparison:", outcome, "by", group),
    subtitle = err_label,
    x = group,
    y = outcome,
    caption = if (has_sub) paste("Stratified by:", subgroup) else NULL
  ) +
    theme_minimal(base_size = 14) +
    theme(
      plot.title    = element_text(face = "bold"),
      legend.position = "bottom"
    )
}

# ---------------------------------------------------------------------------
# Generate reproducible R code string
# ---------------------------------------------------------------------------
generate_r_code <- function(params) {
  o  <- params$outcome
  g  <- params$group
  sg <- params$subgroup
  gt <- params$graph_type
  et <- params$error_type

  has_sub <- !is.null(sg)
  grp_str <- if (has_sub) paste0(g, ", ", sg) else g

  err_block <- switch(et,
    se = paste0(
      "# Error bars: Mean +/- SE\n",
      "summary_df$ymin <- summary_df$mean - summary_df$se\n",
      "summary_df$ymax <- summary_df$mean + summary_df$se\n"),
    ci = paste0(
      "# Error bars: Mean +/- 95% CI\n",
      "summary_df$ymin <- summary_df$ci_lower\n",
      "summary_df$ymax <- summary_df$ci_upper\n"),
    paste0(
      "# Error bars: Mean +/- SD\n",
      "summary_df$ymin <- summary_df$mean - summary_df$sd\n",
      "summary_df$ymax <- summary_df$mean + summary_df$sd\n")
  )

  if (has_sub && gt == "bar") {
    plot_code <- paste0(
      "ggplot(summary_df, aes(x = ", g, ", y = mean, fill = ", sg, ")) +\n",
      "  geom_col(position = position_dodge(0.8), width = 0.7) +\n",
      "  geom_errorbar(aes(ymin = ymin, ymax = ymax),\n",
      "    position = position_dodge(0.8), width = 0.25)")
  } else if (has_sub && gt == "line") {
    plot_code <- paste0(
      "ggplot(summary_df, aes(x = ", g, ", y = mean,\n",
      "    color = ", sg, ", group = ", sg, ")) +\n",
      "  geom_line(linewidth = 0.8) +\n",
      "  geom_point(size = 3) +\n",
      "  geom_errorbar(aes(ymin = ymin, ymax = ymax), width = 0.15)")
  } else if (!has_sub && gt == "bar") {
    plot_code <- paste0(
      "ggplot(summary_df, aes(x = ", g, ", y = mean, fill = ", g, ")) +\n",
      "  geom_col(width = 0.6) +\n",
      "  geom_errorbar(aes(ymin = ymin, ymax = ymax), width = 0.2)")
  } else {
    plot_code <- paste0(
      "ggplot(summary_df, aes(x = ", g, ", y = mean, group = 1)) +\n",
      "  geom_line(linewidth = 0.8, color = \"#2C3E50\") +\n",
      "  geom_point(size = 3, color = \"#2C3E50\") +\n",
      "  geom_errorbar(aes(ymin = ymin, ymax = ymax),\n",
      "    width = 0.15, color = \"#2C3E50\")")
  }

  paste0(
    "library(ggplot2)\nlibrary(dplyr)\n\n",
    "# Read your data\n",
    "data <- read.csv(\"your_data.csv\")\n\n",
    "# Compute summary statistics\n",
    "summary_df <- data %>%\n",
    "  group_by(", grp_str, ") %>%\n",
    "  summarise(\n",
    "    mean     = mean(", o, ", na.rm = TRUE),\n",
    "    sd       = sd(", o, ", na.rm = TRUE),\n",
    "    n        = n(),\n",
    "    se       = sd / sqrt(n),\n",
    "    ci_lower = mean - qt(0.975, df = n - 1) * se,\n",
    "    ci_upper = mean + qt(0.975, df = n - 1) * se,\n",
    "    .groups  = \"drop\"\n",
    "  )\n\n",
    err_block, "\n",
    "# Create plot\n",
    plot_code, " +\n",
    "  labs(\n",
    "    title = \"Mean Comparison: ", o, " by ", g, "\",\n",
    "    x     = \"", g, "\",\n",
    "    y     = \"", o, "\"\n",
    "  ) +\n",
    "  theme_minimal(base_size = 14) +\n",
    "  theme(plot.title = element_text(face = \"bold\"),\n",
    "        legend.position = \"bottom\")\n\n",
    "# One-way ANOVA\n",
    "model <- aov(", o, " ~ ", g, ", data = data)\n",
    "summary(model)\n",
    if (has_sub) paste0(
      "\n# Two-way ANOVA with interaction\n",
      "model2 <- aov(", o, " ~ ", g, " * ", sg, ", data = data)\n",
      "summary(model2)\n"
    ) else ""
  )
}

# ===========================================================================
# UI
# ===========================================================================
ui <- fluidPage(
  theme = bs_theme(bootswatch = "flatly"),

  navbarPage(
    "ANOVA Mean Comparison Graphs",

    # ------ Tab 1: Graph Tool ------
    tabPanel("Graph Tool",
      sidebarLayout(
        sidebarPanel(
          width = 3,
          h5(strong("Data Source")),
          radioButtons("data_source", NULL,
            choices  = c("Use Sample Data" = "sample", "Upload CSV" = "upload"),
            selected = "sample"),
          conditionalPanel(
            condition = "input.data_source == 'upload'",
            fileInput("file", "Choose CSV File:",
              accept = c("text/csv",
                         "text/comma-separated-values,text/plain",
                         ".csv"))
          ),
          tags$hr(),

          h5(strong("Variable Selection")),
          selectInput("outcome_var", "Outcome Variable (numeric):", choices = NULL),
          selectInput("group_var", "Group Variable:", choices = NULL),
          selectInput("subgroup_var", "Subgroup Variable (optional):",
                      choices = c("None" = "none")),
          tags$hr(),

          h5(strong("Plot Options")),
          radioButtons("graph_type", "Graph Type:",
            choices = c("Bar Plot" = "bar", "Line Plot" = "line")),
          radioButtons("error_type", "Error Bars:",
            choices = c("Standard Error" = "se",
                        "95% Confidence Interval" = "ci",
                        "Standard Deviation" = "sd")),
          checkboxInput("show_points", "Overlay individual data points", FALSE),
          tags$hr(),

          actionButton("generate", "Generate Plot",
                       class = "btn-primary", style = "width:100%;"),
          tags$br(), tags$br(),
          downloadButton("download_png", "Download PNG",
                         style = "width:100%;"),
          tags$br(), tags$br(),
          downloadButton("download_pdf", "Download PDF",
                         style = "width:100%;"),
          tags$br(), tags$br(),
          downloadButton("download_data", "Download Sample Data",
                         style = "width:100%;")
        ),

        mainPanel(
          width = 9,
          tabsetPanel(
            id = "main_tabs",
            tabPanel("Data Preview",
              tags$br(),
              DTOutput("data_table")
            ),
            tabPanel("Plot",
              tags$br(),
              plotOutput("main_plot", height = "550px")
            ),
            tabPanel("ANOVA Results",
              tags$br(),
              verbatimTextOutput("anova_results")
            ),
            tabPanel("R Code",
              tags$br(),
              tags$p("Copy and adapt this code to reproduce the plot in your own R session:"),
              verbatimTextOutput("r_code")
            )
          )
        )
      )
    ),

    # ------ Tab 2: About ------
    tabPanel("About",
      fluidRow(
        column(8, offset = 2,
          tags$br(),
          h3("ANOVA Mean Comparison Graphs"),
          tags$p(
            "This application generates interactive mean comparison plots for ",
            "Analysis of Variance (ANOVA) designs. It is designed for biostatistics ",
            "and clinical research education."
          ),
          h4("Features"),
          tags$ul(
            tags$li("Upload your own CSV data or use the built-in sample dataset"),
            tags$li("Select outcome (numeric), grouping, and optional subgroup variables"),
            tags$li("Choose between bar plots and line plots with error bars (SE, 95% CI, or SD)"),
            tags$li("Optionally overlay individual data points"),
            tags$li("View one-way and two-way ANOVA test results"),
            tags$li("Copy reproducible R code for your publications"),
            tags$li("Download plots as PNG or PDF")
          ),
          h4("Sample Dataset"),
          tags$p(
            "The built-in sample dataset simulates a clinical trial measuring ",
            "blood pressure reduction (mmHg) across three treatment groups ",
            "(Drug A, Drug B, Placebo), stratified by age group (18\u201340, 41\u201365) ",
            "and sex. It contains 120 observations."
          ),
          h4("How to Use"),
          tags$ol(
            tags$li("Choose a data source (sample data or upload your own CSV)."),
            tags$li("Select the outcome variable (must be numeric)."),
            tags$li("Select the grouping variable (categorical)."),
            tags$li("Optionally select a subgroup variable for stratified plots."),
            tags$li("Choose the graph type and error bar style."),
            tags$li("Click ", tags$strong("Generate Plot"), " to create the visualization.")
          ),
          tags$hr(),
          tags$p(
            tags$em("Developed for "),
            tags$a("DataSciBarrow",
                   href = "https://www.datascibarrow.com/",
                   target = "_blank")
          )
        )
      )
    )
  )
)

# ===========================================================================
# Server
# ===========================================================================
server <- function(input, output, session) {

  # ---- Reactive: current data frame ----
  data_rv <- reactive({
    if (input$data_source == "sample") {
      generate_sample_data()
    } else {
      req(input$file)
      tryCatch(
        read.csv(input$file$datapath, stringsAsFactors = FALSE),
        error = function(e) {
          showNotification(paste("Error reading file:", e$message),
                           type = "error")
          NULL
        }
      )
    }
  })

  # ---- Update variable dropdowns when data changes ----
  observeEvent(data_rv(), {
    df <- req(data_rv())
    numeric_cols <- names(df)[vapply(df, is.numeric, logical(1))]
    all_cols     <- names(df)

    updateSelectInput(session, "outcome_var", choices = numeric_cols,
                      selected = numeric_cols[1])
    updateSelectInput(session, "group_var", choices = all_cols,
                      selected = all_cols[min(2, length(all_cols))])
    updateSelectInput(session, "subgroup_var",
      choices  = c("None" = "none", setNames(all_cols, all_cols)),
      selected = "none")
  })

  # ---- Data table ----
  output$data_table <- renderDT({
    req(data_rv())
    datatable(data_rv(), options = list(pageLength = 10, scrollX = TRUE))
  })

  # ---- Snapshot of all inputs at the moment the user clicks Generate ----
  analysis_params <- eventReactive(input$generate, {
    df <- data_rv()
    validate(
      need(!is.null(df), "No data loaded."),
      need(input$outcome_var %in% names(df),
           "Selected outcome variable not found in data."),
      need(input$group_var %in% names(df),
           "Selected group variable not found in data."),
      need(is.numeric(df[[input$outcome_var]]),
           "Outcome variable must be numeric.")
    )

    sg <- if (input$subgroup_var != "none" &&
              input$subgroup_var %in% names(df)) input$subgroup_var else NULL

    list(
      df          = df,
      outcome     = input$outcome_var,
      group       = input$group_var,
      subgroup    = sg,
      graph_type  = input$graph_type,
      error_type  = input$error_type,
      show_points = input$show_points
    )
  })

  # ---- Summary statistics ----
  summary_rv <- reactive({
    p <- analysis_params()
    compute_summary(p$df, p$outcome, p$group, p$subgroup)
  })

  # ---- Plot object ----
  plot_rv <- reactive({
    p <- analysis_params()
    build_plot(summary_rv(), p$df, p)
  })

  output$main_plot <- renderPlot({ plot_rv() })

  # ---- ANOVA results ----
  output$anova_results <- renderPrint({
    p <- analysis_params()

    cat("=== One-Way ANOVA ===\n\n")
    f1 <- as.formula(paste(p$outcome, "~", p$group))
    cat("Formula:", deparse(f1), "\n\n")
    m1 <- aov(f1, data = p$df)
    print(summary(m1))

    cat("\n\n=== Group Means ===\n\n")
    grp_means <- p$df %>%
      group_by(across(all_of(p$group))) %>%
      summarise(
        Mean = round(mean(.data[[p$outcome]], na.rm = TRUE), 2),
        SD   = round(sd(.data[[p$outcome]], na.rm = TRUE), 2),
        N    = sum(!is.na(.data[[p$outcome]])),
        .groups = "drop"
      )
    print(as.data.frame(grp_means))

    if (!is.null(p$subgroup)) {
      cat("\n\n=== Two-Way ANOVA (with interaction) ===\n\n")
      f2 <- as.formula(paste(p$outcome, "~", p$group, "*", p$subgroup))
      cat("Formula:", deparse(f2), "\n\n")
      m2 <- aov(f2, data = p$df)
      print(summary(m2))
    }
  })

  # ---- Reproducible R code ----
  output$r_code <- renderText({
    generate_r_code(analysis_params())
  })

  # ---- Downloads ----
  output$download_png <- downloadHandler(
    filename = function() paste0("anova_plot_", Sys.Date(), ".png"),
    content  = function(file) {
      ggsave(file, plot = plot_rv(), width = 10, height = 7,
             dpi = 300, bg = "white")
    }
  )

  output$download_pdf <- downloadHandler(
    filename = function() paste0("anova_plot_", Sys.Date(), ".pdf"),
    content  = function(file) {
      ggsave(file, plot = plot_rv(), width = 10, height = 7)
    }
  )

  output$download_data <- downloadHandler(
    filename = "sample_anova_data.csv",
    content  = function(file) {
      write.csv(generate_sample_data(), file, row.names = FALSE)
    }
  )
}

# ===========================================================================
shinyApp(ui, server)
