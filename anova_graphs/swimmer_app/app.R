library(shiny)
library(bslib)
library(ggplot2)
library(dplyr)
library(tidyr)
library(DT)

# ---------------------------------------------------------------------------
# Sample data generator – simulates an oncology trial with patient timelines.
# ---------------------------------------------------------------------------
generate_sample_data <- function() {
  set.seed(123)
  n <- 25

  responses <- sample(c("CR", "PR", "SD", "PD"), n,
                       replace = TRUE, prob = c(0.20, 0.30, 0.30, 0.20))
  durations <- round(sort(runif(n, 2, 32), decreasing = TRUE), 1)

  ongoing <- ifelse(
    responses %in% c("CR", "PR") & runif(n) > 0.45, "Yes", "No"
  )

  response_onset <- ifelse(
    responses %in% c("CR", "PR"),
    round(pmin(runif(n, 1, 8), durations - 0.5), 1),
    NA_real_
  )

  progression_time <- ifelse(
    responses %in% c("SD", "PD"),
    round(durations * runif(n, 0.5, 0.95), 1),
    ifelse(ongoing == "No" & responses %in% c("CR", "PR"),
           round(durations * runif(n, 0.7, 0.95), 1),
           NA_real_)
  )

  data.frame(
    PatientID       = sprintf("PT-%03d", seq_len(n)),
    Duration_Months = durations,
    BestResponse    = responses,
    ResponseOnset   = response_onset,
    ProgressionTime = progression_time,
    Ongoing         = ongoing,
    Stage           = sample(c("II", "III", "IV"), n,
                             replace = TRUE, prob = c(0.2, 0.4, 0.4)),
    stringsAsFactors = FALSE
  )
}

# ---------------------------------------------------------------------------
# Parse an "ongoing" column to logical, handling common conventions.
# ---------------------------------------------------------------------------
parse_ongoing <- function(x) {
  x <- tolower(trimws(as.character(x)))
  x %in% c("true", "yes", "y", "1")
}

# ---------------------------------------------------------------------------
# Build the swimmer plot
# ---------------------------------------------------------------------------
build_swimmer_plot <- function(df, params) {
  subject_col  <- params$subject
  duration_col <- params$duration
  category_col <- params$category
  event_cols   <- params$events
  ongoing_col  <- params$ongoing
  sort_by      <- params$sort_by

  plot_df <- df

  # ------ Sort patients ------
  if (sort_by == "duration") {
    lvls <- plot_df[[subject_col]][order(plot_df[[duration_col]])]
  } else if (sort_by == "category" && !is.null(category_col)) {
    lvls <- plot_df[[subject_col]][
      order(plot_df[[category_col]], plot_df[[duration_col]])]
  } else {
    lvls <- rev(plot_df[[subject_col]])
  }
  plot_df[[subject_col]] <- factor(plot_df[[subject_col]], levels = lvls)

  # ------ Base: horizontal bars ------
  if (!is.null(category_col) && category_col %in% names(plot_df)) {
    p <- ggplot(plot_df) +
      geom_segment(
        aes(x = 0, xend = .data[[duration_col]],
            y = .data[[subject_col]], yend = .data[[subject_col]],
            color = .data[[category_col]]),
        linewidth = 5
      )
  } else {
    p <- ggplot(plot_df) +
      geom_segment(
        aes(x = 0, xend = .data[[duration_col]],
            y = .data[[subject_col]], yend = .data[[subject_col]]),
        linewidth = 5, color = "#3498DB"
      )
  }

  # ------ Event markers ------
  if (length(event_cols) > 0) {
    valid_event_cols <- event_cols[event_cols %in% names(plot_df)]
    if (length(valid_event_cols) > 0) {
      event_long <- plot_df %>%
        select(all_of(c(subject_col, valid_event_cols))) %>%
        pivot_longer(
          cols         = all_of(valid_event_cols),
          names_to     = "Event",
          values_to    = "Time",
          values_drop_na = TRUE
        )

      if (nrow(event_long) > 0) {
        p <- p + geom_point(
          data = event_long,
          aes(x = Time, y = .data[[subject_col]], shape = Event),
          size = 3, fill = "black", color = "black"
        ) +
          scale_shape_manual(
            values = setNames(
              c(16, 17, 15, 18, 8, 3, 4, 7)[seq_along(valid_event_cols)],
              valid_event_cols
            )
          )
      }
    }
  }

  # ------ Ongoing arrows ------
  if (!is.null(ongoing_col) && ongoing_col %in% names(plot_df)) {
    ongoing_df <- plot_df[parse_ongoing(plot_df[[ongoing_col]]), , drop = FALSE]
    if (nrow(ongoing_df) > 0) {
      arrow_len <- max(plot_df[[duration_col]], na.rm = TRUE) * 0.03
      p <- p + geom_segment(
        data = ongoing_df,
        aes(x    = .data[[duration_col]],
            xend = .data[[duration_col]] + arrow_len,
            y    = .data[[subject_col]],
            yend = .data[[subject_col]]),
        arrow     = arrow(length = unit(0.15, "cm"), type = "closed"),
        linewidth = 1,
        color     = "black"
      )
    }
  }

  # ------ Labels & theme ------
  p + labs(
    x     = "Time (Months)",
    y     = "Subject",
    title = "Swimmer Plot",
    color = if (!is.null(category_col)) category_col else NULL,
    shape = if (length(event_cols) > 0) "Event" else NULL
  ) +
    theme_minimal(base_size = 13) +
    theme(
      plot.title           = element_text(face = "bold"),
      panel.grid.major.y   = element_blank(),
      panel.grid.minor.y   = element_blank(),
      legend.position      = "bottom",
      legend.box           = "vertical",
      axis.text.y          = element_text(size = 9)
    )
}

