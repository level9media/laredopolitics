export type Source = {
  title: string;
  publisher: string;
  url: string;
};

export type Candidate = {
  slug: string;
  name: string;
  ballotName: string;
  officialFullName: string;
  campaignTreasurer: string;
  treasurerUrl: string;
  applicationUrl: string;
  role: string;
  initials: string;
  summary: string;
  bio: string[];
  priorities: string[];
  record: string[];
  good: string[];
  bad: string[];
  questions: string[];
  sources: Source[];
  verifiedAsOf?: string;
  photoUrl?: string;
  photoAlt?: string;
  photoCredit?: string;
};

export type Issue = {
  slug: string;
  title: string;
  spanishTitle: string;
  category: string;
  summary: string;
  whyItMatters: string[];
  currentSituation: string[];
  keyNumbers?: Array<{ label: string; value: string; context: string }>;
  candidateContext?: Array<{ candidate: string; position: string }>;
  good: string[];
  bad: string[];
  questions: string[];
  keywords: string[];
  sources: Source[];
  verifiedAsOf?: string;
};

export type VotingResource = {
  slug: string;
  title: string;
  spanishTitle: string;
  summary: string;
  steps: Array<{ title: string; body: string }>;
  officialLink: string;
  officialLabel: string;
  keywords: string[];
};

