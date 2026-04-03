# Web-Based R Graph Tools for DataSciBarrow

Interactive R/Shiny web applications for biostatistics and clinical research visualization. Designed for deployment on [DataSciBarrow](https://www.datascibarrow.com/) under **Resources → Web-based Graphs using R**.

## Applications

### 1. ANOVA Mean Comparison Graphs (`anova_app/`)

Generate mean comparison plots for Analysis of Variance designs.

- **Bar plots** and **line plots** with configurable error bars (SE, 95% CI, SD)
- Optional **subgroup stratification** (e.g., by age group, sex, treatment arm)
- Overlay individual data points
- One-way and two-way ANOVA test results
- Reproducible R code output
- Download plots as PNG or PDF

### 2. Swimmer Plot (`swimmer_app/`)

Visualize individual subject timelines for clinical trial data.

- Horizontal bars colored by response/category group
- Event markers at specific time points (multiple event columns)
- Arrows for patients still on treatment (ongoing indicator)
- Sort by duration, category, or original order
- Reproducible R code output
- Download plots as PNG or PDF

## R Package Dependencies

Both apps use standard CRAN packages:

```
shiny
bslib
ggplot2
dplyr
DT
tidyr        # swimmer_app only
```

### Install All Dependencies

```r
install.packages(c("shiny", "bslib", "ggplot2", "dplyr", "DT", "tidyr"))
```

## Running Locally

Each app is a self-contained single-file Shiny application. Run from the project root:

```bash
# ANOVA app
Rscript -e "shiny::runApp('anova_app', port = 3838, launch.browser = TRUE)"

# Swimmer plot app
Rscript -e "shiny::runApp('swimmer_app', port = 3839, launch.browser = TRUE)"
```

Or from within R / RStudio:

```r
# ANOVA app
shiny::runApp("anova_app")

# Swimmer plot app
shiny::runApp("swimmer_app")
```

## Deployment

### Option A: shinyapps.io (Recommended)

Each app can be deployed independently as a separate Shiny application.

```r
# Install rsconnect if needed
install.packages("rsconnect")

# Configure your shinyapps.io account (one-time)
rsconnect::setAccountInfo(
  name   = "your-account",
  token  = "your-token",
  secret = "your-secret"
)

# Deploy ANOVA app
rsconnect::deployApp("anova_app", appName = "anova-graphs")

# Deploy Swimmer plot app
rsconnect::deployApp("swimmer_app", appName = "swimmer-plot")
```

After deployment, link the resulting URLs from the DataSciBarrow website.

### Option B: Shiny Server

Copy each app directory to your Shiny Server's app root (typically `/srv/shiny-server/`):

```bash
sudo cp -r anova_app /srv/shiny-server/anova-graphs
sudo cp -r swimmer_app /srv/shiny-server/swimmer-plot
sudo systemctl restart shiny-server
```

Apps will be available at:
- `http://your-server:3838/anova-graphs/`
- `http://your-server:3838/swimmer-plot/`

### Option C: Docker

A basic Dockerfile for either app:

```dockerfile
FROM rocker/shiny:latest
RUN R -e "install.packages(c('bslib','ggplot2','dplyr','DT','tidyr'))"
COPY anova_app /srv/shiny-server/anova-graphs
COPY swimmer_app /srv/shiny-server/swimmer-plot
EXPOSE 3838
CMD ["/usr/bin/shiny-server"]
```

## Project Structure

```
anova_graphs/
├── README.md
├── anova_app/
│   └── app.R            # ANOVA mean comparison graphs
└── swimmer_app/
    └── app.R            # Swimmer plot
```

Both apps include built-in sample datasets (generated deterministically with `set.seed()`) so no external CSV files are needed. Users can also upload their own CSV data.

## Notes

- Apps follow the same UI pattern as the existing Biostatistics Tools Shiny apps (flatly Bootstrap theme, navbar layout, sidebar + tabbed main panel).
- No hardcoded file paths; fully portable.
- Sample data can be downloaded from within each app via the "Download Sample Data" button.
