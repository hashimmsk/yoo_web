export interface ResearchArea {
  title: string;
  description: string;
  highlights: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    title: "Clinical Trial Design & Methodology",
    description:
      "Developing and evaluating statistical designs for early-phase clinical trials, with particular expertise in Phase 0, Phase 1, and Phase 2 studies. Recent work includes a systematic review of two-stage designs for Phase 2 single-arm trials in glioblastoma, which identified critical implementation issues and design optimization opportunities across 29 published trials.",
    highlights: [
      "Phase 0 'trigger' trial design for drug penetration studies",
      "Two-stage designs for single-arm efficacy trials",
      "Sample size optimization for rare disease trials",
      "Novel hybrid trial architectures (Phase 0/1, Phase 0/2)",
    ],
  },
  {
    title: "Machine Learning in Clinical Research",
    description:
      "Applying artificial neural networks and deep learning methods to clinical trial data analysis. Developing transfer learning-based approaches for adjusting historical controls in single-arm trials, enabling more reliable efficacy assessments with smaller patient populations — particularly impactful for rare cancers like glioblastoma.",
    highlights: [
      "ANN-based historical control adjustment for GBM trials",
      "Transfer learning for predictive modeling in early efficacy trials",
      "Ensemble models for survival endpoint prediction",
      "Machine learning approaches for gene-gene and gene-environment interactions",
    ],
  },
  {
    title: "Neuro-Oncology & Glioblastoma Research",
    description:
      "Providing biostatistical leadership for clinical trials targeting glioblastoma and other high-grade gliomas. Collaborating with the Ivy Brain Tumor Center on Phase 0 trials evaluating novel therapeutic agents including BDTX-1535, abemaciclib, ceritinib, and sonodynamic therapy with 5-ALA.",
    highlights: [
      "Phase 0/1 trial of BDTX-1535 for recurrent GBM with EGFR alterations",
      "Phase 0/2 trial of abemaciclib plus LY3214996 in recurrent GBM",
      "5-ALA sonodynamic therapy trial for recurrent high-grade glioma",
      "Quisinostat as a brain-penetrant radiosensitizer",
    ],
  },
  {
    title: "Cancer Epidemiology & Health Disparities",
    description:
      "Investigating patterns and disparities in cancer incidence, mortality, and preventive care across racial, regional, and socioeconomic groups. Research has addressed HPV vaccination disparities, cervical cancer trends, colorectal cancer incidence patterns, and breast cancer survivorship in underserved populations.",
    highlights: [
      "Racial and regional disparities in cervical cancer incidence and mortality",
      "HPV vaccine uptake patterns across U.S. states (NIS-Teen 2008–2016)",
      "Colorectal cancer incidence disparities in Georgia",
      "Community-based participatory research in cancer prevention",
    ],
  },
  {
    title: "Biostatistical Methods & Modeling",
    description:
      "Contributing to foundational statistical methodology including evaluation of multicollinearity effects in multivariable analysis, comparison of machine learning classifiers (logistic regression, random forests, classification trees) for gene interaction detection, and genetic risk score evaluation for dichotomous outcomes.",
    highlights: [
      "Multicollinearity assessment in multivariable regression",
      "Comparison of classification methods for gene interactions",
      "Genetic risk score evaluation methodologies",
      "Confounding, mediation, and collider bias assessment",
    ],
  },
];

export interface FundedProject {
  title: string;
  agency: string;
  grantId?: string;
  pi: string;
  role: string;
  period: string;
  amount?: string;
  status: "active" | "pending" | "completed";
}

export const fundedProjects: FundedProject[] = [
  {
    title:
      "Roles of aging and cellular senescence in the development of intracranial aneurysm rupture",
    agency: "NIH",
    grantId: "1 R01 AG077780-01",
    pi: "Hashimoto T",
    role: "Co-Investigator",
    period: "06/2023 – 05/2028",
    status: "active",
  },
  {
    title:
      "Maladaptive 5-HT Raphe-Corticolimbic Plasticity Underlying the Development of Nonmotor Symptoms in Parkinson's Disease",
    agency: "DOD",
    grantId: "PD230123",
    pi: "Manfredsson F",
    role: "Co-Investigator (biostatistician)",
    period: "04/2024 – 03/2028",
    status: "active",
  },
  {
    title:
      "A Novel Bifunctional Agent as a Radiosensitizer for Glioblastoma and Radioprotector of Normal Brain",
    agency: "DOD",
    grantId: "CA230725",
    pi: "Tovmasyan A",
    role: "Co-Investigator (biostatistician)",
    period: "03/2024 – 02/2027",
    status: "active",
  },
  {
    title:
      "Statistical Predictive Modeling and Validations for Utilization of Transfer Learning in Early Efficacy Trial",
    agency: "DOD PRCRP",
    grantId: "GRANT14501851-CA250853",
    pi: "Yoo W",
    role: "Principal Investigator",
    period: "07/2026 – 06/2029",
    amount: "$917,046",
    status: "pending",
  },
  {
    title:
      "Transfer learning-based predictive modeling for adjustment of historical data",
    agency: "NIH R01 NLM",
    grantId: "GRANT14425759",
    pi: "Yoo W",
    role: "Principal Investigator",
    period: "04/2026 – 03/2030",
    amount: "$1,279,250",
    status: "pending",
  },
];

export interface InvitedLecture {
  title: string;
  venue: string;
  date: string;
}

export const invitedLectures: InvitedLecture[] = [
  {
    title:
      "Artificial Neural Network-based historical control adjustment for move to Phase 3 GBM trials with better predictive power",
    venue: "Annual ASU-Barrow Symposium",
    date: "March 2024",
  },
  {
    title:
      "Evaluation of two-stage designs of Phase 2 single-arm trials in glioblastoma",
    venue: "Tisch Cancer Institute Seminar Series",
    date: "April 2023",
  },
];

export const conferencePresentations = [
  {
    title:
      "A phase 0/1 'trigger' trial of BDTX-1535 in recurrent glioblastoma (GBM) patients with EGFR alterations or fusions",
    venue: "AACR Annual Meeting",
    year: "2025",
  },
  {
    title:
      "Artificial neural network-based ensemble models for single-arm glioblastoma trials: A new historical control adjustment method",
    venue: "AACR Annual Meeting",
    year: "2024",
  },
  {
    title:
      "Adjustment of historical controls utilizing deep learning algorithm",
    venue: "Society for Neuro-Oncology",
    year: "2023",
  },
  {
    title:
      "A systematic review of two-stage designs of phase 2 single-arm trials in glioblastoma",
    venue: "Society for Neuro-Oncology",
    year: "2022",
  },
];