const candidatesEnUnordered: Candidate[] = [
  {
    slug: "victor-trevino",
    name: "Dr. Victor D. Treviño",
    ballotName: "Victor D. Trevino",
    officialFullName: "Victor Daniel Trevino",
    campaignTreasurer: "Victor D. Trevino",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24434/639244512374809563",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24097/639216280176900000",
    role: "Incumbent mayor",
    initials: "VT",
    photoUrl: "/manus-storage/victor-trevino_7c486ac0.webp",
    photoAlt: "Portrait of Dr. Victor D. Treviño",
    photoCredit: "Courtesy / Laredo Morning Times",
    summary: "A physician, former health authority, and mayor of Laredo since 2022. He is seeking a second term in the 2026 municipal election.",
    bio: [
      "The City biography states that Treviño was born and raised in Laredo, attended Nixon High School, Laredo Junior College, and Texas A&M University–Kingsville, and completed his residency at LSU Charity Hospital in 1984.",
      "He returned to Laredo in 1985, worked with the Health Department, and practiced family medicine and obstetrics. He also served as Health Authority during the COVID-19 response.",
      "He won the 2022 mayoral runoff. The City records his term as running from December 2022 through November 2026.",
    ],
    priorities: ["Public safety", "Hospital and pediatric services", "Water-line replacement and paving", "International trade"],
    record: [
      "The City's official list confirms his candidacy, the ballot name Victor D. Trevino, and his own name as campaign treasurer.",
      "Before becoming mayor, his most visible public experience was serving as Health Authority for approximately two years of the COVID-19 response.",
      "State of the City communications describe claimed priorities and progress on water, health, binational relations, trade, and public safety. They are government communications, not independent performance audits.",
    ],
    good: [
      "He enters the race with direct executive experience and a full mayoral term available for public review.",
      "His health-sector background provides subject-matter experience in public-health issues.",
    ],
    bad: [
      "As the incumbent, he is accountable for unresolved municipal problems as well as completed projects.",
      "Several prominent proposals, including secondary water sources and pediatric services, still need published costs, partners, timelines, and outcomes.",
      "Some evidence of results comes from municipal communications or campaign statements and requires comparison with budgets, milestones, and independent audits.",
    ],
    questions: [
      "Which first-term projects will be completed by a specific date?",
      "How will the city publish clearer performance reports on major capital investments?",
      "What would be substantially different in a second term?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Mayor Dr. Victor D. Treviño", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/mayor-city-council/mayor-dr-victor-d-trevi-o" },
      { title: "Campaign Finance Reports", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports" },
      { title: "Election Results Archive", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/city-secretary-s-office/election-results-archive" },
      { title: "Trevino announces campaign for second term", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/mayor-campaign-reelection-trevino-victor-laredo-22331697.php" },
      { title: "Laredo mayor announces re-election bid", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/07/03/laredo-mayor-announces-re-election-bid/" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "alyssa-cigarroa",
    name: "Alyssa Cigarroa",
    ballotName: "Alyssa Cigarroa",
    officialFullName: "Alyssa Cristine Cigarroa",
    campaignTreasurer: "Ricardo A. Sandoval",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24327/639235126108770000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24115/639217167875230000",
    role: "District VIII council member",
    initials: "AC",
    photoUrl: "/manus-storage/alyssa-cigarroa_e25ad183.webp",
    photoAlt: "Portrait of Alyssa Cigarroa",
    photoCredit: "Courtesy Alyssa Cigarroa for Mayor campaign",
    summary: "District VIII council member since 2020 and co-founder of Cultivarte. Her campaign emphasizes municipal readiness, housing, and public participation.",
    bio: [
      "Cigarroa is a fifth-generation Laredoan and has represented District VIII on the City Council since winning as a write-in candidate in the 2020 runoff.",
      "The municipal biography describes her education and work in the arts before returning to Laredo. Daphne Art Foundation identifies her as founder and board president.",
      "She won reelection in District VIII in November 2024 with 74.78% of the reported vote in a four-candidate race.",
    ],
    priorities: ["Water reliability and long-term sources", "Capital improvement plan", "Public performance dashboard", "Small businesses, bridges, and mobility"],
    record: [
      "Her current City Council record provides meetings, agendas, videos, and votes for public evaluation.",
      "The campaign platform proposes repairing water lines, reducing leaks, planning capital, simplifying permits, and improving transparency through a public dashboard.",
      "Attributions of District VIII projects come primarily from the campaign; this profile separates them from audited outcomes or individually verified votes.",
    ],
    good: [
      "She has current municipal-government experience and an accessible City Council record.",
      "Her nonprofit experience provides community-development experience outside City Hall.",
    ],
    bad: [
      "Policy advocacy from the Council still must translate into a citywide implementation plan.",
      "The platform still needs costs, funding sources, legislative sequencing, and measurable timelines for its main proposals.",
      "Her record is primarily legislative and district-based; voters must evaluate how she would manage departments and the budget at citywide scale.",
    ],
    questions: [
      "Which District VIII results can be expanded citywide?",
      "How would the proposed housing policies be funded and measured?",
      "What administrative changes would occur during the first 100 days?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "District 8 Council Member Alyssa Cigarroa", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/mayor-city-council/district-8-cm-alyssa-cigarroa" },
      { title: "Alyssa Cigarroa for Mayor", publisher: "Official campaign website", url: "https://alyssacigarroa.com/" },
      { title: "About Daphne Art Foundation", publisher: "Daphne Art Foundation", url: "https://www.daphneart.org/about" },
      { title: "District VIII Councilmember launches mayoral bid", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/city-council-election-politics-mayor-trevino-2026-22380196.php" },
      { title: "Alyssa Cigarroa launches Laredo mayoral bid", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/23/alyssa-cigarroa-launches-laredo-mayoral-bid/" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "poncho-casso",
    name: "Alfonso “Poncho” Casso",
    ballotName: "Poncho Casso",
    officialFullName: "Alfonso I. Casso",
    campaignTreasurer: "Alfonso I. \"Poncho\" Casso",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24063/639214597681930000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24065/639214600658800000",
    role: "Former council member and local businessman",
    initials: "PC",
    photoUrl: "/manus-storage/poncho-casso_12b48698.webp",
    photoAlt: "Portrait of Alfonso Poncho Casso",
    photoCredit: "KGNS",
    summary: "A former council member and local businessman. His 2026 campaign focuses on accountability, transparency, water security, and international trade.",
    bio: [
      "Casso served on the Laredo City Council from 1994 to 1998, according to the local coverage reviewed.",
      "He was the Republican candidate for Webb County judge in 2018 and competed in Laredo's nonpartisan mayoral race in 2022.",
      "The City officially lists him as Alfonso I. Casso, with Poncho Casso as his 2026 ballot name and himself as campaign treasurer.",
    ],
    priorities: ["Accountability", "Government transparency", "Water security", "International trade"],
    record: [
      "His elected municipal service from 1994 to 1998 provides experience, although it predates current budget and operating conditions by decades.",
      "In the 2022 general mayoral election, he received 5,027 votes, or 12.0%, and did not advance to the runoff.",
      "His campaign has announced a three-point plan, but the full document had not been published in the sources reviewed.",
    ],
    good: [
      "He has long-standing knowledge of local government and debates over public accountability.",
      "A prior mayoral campaign gives the public a record of earlier promises and priorities to compare.",
    ],
    bad: [
      "His earlier Council experience may not directly reflect current operating and budget conditions.",
      "The current plan needs specific components, costs, implementation authority, and measurable outcomes.",
      "His two recently documented campaigns for county judge and mayor did not result in election to the office sought.",
    ],
    questions: [
      "What are the components, costs, and timelines of the three-point plan?",
      "What is the funding sequence for water-system priorities?",
      "Which transparency measures would become binding policy?",
      "What current positions does he take on debt, compensation, pensions, and the city budget?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Casso enters Laredo mayoral race citing accountability focus", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/alfonso-casso-laredo-mayor-2026-campaign-election-22382647.php" },
      { title: "Poncho Casso announces bid for Laredo Mayor", publisher: "KGNS-TV", url: "https://www.kgns.tv/2022/09/12/alfonso-poncho-casso-announces-bid-laredo-mayor/" },
      { title: "Mayoral election in Laredo, Texas (2022)", publisher: "Ballotpedia", url: "https://ballotpedia.org/Mayoral_election_in_Laredo,_Texas_(2022)" },
      { title: "Final 2018 Webb County election results", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/politics/article/Final-voting-results-from-the-November-2018-13371054.php" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "jd-gonzalez",
    name: "JD Gonzalez",
    ballotName: "JD Gonzalez",
    officialFullName: "Jose David Gonzalez",
    campaignTreasurer: "Sonia Villarreal",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23926/639203242118170000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/23928/639203245618530000",
    role: "Veteran and trade professional",
    initials: "JG",
    photoUrl: "/manus-storage/jd-gonzalez_2ce6ae85.webp",
    photoAlt: "Portrait of JD Gonzalez",
    photoCredit: "Courtesy JD Gonzalez for Mayor campaign",
    summary: "A ten-year Navy veteran with international-trade experience. His campaign focuses on streets, water, public safety, and opportunity.",
    bio: [
      "The City officially identifies him as Jose David Gonzalez, with JD Gonzalez as his ballot name.",
      "The National Customs Brokers & Forwarders Association of America states that he served in the United States Navy from 1982 to 1992 and earned a bachelor's degree in accounting from National University.",
      "He is a licensed U.S. customs broker and has operated a customs brokerage since 1994. The national association currently identifies him as chair of its board.",
    ],
    priorities: ["Streets, water, and utility capacity", "Trade and international bridges", "Jobs and small businesses", "Access to health care", "Municipal accountability"],
    record: [
      "The City records his service on the Airport Advisory Board since 2021 and on the Port of Entry Advisory Committee, with an appointment expiring in November 2026.",
      "His best-documented experience is in the customs, logistics, and international-trade industry, along with municipal advisory boards.",
      "The platform publishes broad issue areas but still needs costs, funding sources, goals, and implementation schedules.",
    ],
    good: [
      "His background brings military leadership and international-trade experience to the race.",
      "His focus on essential services addresses widely recognized local concerns.",
    ],
    bad: [
      "He does not have a record in elected office or municipal executive management against which direct votes, budgets, and outcomes can be compared.",
      "His professional experience is concentrated in trade and logistics; less independent material is available to evaluate other municipal areas.",
      "The platform needs cost estimates, funding sources, and measurable goals for water, mobility, health, and economic development.",
    ],
    questions: [
      "Which management practices from his prior experience would transfer to City Hall?",
      "How would streets and water be prioritized in the capital plan?",
      "Which measurable outcomes define economic opportunity?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "Boards, Commissions & Committees", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/services/boards-commissions-committees" },
      { title: "NCBFAA Board of Directors", publisher: "NCBFAA", url: "https://ncbfaa.org/about-ncbfaa/board-of-directors" },
      { title: "Board and Committee Bios", publisher: "NCBFAA", url: "https://ncbfaa.org/about-ncbfaa/board-of-directors/board-and-committee-bios" },
      { title: "JD Gonzalez launches Laredo mayoral bid", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/16/jd-gonzalez-launches-laredo-mayoral-bid-citing-trade-expertise-military-service/" },
      { title: "JD Gonzalez for Mayor — Platform", publisher: "Official campaign website", url: "https://jdformayor.com/platform" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "jorge-garza",
    name: "Jorge A. Garza",
    ballotName: "Jorge A. Garza",
    officialFullName: "Jorge Alberto Garza",
    campaignTreasurer: "B Javier Cuate Mendoza",
    treasurerUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24189/639226674656270000",
    applicationUrl: "https://www.cityoflaredo.com/home/showpublisheddocument/24195/639226675983470000",
    role: "Candidate for mayor of Laredo",
    initials: "JA",
    summary: "The City of Laredo officially includes Jorge A. Garza on the 2026 mayoral ballot. Verifiable public information about his experience and platform remains limited.",
    bio: [
      "Jorge A. Garza appears on the City of Laredo's official candidate list for the November 3, 2026 general election.",
      "As of the review date, no complete biography was located in official materials, a verifiable campaign website, or sufficient local coverage.",
      "This profile will be updated when verifiable public documents or statements become available.",
    ],
    priorities: ["No detailed public platform located"],
    record: [
      "The candidacy and ballot name are verified through the official City of Laredo page.",
      "No positions, experience, or accomplishments are attributed without a verifiable public source.",
      "The absence of located information should not be interpreted as an evaluation of the candidacy.",
    ],
    good: [
      "His ballot access is documented by the municipal election authority.",
      "The profile clearly identifies what has not yet been verified rather than filling gaps with inferences.",
    ],
    bad: [
      "Limited public information makes it difficult to compare his preparation, priorities, and governing plan with those of the other candidates.",
      "Without published proposals, voters cannot evaluate costs, timelines, or expected outcomes.",
    ],
    questions: [
      "What professional, civic, and administrative experience does he have that is relevant to leading the city?",
      "What are his positions on water, taxes, the budget, public safety, and trade?",
      "What measures would he implement during his first 100 days?",
      "Where will he publish his platform, team, and campaign reports?",
    ],
    sources: [
      { title: "2026 Candidates Information", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/elections/2026-candidates-information" },
      { title: "2026 General Elections", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/2026-general-elections" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
];

const mayorBallotOrder = ["victor-trevino", "jd-gonzalez", "jorge-garza", "poncho-casso", "alyssa-cigarroa"];
export const candidatesEn = [...candidatesEnUnordered].sort((a, b) => mayorBallotOrder.indexOf(a.slug) - mayorBallotOrder.indexOf(b.slug));

export const issuesEn: Issue[] = [
  {
    slug: "agua-infraestructura",
    title: "Laredo water infrastructure",
    spanishTitle: "Water and infrastructure",
    category: "Infrastructure",
    summary: "A verified guide to the reliability of Laredo's water system, pipe replacement, funding, alternative sources, and candidates' documented positions.",
    whyItMatters: [
      "Safe, reliable water affects public health, schools, hospitals, restaurants, housing, and the city's ability to attract businesses.",
      "The municipal 2024 water-quality report states that Laredo's two treatment plants pump surface water from the Rio Grande, concentrating supply in one primary source.",
      "Replacement, treatment, transmission, storage, and new-source projects can affect rates, debt, and the city's growth timeline.",
      "Voters should distinguish among completed work, authorized projects, proposed budgets, and announcements that still lack a complete public cost or timeline.",
    ],
    currentSituation: [
      "The 2024 Consumer Confidence Report documented a maximum contaminant level violation for E. coli during October 2024. The city issued a citywide boil-water notice on October 10 of that year.",
      "A notice required by the Texas Commission on Environmental Quality also documented incomplete filter-turbidity monitoring at the El Pico plant during a control-system failure between August and September 2024. The city reported repairs and training as corrective measures.",
      "In May 2026, the city issued a precautionary notice limited to the area served by the Jefferson plant. The notice was lifted after more than 50 follow-up bacteriological samples tested negative.",
      "The capital plan includes pipe replacement, transmission lines, an El Pico–Jefferson connection, tank rehabilitation, meters, a quality laboratory, and wastewater work.",
      "In August 2026, the city announced agreements for access to as much as 90 million gallons per day from secondary sources if needed. Final pricing, treatment, delivery infrastructure, and timing remain important public questions.",
    ],
    keyNumbers: [
      { label: "Reported water loss", value: "13.59%", context: "System-loss audit estimate included in the municipal 2024 water-quality report." },
      { label: "FY 2024–28 capital program", value: "$100.9 million", context: "$59.558 million for water and $41.351 million for wastewater in the adopted plan; a capital plan is not the same as completed work." },
      { label: "FY 2026–27 proposal", value: "$119.2 million", context: "Proposed spending on water and wastewater projects; it should not be presented as investment already completed." },
      { label: "Reported active portfolio", value: "$245.1 million", context: "29 active projects according to a Utilities Department presentation reported in August 2026; it is not an external audit." },
      { label: "Modeled funding gap", value: "$46.6 million", context: "Estimated need after available funds for the FY 2026–27 program; external applications are not awards." },
      { label: "Announced secondary sources", value: "Up to 90 MGD", context: "40 million gallons per day from Jasper Ranch and 50 million from Legacy Water; this is announced access, not production currently being delivered." },
    ],
    candidateContext: [
      { candidate: "Victor D. Treviño", position: "In his reelection announcement, he cited approximately $119 million in water investment and progress toward a secondary source. This is a campaign claim, and the work remains underway." },
      { candidate: "JD Gonzalez", position: "His platform calls for reliable water systems, capacity for growth, and long-term capital planning. It does not publish a detailed project list, costs, or rate proposal." },
      { candidate: "Jorge A. Garza", position: "No documented position on water infrastructure was found in the official sources, located campaign materials, or local coverage reviewed." },
      { candidate: "Poncho Casso", position: "He has identified water security as a central issue, but the detailed three-point plan was not published in the sources reviewed." },
      { candidate: "Alyssa Cigarroa", position: "Her campaign proposes reducing boil-water notices, repairing aging lines, decreasing leaks, and securing multiple affordable long-term sources. These are campaign commitments, not implemented outcomes." },
    ],
    good: [
      "The city has identified and authorized a broad portfolio of line renewal, pump stations, tanks, treatment, and wastewater work.",
      "The May 2026 precautionary notice was lifted with state approval after more than 50 negative follow-up samples.",
      "The planned connection between El Pico and Jefferson is intended to add redundancy when part of the system is under maintenance or experiencing problems.",
      "The secondary-source agreements represent a step toward supply diversification, although they still require public implementation details.",
      "The internal classification of projects at risk improved between March and July 2026, according to the Utilities Department report.",
    ],
    bad: [
      "The 2024 E. coli violation, the citywide boil-water notice, and the 2026 precautionary event show that reliability and public trust remain incompletely resolved.",
      "The estimated 13.59% loss and continuing pipe replacement reveal a costly, long-term obligation.",
      "The state notice about incomplete monitoring documented a compliance failure distinct from final water quality.",
      "The FY 2026–27 plan showed a modeled $46.6 million gap and depended on external applications that should not be counted as secured funds.",
      "The new-source agreements do not yet publish all costs, treatment requirements, construction obligations, or rate effects.",
    ],
    questions: [
      "What targets will the city publish for breaks, low pressure, boil-water notices, system loss, and restoration time?",
      "Which projects are formally funded, and which remain proposed?",
      "How will the $46.6 million gap be covered, and what effect would each option have on residential and commercial rates?",
      "What are the prices, firm volumes, treatment requirements, and timelines for Jasper Ranch and Legacy Water?",
      "What independent technical review supports the sustainable yield of the secondary sources?",
      "What milestones and dates govern the El Pico–Jefferson connection, pipe replacement, tanks, and wastewater infrastructure?",
      "How will existing water be prioritized for residents versus new high-consumption developments?",
    ],
    keywords: ["Laredo water infrastructure", "agua Laredo 2026", "Laredo boil water notices", "City of Laredo water projects", "Laredo mayor water plan"],
    sources: [
      { title: "2024 Consumer Confidence Report", publisher: "City of Laredo Utilities", url: "https://laredoutilities.com/wp-content/uploads/2024_CCR_English.pdf" },
      { title: "Mandatory Notice: Surface Water Monitoring", publisher: "City of Laredo Utilities / TCEQ", url: "https://laredoutilities.com/wp-content/uploads/Surface-Water-Monitoring-Minor-July-22-2025-1.pdf" },
      { title: "Citywide Water Boil Notice Local Disaster", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/Home/Components/News/News/213/15" },
      { title: "Jefferson Boil Water Notice Lifted", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/Home/Components/News/News/522/15" },
      { title: "Adopted FY 2024–2028 Capital Improvement Plan", publisher: "City of Laredo", url: "https://www.openlaredo.com/city-council/budget/CIP/24-28_Adopted_CIP.pdf" },
      { title: "Capital Improvement Program", publisher: "City of Laredo Engineering", url: "https://www.cityoflaredo.com/departments/engineering-department/capital-improvement-program-cip" },
      { title: "Laredo plans $119M in water, wastewater projects", publisher: "Laredo Morning Times", url: "https://www.lmtonline.com/local/article/laredo-water-infrastructure-budget-2026-27-tareq-22408395.php" },
      { title: "Region M Planning Group", publisher: "Texas Water Development Board", url: "https://www.twdb.texas.gov/waterplanning/rwp/regions/m/index.asp" },
      { title: "Water & Sewer Rates", publisher: "City of Laredo Utilities", url: "https://laredoutilities.com/water-sewer-rates/" },
      { title: "Lead Water Service Line Inventory", publisher: "City of Laredo Utilities", url: "https://laredoutilities.com/lead-water-service-line-information/" },
    ],
    verifiedAsOf: "September 9, 2026",
  },
  {
    slug: "impuestos-propiedad",
    title: "Laredo property taxes",
    spanishTitle: "Property taxes",
    category: "Economy",
    summary: "A verified guide to the proposed 2026 city tax rate, value growth, debt, revenue, and what the mayor can actually change.",
    whyItMatters: [
      "The bill depends on both taxable value and the rate. A nearly unchanged rate can produce a higher bill if property value increases.",
      "City taxes fund daily operations and tax-backed debt, but they are only one part of a bill that may include the county, schools, and other entities.",
      "Capital and borrowing decisions can increase future tax pressure. Tax-funded debt should be compared with the projects and schedules it pays for.",
      "The mayor participates in budget and tax priorities with the Council; a general promise of fiscal responsibility is not a specific rate commitment.",
    ],
    currentSituation: [
      "The proposed FY 2026–27 city budget totals $1.019 billion. The proposed rate is $0.506080 per $100 of taxable value: $0.380253 for maintenance and operations and $0.125827 for debt.",
      "The adopted rate for FY 2025–26 was $0.506090. The proposal is only $0.000010 lower per $100, while the allocation between operations and debt service changes.",
      "The proposed rate is above the no-new-revenue rate of $0.492235 and below the voter-approval rate of $0.522329 calculated by the city under state law.",
      "The city projects 7.74% growth in taxable value and approximately $140.58 million in property-tax revenue for FY 2027, about $9.01 million more than budgeted for FY 2026.",
      "The public materials reviewed still identified the FY 2026–27 budget and rate as proposed. The final ordinance and Council vote should be confirmed before publishing final figures.",
      "Webb CAD determines appraisals; taxing entities approve their rates. Challenging an appraisal before the appraisal review board is different from questioning the city tax rate.",
    ],
    keyNumbers: [
      { label: "Proposed 2026 city rate", value: "$0.506080", context: "Per $100 of taxable value. On $100,000 taxable value, the city portion would be $506.08 before exemptions." },
      { label: "Prior adopted rate", value: "$0.506090", context: "The proposal is virtually unchanged; it does not guarantee that an individual bill will decrease if taxable value changes." },
      { label: "No-new-revenue rate", value: "$0.492235", context: "Official calculation designed to produce approximately the same revenue from properties taxed in both years." },
      { label: "Projected value growth", value: "7.74%", context: "Assumption in the City of Laredo FY 2026–27 budget." },
      { label: "Budgeted revenue", value: "$140.58 million", context: "FY 2027 proposal combining maintenance, operations, and debt service." },
      { label: "Tax-backed debt", value: "$328.905 million", context: "Balance reported for FY 2025 by the Texas Bond Review Board." },
      { label: "Audited FY 2025 taxes", value: "$121.620 million", context: "Revenue recognized in the audited financial summary; it does not correspond directly to a proposed rate." },
    ],
    candidateContext: [
      { candidate: "Victor D. Treviño", position: "No specific campaign commitment on the rate, levy, exemptions, or debt was located. The municipal proposal during his incumbency should not automatically be attributed as a personal promise." },
      { candidate: "JD Gonzalez", position: "His campaign discusses fiscal responsibility and resource management but does not publish a specific target for the rate, levy, exemptions, or debt." },
      { candidate: "Jorge A. Garza", position: "No specific municipal property-tax position was found in the sources reviewed." },
      { candidate: "Poncho Casso", position: "In 2025, he advocated for the no-new-revenue rate for Webb County and argued that a lower nominal rate can still increase revenue when values rise. This is not yet a documented commitment on a specific 2026 city rate." },
      { candidate: "Alyssa Cigarroa", position: "No specific rate or exemption proposal was found. Her record includes the unanimous final vote for the FY 2025–26 budget, which kept the total rate at $0.506090." },
    ],
    good: [
      "The proposed total rate is virtually unchanged from the prior rate and is below the voter-approval rate calculated by the city.",
      "Revenue supports city services and capital capacity; the proposed debt component decreases from $0.128491 to $0.125827.",
      "The city publishes rate worksheets, hearing notices, the budget, and fiscal-transparency links.",
      "Rate decisions are local and allow public review, hearing participation, and electoral accountability.",
    ],
    bad: [
      "Individual bills can still increase because the city projects 7.74% growth in taxable value and the proposal exceeds the no-new-revenue rate.",
      "Tax-backed debt and the use of certificates of obligation make it especially important to publish projects, payments, and outcomes.",
      "A broad capital program can create future pressure if growth in values or revenue does not meet projections.",
      "The documents reviewed still did not clearly show a final adopted rate, and most candidates did not have a specific municipal tax platform located.",
    ],
    questions: [
      "What was the final adopted rate, ordinance number, and Council vote?",
      "Why does the proposal exceed the no-new-revenue rate, and how much additional revenue comes from existing properties versus new construction?",
      "Which services, positions, or projects would change under a lower rate?",
      "Which specific projects and payments does the $0.125827 debt component cover?",
      "Which future work will use voter-approved bonds, certificates of obligation, tax notes, fees, or grants?",
      "Which exemptions apply to each property, and when is it appropriate to challenge an appraisal before Webb CAD?",
      "What exact target for the rate, levy, debt, and exemptions does each candidate propose?",
    ],
    keywords: ["Laredo property taxes", "impuestos de propiedad Laredo", "Laredo tax rate 2026", "Webb County property tax", "Laredo city budget 2026"],
    sources: [
      { title: "Webb County Appraisal District", publisher: "Webb CAD", url: "https://www.webbcad.org/" },
      { title: "FY 2026–2027 Proposed Budget and Rate Overview", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/budget" },
      { title: "Notice About 2026 Tax Rates", publisher: "City of Laredo Tax Assessor-Collector", url: "https://www.cityoflaredo.com/home/showpublisheddocument/24101/639216300317470000" },
      { title: "2026 Tax Rate and Budget Information", publisher: "City of Laredo Tax Assessor-Collector", url: "https://www.cityoflaredo.com/home/showpublisheddocument/24103/639216300319970000" },
      { title: "FY 2025 Financial Summary", publisher: "City of Laredo Finance", url: "https://www.cityoflaredo.com/departments/finance-department/financial-transparency/finance-summary" },
      { title: "Laredo Local Debt Profile FY 2025", publisher: "Texas Bond Review Board", url: "https://data.brb.texas.gov/local/city/2125.html" },
      { title: "Property Tax Transparency in Texas", publisher: "State of Texas", url: "https://www.texas.gov/living-in-texas/property-tax-transparency/" },
      { title: "Appraisal Protests and Appeals", publisher: "Texas Comptroller", url: "https://comptroller.texas.gov/taxes/property-tax/protests/" },
      { title: "Capital Improvement Program", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/engineering-department/capital-improvement-program-cip" },
      { title: "City Council reviews proposed $1.02B budget", publisher: "KGNS-TV", url: "https://www.kgns.tv/2026/08/30/show-me-money-laredo-city-council-reviews-proposed-102-billion-budget-ahead-september-adoption/" },
    ],
    verifiedAsOf: "September 9, 2026; FY 2026–27 figures still proposed",
  },
  {
    slug: "presupuesto-municipal",
    title: "Laredo city budget",
    spanishTitle: "City budget",
    category: "Government",
    summary: "Learn how Laredo raises, allocates, and reports public money—and how each candidate would change those priorities.",
    whyItMatters: ["The budget turns campaign promises into funded or unfunded decisions.", "Staffing, infrastructure, and service levels depend on recurring revenue."],
    currentSituation: ["The City Council approves an annual budget after workshops and public hearings.", "A meaningful comparison requires both proposed spending and actual performance."],
    good: ["Budget documents provide a public baseline for evaluating claims.", "Public hearings create formal opportunities for resident participation."],
    bad: ["Lengthy budget documents are difficult for most residents to navigate.", "One-time funding can make recurring commitments appear more affordable than they really are."],
    questions: ["Which three departments should gain or lose funding?", "Which outcomes should be reported quarterly?", "How much debt is appropriate for capital needs?"],
    keywords: ["Laredo city budget", "City of Laredo spending", "Laredo budget 2026"],
    sources: [{ title: "Budget Department", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/budget" }],
  },
  {
    slug: "calles-movilidad",
    title: "Streets and mobility",
    spanishTitle: "Streets and mobility",
    category: "Infrastructure",
    summary: "Track the street conditions, congestion, capital projects, and transportation decisions facing Laredo.",
    whyItMatters: ["Street conditions affect safety, daily commutes, and freight movement.", "Transportation investments shape growth for decades."],
    currentSituation: ["Street maintenance competes with expansion projects and other infrastructure priorities.", "Residents need clearer project schedules and condition reporting."],
    good: ["Transportation performance can be measured through project delivery, pavement condition, and travel time.", "Trade growth strengthens the case for outside infrastructure funding."],
    bad: ["Deferred maintenance becomes more expensive over time.", "Without network-level planning, projects can shift congestion rather than solve it."],
    questions: ["Which corridors have the highest priority?", "How will maintenance be protected from political cycles?", "Which funding comes from local versus outside sources?"],
    keywords: ["Laredo roads", "Laredo traffic", "Laredo street projects"],
    sources: [{ title: "Public Works", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/public-works" }],
  },
  {
    slug: "seguridad-publica",
    title: "Public safety",
    spanishTitle: "Public safety",
    category: "Services",
    summary: "Compare public-safety priorities, staffing proposals, technology investments, and measurable outcomes.",
    whyItMatters: ["Police, fire, and emergency response are core city responsibilities.", "Staffing decisions have major long-term budget effects."],
    currentSituation: ["Public-safety debates often combine staffing, equipment, prevention, and response times.", "Transparent outcomes matter more than equipment announcements alone."],
    good: ["Response times and staffing levels can be measured publicly.", "Technology can improve coordination when paired with training and policy."],
    bad: ["Public-safety spending can crowd out other services if costs are not planned over the long term.", "Equipment purchases do not automatically improve neighborhood outcomes."],
    questions: ["What response-time target should the city publish?", "How will recruiting and retention improve?", "Which prevention programs have measurable evidence?"],
    keywords: ["Laredo public safety", "Laredo police election", "Laredo fire department policy"],
    sources: [{ title: "Public Safety Departments", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments" }],
  },
  {
    slug: "transparencia-etica",
    title: "Transparency and ethics",
    spanishTitle: "Transparency and ethics",
    category: "Government",
    summary: "A guide to public records, contracts, open meetings, disclosures, and accountability promises in the mayoral race.",
    whyItMatters: ["Public access affects trust in every other policy area.", "Contracts and disclosures show how decisions are made and who benefits."],
    currentSituation: ["Agendas and records are available, but their accessibility and context vary.", "Residents often need several systems to reconstruct a decision."],
    good: ["Digital records make city actions easier to search than in past decades.", "Campaign attention can generate stronger disclosure commitments."],
    bad: ["Technical compliance does not guarantee understandable information.", "Delayed records weaken public participation before decisions become final."],
    questions: ["Which datasets should be published proactively?", "Will candidates support searchable disclosures on contracts and lobbying?", "How quickly should records be released?"],
    keywords: ["Laredo government transparency", "Laredo ethics", "Laredo City Council records"],
    sources: [{ title: "City Secretary", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/government/city-secretary" }],
  },
  {
    slug: "puentes-comercio",
    title: "International bridges and trade",
    spanishTitle: "Bridges and trade",
    category: "Economy",
    summary: "Understand how bridge capacity, freight, border coordination, and trade policy affect Laredo's economy and quality of life.",
    whyItMatters: ["International trade supports local jobs and public revenue.", "Freight growth also creates infrastructure, traffic, and environmental costs."],
    currentSituation: ["Laredo's economic position depends on reliable cross-border movement.", "Local decisions interact with state, federal, and Mexican authorities."],
    good: ["Trade creates a strong economic base and national relevance.", "Bridge activity can support infrastructure investment."],
    bad: ["The city cannot control every border-policy variable.", "Growth can strain streets and neighborhoods without coordinated planning."],
    questions: ["How will the benefits reach more local workers?", "Which infrastructure costs should trade revenue fund?", "How will neighborhoods be protected from freight impacts?"],
    keywords: ["Laredo international bridges", "Port of Laredo trade", "Laredo border economy"],
    sources: [{ title: "Bridge System", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/bridge-system" }],
  },
  {
    slug: "vivienda-desarrollo",
    title: "Housing and development",
    spanishTitle: "Housing and development",
    category: "Community",
    summary: "Compare housing supply, affordability, land use, and development proposals in the 2026 mayoral election.",
    whyItMatters: ["Housing costs affect family stability and worker recruitment.", "Development patterns determine future infrastructure costs."],
    currentSituation: ["Housing policy includes permitting, infrastructure, land use, and federal programs.", "Affordable units and market-rate supply address different parts of the problem."],
    good: ["Permitting and infrastructure policies can improve predictability.", "Public data can identify where housing pressure is greatest."],
    bad: ["Growth without infrastructure increases long-term service costs.", "General affordability promises may lack unit targets and funding sources."],
    questions: ["How many units should be created or preserved?", "Where can infrastructure support growth?", "What is the plan for renters?"],
    keywords: ["Laredo housing", "Laredo affordable housing", "Laredo development policy"],
    sources: [{ title: "Community Development", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/community-development" }],
  },
  {
    slug: "salud-publica",
    title: "Public health and health care",
    spanishTitle: "Public health",
    category: "Services",
    summary: "Examine local public-health capacity, access to health care, and the city's role in prevention and emergency response.",
    whyItMatters: ["Health affects workforce participation, household costs, and emergency preparedness.", "Border communities face distinctive regional health needs."],
    currentSituation: ["The city health department works on prevention, response, and community services.", "Health-care delivery also depends on providers and other levels of government."],
    good: ["Local prevention programs can address neighborhood needs.", "Recent emergency experience has brought greater attention to preparedness."],
    bad: ["The mayor cannot independently solve provider shortages or access to insurance.", "Programs require stable funding and measurable outcomes."],
    questions: ["Which outcomes should improve in four years?", "How will city and provider responsibilities be separated?", "Which preparedness standards will be published?"],
    keywords: ["Laredo public health", "Laredo healthcare access", "Laredo health department"],
    sources: [{ title: "Health Department", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/health-department" }],
  },
  {
    slug: "centro-historico",
    title: "Downtown revitalization",
    spanishTitle: "Downtown",
    category: "Community",
    summary: "Track plans for downtown properties, small businesses, public spaces, housing, and cross-border activity.",
    whyItMatters: ["Downtown is a cultural, commercial, and civic center.", "Vacancy and underinvestment affect city revenue and public confidence."],
    currentSituation: ["Revitalization requires coordinated public and private investment.", "Individual projects should be evaluated within a long-term district strategy."],
    good: ["Existing buildings and cultural assets create a strong base.", "Improvements to public spaces and housing can reinforce one another."],
    bad: ["One-time beautification cannot replace sustained occupancy and investment.", "Projects can displace existing businesses if benefits are not shared."],
    questions: ["What are the targets for occupancy and foot traffic?", "Which projects have committed funding?", "How will local merchants participate?"],
    keywords: ["downtown Laredo revitalization", "Laredo downtown development", "historic Laredo"],
    sources: [{ title: "Economic Development", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/economic-development" }],
  },
  {
    slug: "empleos-economia",
    title: "Jobs and economic development",
    spanishTitle: "Jobs and the economy",
    category: "Economy",
    summary: "Compare how candidates plan to diversify opportunity while building on Laredo's trade economy.",
    whyItMatters: ["Job quality affects wages, retention, and household stability.", "Economic concentration can increase vulnerability to policy or market changes."],
    currentSituation: ["Trade and logistics remain central to Laredo's economy.", "The workforce, infrastructure, and quality of life influence future investment."],
    good: ["Laredo has a nationally important trade position.", "Local institutions can align training with employer demand."],
    bad: ["Job counts alone do not measure wages, stability, or advancement opportunities.", "Incentives can lack transparent performance reporting."],
    questions: ["Which wage and job-quality targets will be used?", "How will incentives be reported?", "Which industries are realistic diversification targets?"],
    keywords: ["Laredo jobs", "Laredo economic development", "Laredo trade jobs"],
    sources: [{ title: "Economic Development", publisher: "City of Laredo", url: "https://www.cityoflaredo.com/departments/economic-development" }],
  },
];

export const votingResourcesEn: VotingResource[] = [
  {
    slug: "registro-de-votantes",
    title: "Register to vote in Laredo",
    spanishTitle: "Voter registration",
    summary: "Check your Texas voter registration, update your address, and learn the registration deadline for Laredo's 2026 election.",
    steps: [
      { title: "Check your status", body: "Use the Texas Secretary of State's voter portal to confirm your registration and current address." },
      { title: "Meet the deadline", body: "The last day to register for this election is Monday, October 5, 2026." },
      { title: "Save the confirmation", body: "Keep your registration details and review your personalized ballot before voting." },
    ],
    officialLink: "https://teamrv-mvp.sos.texas.gov/MVP/mvp.do",
    officialLabel: "Texas voter portal",
    keywords: ["register to vote Laredo", "Laredo voter registration", "am I registered to vote Texas"],
  },
  {
    slug: "votacion-anticipada",
    title: "Early voting in Laredo",
    spanishTitle: "Early voting",
    summary: "Find official early-voting dates, locations, and hours for Webb County voters in the 2026 municipal election.",
    steps: [
      { title: "Choose a day", body: "In-person early voting runs from October 19 through 30, 2026. No special reason is required." },
      { title: "Confirm the hours", body: "The official notice lists 8 a.m.–6 p.m. from the 19th through the 23rd; 8 a.m.–8 p.m. on the 24th; noon–6 p.m. on the 25th; and 8 a.m.–8 p.m. from the 26th through the 30th." },
      { title: "Bring acceptable identification", body: "Review Texas voter-identification requirements and available alternatives." },
    ],
    officialLink: "https://www.cityoflaredo.com/home/showdocument?id=24402&t=639239505286997868",
    officialLabel: "Official locations and hours",
    keywords: ["Laredo early voting 2026", "Webb County early voting locations", "where to vote Laredo"],
  },
  {
    slug: "dia-de-eleccion",
    title: "Election Day in Laredo",
    spanishTitle: "Election Day",
    summary: "Plan where and when to vote in Laredo on November 3, 2026, using official Webb County resources.",
    steps: [
      { title: "Check your voting options", body: "The official notice states that voters may use any Election Day vote center. Confirm the current list before you leave." },
      { title: "Review your ballot", body: "Learn about the races and propositions on your ballot before you arrive." },
      { title: "Allow enough time", body: "Official vote centers are open Tuesday, November 3, 2026, from 7:00 a.m. to 7:00 p.m." },
    ],
    officialLink: "https://www.cityoflaredo.com/home/showdocument?id=24400&t=639239505276305177",
    officialLabel: "Official Election Day vote centers",
    keywords: ["Laredo Election Day 2026", "Laredo polling locations", "where do I vote Laredo"],
  },
  {
    slug: "boleta-de-muestra",
    title: "Laredo sample ballot",
    spanishTitle: "Sample ballot",
    summary: "View your Webb County sample ballot and research the mayoral candidates before voting.",
    steps: [
      { title: "Open the official ballot page", body: "Webb County publishes sample ballots by election and precinct when they are available." },
      { title: "Identify your ballot", body: "Use your registration and precinct information to select the correct sample." },
      { title: "Research every item", body: "Review candidate profiles, issue guides, and the official text of propositions." },
    ],
    officialLink: "https://www.cityoflaredo.com/departments/2026-general-elections",
    officialLabel: "2026 general election and ballots",
    keywords: ["Laredo sample ballot 2026", "Webb County sample ballot", "Laredo mayor ballot"],
  },
  {
    slug: "voto-por-correo",
    title: "Vote by mail in Laredo",
    spanishTitle: "Vote by mail",
    summary: "Review Texas eligibility, application, and return requirements for voting by mail in Webb County.",
    steps: [
      { title: "Confirm your eligibility", body: "Texas limits voting by mail to legal categories, including age 65 or older, sickness or disability, absence from the county, and certain other cases." },
      { title: "Apply through the county", body: "The application must be received—not merely sent—by the early voting clerk no later than Friday, October 23, 2026." },
      { title: "Track ballot delivery", body: "A ballot without a postmark must be received by 7:00 p.m. on November 3. Different rules may apply when there is a timely postmark or for military and overseas voters." },
    ],
    officialLink: "https://www.votetexas.gov/voting-by-mail/",
    officialLabel: "Voting by mail in Texas",
    keywords: ["vote by mail Laredo", "Webb County mail ballot", "Texas ballot by mail eligibility"],
  },
  {
    slug: "identificacion-para-votar",
    title: "Texas voter ID guide",
    spanishTitle: "Voter identification",
    summary: "Learn about accepted photo IDs and alternatives before voting in Webb County.",
    steps: [
      { title: "Review the seven accepted documents", body: "They include a Texas driver's license, Election Identification Certificate, Texas personal identification card, Texas handgun license, military identification with a photo, citizenship certificate with a photo, and U.S. passport." },
      { title: "Check expiration rules", body: "For voters ages 18 to 69, identification generally may be expired by up to four years; broader rules apply at age 70 and older if the document would otherwise be acceptable." },
      { title: "Know the alternatives", body: "A person who does not possess and cannot reasonably obtain acceptable identification may present a supporting document and complete a Reasonable Impediment Declaration." },
    ],
    officialLink: "https://www.votetexas.gov/voting/need-id.html",
    officialLabel: "VoteTexas identification requirements",
    keywords: ["Texas voter ID", "what ID to vote Laredo", "Webb County voter identification"],
  },
];

export const corePagesEn = [
  "/",
  "/election-2026",
  "/candidatos",
  "/comparar-candidatos",
  ...candidatesEn.map((candidate) => `/candidatos/${candidate.slug}`),
  "/temas",
  ...issuesEn.map((issue) => `/temas/${issue.slug}`),
  "/votar",
  ...votingResourcesEn.map((resource) => `/votar/${resource.slug}`),
  "/calendario-electoral",
  "/finanzas-de-campana",
  "/verificacion-de-datos",
  "/metodologia",
];