# ---------------------------------------------------------------------------
# Generate reproducible R code string
# ---------------------------------------------------------------------------
generate_r_code <- function(params) {
  s  <- params$subject
  d  <- params$duration
  c  <- params$category
  ev <- params$events
  on <- params$ongoing
  sb <- params$sort_by

  sort_code <- if (sb == "duration") {
    paste0("data$", s, " <- factor(data$", s,
           ", levels = data$", s, "[order(data$", d, ")])\n")
  } else if (sb == "category" && !is.null(c)) {
    paste0("data$", s, " <- factor(data$", s,
           ", levels = data$", s, "[order(data$", c, ", data$", d, ")])\n")
  } else {
    paste0("data$", s, " <- factor(data$", s,
           ", levels = rev(data$", s, "))\n")
  }

  base_aes <- if (!is.null(c)) {
    paste0(
      "ggplot(data) +\n",
      "  geom_segment(\n",
      "    aes(x = 0, xend = ", d, ", y = ", s, ", yend = ", s, ",\n",
      "        color = ", c, "),\n",
      "    linewidth = 5\n",
      "  )")
  } else {
    paste0(
      "ggplot(data) +\n",
      "  geom_segment(\n",
      "    aes(x = 0, xend = ", d, ", y = ", s, ", yend = ", s, "),\n",
      "    linewidth = 5, color = \"#3498DB\"\n",
      "  )")
  }

  event_code <- ""
  if (length(ev) > 0) {
    cols_str <- paste0("c(\"", paste(ev, collapse = "\", \""), "\")")
    event_code <- paste0(
      " +\n",
      "  # Event markers (pivot event columns to long format)\n",
      "  geom_point(\n",
      "    data = data %>%\n",
      "      tidyr::pivot_longer(cols = ", cols_str, ",\n",
      "        names_to = \"Event\", values_to = \"Time\",\n",
      "        values_drop_na = TRUE),\n",
      "    aes(x = Time, y = ", s, ", shape = Event),\n",
      "    size = 3, color = \"black\"\n",
      "  )")
  }

  ongoing_code <- ""
  if (!is.null(on)) {
    ongoing_code <- paste0(
      " +\n",
      "  # Arrows for ongoing patients\n",
      "  geom_segment(\n",
      "    data = data[data$", on, " %in% c(\"Yes\", \"TRUE\", TRUE), ],\n",
      "    aes(x = ", d, ", xend = ", d, " + 1,\n",
      "        y = ", s, ", yend = ", s, "),\n",
      "    arrow = arrow(length = unit(0.15, \"cm\"), type = \"closed\"),\n",
      "    linewidth = 1, color = \"black\"\n",
      "  )")
  }

  paste0(
    "library(ggplot2)\nlibrary(dplyr)\nlibrary(tidyr)\n\n",
    "# Read your data\n",
    "data <- read.csv(\"your_data.csv\")\n\n",
    "# Order patients\n",
    sort_code, "\n",
    "# Create swimmer plot\n",
    base_aes,
    event_code,
    ongoing_code,
    " +\n",
    "  labs(\n",
    "    x     = \"Time (Months)\",\n",
    "    y     = \"Subject\",\n",
    "    title = \"Swimmer Plot\"\n",
    "  ) +\n",
    "  theme_minimal(base_size = 13) +\n",
    "  theme(\n",
    "    plot.title         = element_text(face = \"bold\"),\n",
    "    panel.grid.major.y = element_blank(),\n",
    "    legend.position    = \"bottom\"\n",
    "  )\n"
  )
}

