export const SITE_TITLE = "Wonsuk Yoo, PhD";
export const SITE_DESCRIPTION =
  "Research Associate Professor of Biostatistics at the University of Miami School of Nursing and Health Studies";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
] as const;

export const EXTERNAL_LINKS = {
  universityProfile:
    "https://people.miami.edu/profile/52de17354eead20a354e1186018101fc",
  pubmed:
    "https://pubmed.ncbi.nlm.nih.gov/?term=wonsuk+yoo&sort=date&size=100",
  datanuri: "https://ann-mffh.onrender.com/",
  universityHome: "https://www.miami.edu",
  sonhs: "https://sonhs.miami.edu",
} as const;

export const SHINY_APP_URLS = {
  anova: "https://wonsukyoo.shinyapps.io/anova-tool/",
  swimmerPlot: "https://wonsukyoo.shinyapps.io/swimmer-plot/",
} as const;
