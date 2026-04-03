export const profile = {
  name: "Wonsuk Yoo",
  credentials: "PhD",
  title: "Research Associate Professor",
  department: "School of Nursing and Health Studies",
  institution: "University of Miami",
  location: "Coral Gables, FL",
  email: "wyoo@miami.edu",
  phone: "(305) 284-4756",

  bio: `Dr. Wonsuk Yoo is a Research Associate Professor at the University of Miami School of Nursing and Health Studies. With over two decades of experience in biostatistics and data science, he specializes in clinical trial design, cancer biostatistics, and the application of machine learning methods to clinical research. His work spans neuro-oncology, cancer epidemiology, health disparities, and innovative statistical methodology for early-phase clinical trials.`,

  bioParagraphs: [
    `Dr. Wonsuk Yoo is a Research Associate Professor at the University of Miami School of Nursing and Health Studies. With over two decades of experience in biostatistics and data science, he specializes in clinical trial design, cancer biostatistics, and the application of machine learning methods to clinical research.`,
    `His recent work focuses on developing artificial neural network-based methods for historical control adjustment in glioblastoma clinical trials, advancing Phase 0 and Phase 2 trial design methodology, and building predictive models that leverage transfer learning for early efficacy trials.`,
    `Prior to joining the University of Miami in 2025, Dr. Yoo served as Associate Professor at the Ivy Brain Tumor Center at Barrow Neurological Institute in Phoenix, Arizona, where he led biostatistical efforts for the Phase 0 clinical trials program. He has also held faculty positions at Augusta University and Wayne State University School of Medicine, and served as a Research Investigator at the VA Medical Center.`,
    `Dr. Yoo has published over 55 peer-reviewed articles in journals including Clinical Cancer Research, JCI Insight, Journal of the American College of Cardiology, BMC Medical Research Methodology, and Cancer Epidemiology, Biomarkers & Prevention. He serves as an Academic Editor for PLOS ONE and is an active member of the American Statistical Association, the American Association for Cancer Research, and the Society for Neuro-Oncology.`,
  ],

  education: [
    {
      degree: "PhD in Biostatistics",
      institution: "Medical University of South Carolina",
      year: "2005",
    },
    {
      degree: "MS in Statistics",
      institution: "University of Florida",
      year: "1999",
    },
    {
      degree: "BS",
      institution: "Yonsei University, Seoul, Korea",
      year: "1989",
    },
  ],

  experience: [
    {
      role: "Research Associate Professor",
      institution: "University of Miami, School of Nursing and Health Studies",
      period: "2025 – Present",
    },
    {
      role: "Associate Professor",
      institution: "Barrow Neurological Institute (Ivy Brain Tumor Center)",
      location: "Phoenix, AZ",
      period: "2020 – 2024",
    },
    {
      role: "Research Investigator",
      institution: "VA Medical Center",
      period: "2018 – 2021",
    },
    {
      role: "Associate Professor",
      institution: "Augusta University",
      period: "2012 – 2018",
    },
    {
      role: "Assistant Professor",
      institution: "Wayne State University School of Medicine",
      location: "Detroit, MI",
      period: "2006 – 2012",
    },
    {
      role: "Predoctoral Intern",
      institution: "Pfizer Pharmaceutical Research",
      period: "2002 – 2003",
    },
  ],

  researchInterests: [
    "Clinical trial design (Phase 0, 1, 2, 3)",
    "Cancer biostatistics and neuro-oncology",
    "Machine learning and deep learning in clinical research",
    "Transfer learning for historical control adjustment",
    "Cancer epidemiology and health disparities",
    "Glioblastoma (GBM) trial methodology",
    "Population-based cancer research",
    "Big health data analytics",
  ],

  awards: [
    {
      title: "Young Investigator's Award",
      organization:
        "Statistics in Epidemiology Section, American Statistical Association (ASA-SIE)",
      year: "2005",
    },
    {
      title: "Cancer Biostatistics Program Award",
      organization: "American Association for Cancer Research (AACR)",
      year: "2009",
    },
  ],

  memberships: [
    { organization: "American Statistical Association (ASA)", since: "2010" },
    {
      organization: "American Public Health Association (APHA)",
      since: "2015",
    },
    {
      organization: "American Association for Cancer Research (AACR)",
      since: "2018",
    },
    { organization: "Society for Neuro-Oncology (SNO)", since: "2021" },
  ],

  editorialService: [
    { role: "Academic Editor", journal: "PLOS ONE", since: "2023" },
  ],

  certifications: [
    "CITI Training – Human Subject Research (Group 1 and 2)",
    "Cancer Biostatistics Program – American Association of Cancer Research (2009)",
  ],

  teaching: {
    current: "NUR 709: Special Topic for Analysis of Big Health Data (Fall 2025)",
    courses: [
      "Introduction to Informatics/Statistical Learning",
      "Introduction to Biostatistics",
      "Introduction to Epidemiology",
      "Regression Methods and Modeling",
      "Generalized Linear Modeling",
      "Survival Data Analysis",
      "Longitudinal Data Analysis",
      "Statistical Computing (R, SAS, SPSS)",
      "Applied Linear Mixed Effects Models",
      "Designing Clinical Research",
      "Introduction to Secondary Data Analysis",
      "Study Designs for Protocol Development",
    ],
    coursesCreated: [
      "Applications for Big Health Databases",
      "Study Designs for Protocol Development",
      "Statistical Designs for the Researchers",
    ],
  },

  administrativeRoles: [
    {
      role: "Biostatistics Core Director",
      institution: "Barrow Neurological Institute",
      period: "2018 – 2024",
    },
    {
      role: "Biostatistics Curriculum Task Force Leader",
      period: "2018 – 2020",
    },
    {
      role: "Honor Program Advisory Committee",
      period: "2018 – 2020",
    },
    {
      role: "Institutional Review Board (IRB) Member – Cancer Section",
      period: "5 years",
    },
  ],
} as const;
