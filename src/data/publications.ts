export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  pmid?: string;
  pmcid?: string;
  type: "journal" | "book-chapter" | "abstract";
}

export const publications: Publication[] = [
  {
    title:
      "Examining the Role of Discrimination in Prenatal Care Utilization: A Systematic Review Using the Social-Ecological Model",
    authors: "Mutaru AM, Parra A, Lebron CN, Yoo W, Santos HP Jr",
    journal: "Research in Nursing & Health",
    year: 2026,
    volume: "49(1)",
    pages: "60-73",
    doi: "10.1002/nur.70033",
    pmid: "41241865",
    type: "journal",
  },
  {
    title:
      "An early clinical trial of 5-ALA sonodynamic therapy in recurrent high-grade glioma",
    authors:
      "Sanai N, Tovmasyan A, Tien AC, Chang YW, Margaryan T, Knight W, Hendrickson K, Eschbacher J, Harmon J, Hong A, Yoo W, Furey C, Marcus SL, Alhilali L, Barani I, Mirzadeh Z, Mehta S",
    journal: "Science Translational Medicine",
    year: 2025,
    volume: "17(826)",
    pages: "eads5813",
    doi: "10.1126/scitranslmed.ads5813",
    pmid: "41296829",
    type: "journal",
  },
  {
    title:
      "Sexually Dimorphic Responses Reveal Multifaceted Benefits of Glibenclamide in Traumatic Brain Injury",
    authors:
      "Rani A, Raikwar SP, Yoo W, Ahmad S, Vagni VA, Janesko-Feldman KL, Carlson SW, Eberle A, Miller M, Helm J, Catapano J, Zusman BE, Desai S, Javelosa RAM, Afework S, McNally EA, Kohanbash G, Rajasundaram D, Waters MF, Ducruet A, Jadhav A, Kumar A, Phuah CL, Kochanek PM, Jha RM",
    journal: "Journal of Neurotrauma",
    year: 2025,
    volume: "42(15-16)",
    pages: "1319-1344",
    doi: "10.1089/neu.2024.0232",
    pmid: "40510018",
    type: "journal",
  },
  {
    title:
      "A phase 0/1 'trigger' trial of BDTX-1535 in recurrent glioblastoma (GBM) patients with EGFR alterations or fusions",
    authors:
      "Sanai N, Umemura Y, Karapetyan V, Margaryan T, Huttenlocher D, Pham B, Harmon J, Hong A, Yoo W, Tien A, Tovmasyan A, Mehta S",
    journal: "Cancer Research",
    year: 2025,
    volume: "85(8_Supplement_2)",
    pages: "CT023",
    type: "journal",
  },
  {
    title:
      "Factors influencing participant attrition in Phase 0 hybrid clinical trials for patients with high-grade glioma",
    authors:
      "Harmon J, Hong A, Tovmasyan A, Tien A, Hendrickson K, Eschbacher J, Yoo W, Barani I, Kennedy W, Mirzadeh Z, Umemura Y, Mehta S, Sanai N",
    journal: "Cancer Research",
    year: 2025,
    volume: "85(8_Supplement_1)",
    pages: "2513",
    type: "journal",
  },
  {
    title:
      "A Phase 0/2 Trial of Abemaciclib plus LY3214996 in Recurrent Glioblastoma",
    authors:
      "Sanai N, Umemura Y, Chang YW, Margaryan T, Desantis A, Elliott M, Molloy J, Huttenlocher D, Hook G, Yoo W, Tien AC",
    journal: "Neuro-Oncology",
    year: 2024,
    volume: "26",
    type: "journal",
  },
  {
    title:
      "Quisinostat is a brain-penetrant radiosensitizer in glioblastoma",
    authors:
      "Lo Cascio C, Margaryan T, Luna-Melendez E, McNamara JB, White CI, Knight W, Ganta S, Opachich Z, Cantoni C, Yoo W, Sanai N, Tovmasyan A, Mehta S",
    journal: "JCI Insight",
    year: 2023,
    volume: "8(22)",
    pages: "e167081",
    doi: "10.1172/jci.insight.167081",
    pmid: "37991020",
    pmcid: "PMC10721330",
    type: "journal",
  },
  {
    title:
      "Evaluation of two-stage designs of Phase 2 single-arm trials in glioblastoma: a systematic review",
    authors: "Yoo W, Kim S, Garcia M, Mehta S, Sanai N",
    journal: "BMC Medical Research Methodology",
    year: 2022,
    volume: "22(1)",
    pages: "327",
    doi: "10.1186/s12874-022-01810-7",
    pmid: "36550391",
    type: "journal",
  },
  {
    title:
      "Rapid whole-brain myelin imaging with selective inversion recovery and compressed SENSE",
    authors: "Wang P, Sisco N, Yoo W, Borazanci A, Karis J, Dortch R",
    journal: "Magnetic Resonance in Medicine",
    year: 2023,
    volume: "89(3)",
    pages: "1041-1054",
    doi: "10.1002/mrm.29512",
    pmid: "36352756",
    type: "journal",
  },
  {
    title:
      "A Phase 0 Trial of Ceritinib in Patients with Brain Metastases and Recurrent Glioblastoma",
    authors:
      "Mehta S, Fiorelli R, Bao X, Pennington-Krygier C, Derogatis A, Kim S, Yoo W, Li J, Sanai N",
    journal: "Clinical Cancer Research",
    year: 2022,
    volume: "28(2)",
    pages: "289-297",
    doi: "10.1158/1078-0432.CCR-21-1096",
    pmid: "34702773",
    type: "journal",
  },
  {
    title:
      "Human papillomavirus vaccine guideline adherence among Arizona's Medicaid beneficiaries",
    authors:
      "Koskan A, Klasko-Foster L, Stecher C, Rodriguez S, Helitzer D, Yoo W",
    journal: "Vaccine",
    year: 2021,
    volume: "39(4)",
    pages: "682-686",
    doi: "10.1016/j.vaccine.2020.12.041",
    pmid: "33358413",
    type: "journal",
  },
  {
    title:
      "Patterns and Disparities in Human Papillomavirus (HPV) Vaccine Uptake for Young Female Adolescents among U.S. States: NIS-Teen (2008-2016)",
    authors: "Yoo W, Koskan A, Scotch M, Pottinger H, Huh WK, Helitzer D",
    journal: "Cancer Epidemiology, Biomarkers & Prevention",
    year: 2020,
    volume: "29(7)",
    pages: "1458-1467",
    doi: "10.1158/1055-9965.EPI-19-1103",
    pmid: "32345710",
    type: "journal",
  },
  {
    title:
      "Former Foster System Youth: Perspectives on Transitional Supports and Programs",
    authors:
      "Armstrong-Heimsoth A, Hahn-Floyd M, Williamson HJ, Kurka JM, Yoo W, Rodríguez De Jesús SA",
    journal: "Journal of Behavioral Health Services & Research",
    year: 2021,
    volume: "48(2)",
    pages: "287-305",
    doi: "10.1007/s11414-020-09693-6",
    pmid: "32095998",
    pmcid: "PMC7518090",
    type: "journal",
  },
  {
    title:
      "Validity of a Food and Fluid Exercise Questionnaire for Macronutrient Intake during Exercise against Observations",
    authors:
      "Wardenaar FC, Hoogervorst D, van der Burg N, Versteegen J, Yoo W, Tasevska N",
    journal: "Nutrients",
    year: 2019,
    volume: "11(10)",
    pages: "2391",
    doi: "10.3390/nu11102391",
    pmid: "31591334",
    pmcid: "PMC6835803",
    type: "journal",
  },
  {
    title:
      "Smartphone-Based Meditation for Myeloproliferative Neoplasm Patients: Feasibility Study to Inform Future Trials",
    authors:
      "Huberty J, Eckert R, Larkey L, Kurka J, Rodríguez De Jesús SA, Yoo W, Mesa R",
    journal: "JMIR Formative Research",
    year: 2019,
    volume: "3(2)",
    pages: "e12662",
    doi: "10.2196/12662",
    pmid: "31033443",
    pmcid: "PMC6658299",
    type: "journal",
  },
  {
    title:
      "Patient-Centered Medical Home Status and Preparedness to Assess Resident Milestones: A CERA Study",
    authors:
      "Wilkins T, Yoo W, Gillies RA, Dahl-Smith J, Dubose J, Hobbs J, Smith S, Seehusen DA",
    journal: "PRiMER",
    year: 2018,
    volume: "2",
    pages: "11",
    doi: "10.22454/PRiMER.2018.710280",
    pmid: "29782601",
    type: "journal",
  },
  {
    title:
      "Multimorbidity patterns and associations with functional limitations among an aging population in prison",
    authors: "Gates ML, Hunter EG, Dicks V, Jessa PN, Walker V, Yoo W",
    journal: "Archives of Gerontology and Geriatrics",
    year: 2018,
    volume: "77",
    pages: "115-123",
    doi: "10.1016/j.archger.2018.03.012",
    pmid: "29738900",
    type: "journal",
  },
  {
    title:
      "Cyclic-GMP-Elevating Agents Suppress Polyposis in ApcMin Mice by Targeting the Preneoplastic Epithelium",
    authors:
      "Sharman SK, Islam BN, Hou Y, Singh N, Berger FG, Sridhar S, Yoo W, Browning DD",
    journal: "Cancer Prevention Research",
    year: 2018,
    volume: "11(2)",
    pages: "81-92",
    doi: "10.1158/1940-6207.CAPR-17-0267",
    pmid: "29301746",
    type: "journal",
  },
  {
    title:
      "Organized Social Activity, Physical Exercise, and the Risk of Insomnia Symptoms Among Community-Dwelling Older Adults",
    authors: "Endeshaw YW, Yoo W",
    journal: "Journal of Aging and Health",
    year: 2019,
    volume: "31(6)",
    pages: "989-1001",
    doi: "10.1177/0898264317747705",
    pmid: "29260617",
    type: "journal",
  },
  {
    title:
      "Patient web portals, disease management, and primary prevention",
    authors:
      "Coughlin SS, Prochaska JJ, Williams LB, Besenyi GM, Heboyan V, Goggans DS, Yoo W, De Leo G",
    journal: "Risk Management and Healthcare Policy",
    year: 2017,
    volume: "10",
    pages: "33-40",
    doi: "10.2147/RMHP.S130431",
    pmid: "28435342",
    type: "journal",
  },
  {
    title:
      "Recent trends in racial and regional disparities in cervical cancer incidence and mortality in United States",
    authors:
      "Yoo W, Kim S, Huh WK, Dilley S, Coughlin SS, Partridge EE, Chung Y, Dicks V, Lee JK, Bae S",
    journal: "PLOS ONE",
    year: 2017,
    volume: "12(2)",
    pages: "e0172548",
    doi: "10.1371/journal.pone.0172548",
    pmid: "28234949",
    type: "journal",
  },
  {
    title:
      "Systemic Levels of Estrogens and PGE2 Synthesis in Relation to Postmenopausal Breast Cancer Risk",
    authors: "Kim S, Campbell J, Yoo W, Taylor JA, Sandler DP",
    journal: "Cancer Epidemiology, Biomarkers & Prevention",
    year: 2017,
    volume: "26(3)",
    pages: "383-388",
    doi: "10.1158/1055-9965.EPI-16-0556",
    pmid: "27864342",
    type: "journal",
  },
  {
    title:
      "Determinants of adherence to physical activity guidelines among overweight and obese African American breast cancer survivors: implications for an intervention approach",
    authors:
      "Smith SA, Ansa BE, Yoo W, Whitehead MS, Coughlin SS",
    journal: "Ethnicity & Health",
    year: 2018,
    volume: "23(2)",
    doi: "10.1080/13557858.2016.1246429",
    type: "journal",
  },
  {
    title:
      "Persons Who Failed to Obtain Colorectal Cancer Screening Despite Participation in an Evidence-Based Intervention",
    authors:
      "Smith SA, Alema-Mensah E, Yoo W, Ansa BE, Blumenthal DS",
    journal: "Journal of Community Health",
    year: 2017,
    volume: "42(1)",
    pages: "30-34",
    doi: "10.1007/s10900-016-0221-7",
    pmid: "27395048",
    pmcid: "PMC5222885",
    type: "journal",
  },
  {
    title:
      "Gender and race disparities in weight gain among offenders prescribed antidepressant and antipsychotic medications",
    authors:
      "Gates ML, Wilkins T, Ferguson E, Walker V, Bradford RK, Yoo W",
    journal: "Health & Justice",
    year: 2016,
    volume: "4",
    pages: "6",
    doi: "10.1186/s40352-016-0037-7",
    pmid: "27340612",
    pmcid: "PMC4877425",
    type: "journal",
  },
  {
    title:
      "A Call to Develop Evidence-based Interventions to Reduce Sexually Transmitted Infections in Juvenile Justice Populations",
    authors:
      "Gates ML, Staples-Horne M, Cartier J, Best C, Stone R, Walker V, Hastings B, Yoo W, Webb NC, Braithwaite RL",
    journal: "Journal of Health Care for the Poor and Underserved",
    year: 2016,
    volume: "27(2A)",
    pages: "34-44",
    doi: "10.1353/hpu.2016.0057",
    pmid: "27133511",
    type: "journal",
  },
  {
    title:
      "Age, Race and Regional Disparities in Colorectal Cancer Incidence Rates in Georgia between 2000 and 2012",
    authors: "Yoo W, De S, Wilkins T, Smith SA, Blumenthal D",
    journal: "Annals of Public Health and Research",
    year: 2016,
    volume: "3(2)",
    pages: "1040",
    pmid: "27042701",
    pmcid: "PMC4813800",
    type: "journal",
  },
  {
    title:
      "Factors associated with body mass index among African American breast cancer survivors",
    authors:
      "Smith SA, Claridy MD, Whitehead MS, Sheats JQ, Yoo W, Alema-Mensah E, Ansa BE, Braithwaite RL",
    journal: "Journal of the Georgia Public Health Association",
    year: 2016,
    volume: "5(3)",
    pages: "259-265",
    pmid: "27019873",
    pmcid: "PMC4806683",
    type: "journal",
  },
  {
    title:
      "A Community-Engaged Approach to Developing a Mobile Cancer Prevention App: The mCPA Study Protocol",
    authors:
      "Smith SA, Whitehead MS, Sheats J, Mastromonico J, Yoo W, Coughlin SS",
    journal: "JMIR Research Protocols",
    year: 2016,
    volume: "5(1)",
    pages: "e34",
    doi: "10.2196/resprot.5290",
    type: "journal",
  },
  {
    title:
      "Understanding Psychosocial and High-Risk Sexual Behaviors Among Detained Juveniles: A Descriptive Study Protocol",
    authors:
      "Gates ML, Staples-Horne M, Cartier J, Best C, Walker V, Schwartz D, Yoo W",
    journal: "JMIR Research Protocols",
    year: 2015,
    volume: "4(4)",
    pages: "e144",
    doi: "10.2196/resprot.4977",
    type: "journal",
  },
  {
    title:
      "Beliefs and Behaviors about Breast Cancer Recurrence Risk Reduction among African American Breast Cancer Survivors",
    authors:
      "Ansa B, Yoo W, Whitehead M, Coughlin S, Smith S",
    journal:
      "International Journal of Environmental Research and Public Health",
    year: 2016,
    volume: "13(1)",
    pages: "46",
    doi: "10.3390/ijerph13010046",
    pmid: "26703650",
    pmcid: "PMC4730437",
    type: "journal",
  },
  {
    title:
      "Association Between Social and Physical Activities and Insomnia Symptoms Among Community-Dwelling Older Adults",
    authors: "Endeshaw YW, Yoo W",
    journal: "Journal of Aging and Health",
    year: 2016,
    volume: "28(6)",
    pages: "1073-1089",
    doi: "10.1177/0898264315618921",
    pmid: "26690253",
    pmcid: "PMC4914473",
    type: "journal",
  },
  {
    title:
      "Evaluation of genetic risk scores for prediction of dichotomous outcomes",
    authors: "Yoo W, Smith SA, Coughlin SS",
    journal:
      "International Journal of Molecular Epidemiology and Genetics",
    year: 2015,
    volume: "6(1)",
    pages: "1-8",
    type: "journal",
  },
  {
    title:
      "Lifestyle Modification Experiences of African American Breast Cancer Survivors: A Needs Assessment",
    authors:
      "Smith SA, Claridy MD, Whitehead MS, Sheats JQ, Yoo W, Alema-Mensah EA, Ansa BE, Coughlin SS",
    journal: "JMIR Cancer",
    year: 2015,
    volume: "1(2)",
    pages: "e9",
    doi: "10.2196/cancer.4892",
    pmid: "26380378",
    pmcid: "PMC4569011",
    type: "journal",
  },
  {
    title:
      "Trends in cancer incidence rates in Georgia, 1982-2011",
    authors: "Yoo W, Coughlin SS, Lillard JW",
    journal: "Journal of the Georgia Public Health Association",
    year: 2015,
    volume: "5(1)",
    pages: "96-100",
    pmid: "26336654",
    pmcid: "PMC4554540",
    type: "journal",
  },
  {
    title:
      "Advancing breast cancer survivorship among African-American women",
    authors:
      "Coughlin SS, Yoo W, Whitehead MS, Smith SA",
    journal: "Breast Cancer Research and Treatment",
    year: 2015,
    volume: "153(2)",
    pages: "253-261",
    doi: "10.1007/s10549-015-3548-3",
    pmid: "26303657",
    pmcid: "PMC4560975",
    type: "journal",
  },
  {
    title:
      "Postoperative shift in ocular alignment following single vertical rectus recession on adjustable suture in adults without thyroid eye disease",
    authors: "Bratton E, Hoehn ME, Yoo W, Cox KF, Kerr NC",
    journal: "Journal of AAPOS",
    year: 2015,
    volume: "19(3)",
    pages: "247-251",
    doi: "10.1016/j.jaapos.2015.03.015",
    pmid: "26059671",
    type: "journal",
  },
  {
    title:
      "A Study of Effects of MultiCollinearity in the Multivariable Analysis",
    authors: "Yoo W, Mayberry R, Bae S, Singh K, Peter He Q, Lillard JW Jr",
    journal:
      "International Journal of Applied Science and Technology",
    year: 2014,
    volume: "4(5)",
    pages: "9-19",
    pmid: "25664257",
    pmcid: "PMC4318006",
    type: "journal",
  },
  {
    title:
      "Anal Squamous Cell Carcinoma in African Americans with and without HIV: A Comparative Study",
    authors:
      "Lokko C, Turner J, Yoo W, Wood D, Clark K, Childs E, Rao VN, Reddy ES, Clark C",
    journal: "Journal of Cancer Epidemiology & Treatment",
    year: 2015,
    volume: "1(1)",
    pages: "6-10",
    doi: "10.24218/jcet.2015.04",
    pmid: "27774311",
    pmcid: "PMC5074337",
    type: "journal",
  },
  {
    title:
      "Determining left ventricular hypertrophy in overweight-obese youth using electrocardiogram criteria",
    authors: "Lee S, Cowan P, Yoo W, Wetzel G",
    journal: "Journal of Nursing Measurement",
    year: 2013,
    volume: "21(2)",
    pages: "178-187",
    doi: "10.1891/1061-3749.21.2.178",
    pmid: "24053051",
    type: "journal",
  },
  {
    title:
      "Detection of anti-HLA antibodies in maternal blood in the second trimester to identify patients at risk of antibody-mediated maternal anti-fetal rejection and spontaneous preterm delivery",
    authors:
      "Lee J, Romero R, Xu Y, Miranda J, Yoo W, Chaemsaithong P, Kusanovic JP, Chaiworapongsa T, Tarca AL, Korzeniewski SJ, Hassan SS, Than NG, Yoon BH, Kim CJ",
    journal: "American Journal of Reproductive Immunology",
    year: 2013,
    volume: "70(2)",
    pages: "162-175",
    doi: "10.1111/aji.12141",
    pmid: "23841577",
    pmcid: "PMC4154511",
    type: "journal",
  },
  {
    title:
      "A Comparison of Logistic Regression, Logic Regression, Classification Tree, and Random Forests to Identify Effective Gene-Gene and Gene-Environmental Interactions",
    authors: "Yoo W, Ference BA, Cote ML, Schwartz A",
    journal:
      "International Journal of Applied Science and Technology",
    year: 2012,
    volume: "2(7)",
    pages: "268",
    pmid: "23795347",
    pmcid: "PMC3686280",
    type: "journal",
  },
  {
    title:
      "Dietary patterns in pregnancy and effects on nutrient intake in the Mid-South: the Conditions Affecting Neurocognitive Development and Learning in Early Childhood (CANDLE) study",
    authors:
      "Völgyi E, Carroll KN, Hare ME, Ringwald-Smith K, Piyathilake C, Yoo W, Tylavsky FA",
    journal: "Nutrients",
    year: 2013,
    volume: "5(5)",
    pages: "1511-1530",
    doi: "10.3390/nu5051511",
    pmid: "23645026",
    pmcid: "PMC3708333",
    type: "journal",
  },
  {
    title:
      "Outcomes of operations performed by attending surgeons after overnight trauma shifts",
    authors:
      "Sharpe JP, Weinberg JA, Magnotti LJ, Nouer SS, Yoo W, Zarzaur BL, Cullinan DR, Hendrick LE, Fabian TC, Croce MA",
    journal: "Journal of the American College of Surgeons",
    year: 2013,
    volume: "216(4)",
    pages: "791-797",
    doi: "10.1016/j.jamcollsurg.2012.12.005",
    pmid: "23313541",
    pmcid: "PMC3658142",
    type: "journal",
  },
  {
    title:
      "Vitamin B12 deficiency associated with concomitant metformin and proton pump inhibitor use",
    authors: "Long AN, Atwell CL, Yoo W, Solomon SS",
    journal: "Diabetes Care",
    year: 2012,
    volume: "35(12)",
    pages: "e84",
    doi: "10.2337/dc12-0980",
    pmid: "23173145",
    pmcid: "PMC3507616",
    type: "journal",
  },
  {
    title:
      "Effect of long-term exposure to lower low-density lipoprotein cholesterol beginning early in life on the risk of coronary heart disease: a Mendelian randomization analysis",
    authors:
      "Ference BA, Yoo W, Alesh I, Mahajan N, Mirowska KK, Mewada A, Kahn J, Afonso L, Williams KA Sr, Flack JM",
    journal: "Journal of the American College of Cardiology",
    year: 2012,
    volume: "60(25)",
    pages: "2631-2639",
    doi: "10.1016/j.jacc.2012.09.017",
    pmid: "23083789",
    type: "journal",
  },
  {
    title:
      "A common KIF6 polymorphism increases vulnerability to low-density lipoprotein cholesterol: two meta-analyses and a meta-regression analysis",
    authors: "Ference BA, Yoo W, Flack JM, Clarke M",
    journal: "PLoS ONE",
    year: 2011,
    volume: "6(12)",
    pages: "e28834",
    doi: "10.1371/journal.pone.0028834",
    pmid: "22216121",
    pmcid: "PMC3244415",
    type: "journal",
  },
  {
    title:
      "Unexplained fetal death has a biological signature of maternal anti-fetal rejection: chronic chorioamnionitis and alloimmune anti-human leucocyte antigen antibodies",
    authors:
      "Lee J, Romero R, Dong Z, Xu Y, Qureshi F, Jacques S, Yoo W, Chaiworapongsa T, Mittal P, Hassan SS, Kim CJ",
    journal: "Histopathology",
    year: 2011,
    volume: "59(5)",
    pages: "928-938",
    doi: "10.1111/j.1365-2559.2011.04038.x",
    pmid: "22092404",
    pmcid: "PMC3546834",
    type: "journal",
  },
  {
    title:
      "Autism spectrum disorders are associated with an elevated autoantibody response to tissue transglutaminase-2",
    authors: "Rosenspire A, Yoo W, Menard S, Torres AR",
    journal: "Autism Research",
    year: 2011,
    volume: "4(4)",
    pages: "242-249",
    doi: "10.1002/aur.194",
    pmid: "21506289",
    type: "journal",
  },
  {
    title:
      "Prognosis and treatment of desquamative inflammatory vaginitis",
    authors: "Sobel JD, Reichman O, Misra D, Yoo W",
    journal: "Obstetrics & Gynecology",
    year: 2011,
    volume: "117(4)",
    pages: "850-855",
    doi: "10.1097/AOG.0b013e3182117c9e",
    pmid: "21422855",
    type: "journal",
  },
  {
    title:
      "A signature of maternal anti-fetal rejection in spontaneous preterm birth: chronic chorioamnionitis, anti-human leukocyte antigen antibodies, and C4d",
    authors:
      "Lee J, Romero R, Xu Y, Kim JS, Topping V, Yoo W, Kusanovic JP, Chaiworapongsa T, Hassan SS, Yoon BH, Kim CJ",
    journal: "PLoS ONE",
    year: 2011,
    volume: "6(2)",
    pages: "e16806",
    doi: "10.1371/journal.pone.0016806",
    pmid: "21326865",
    pmcid: "PMC3033909",
    type: "journal",
  },
  {
    title:
      "Predictors of end stage renal disease in African Americans with lupus nephritis",
    authors: "Franco C, Yoo W, Franco D, Xu Z",
    journal:
      "Bulletin of the NYU Hospital for Joint Diseases",
    year: 2010,
    volume: "68(4)",
    pages: "251-256",
    pmid: "21162701",
    type: "journal",
  },
  {
    title:
      "Profound cardioprotection with chloramphenicol succinate in the swine model of myocardial ischemia-reperfusion injury",
    authors:
      "Sala-Mercado JA, Wider J, Undyala VV, Jahania S, Yoo W, Mentzer RM Jr, Gottlieb RA, Przyklenk K",
    journal: "Circulation",
    year: 2010,
    volume: "122(11 Suppl)",
    pages: "S179-S184",
    doi: "10.1161/CIRCULATIONAHA.109.928242",
    pmid: "20837911",
    pmcid: "PMC3355994",
    type: "journal",
  },
  {
    title:
      "Evidence for a spatial and temporal regulation of prostaglandin-endoperoxide synthase 2 expression in human amnion in term and preterm parturition",
    authors:
      "Lee DC, Romero R, Kim JS, Yoo W, Lee J, Mittal P, Kusanovic JP, Hassan SS, Yoon BH, Kim CJ",
    journal:
      "Journal of Clinical Endocrinology & Metabolism",
    year: 2010,
    volume: "95(9)",
    pages: "E86-E91",
    doi: "10.1210/jc.2010-0203",
    pmid: "20519349",
    pmcid: "PMC2936056",
    type: "journal",
  },
  {
    title:
      "The frequency, clinical significance, and pathological features of chronic chorioamnionitis: a lesion associated with spontaneous preterm birth",
    authors:
      "Kim CJ, Romero R, Kusanovic JP, Yoo W, Dong Z, Topping V, Gotsch F, Yoon BH, Chi JG, Kim JS",
    journal: "Modern Pathology",
    year: 2010,
    volume: "23(7)",
    pages: "1000-1011",
    doi: "10.1038/modpathol.2010.73",
    pmid: "20348884",
    pmcid: "PMC3096929",
    type: "journal",
  },
  {
    title:
      "Outcome of patients with injection drug use-associated endocarditis admitted to an intensive care unit",
    authors: "Saydain G, Singh J, Dalal B, Yoo W, Levine DP",
    journal: "Journal of Critical Care",
    year: 2010,
    volume: "25(2)",
    pages: "248-253",
    doi: "10.1016/j.jcrc.2009.09.007",
    pmid: "19906509",
    type: "journal",
  },
  {
    title:
      "Relationship of vitamin D and parathyroid hormone with obesity and body composition in African Americans",
    authors:
      "Valiña-Tóth AL, Lai Z, Yoo W, Abou-Samra A, Gadegbeku CA, Flack JM",
    journal: "Clinical Endocrinology",
    year: 2010,
    volume: "72(5)",
    pages: "595-603",
    doi: "10.1111/j.1365-2265.2009.03676.x",
    pmid: "19656160",
    pmcid: "PMC2866059",
    type: "journal",
  },
  {
    title:
      "Widespread microbial invasion of the chorioamniotic membranes is a consequence and not a cause of intra-amniotic infection",
    authors:
      "Kim MJ, Romero R, Gervasi MT, Kim JS, Yoo W, Lee DC, Mittal P, Erez O, Kusanovic JP, Hassan SS, Kim CJ",
    journal: "Laboratory Investigation",
    year: 2009,
    volume: "89(8)",
    pages: "924-936",
    doi: "10.1038/labinvest.2009.49",
    pmid: "19506551",
    pmcid: "PMC2743483",
    type: "journal",
  },
  {
    title:
      "Tobacco and estrogen metabolic polymorphisms and risk of non-small cell lung cancer in women",
    authors:
      "Cote ML, Yoo W, Wenzla AS, Prysak GM, Santer S, Claeys GB, VanDyke AL, Land SJ, Schwartz AG",
    journal: "Carcinogenesis",
    year: 2009,
    volume: "30(4)",
    pages: "626-635",
    doi: "10.1093/carcin/bgp033",
    type: "journal",
  },
];

export const bookChapters: Publication[] = [
  {
    title:
      "Community-based participatory research study approaches along a continuum of community-engaged research",
    authors: "Coughlin S, Yoo W",
    journal:
      "Handbook of Community-Based Participatory Research, Oxford University Press",
    year: 2017,
    pages: "11-20",
    type: "book-chapter",
  },
];