# ===========================================================================
# UI
# ===========================================================================
ui <- fluidPage(
  theme = bs_theme(bootswatch = "flatly"),

  navbarPage(
    "Swimmer Plot",

    # ------ Tab 1: Plot Tool ------
    tabPanel("Plot Tool",
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

          h5(strong("Column Mapping")),
          selectInput("subject_col", "Subject / Patient ID:", choices = NULL),
          selectInput("duration_col", "Duration / End Time (numeric):",
                      choices = NULL),
          selectInput("category_col", "Category / Response (color):",
                      choices = c("None" = "none")),
          selectInput("event_cols", "Event Time Columns (optional):",
                      choices = NULL, multiple = TRUE),
          selectInput("ongoing_col", "Ongoing Indicator Column (optional):",
                      choices = c("None" = "none")),
          tags$hr(),

          h5(strong("Options")),
          radioButtons("sort_by", "Sort Subjects By:",
            choices = c("Duration" = "duration",
                        "Category" = "category",
                        "Original Order" = "original")),
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
            tabPanel("Swimmer Plot",
              tags$br(),
              plotOutput("swimmer_plot", height = "650px")
            ),
            tabPanel("R Code",
              tags$br(),
              tags$p("Copy and adapt this code to reproduce the plot ",
                     "in your own R session:"),
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
          h3("Swimmer Plot"),
          tags$p(
            "A swimmer plot visualises individual subject timelines, commonly ",
            "used in oncology and clinical trial reporting to show duration of ",
            "treatment, response categories, and key events for each patient."
          ),
          h4("Features"),
          tags$ul(
            tags$li("Upload your own CSV data or use the built-in sample dataset"),
            tags$li("Map columns to swimmer-plot roles: subject ID, duration, ",
                    "category, events, ongoing indicator"),
            tags$li("Bars colored by response / category group"),
            tags$li("Event markers (multiple event columns supported)"),
            tags$li("Arrows for patients still on treatment"),
            tags$li("Sort subjects by duration, category, or original order"),
            tags$li("Copy reproducible R code"),
            tags$li("Download plots as PNG or PDF")
          ),
          h4("Sample Dataset"),
          tags$p(
            "The built-in sample simulates 25 oncology patients with treatment ",
            "duration (months), best response (CR, PR, SD, PD), response onset ",
            "time, progression time, ongoing status, and disease stage."
          ),
          h4("Expected Data Format"),
          tags$p(
            "Wide format with one row per subject. Event columns should contain ",
            "numeric time values (or NA if the event did not occur). The ongoing ",
            "indicator column should contain Yes/No, TRUE/FALSE, or 1/0."
          ),
          h4("How to Use"),
          tags$ol(
            tags$li("Choose a data source (sample data or upload your own CSV)."),
            tags$li("Map the relevant columns using the dropdown selectors."),
            tags$li("Select event time columns if applicable."),
            tags$li("Choose a sort order."),
            tags$li("Click ", tags$strong("Generate Plot"), ".")
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

  # ---- Update column dropdowns when data changes ----
  observeEvent(data_rv(), {
    df <- req(data_rv())
    all_cols     <- names(df)
    numeric_cols <- names(df)[vapply(df, is.numeric, logical(1))]

    updateSelectInput(session, "subject_col",
      choices = all_cols, selected = all_cols[1])
    updateSelectInput(session, "duration_col",
      choices = numeric_cols,
      selected = numeric_cols[1])
    updateSelectInput(session, "category_col",
      choices  = c("None" = "none", setNames(all_cols, all_cols)),
      selected = if ("BestResponse" %in% all_cols) "BestResponse" else "none")
    updateSelectInput(session, "event_cols",
      choices  = numeric_cols,
      selected = NULL)
    updateSelectInput(session, "ongoing_col",
      choices  = c("None" = "none", setNames(all_cols, all_cols)),
      selected = if ("Ongoing" %in% all_cols) "Ongoing" else "none")
  })

  # ---- Data table ----
  output$data_table <- renderDT({
    req(data_rv())
    datatable(data_rv(), options = list(pageLength = 15, scrollX = TRUE))
  })

  # ---- Snapshot of inputs at Generate click ----
  analysis_params <- eventReactive(input$generate, {
    df <- data_rv()
    validate(
      need(!is.null(df), "No data loaded."),
      need(input$subject_col %in% names(df),
           "Please select a valid Subject ID column."),
      need(input$duration_col %in% names(df),
           "Please select a valid Duration column."),
      need(is.numeric(df[[input$duration_col]]),
           "Duration column must be numeric.")
    )

    cat_col <- if (input$category_col != "none" &&
                   input$category_col %in% names(df)) {
      input$category_col
    } else {
      NULL
    }

    on_col <- if (input$ongoing_col != "none" &&
                  input$ongoing_col %in% names(df)) {
      input$ongoing_col
    } else {
      NULL
    }

    ev_cols <- input$event_cols
    if (!is.null(ev_cols)) {
      ev_cols <- ev_cols[ev_cols %in% names(df)]
      ev_cols <- ev_cols[vapply(ev_cols,
        function(col) is.numeric(df[[col]]), logical(1))]
      if (length(ev_cols) == 0) ev_cols <- character(0)
    } else {
      ev_cols <- character(0)
    }

    list(
      df       = df,
      subject  = input$subject_col,
      duration = input$duration_col,
      category = cat_col,
      events   = ev_cols,
      ongoing  = on_col,
      sort_by  = input$sort_by
    )
  })

  # ---- Plot object ----
  plot_rv <- reactive({
    p <- analysis_params()
    build_swimmer_plot(p$df, p)
  })

  output$swimmer_plot <- renderPlot({ plot_rv() })

  # ---- Reproducible R code ----
  output$r_code <- renderText({
    generate_r_code(analysis_params())
  })

  # ---- Downloads ----
  output$download_png <- downloadHandler(
    filename = function() paste0("swimmer_plot_", Sys.Date(), ".png"),
    content  = function(file) {
      n_subjects <- nrow(analysis_params()$df)
      plot_h <- max(6, n_subjects * 0.35)
      ggsave(file, plot = plot_rv(), width = 10, height = plot_h,
             dpi = 300, bg = "white")
    }
  )

  output$download_pdf <- downloadHandler(
    filename = function() paste0("swimmer_plot_", Sys.Date(), ".pdf"),
    content  = function(file) {
      n_subjects <- nrow(analysis_params()$df)
      plot_h <- max(6, n_subjects * 0.35)
      ggsave(file, plot = plot_rv(), width = 10, height = plot_h)
    }
  )

  output$download_data <- downloadHandler(
    filename = "sample_swimmer_data.csv",
    content  = function(file) {
      write.csv(generate_sample_data(), file, row.names = FALSE)
    }
  )
}

# ===========================================================================
shinyApp(ui, server)
