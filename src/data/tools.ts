import { SHINY_APP_URLS, EXTERNAL_LINKS } from "@/lib/constants";

export interface Tool {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  href: string;
  isExternal: boolean;
  iframeUrl?: string;
  features: string[];
  category: string;
}

export const tools: Tool[] = [
  {
    id: "anova",
    name: "ANOVA Mean Comparison Tool",
    shortDescription:
      "Interactive visualization tool for analysis of variance with publication-ready plots.",
    description:
      "A comprehensive interactive application for performing and visualizing Analysis of Variance (ANOVA) mean comparisons. Upload your own data or use built-in sample datasets to generate bar and line plots with configurable error bars (standard error, 95% confidence intervals, or standard deviation). The tool supports subgroup stratification, produces ANOVA summary tables, and generates reproducible R code for every analysis. Export publication-ready figures as PNG or PDF.",
    href: "/tools/anova",
    isExternal: false,
    iframeUrl: SHINY_APP_URLS.anova,
    features: [
      "Bar and line plots with error bars (SE, 95% CI, SD)",
      "Subgroup stratification and interaction analysis",
      "ANOVA summary tables with F-statistics and p-values",
      "Reproducible R code generation",
      "PNG and PDF export for publication",
      "CSV data upload or built-in sample data",
    ],
    category: "Statistical Analysis",
  },
  {
    id: "swimmer-plot",
    name: "Swimmer Plot Generator",
    shortDescription:
      "Clinical trial timeline visualization for subject-level treatment response data.",
    description:
      "An interactive application for creating swimmer plots — horizontal bar charts commonly used in oncology and clinical trial reporting to visualize individual subject timelines, treatment durations, and response events. Map your data columns to subjects, durations, responses, and events. Customize colors, markers, sorting, and ongoing-treatment indicators. Generate reproducible R code and export publication-ready figures.",
    href: "/tools/swimmer-plot",
    isExternal: false,
    iframeUrl: SHINY_APP_URLS.swimmerPlot,
    features: [
      "Subject-level horizontal timeline bars",
      "Treatment response color coding",
      "Event markers and ongoing treatment indicators",
      "Flexible column mapping for custom datasets",
      "Sorting by duration, response, or custom order",
      "Reproducible R code and PNG/PDF export",
    ],
    category: "Clinical Trial Visualization",
  },
  {
    id: "datanuri",
    name: "DataNuri",
    shortDescription:
      "Neural network-based survival prediction for PFS endpoints using historical clinical trial data.",
    description:
      "DataNuri is an artificial neural network-based prediction tool for estimating median progression-free survival (mPFS) and six-month PFS rates (PFS6) in glioblastoma clinical trials. Built on historical clinical trial data, the model provides covariate-adjusted predictions that support trial design and historical control comparisons for single-arm Phase 2 studies.",
    href: EXTERNAL_LINKS.datanuri,
    isExternal: true,
    features: [
      "mPFS and PFS6 survival endpoint prediction",
      "Covariate-adjusted neural network models",
      "Historical clinical trial data integration",
      "Support for Phase 2 single-arm trial design",
    ],
    category: "Predictive Modeling",
  },
];
