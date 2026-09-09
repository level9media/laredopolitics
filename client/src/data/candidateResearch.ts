export type CandidateResearchRecord = {
  fullName: string;
  ballotName: string;
  office: string;
  candidateWebsite: string | null;
  portraitUrl: string | null;
  profileConfidence: "high" | "medium" | "limited";
  profileSummary: string;
  verifiedFacts: Array<{ fact: string; sourceTitle: string; sourceUrl: string }>;
  questionnaireFollowups: string[];
  financeStatus: "amounts_extracted" | "documents_found" | "no_2026_filing_located";
  financeNotes: string;
  financeFilings: Array<{
    reportDate: string;
    filingType: string;
    documentUrl: string;
    coveragePeriod: string | null;
    totalContributions: number | null;
    totalExpenditures: number | null;
    cashOnHand: number | null;
    loansOutstanding: number | null;
    extractionStatus: "extracted" | "document-only" | "scan-unreadable";
    notes: string;
  }>;
  sourceUrls: string[];
};

export const candidateResearchByFullName: Record<string, CandidateResearchRecord> = {
  "Victor Daniel Trevino": {
    "fullName": "Victor Daniel Trevino",
    "ballotName": "Victor D. Trevino",
    "office": "Mayor",
    "candidateWebsite": "https://www.facebook.com/drtformayor/",
    "portraitUrl": "https://www.cityoflaredo.com/home/showpublishedimage/1482/638116373902900000",
    "profileConfidence": "high",
    "profileSummary": "Victor Daniel Trevino, listed on the ballot as Victor D. Trevino, is the incumbent Mayor of Laredo and a candidate for a second term in the November 3, 2026 municipal election. The City’s candidate record lists him first in the Mayor field, with Victor D. Trevino as campaign treasurer. He announced his reelection campaign on July 3, 2026, citing infrastructure, public safety, and health care as priorities.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo’s controlling 2026 candidate list identifies his legal name as Victor Daniel Trevino, ballot name as Victor D. Trevino, campaign treasurer as Victor D. Trevino, and lists him first among Mayor candidates; the page states that names are in ballot order.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "His City-hosted general-election ballot application seeks the office of Mayor for the November 3, 2026 general election; the filing-officer section records receipt and acceptance on August 6, 2026.",
        "sourceTitle": "Application for a Place on the Ballot — Victor Daniel Trevino",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24097/639216280176900000"
      },
      {
        "fact": "The City identifies him as Mayor Dr. Victor D. Treviño. Its biography says he was born and raised in Laredo, completed his residency at LSU Charity Hospital in 1984, returned to Laredo in 1985, and later served as the City’s Health Authority.",
        "sourceTitle": "City of Laredo — Mayor Dr. Victor D. Treviño",
        "sourceUrl": "https://www.cityoflaredo.com/government/mayor-city-council/mayor-dr-victor-d-trevi-o"
      },
      {
        "fact": "On July 3, 2026, Treviño announced that he would seek a second term. In that announcement, he identified infrastructure, public safety, and health care as priorities; the report notes he was first elected mayor in 2022.",
        "sourceTitle": "Laredo Morning Times — Laredo Mayor Dr. Victor Trevino announces campaign for second term",
        "sourceUrl": "https://www.lmtonline.com/local/article/mayor-campaign-reelection-trevino-victor-laredo-22331697.php"
      }
    ],
    "questionnaireFollowups": [
      "Your July 2026 finance report lists $243,909.29 in outstanding loans, including a $200,000 loan dated June 30, 2026. What are the repayment terms and what sources do you expect will repay the balance?",
      "The City candidate list names Victor D. Trevino as your campaign treasurer. What controls will your campaign use to ensure independent review and timely, accurate campaign-finance disclosure?",
      "At your July 3 reelection announcement, you identified infrastructure, public safety, and health care as priorities. What measurable first-year targets would you set for water-system work, public safety, and progress toward a pediatric hospital?"
    ],
    "financeStatus": "amounts_extracted",
    "financeNotes": "Two non-overlapping 2026 semi-annual City-hosted campaign-finance reports were located for this exact person/name variant, under the City’s current-officeholder listings: January 15 (covering July 1–December 31, 2025) and July 15 (covering January 1–June 30, 2026). No ballot application or campaign-treasurer appointment was treated as a finance filing, and the consecutive reports were not summed.",
    "financeFilings": [
      {
        "cashOnHand": 0,
        "coveragePeriod": "2025-07-01 through 2025-12-31",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/22510/639064818504630000",
        "extractionStatus": "extracted",
        "filingType": "Semi-annual report",
        "loansOutstanding": 45909.29,
        "notes": "City index lists this exact document under January 15, 2026 for Mayor Dr. Victor D. Treviño. Values are transcribed from the report cover-sheet totals; this is a finance report, not a treasurer appointment or ballot application.",
        "reportDate": "2026-01-15",
        "totalContributions": 0,
        "totalExpenditures": 0
      },
      {
        "cashOnHand": 0,
        "coveragePeriod": "2026-01-01 through 2026-06-30",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23842/639197964593700000",
        "extractionStatus": "extracted",
        "filingType": "Semi-annual report",
        "loansOutstanding": 243909.29,
        "notes": "City index lists this exact document under July 15, 2026 for Mayor Dr. Victor D. Treviño. Values are transcribed from the report cover-sheet totals. The report also discloses a $200,000 loan dated June 30, 2026; the outstanding-loans figure is the cover-sheet total, not a sum calculated across filings.",
        "reportDate": "2026-07-15",
        "totalContributions": 0,
        "totalExpenditures": 4975
      }
    ],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24097/639216280176900000",
      "https://www.cityoflaredo.com/government/mayor-city-council/mayor-dr-victor-d-trevi-o",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/home/showpublisheddocument/22510/639064818504630000",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23842/639197964593700000",
      "https://www.lmtonline.com/local/article/mayor-campaign-reelection-trevino-victor-laredo-22331697.php",
      "https://www.facebook.com/drtformayor/",
      "https://www.cityoflaredo.com/home/showpublishedimage/1482/638116373902900000"
    ]
  },
  "Jose David Gonzalez": {
    "fullName": "Jose David Gonzalez",
    "ballotName": "JD Gonzalez",
    "office": "Mayor",
    "candidateWebsite": "https://jdformayor.com/",
    "portraitUrl": "https://jdformayor.com/__l5e/assets-v1/2fdbad8b-4e27-48bd-bccf-a9c982eb51d0/JD_Gonzalez_Portrait.png",
    "profileConfidence": "high",
    "profileSummary": "Jose David Gonzalez, appearing on the ballot as JD Gonzalez, is a candidate for Mayor of Laredo in the November 3, 2026 election. The City lists him second in the mayoral ballot order and identifies Sonia Villarreal as his campaign treasurer. His campaign describes him as a Laredo native, United High School graduate, 10-year U.S. Navy veteran, and businessman with more than three decades in customs and international trade. No 2026 campaign-finance report for Jose David Gonzalez/JD Gonzalez/Sonia Villarreal was located on the City’s campaign-finance-report page as reviewed; the City’s posted 2026 entries visible there identify current officeholders, not this candidate.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo lists Jose David Gonzalez as a Mayor candidate for the November 3, 2026 election, with the ballot name \"JD Gonzalez\" and campaign treasurer Sonia Villarreal. The page states that names are displayed in ballot order; Gonzalez is listed second, after Victor Daniel Trevino.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City-hosted ballot application identifies the office sought as Mayor and is the official application linked for Jose David Gonzalez from the City’s candidate listing.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23928/639203245618530000"
      },
      {
        "fact": "The candidate’s official campaign says he was born and raised in Laredo, attended United High School, served 10 years in the U.S. Navy, and has worked for more than three decades in business, customs, and international trade.",
        "sourceTitle": "About JD Gonzalez",
        "sourceUrl": "https://jdformayor.com/about"
      },
      {
        "fact": "In an August 2026 report, Gonzalez said his campaign would focus on Laredo’s aging water infrastructure, the economic impact of local truck traffic, and small-business development.",
        "sourceTitle": "KGNS — JD Gonzalez launches Laredo mayoral bid, citing trade expertise and military service",
        "sourceUrl": "https://www.kgns.tv/2026/08/16/jd-gonzalez-launches-laredo-mayoral-bid-citing-trade-expertise-military-service/"
      }
    ],
    "questionnaireFollowups": [
      "You have identified aging water infrastructure as a campaign priority. What first-year capital, management, or funding actions would you seek from the mayor’s office, and how would residents be able to measure progress?",
      "You have said Laredo should capture more economic benefit from local truck traffic. What specific municipal actions would you pursue, and how would you balance trade efficiency with neighborhood impacts?",
      "Your campaign cites more than three decades in customs and international trade. Which two concrete City Hall decisions would that experience most directly change, and what safeguards would you use to address potential conflicts involving the trade sector?",
      "You have identified small-business development as a priority. Which existing City process or requirement would you change first, and what outcome target would you set?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "Searched the City Campaign Finance Reports page and City-indexed results for Jose David Gonzalez, JD Gonzalez, and Sonia Villarreal. The visible 2026 City entries are July 15 and January 15 semiannual reports for current officeholders; no 2026 report entry or City-hosted report document attributable to this candidate was located. The ballot application and campaign-treasurer information were not treated as finance reports.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23928/639203245618530000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://jdformayor.com/",
      "https://jdformayor.com/about",
      "https://www.kgns.tv/2026/08/16/jd-gonzalez-launches-laredo-mayoral-bid-citing-trade-expertise-military-service/"
    ]
  },
  "Jorge Alberto Garza": {
    "fullName": "Jorge Alberto Garza",
    "ballotName": "Jorge A. Garza",
    "office": "Mayor",
    "candidateWebsite": null,
    "portraitUrl": null,
    "profileConfidence": "high",
    "profileSummary": "Jorge Alberto Garza is a candidate for Mayor of Laredo in the November 3, 2026 municipal election. The City of Laredo lists him as Jorge A. Garza, third in mayoral ballot order, with B Javier Cuate Mendoza as campaign treasurer. A City-hosted ballot application is available. No campaign website, directly usable candidate-controlled portrait URL, or 2026 campaign-finance report for this candidate was located in the reviewed City materials.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo lists Jorge Alberto Garza as a Mayor candidate for the November 3, 2026 election, with the ballot name Jorge A. Garza.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City candidate table states that names are presented in ballot order and places Jorge A. Garza third among the five Mayor candidates.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City lists B Javier Cuate Mendoza as Jorge Alberto Garza’s campaign treasurer.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "A City-hosted application for a place on the general-election ballot identifies Jorge Alberto Garza and the office sought as Mayor.",
        "sourceTitle": "Application for a Place on the Ballot — Jorge Alberto Garza",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24195/639226675983470000"
      }
    ],
    "questionnaireFollowups": [
      "As a candidate for Mayor, what three specific, measurable outcomes would you seek to deliver during your first year in office?",
      "The City lists B Javier Cuate Mendoza as your campaign treasurer. When and where will voters be able to review your campaign-finance disclosures in an easily accessible format?",
      "Your name will appear as Jorge A. Garza on the ballot. What is the best official public channel for voters to learn about your background, positions, and campaign events?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "Searched the City of Laredo Campaign Finance Reports page and indexed City-hosted materials for Jorge Alberto Garza, Jorge A. Garza, and Jorge Garza. The reviewed City page’s 2026 entries list July 15 and January 15 semiannual reports for current officeholders, but no 2026 campaign-finance report attributable to this mayoral candidate was listed or linked. The ballot application and treasurer information were not treated as finance reports. This finding is limited to City materials located and reviewed.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24195/639226675983470000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.kgns.tv/2026/08/20/random-drawing-sets-ballot-order-laredos-november-election/"
    ]
  },
  "Alfonso I. Casso": {
    "fullName": "Alfonso I. Casso",
    "ballotName": "Poncho Casso",
    "office": "Mayor",
    "candidateWebsite": "https://www.facebook.com/Cassoformayor/",
    "portraitUrl": null,
    "profileConfidence": "high",
    "profileSummary": "Alfonso I. Casso, listed on the November 3, 2026 City of Laredo ballot as Poncho Casso, is the fourth-listed candidate for Mayor. The City lists Alfonso I. \"Poncho\" Casso as his campaign treasurer. Local reporting identifies him as a former Laredo City Council member (1994–1998) and reports that his 2026 campaign has emphasized accountability and transparency, with water security and international trade among the issues he has identified.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo's controlling 2026 Candidates Information page lists Alfonso I. Casso as the fourth mayoral candidate in ballot order, with the ballot name Poncho Casso and campaign treasurer Alfonso I. \"Poncho\" Casso.",
        "sourceTitle": "2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "Casso's City-hosted ballot application is for City of Laredo Mayor, full term, and records his requested ballot name as Poncho Casso.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24065/639214600658800000"
      },
      {
        "fact": "KGNS reported that Casso served on the Laredo City Council from 1994 through 1998.",
        "sourceTitle": "Alfonso Poncho Casso announces bid for Laredo Mayor",
        "sourceUrl": "https://www.kgns.tv/2022/09/12/alfonso-poncho-casso-announces-bid-laredo-mayor/"
      },
      {
        "fact": "In reporting on his 2026 announcement, the Laredo Morning Times reported that Casso described a campaign centered on government accountability and transparency, and identified water security and international trade along the Rio Grande as central concerns.",
        "sourceTitle": "Casso enters Laredo mayoral race citing accountability focus",
        "sourceUrl": "https://www.lmtonline.com/local/article/alfonso-casso-laredo-mayor-2026-campaign-election-22382647.php"
      }
    ],
    "questionnaireFollowups": [
      "You have described accountability, transparency, and service as campaign priorities. What specific public reporting or oversight measures would you pursue in your first year as mayor, and how would residents be able to evaluate them?",
      "Local reporting says your campaign identifies water security as central to Laredo's future. What are your first three water-security actions, and what funding sources would support them?",
      "You have referred to a \"Laredo Common Sense Three-Point Plan\" but said the full proposal would be released after the filing deadline. Will you publish the full plan, its implementation timeline, and estimated fiscal impact before early voting?",
      "Drawing on your 1994–1998 Laredo City Council service, what experience from that term most directly shapes your approach to leading the City Council today?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "The City Campaign Finance Reports index was checked for Alfonso Casso, Alfonso I. Casso, and Poncho Casso. As of the research date, its 2026 sections list only current officeholders for the January 15 and July 15 reporting dates and contain no 2026 campaign-finance report, report link, or City-hosted report document for this candidate. The ballot application and treasurer information were not treated as finance reports.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24065/639214600658800000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.facebook.com/Cassoformayor/",
      "https://www.kgns.tv/2022/09/12/alfonso-poncho-casso-announces-bid-laredo-mayor/",
      "https://www.lmtonline.com/local/article/alfonso-casso-laredo-mayor-2026-campaign-election-22382647.php"
    ]
  },
  "Alyssa Cristine Cigarroa": {
    "fullName": "Alyssa Cristine Cigarroa",
    "ballotName": "Alyssa Cigarroa",
    "office": "Mayor, City of Laredo",
    "candidateWebsite": "https://alyssacigarroa.com/",
    "portraitUrl": "https://alyssacigarroa.com/wp-content/uploads/2026/08/HEART-v2.png",
    "profileConfidence": "high",
    "profileSummary": "Alyssa Cristine Cigarroa is a City of Laredo District 8 council member and a candidate for Mayor in the November 3, 2026 municipal election. The City’s official candidate roster places her fifth in the mayoral ballot order, lists her ballot name as Alyssa Cigarroa, and names Ricardo A. Sandoval as campaign treasurer. Her campaign website emphasizes reliable water, capital improvements, accountability, opportunity, and trade and mobility as priorities.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo’s 2026 candidate roster lists her legal name as Alyssa Cristine Cigarroa, ballot name as Alyssa Cigarroa, office as Mayor, campaign treasurer as Ricardo A. Sandoval, and fifth position in the listed mayoral ballot order. The page states that names are in the order they will appear on the November 3, 2026 ballot.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "Her City-hosted ballot application identifies the office sought as Mayor and prints the candidate name as Alyssa Cristine Cigarroa, with Alyssa Cigarroa as the requested ballot name.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24115/639217167875230000"
      },
      {
        "fact": "The City of Laredo identifies her as the District 8 council member; its biography says she is a fifth-generation Laredoan and won the District 8 seat as a write-in candidate in 2020.",
        "sourceTitle": "District 8 | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/government/mayor-city-council/district-8-cm-alyssa-cigarroa"
      },
      {
        "fact": "Her official campaign website says she is running for mayor and presents campaign priorities of reliable water, capital improvements, public trust, greater opportunities, and strengthening Laredo’s trade position.",
        "sourceTitle": "Alyssa Cigarroa for Mayor",
        "sourceUrl": "https://alyssacigarroa.com/"
      },
      {
        "fact": "KGNS reported that Cigarroa formally launched her mayoral campaign on August 22, 2026, and reported that she described crisis planning, housing, and opposition to elected-official pay raises without public input as key goals.",
        "sourceTitle": "Alyssa Cigarroa launches Laredo mayoral bid | KGNS",
        "sourceUrl": "https://www.kgns.tv/2026/08/23/alyssa-cigarroa-launches-laredo-mayoral-bid/"
      }
    ],
    "questionnaireFollowups": [
      "The City biography says you won the District 8 seat as a 2020 write-in candidate. Which lessons from that constituency work would most directly shape your first-year agenda as mayor?",
      "Your campaign identifies reliable water and ending boil-water notices as priorities. What specific projects, funding sources, timeline, and performance measures would you propose?",
      "Your campaign says you have redirected your City Council salary to scholarships, nonprofits, and the community. Will you publish annual amounts, recipient organizations, selection criteria, and verification of those distributions?",
      "Your July 15, 2026 finance report lists $233,550.00 in outstanding-loan principal. Who are the lenders, what are the repayment terms, and how would those obligations be managed during a mayoral campaign?"
    ],
    "financeStatus": "amounts_extracted",
    "financeNotes": "The City Campaign Finance Reports index contains one working 2026 report document link for Alyssa Cigarroa: the July 15 semiannual report above. The index also displays her name under January 15, 2026, but its hyperlink resolves only to http:// rather than a City-hosted filing, so no January report document or amounts could be verified. The included July report is an officeholder filing for District 8 and predates the mayoral ballot application; it is included solely because it is a 2026 campaign finance report filed by this exact candidate, not as a mayoral-campaign-specific filing.",
    "financeFilings": [
      {
        "cashOnHand": 1604.46,
        "coveragePeriod": "2026-01-01 through 2026-06-30",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23812/639197300666370000",
        "extractionStatus": "extracted",
        "filingType": "Semi-Annual (July 15)",
        "loansOutstanding": 233550,
        "notes": "City-hosted Form C/OH filed as Mrs. Alyssa C. Cigarroa for office held, Laredo City Council District 8. Summary totals were legible: total political contributions $0.00, total political expenditures $0.00, contributions maintained $1,604.46, and outstanding-loan principal $233,550.00.",
        "reportDate": "2026-07-15",
        "totalContributions": 0,
        "totalExpenditures": 0
      }
    ],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24115/639217167875230000",
      "https://www.cityoflaredo.com/government/mayor-city-council/district-8-cm-alyssa-cigarroa",
      "https://alyssacigarroa.com/",
      "https://alyssacigarroa.com/terms/",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23812/639197300666370000",
      "https://www.kgns.tv/2026/08/23/alyssa-cigarroa-launches-laredo-mayoral-bid/"
    ]
  },
  "Guadalupe De Leon Jr": {
    "fullName": "Guadalupe De Leon Jr",
    "ballotName": "Lupe De Leon Jr",
    "office": "City Council District 1",
    "candidateWebsite": null,
    "portraitUrl": null,
    "profileConfidence": "medium",
    "profileSummary": "Guadalupe De Leon Jr is a candidate for Laredo City Council District 1 in the November 3, 2026 general election. The City of Laredo lists him first in District 1 ballot order, with the ballot name Lupe De Leon Jr and Dr. Rene Rolando Compean II as campaign treasurer. His official ballot application is posted by the City.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo lists Guadalupe De Leon Jr first in the District 1 candidate order for the November 3, 2026 election; the page states that names are displayed in ballot order.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City lists the candidate's ballot name as Lupe De Leon Jr and campaign treasurer as Dr. Rene Rolando Compean II.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City-hosted application is an Application for a Place on the Ballot for the 2026 general election and identifies the office sought as City Council, District 1.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24153/639222205764600000"
      },
      {
        "fact": "The City identifies Tuesday, November 3, 2026 as Election Day for the general election that includes Council District 1.",
        "sourceTitle": "2026 General Elections | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/city-secretary-s-office/2026-general-elections"
      }
    ],
    "questionnaireFollowups": [
      "What prompted you to seek the District 1 City Council seat in the November 3, 2026 election?",
      "The official ballot will use the name Lupe De Leon Jr. What should District 1 voters understand about the priorities you would pursue if elected?",
      "Dr. Rene Rolando Compean II is listed as your campaign treasurer. What disclosure and transparency practices will your campaign use as finance reports become due?",
      "What measurable District 1 outcomes would you seek to deliver during your first year in office?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "No 2026 campaign-finance report attributable to Guadalupe De Leon Jr / Lupe De Leon Jr / Dr. Rene Rolando Compean II was located on the City of Laredo Campaign Finance Reports index or in City-hosted web-search results. The index's January 15 and July 15, 2026 sections list current officeholders; neither section lists this candidate. The City-hosted ballot application and treasurer information were not treated as finance reports.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24153/639222205764600000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/2026-general-elections"
    ]
  },
  "Gilberto Gonzalez": {
    "fullName": "Gilberto Gonzalez",
    "ballotName": "Gilbert Gonzalez",
    "office": "City Council District 1",
    "candidateWebsite": "https://www.facebook.com/GilbertGonzalezforCityCouncilDistrict1/",
    "portraitUrl": "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/472671662_570394922474976_3045267233079873513_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx828x1792&ctp=s960x960&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=abxViYl2ezoQ7kNvwG5tV3Z&_nc_oc=Ado50t32tUPyeQqOKqia62-XC9X1-bqDmduqvd7RBPGTmw3A3YlLPnEeM_DU0RbucrE&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=4oW9j_RuUK5zGd9XyN7bMw&_nc_ss=78289&oh=00_AQJsKSzDRt8x2lxNjSYlhg5qilsGkfBoqy2aowr88sOYgg&oe=6AA7A981",
    "profileConfidence": "high",
    "profileSummary": "Gilberto Gonzalez is listed by the City of Laredo as a November 3, 2026 candidate for City Council District 1, appearing on the ballot as Gilbert Gonzalez. He is the current District I council member and was elected Mayor Pro Tempore for 2026 by the City Council. The City’s candidate roster places him second in the District 1 ballot order and lists Enrique D. Kike Longoria as his campaign treasurer.",
    "verifiedFacts": [
      {
        "fact": "The City’s controlling 2026 candidate roster lists his legal name as Gilberto Gonzalez, ballot name as Gilbert Gonzalez, campaign treasurer as Enrique D. Kike Longoria, and places him second in the District 1 ballot order, after Guadalupe De Leon Jr.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "His City-hosted 2026 ballot application seeks City Council District 1, gives Gilberto Gonzalez as the full name and Gilbert Gonzalez as the requested ballot name, and lists his occupation as Full time Council Member.",
        "sourceTitle": "Application for a Place on the Ballot for a 2026 General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24067/639214606441070000"
      },
      {
        "fact": "The City staff directory identifies Gonzalez, Gilbert as Council Member - District I in the Mayor & Council department.",
        "sourceTitle": "Gonzalez, Gilbert | Staff Directory | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/Home/Components/StaffDirectory/StaffDirectory/112/21"
      },
      {
        "fact": "The City reported on December 5, 2025 that the City Council elected District 1 Council Member Gilbert Gonzalez as Mayor Pro Tempore for 2026.",
        "sourceTitle": "City of Laredo Council Elects New Mayor Pro Tempore for 2026",
        "sourceUrl": "https://www.cityoflaredo.com/Home/Components/News/News/446/15?widgetId=41"
      },
      {
        "fact": "A public Facebook Page titled Gilbert Gonzalez, City Council District #1 identifies itself as a Politician page and uses the same public email address shown on the ballot application.",
        "sourceTitle": "Gilbert Gonzalez, City Council District #1 | Facebook",
        "sourceUrl": "https://www.facebook.com/GilbertGonzalezforCityCouncilDistrict1/"
      }
    ],
    "questionnaireFollowups": [
      "Your ballot application lists your occupation as Full time Council Member. Which District 1 accomplishments from your current term should voters use to evaluate your re-election bid?",
      "The City Council elected you Mayor Pro Tempore for 2026. How has that role affected the priorities you would pursue for District 1 if returned to office?",
      "Your January 15 and July 15, 2026 reports list $38,050 and $20,900 in political contributions, respectively. What categories of campaign activity account for your reported spending and what will be the principal uses of remaining cash on hand?"
    ],
    "financeStatus": "amounts_extracted",
    "financeNotes": "Two City-hosted 2026 campaign-finance reports were located for this exact candidate name variant, Gilbert Gonzalez: January 15 and July 15 semiannual reports. Their stated coverage periods are consecutive 2025 half-years, so no amounts have been summed. The City’s current finance index did not show a 2026 pre-election report for him at the time checked.",
    "financeFilings": [
      {
        "cashOnHand": 112399.86,
        "coveragePeriod": "2025-07-01 to 2025-12-31",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/22178/639040911917700000",
        "extractionStatus": "extracted",
        "filingType": "Semiannual (January 15)",
        "loansOutstanding": 0,
        "notes": "The City Campaign Finance Reports index links this document under January 15, 2026 for District 1 - Gilbert Gonzalez. Its C/OH cover sheet is marked January 15 and legibly reports the stated coverage dates and summary amounts; the loan field is marked zero.",
        "reportDate": "2026-01-15",
        "totalContributions": 38050,
        "totalExpenditures": 9908.89
      },
      {
        "cashOnHand": 122331.17,
        "coveragePeriod": "2025-01-01 to 2025-06-30",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23838/639197320934130000",
        "extractionStatus": "extracted",
        "filingType": "Semiannual (July 15)",
        "loansOutstanding": 0,
        "notes": "The City Campaign Finance Reports index links this document under July 15, 2026 for District 1 - Gilbert Gonzalez. Its C/OH cover sheet is marked July 15 and legibly records the stated 2025 coverage dates and summary amounts; the loan field is marked zero.",
        "reportDate": "2026-07-15",
        "totalContributions": 20900,
        "totalExpenditures": 9631
      }
    ],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24067/639214606441070000",
      "https://www.cityoflaredo.com/Home/Components/StaffDirectory/StaffDirectory/112/21",
      "https://www.cityoflaredo.com/Home/Components/News/News/446/15?widgetId=41",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/home/showpublisheddocument/22178/639040911917700000",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23838/639197320934130000",
      "https://www.facebook.com/GilbertGonzalezforCityCouncilDistrict1/"
    ]
  },
  "Ricardo Rangel Jr.": {
    "fullName": "Ricardo Rangel Jr.",
    "ballotName": "Ricardo \"Richie\" Rangel Jr",
    "office": "City Council District 2",
    "candidateWebsite": "https://www.facebook.com/100081890633794/",
    "portraitUrl": "https://graph.facebook.com/100081890633794/picture?type=large",
    "profileConfidence": "high",
    "profileSummary": "Ricardo Rangel Jr. is the incumbent District 2 councilmember seeking the District 2 seat in Laredo’s November 3, 2026 municipal election. The City’s controlling 2026 candidate roster places him first in the District 2 ballot order, lists Alejandra Y. Cadena as campaign treasurer, and gives his ballot name as Ricardo \"Richie\" Rangel Jr.",
    "verifiedFacts": [
      {
        "fact": "The City’s 2026 candidate roster lists his legal name as Ricardo Rangel Jr.; it lists the ballot name Ricardo \"Richie\" Rangel Jr., campaign treasurer Alejandra Y. Cadena, and places him first among the two District 2 candidates. The page states that listed names are in November 3 ballot order.",
        "sourceTitle": "2026 Candidates Information | Laredo, TX",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "His City-hosted ballot application identifies the office sought as City Council District 2 and records the candidate’s ballot-name request as Ricardo \"Richie\" Rangel Jr.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24079/639214615684670000"
      },
      {
        "fact": "The City maintains a District 2 council page with constituent contact information at City Hall, 1110 Houston Street, and lists the district office email as clara@ci.laredo.tx.us.",
        "sourceTitle": "District 2 | Laredo, TX",
        "sourceUrl": "https://www.cityoflaredo.com/government/mayor-city-council/district-2-cm-ricardo-richie-rangel"
      },
      {
        "fact": "KGNS reported that the City scheduled Rangel’s swearing-in as District 2 councilmember for January 26, 2024 after the Texas Supreme Court ruling in the 2022 District 2 election case.",
        "sourceTitle": "City of Laredo to swear in Ricardo “Richie” Rangel Jr. as District 2 Councilmember",
        "sourceUrl": "https://www.kgns.tv/2024/01/26/city-laredo-swear-ricardo-richie-rangel-jr-district-2-councilmember/"
      },
      {
        "fact": "In a 2024 Laredo Morning Times profile, Rangel said he worked for the City of Laredo Animal Control Center from 2018 to 2020, advancing from animal control officer to field supervisor; he cited water infrastructure, traffic congestion, an overpass on Lomas del Sur, and development as District 2 concerns he wanted to address.",
        "sourceTitle": "A long time coming: Rangel reflects on family, future and his learning curve as District II leader",
        "sourceUrl": "https://www.lmtonline.com/local/article/rangel-path-take-district-ii-laredo-city-council-18696149.php"
      }
    ],
    "questionnaireFollowups": [
      "In your 2024 interview, you identified water infrastructure, traffic congestion, a possible Lomas del Sur overpass, and development as District 2 concerns. Which specific projects will be your top priorities if reelected, and what milestones should residents expect?",
      "Your January 15, 2026 finance report lists $32,510 in contributions and $165,000 in outstanding loans. What is the source and intended use of the campaign borrowing, and what is the repayment plan?",
      "Your July 15, 2026 report lists $8,960 in contributions, $4,949.53 in expenditures, and $145,000 in outstanding loans. How will your campaign explain the use of these funds and loan balance to District 2 voters before Election Day?",
      "Since taking office following the January 2024 swearing-in, what council actions or District 2 outcomes do you regard as your most consequential accomplishments?"
    ],
    "financeStatus": "amounts_extracted",
    "financeNotes": "The City Campaign Finance Reports archive was searched for Ricardo Rangel, Ricardo \"Richie\" Rangel, and Ricardo Rangel Jr. It links two 2026 semiannual filings for this candidate: January 15 and July 15. These figures are reported separately and have not been summed. No treasurer appointment or ballot application was counted as a finance filing.",
    "financeFilings": [
      {
        "cashOnHand": null,
        "coveragePeriod": "2025-07-01 to 2025-12-31",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/22508/639064818497370000",
        "extractionStatus": "extracted",
        "filingType": "January 15 semiannual report",
        "loansOutstanding": 165000,
        "notes": "City archive entry is for Ricardo \"Richie\" Rangel, Jr. The cover sheet identifies a January 15 report and the stated coverage period. The report summary and Schedule A1 support $32,510 in political contributions; the total-expenditures and contribution-balance fields are blank or not legible, so they are null rather than zero. The report summary lists $165,000 in outstanding-loan principal.",
        "reportDate": "2026-01-15",
        "totalContributions": 32510,
        "totalExpenditures": null
      },
      {
        "cashOnHand": null,
        "coveragePeriod": null,
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23844/639197994098270000",
        "extractionStatus": "extracted",
        "filingType": "July 15 semiannual report",
        "loansOutstanding": 145000,
        "notes": "City archive entry is for Ricardo \"Richie\" Rangel, Jr. The report’s summary lists $8,960.00 total political contributions, $4,949.53 total political expenditures, and $145,000.00 outstanding-loan principal. The contribution-balance/cash-on-hand field is blank or not legible, so it is null. The start of the coverage period is legible as January 1, 2026, but the report’s ending-date field is not reliably legible in the available extraction; it is therefore left null rather than inferred.",
        "reportDate": "2026-07-15",
        "totalContributions": 8960,
        "totalExpenditures": 4949.53
      }
    ],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24079/639214615684670000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/home/showpublisheddocument/22508/639064818497370000",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23844/639197994098270000",
      "https://www.cityoflaredo.com/government/mayor-city-council/district-2-cm-ricardo-richie-rangel",
      "https://www.facebook.com/100081890633794/",
      "https://www.kgns.tv/2024/01/26/city-laredo-swear-ricardo-richie-rangel-jr-district-2-councilmember/",
      "https://www.lmtonline.com/local/article/rangel-path-take-district-ii-laredo-city-council-18696149.php"
    ]
  },
  "Daisy Alejandra Campos": {
    "fullName": "Daisy Alejandra Campos",
    "ballotName": "Daisy Campos Rodriguez",
    "office": "City Council District 2",
    "candidateWebsite": null,
    "portraitUrl": null,
    "profileConfidence": "high",
    "profileSummary": "Daisy Alejandra Campos is a candidate for City Council District 2 in Laredo’s November 3, 2026 general election. The City’s controlling candidate list places her second in the District 2 ballot order, under the ballot name Daisy Campos Rodriguez, and lists Valerie B. Campos as campaign treasurer. No official campaign website or candidate-controlled portrait URL was verified in the reviewed sources.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo lists her legal name as Daisy Alejandra Campos, ballot name as Daisy Campos Rodriguez, and campaign treasurer as Valerie B. Campos for City Council District 2; the City says the names are displayed in November 3 ballot order, where she is listed second in District 2.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "Her City-hosted application seeks the City Council District 2 office for the November 3, 2026 general election and was accepted by the filing officer on July 22, 2026.",
        "sourceTitle": "Application for a Place on the Ballot — Daisy Alejandra Campos",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23932/639203268403870000"
      },
      {
        "fact": "The City’s 2026 general-election information identifies City Council District 2 as one of the offices on the November 3, 2026 ballot.",
        "sourceTitle": "City of Laredo — 2026 General Elections",
        "sourceUrl": "https://www.cityoflaredo.com/departments/2026-general-elections"
      },
      {
        "fact": "A City of Laredo post states that Daisy Campos Rodriguez was sworn in on November 28, 2022 as a Laredo Council member representing District 2.",
        "sourceTitle": "City of Laredo - Government — Laredo council member Daisy Campos Rodriguez sworn in",
        "sourceUrl": "https://www.facebook.com/cityoflaredo/posts/today-the-newly-elected-candidate-ms-daisy-campos-rodriguez-was-sworn-in-by-the-/507124778112557/"
      }
    ],
    "questionnaireFollowups": [
      "The City lists Valerie B. Campos as your campaign treasurer. What financial-control and disclosure practices will your campaign use beyond the required filings?",
      "Your July 2026 campaign announcement cited prior District 2 representation and work with the Webb County Public Health Department. Which specific District 2 projects or public-health priorities would you pursue first if elected?",
      "The City Campaign Finance Reports page did not display a 2026 report under your name variants at the time reviewed. Have you filed a 2026 campaign-finance report, and if so, what is its filing date and City document link?",
      "You appear second on the City’s District 2 ballot list, following Ricardo \"Richie\" Rangel Jr. What distinguishes your proposed agenda for District 2 in this two-candidate contest?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "The City Campaign Finance Reports page was checked for Daisy Alejandra Campos, Daisy Campos Rodriguez, Daisy Campos-Rodriguez, and treasurer Valerie B. Campos. As accessed, its only 2026 sections were the January 15 and July 15 semiannual listings of current officeholders; neither lists this candidate, and no 2026 candidate finance-report link or City-hosted report for her was located. The July 15 listing predates her July 22, 2026 accepted ballot application. A ballot application or treasurer appointment was not counted as a finance report.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23932/639203268403870000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/departments/2026-general-elections",
      "https://www.facebook.com/cityoflaredo/posts/today-the-newly-elected-candidate-ms-daisy-campos-rodriguez-was-sworn-in-by-the-/507124778112557/"
    ]
  },
  "Melissa R Cigarroa": {
    "fullName": "Melissa R Cigarroa",
    "ballotName": "Melissa R Cigarroa",
    "office": "City Council District 3",
    "candidateWebsite": "https://cigarroa4district3.com/",
    "portraitUrl": "https://content.app-sources.com/s/46292960931996244/uploads/Images/_Webpage_name_banner-2700589.png?format=webp",
    "profileConfidence": "high",
    "profileSummary": "Melissa R Cigarroa is the City of Laredo Council Member for District III and a listed candidate for City Council District 3 in the November 3, 2026 municipal election. The City’s candidate page lists her first in District 3 ballot order and names Manuel A. Rangel, CPA as campaign treasurer. Her candidate-controlled website emphasizes clean water and safe streets, transparent and efficient government, and District 3 needs.",
    "verifiedFacts": [
      {
        "fact": "The City’s controlling 2026 candidate list places Melissa R Cigarroa first in the District 3 ballot order, lists her ballot name as Melissa R Cigarroa, and names Manuel A. Rangel, CPA as campaign treasurer.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City staff directory identifies Cigarroa as Council Member — District III in the Mayor & Council department.",
        "sourceTitle": "City of Laredo — Cigarroa, Melissa R. Staff Directory",
        "sourceUrl": "https://www.cityoflaredo.com/Home/Components/StaffDirectory/StaffDirectory/110/21"
      },
      {
        "fact": "The official District 3 biography says she served as executive director of the Imaginarium of South Texas from 2007 to 2012 and as president of the Rio Grande International Study Center board from 2018 to 2022; it also lists her as a member of the No Border Wall Coalition, Clean Air Laredo Coalition, and Webb County Democratic Party.",
        "sourceTitle": "City of Laredo — District 3",
        "sourceUrl": "https://www.cityoflaredo.com/government/mayor-city-council/district-3-cm-melissa-r-cigarroa"
      },
      {
        "fact": "Her candidate-controlled website presents Clean Water and Safe Streets, Transparent and Efficient Government, and Meeting District 3 Needs as campaign issue headings.",
        "sourceTitle": "Melissa R. Cigarroa for District 3 — Campaign Website",
        "sourceUrl": "https://cigarroa4district3.com/"
      },
      {
        "fact": "Laredo Morning Times reported that Cigarroa won the 2022 District III race outright with 2,426 votes (54.06%), avoiding a runoff.",
        "sourceTitle": "Laredo Morning Times — Melissa Cigarroa wins City Council District III position",
        "sourceUrl": "https://www.lmtonline.com/news/article/Melissa-Cigarroa-wins-City-Council-District-III-17570009.php"
      }
    ],
    "questionnaireFollowups": [
      "Your campaign website identifies water security as a priority. What specific water-security actions or milestones would you pursue in a new District 3 term?",
      "Your official biography cites leadership with the Imaginarium of South Texas and the Rio Grande International Study Center. How have those nonprofit roles shaped your approach to City Council decision-making?",
      "Your campaign frames transparent and efficient government as an issue. What concrete transparency or service-performance measures would you seek to adopt?",
      "Your January and July 2026 C/OH reports show $1,000.00 and $3,500.00 in total contributions, respectively. What fundraising approach will you use through Election Day, and what spending priorities will guide the campaign?"
    ],
    "financeStatus": "amounts_extracted",
    "financeNotes": "The City Campaign Finance Reports index lists these two 2026 semiannual C/OH reports for Melissa R. Cigarroa. Their coverage periods do not overlap. No treasurer appointment or ballot application was counted as a finance report.",
    "financeFilings": [
      {
        "cashOnHand": 571.75,
        "coveragePeriod": "2025-07-01 through 2025-12-31",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/22174/639040914246370000",
        "extractionStatus": "extracted",
        "filingType": "Semiannual (January 15) C/OH",
        "loansOutstanding": 0,
        "notes": "City-hosted C/OH cover sheet. The outstanding-loans field is explicitly reported as $0.00.",
        "reportDate": "2026-01-15",
        "totalContributions": 1000,
        "totalExpenditures": 1287.85
      },
      {
        "cashOnHand": 597.14,
        "coveragePeriod": "2026-01-01 through 2026-06-30",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23884/639202218174100000",
        "extractionStatus": "extracted",
        "filingType": "Semiannual (July 15) C/OH",
        "loansOutstanding": null,
        "notes": "City-hosted C/OH cover sheet. The report-summary outstanding-loans amount is blank, so it is recorded as null rather than zero.",
        "reportDate": "2026-07-15",
        "totalContributions": 3500,
        "totalExpenditures": 3474.61
      }
    ],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23957/639208517395570000",
      "https://www.cityoflaredo.com/government/mayor-city-council/district-3-cm-melissa-r-cigarroa",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/home/showpublisheddocument/22174/639040914246370000",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23884/639202218174100000",
      "https://cigarroa4district3.com/",
      "https://www.lmtonline.com/news/article/Melissa-Cigarroa-wins-City-Council-District-III-17570009.php"
    ]
  },
  "Michelle Marie Winterroth": {
    "fullName": "Michelle Marie Winterroth",
    "ballotName": "Michelle \"Mimi\" Winterroth",
    "office": "City Council District 3",
    "candidateWebsite": "https://www.facebook.com/p/Michelle-Mimi-Winterroth-for-City-Council-District-3-61593419702818/",
    "portraitUrl": "https://www.facebook.com/photo/?fbid=122098229979447323&set=a.122098230003447323",
    "profileConfidence": "high",
    "profileSummary": "Michelle Marie Winterroth is a candidate for City Council District 3 in Laredo’s November 3, 2026 general election. The City lists her ballot name as Michelle \"Mimi\" Winterroth, second in the District 3 ballot order, with Priscilla Ramos as campaign treasurer. Her candidate-controlled Facebook campaign page describes her as a lifelong Laredoan with District 3 roots since childhood and lists professional and educational credentials; those self-descriptions are attributed to the campaign page. Separately, City Council approved her January 2026 appointment to the Mayoral Rio Grande Riverfront Coordination & Advisory Ad-Hoc Committee.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo lists Michelle Marie Winterroth for City Council District 3; her ballot name is Michelle \"Mimi\" Winterroth, her campaign treasurer is Priscilla Ramos, and she is second in the displayed District 3 ballot order.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "Winterroth’s official ballot application identifies the office sought as City of Laredo City Council District 3 and gives the requested ballot name as Michelle \"Mimi\" Winterroth.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election — Michelle Marie Winterroth",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24183/639226608081370000"
      },
      {
        "fact": "City Council approved the appointment of Michelle Winterroth to the Mayoral Rio Grande Riverfront Coordination & Advisory Ad-Hoc Committee on January 20, 2026; the appointment was recommended by Council Member Vanessa Perez.",
        "sourceTitle": "APPT26-14 — City of Laredo Legistar",
        "sourceUrl": "https://cityoflaredo.legistar.com/LegislationDetail.aspx?ID=7799859&GUID=7D5FCCB4-B307-4E58-9F5D-DA8255D3D79B&Options=&Search="
      },
      {
        "fact": "Her candidate-controlled campaign page describes her as a lifelong Laredoan with District 3 roots since childhood and states that she is a mother, licensed cosmetologist, Texas peace officer, private investigator, and BAS Organizational Leadership holder. These are campaign self-descriptions, not independently corroborated here.",
        "sourceTitle": "Michelle “Mimi” Winterroth for City Council District 3 | Facebook",
        "sourceUrl": "https://www.facebook.com/p/Michelle-Mimi-Winterroth-for-City-Council-District-3-61593419702818/"
      }
    ],
    "questionnaireFollowups": [
      "The City Council approved your appointment to the Mayoral Rio Grande Riverfront Coordination & Advisory Ad-Hoc Committee in January 2026. What specific recommendations or outcomes from that committee would you seek to carry into District 3 representation?",
      "Your campaign page describes you as a Texas peace officer and private investigator. Which District 3 public-safety priorities would you advance, and what measurable outcomes would you use to judge success?",
      "Your campaign page says you have District 3 roots since childhood. What are the three most urgent District 3 infrastructure or service issues you have identified through those ties, and what is your proposed timetable for each?",
      "Your campaign page solicits donations, while no 2026 finance report attributable to your campaign was located on the City index at the time of this research. When you file, will you voluntarily provide an accessible link to each report and a plain-language donor-and-spending summary?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "The City Campaign Finance Reports index was searched for 2026 entries under Michelle Marie Winterroth, Michelle \"Mimi\" Winterroth, Michelle Winterroth, Mimi Winterroth, and treasurer Priscilla Ramos. Its rendered July 15 and January 15, 2026 sections list current officeholders and do not list this candidate; no City-hosted 2026 campaign-finance report document attributable to her was located. The ballot application was not treated as a finance report.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24183/639226608081370000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.facebook.com/p/Michelle-Mimi-Winterroth-for-City-Council-District-3-61593419702818/",
      "https://cityoflaredo.legistar.com/LegislationDetail.aspx?ID=7799859&GUID=7D5FCCB4-B307-4E58-9F5D-DA8255D3D79B&Options=&Search=",
      "https://www.kgns.tv/2026/08/20/random-drawing-sets-ballot-order-laredos-november-election/"
    ]
  },
  "Clarissa Yvette Cardenas": {
    "fullName": "Clarissa Yvette Cardenas",
    "ballotName": "Clarissa Claire Cardenas",
    "office": "City Council District 3, City of Laredo",
    "candidateWebsite": "https://www.facebook.com/people/Clarissa-Claire-Cardenas-for-City-Council-District-3/61593546958291/",
    "portraitUrl": null,
    "profileConfidence": "high",
    "profileSummary": "Clarissa Yvette Cardenas, who campaigns as Clarissa \"Claire\" Cardenas, is a candidate for City Council District 3 in Laredo's November 3, 2026 municipal election. The City lists her third in the District 3 ballot order and identifies Mirtha P. Caudillo as campaign treasurer. Her ballot application lists her occupation as insurance underwriter. In an official campaign announcement, she said she has a Bachelor’s degree in Business Administration and described accessibility, listening, communication, and working with residents as central to her campaign.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo lists Clarissa Yvette Cardenas as a District 3 candidate, with ballot name Clarissa \"Claire\" Cardenas and campaign treasurer Mirtha P. Caudillo. She is third in the listed District 3 ballot order, which the City states is the order for the November 3, 2026 ballot.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "Her official application for a place on the November 2026 general-election ballot identifies the office sought as City Council District III, gives her full name as Clarissa Yvette Cardenas, and lists her occupation as Insurance Underwriter.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24181/639226608077570000"
      },
      {
        "fact": "In an official campaign announcement, Cardenas stated that she has a Bachelor’s degree in Business Administration and said she does not come from a political background.",
        "sourceTitle": "Clarissa \"Claire\" Cardenas for City Council District 3 — campaign announcement",
        "sourceUrl": "https://www.facebook.com/61593546958291/posts/the-choice-is-claireour-community-our-future-today-i-am-proud-to-officially-anno/122096561469451565/"
      },
      {
        "fact": "Her candidate-controlled Facebook page identifies the page as a Political Candidate page and describes her as running for Laredo City Council, District 3.",
        "sourceTitle": "Clarissa \"Claire\" Cardenas for City Council District 3 — official campaign page",
        "sourceUrl": "https://www.facebook.com/people/Clarissa-Claire-Cardenas-for-City-Council-District-3/61593546958291/"
      }
    ],
    "questionnaireFollowups": [
      "Your official ballot application lists your occupation as an insurance underwriter. How would that professional experience shape your approach to City Council decisions involving municipal risk, budgets, or constituent service?",
      "You have said that you do not come from a political background. What specific preparation, advisers, or public-engagement practices would help you effectively represent District 3 from the start of a council term?",
      "Your campaign announcement emphasizes accessibility, listening, and communication. What concrete channels and response-time commitments would you establish so District 3 residents can raise concerns and follow their resolution?",
      "You cite a Bachelor’s degree in Business Administration as relevant preparation. Which elements of that training would you apply first to District 3’s needs, and how would you measure results?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "The City of Laredo Campaign Finance Reports index was searched for Clarissa Yvette Cardenas, Clarissa Claire Cardenas, Clarissa Cardenas, Claire Cardenas, and treasurer Mirtha P. Caudillo. No 2026 campaign-finance report attributable to this candidate was located. The City’s listed ballot application and treasurer information were not treated as finance reports. The July 15, 2026 index section lists current officeholders and does not list Cardenas.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24181/639226608077570000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.facebook.com/people/Clarissa-Claire-Cardenas-for-City-Council-District-3/61593546958291/",
      "https://www.facebook.com/61593546958291/posts/the-choice-is-claireour-community-our-future-today-i-am-proud-to-officially-anno/122096561469451565/",
      "https://www.kgns.tv/2026/08/20/random-drawing-sets-ballot-order-laredos-november-election/"
    ]
  },
  "David Tyler King": {
    "fullName": "David Tyler King",
    "ballotName": "D. Tyler King",
    "office": "Laredo City Council District 6",
    "candidateWebsite": "https://drtylerking.com/",
    "portraitUrl": "https://drtylerking.com/wp-content/uploads/2022/09/dr_tyler_campaign1.jpg",
    "profileConfidence": "high",
    "profileSummary": "David Tyler King is the first-listed candidate for Laredo City Council District 6 on the City’s November 3, 2026 ballot-order page, where his ballot name is listed as D. Tyler King and his campaign treasurer as Alejandra King. He is the current District 6 council member; the City biography identifies him as a board-certified family physician and a Captain in the U.S. Army Reserve. His candidate-controlled website frames his stated priorities around quality of life, honest government, clean air and water, and economic development.",
    "verifiedFacts": [
      {
        "fact": "The City’s 2026 Candidates Information page states that names are shown in November 3 ballot order and lists David Tyler King first in the District 6 table, with the ballot name D. Tyler King and campaign treasurer Alejandra King.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "King’s City-hosted ballot application seeks City Council District 6 in the November 3, 2026 general election and lists his occupation as physician.",
        "sourceTitle": "Application for a Place on the Ballot — David Tyler King",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23896/639202458937570000"
      },
      {
        "fact": "The City’s District 6 biography says King graduated from the Laredo Medical Center–Gateway Community Health Center Family Medicine Residency Program in June 2023, is a board-certified family physician with Primary Care Associates of Laredo, and is a Captain in the U.S. Army Reserve.",
        "sourceTitle": "City of Laredo — District 6",
        "sourceUrl": "https://www.cityoflaredo.com/government/mayor-city-council/district-6-cm-david-tyler-king"
      },
      {
        "fact": "King’s candidate-controlled website presents four plan areas: better quality of life, honest government, clean air and water, and economic development. Its listed proposals include traffic-calming measures on Loop 20 and in neighborhoods, water-infrastructure investment, and a transparent bidding platform for government contracts.",
        "sourceTitle": "Dr. Tyler King — Plans for District 6",
        "sourceUrl": "https://drtylerking.com/plans/"
      },
      {
        "fact": "KGNS reported on September 8, 2026 that King completed the U.S. Army Basic Officer Leader Course and serves as a family medicine physician in the Army Medical Corps.",
        "sourceTitle": "KGNS — Laredo City Councilman Tyler King Completes U.S. Army Officer Training",
        "sourceUrl": "https://www.kgns.tv/2026/09/08/laredo-city-councilman-tyler-king-completes-us-army-officer-training/"
      }
    ],
    "questionnaireFollowups": [
      "Your July 15, 2026 report lists $10,929.70 in contributions, $17,348.83 in expenditures, and $105,756.64 maintained at June 30. How do you plan to allocate the remaining funds among voter contact, advertising, field work, and other campaign activity?",
      "Your campaign plan calls for additional traffic-calming measures on Loop 20 and in District 6 neighborhoods. Which locations would you prioritize first, and what safety measures would you use to assess results?",
      "Your campaign site calls for proactive water-infrastructure investment and an emergency water source. What specific City Council actions would you pursue during the next term, and what timetable would you support?",
      "You are a board-certified family physician and a Captain in the U.S. Army Reserve. What plan would you use to maintain District 6 constituent access and council responsibilities during required military training or service commitments?"
    ],
    "financeStatus": "amounts_extracted",
    "financeNotes": "Two non-overlapping 2026 semiannual reports were located on the City Campaign Finance Reports page under the likely name variant “Dr. Tyler T. King” and matched to this candidate through the reports’ D. Tyler King/David Tyler King identification and Alejandra King treasurer information. No overlapping totals were summed.",
    "financeFilings": [
      {
        "cashOnHand": 121561.31,
        "coveragePeriod": "2025-07-01 through 2025-12-31",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/22180/639040911925770000",
        "extractionStatus": "extracted",
        "filingType": "Semiannual (January 15)",
        "loansOutstanding": 0,
        "notes": "The City finance index lists this filing under District 6 officeholder “Dr. Tyler T. King.” Cover Sheet PG 2 identifies D. Tyler King and reports these values; the outstanding-loans field is explicitly completed as $0.",
        "reportDate": "2026-01-15",
        "totalContributions": 22350,
        "totalExpenditures": 9275.55
      },
      {
        "cashOnHand": 105756.64,
        "coveragePeriod": "2026-01-01 through 2026-06-30",
        "documentUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23862/639201398856270000",
        "extractionStatus": "extracted",
        "filingType": "Semiannual (July 15)",
        "loansOutstanding": null,
        "notes": "The City finance index lists this filing under District 6 officeholder “Dr. Tyler T. King.” Cover Sheet PG 2 identifies D. Tyler King and reports these values. The outstanding-loans amount field is blank, so it is recorded as null rather than zero.",
        "reportDate": "2026-07-15",
        "totalContributions": 10929.7,
        "totalExpenditures": 17348.83
      }
    ],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23896/639202458937570000",
      "https://www.cityoflaredo.com/government/mayor-city-council/district-6-cm-david-tyler-king",
      "https://drtylerking.com/",
      "https://drtylerking.com/about/",
      "https://drtylerking.com/plans/",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/home/showpublisheddocument/22180/639040911925770000",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23862/639201398856270000",
      "https://www.kgns.tv/2026/09/08/laredo-city-councilman-tyler-king-completes-us-army-officer-training/"
    ]
  },
  "Ubaldo Granados, Jr.": {
    "fullName": "Ubaldo Granados, Jr.",
    "ballotName": "Ubaldo \"Baldo\" Granados Jr",
    "office": "City Council District 6",
    "candidateWebsite": "https://baldoforoffice.com/home",
    "portraitUrl": "https://storage.googleapis.com/msgsndr/2hQM96vCKYbcdBJJK2MX/media/6994839f5c226500e9dba20d.jpeg",
    "profileConfidence": "high",
    "profileSummary": "Ubaldo Granados, Jr., who campaigns as \"Baldo,\" is the second-listed candidate for City Council District 6 in Laredo’s November 3, 2026 election. His official campaign says he was born and raised in Laredo, earned a BBA in Accounting and Management from the University of Texas at Austin, and is the agent and owner of Baldo Granados Farmers Insurance Agency. The campaign identifies water quality, road repair and lighting, parks and public spaces, public safety, and economic opportunity as priorities.",
    "verifiedFacts": [
      {
        "fact": "The City lists Ubaldo Granados, Jr. second in the District 6 candidate table, which the City says is ordered as names will appear on the November 3, 2026 ballot. The City gives his ballot name as Ubaldo \"Baldo\" Granados Jr and names Diana Rossell Granados as campaign treasurer.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City-hosted ballot application identifies the office sought as City Council District 6 and lists his occupation as business owner.",
        "sourceTitle": "Application for a Place on the Ballot for a General Election",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/23898/639202458940270000"
      },
      {
        "fact": "His official campaign biography says he was born and raised in Laredo; graduated from J.W. Nixon High School; and earned a Bachelor’s degree in Business Administration, majoring in Accounting and minoring in Management, from the University of Texas at Austin.",
        "sourceTitle": "About Baldo Granados | City Council District 6",
        "sourceUrl": "https://baldoforoffice.com/about"
      },
      {
        "fact": "His official campaign states that he is the agent and owner of Baldo Granados Farmers Insurance Agency and presents water quality, road repair and lighting, parks and public spaces, public safety, and local economic opportunity as campaign priorities.",
        "sourceTitle": "Baldo Granados for City Council District 6 | Home",
        "sourceUrl": "https://baldoforoffice.com/home"
      }
    ],
    "questionnaireFollowups": [
      "Your campaign prioritizes water quality and reliability. Which District 6 water-infrastructure projects would you pursue first, and what public metrics and reporting schedule would you use to measure progress?",
      "Your platform calls for better road repairs and lighting. What criteria would you use to select District 6 projects, and how would you propose funding them without reducing essential city services?",
      "You emphasize accountable and transparent leadership. Would you commit to a regular schedule of District 6 constituent meetings and to publishing explanations for your budget and major council votes?",
      "Your campaign identifies you as a business owner and insurance-agency owner. What conflict-of-interest practices would you follow for City Council matters that could relate to your business or clients?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "The City Campaign Finance Reports index was checked for Ubaldo Granados, Ubaldo \"Baldo\" Granados, Baldo Granados, and Diana Rossell Granados. No 2026 campaign-finance report associated with this candidate is published on the index. The City page includes July 15, 2026 and January 15, 2026 report sections, but neither lists this candidate. The ballot application and campaign-treasurer designation were not treated as finance reports.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/23898/639202458940270000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://baldoforoffice.com/about",
      "https://baldoforoffice.com/home"
    ]
  },
  "Nathan Henry Chu": {
    "fullName": "Nathan Henry Chu",
    "ballotName": "Nathan Henry Chu",
    "office": "Municipal Court Judge Position 1",
    "candidateWebsite": "https://linktr.ee/nathanchu4judge",
    "portraitUrl": "https://ugc.production.linktr.ee/d3968c21-4dd4-4b1b-90b5-ddd038d3ac7c_IMG-6412.jpeg",
    "profileConfidence": "high",
    "profileSummary": "Nathan Henry Chu is the first-listed candidate for Laredo Municipal Court Judge Position 1 on the City of Laredo’s November 3, 2026 ballot roster. The City lists Luisa Pacheco as his campaign treasurer and links his ballot application. Chu is an eligible Texas attorney licensed since 2003, according to the State Bar of Texas. His candidate-controlled Linktree describes him as an associate municipal court judge and a Position 1 candidate; KGNS reported in 2019 that City Council appointed him an associate judge. No 2026 campaign-finance report for Nathan Henry Chu, Nathan H. Chu, or Nathan Chu was located on the City’s campaign-finance index or through City-hosted-document searches as of September 9, 2026.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo’s 2026 candidate roster lists Nathan Henry Chu first, ahead of Rodolfo Morales III, in the ballot-order table for Municipal Court Judge Position 1; the page states that names are presented in the order they will appear on the November 3, 2026 ballot.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City roster lists Nathan Henry Chu as the ballot name and Luisa Pacheco as his campaign treasurer, and provides a City-hosted ballot-application link for him.",
        "sourceTitle": "2026 Candidates Information | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City-hosted application is an application for a place on the 2026 general-election ballot for Municipal Court Judge Position 1 and identifies the candidate as Nathan Henry Chu.",
        "sourceTitle": "Application for a Place on the Ballot — Nathan Henry Chu | City of Laredo",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24075/639214611204570000"
      },
      {
        "fact": "The State Bar of Texas lists Nathan Henry 'Nathan' Chu as eligible to practice in Texas, with bar card number 24038818, a Texas license date of May 5, 2003, and primary practice location in Laredo.",
        "sourceTitle": "Nathan Henry 'Nathan' Chu | State Bar of Texas",
        "sourceUrl": "https://www.texasbar.com/am/template.cfm?Template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&contactid=212071"
      },
      {
        "fact": "KGNS reported that the Laredo City Council appointed Nathan Chu as an associate judge and that he was sworn in on April 25, 2019.",
        "sourceTitle": "City chooses Chu as new associate judge | KGNS",
        "sourceUrl": "https://www.kgns.tv/content/news/City-chooses-Chu-as-new-associate-judge-509111961.html"
      },
      {
        "fact": "The candidate-controlled Nathan Chu 4 Judge Linktree describes him as an experienced associate municipal court judge and candidate for Position 1, and identifies November 3, 2026 as election day.",
        "sourceTitle": "Nathan Chu 4 Judge | Official Linktree",
        "sourceUrl": "https://linktr.ee/nathanchu4judge"
      }
    ],
    "questionnaireFollowups": [
      "Your official campaign page describes you as an associate municipal court judge, and KGNS reported your City Council appointment in 2019. What two or three measurable changes would you seek in Municipal Court’s case processing or public access if elected to Position 1?",
      "The State Bar of Texas profile for Nathan Henry Chu lists a public reprimand entered July 7, 2022 and a fully probated suspension running July 1, 2015 through March 31, 2016. What context should voters have about those entries, and what professional safeguards or lessons do you emphasize today?",
      "As of September 9, 2026, the City’s online campaign-finance index did not show a 2026 finance report under your name or likely variants. When do you expect the public to be able to review your first 2026 campaign-finance report, and how will you make finance disclosures easy for voters to find?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "The City Campaign Finance Reports index was checked for the exact name and likely variants Nathan Henry Chu, Nathan H. Chu, and Nathan Chu. Its posted July 15, 2026 and January 15, 2026 report sections list reports for current officeholders, but do not list Chu; no City-hosted 2026 finance-report document for him was located. The ballot application and treasurer listing were excluded because they are not campaign-finance reports. This is a finding of no located 2026 filing, not a statement that campaign activity, contributions, expenditures, cash, or loans were zero.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24075/639214611204570000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.texasbar.com/am/template.cfm?Template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&contactid=212071",
      "https://www.kgns.tv/content/news/City-chooses-Chu-as-new-associate-judge-509111961.html",
      "https://linktr.ee/nathanchu4judge"
    ]
  },
  "Rodolfo Morales III": {
    "fullName": "Rodolfo Morales III",
    "ballotName": "Rudy Morales III",
    "office": "Municipal Court Judge Position 1",
    "candidateWebsite": "https://www.facebook.com/people/Rodolfo-Morales/61580057573524/",
    "portraitUrl": null,
    "profileConfidence": "high",
    "profileSummary": "Rodolfo Morales III, listed on the ballot as Rudy Morales III, is the second-listed candidate for Municipal Court Judge Position 1 in Laredo’s November 3, 2026 general election. The City of Laredo staff directory lists him as an Assistant City Attorney, while the State Bar of Texas lists him as eligible to practice in Texas; Laredo ISD identifies him as its District 2 trustee, sworn in on May 9, 2023.",
    "verifiedFacts": [
      {
        "fact": "The City of Laredo’s 2026 candidate listing places Rodolfo Morales III second in the Municipal Court Judge Position 1 race; it gives his ballot name as Rudy Morales III and lists Carmen Perez as campaign treasurer.",
        "sourceTitle": "City of Laredo — 2026 Candidates Information",
        "sourceUrl": "https://www.cityoflaredo.com/departments/elections/2026-candidates-information"
      },
      {
        "fact": "The City-hosted ballot application is for the City of Laredo November 3, 2026 general election and identifies the office sought as Municipal Court Judge Position 1, with the candidate’s printed ballot name Rudy Morales III.",
        "sourceTitle": "Application for a Place on the Ballot — Rodolfo Morales III",
        "sourceUrl": "https://www.cityoflaredo.com/home/showpublisheddocument/24171/639225638130230000"
      },
      {
        "fact": "The City of Laredo staff directory lists Morales as an Assistant City Attorney. Its biography says he passed the Texas State Bar in 2013 and previously served as a Webb County misdemeanor and felony assistant district attorney for five years.",
        "sourceTitle": "City of Laredo Staff Directory — Morales, III, Rodolfo",
        "sourceUrl": "https://www.cityoflaredo.com/Home/Components/StaffDirectory/StaffDirectory/498/21?backlist=%2Fdepartments%2Fcity-attorney-s-office%2F-sortn-SName-344&widgetId=344"
      },
      {
        "fact": "The State Bar of Texas lists Mr. Rodolfo ‘Rudy’ Morales III as eligible to practice in Texas, with a Texas license date of November 1, 2013 and City Attorney’s Office–Laredo as the listed firm.",
        "sourceTitle": "State Bar of Texas — Find a Lawyer: Rodolfo ‘Rudy’ Morales III",
        "sourceUrl": "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=332180"
      },
      {
        "fact": "Laredo ISD says Morales was sworn in as the District 2 trustee on May 9, 2023 and previously served as Board Vice-President, Parliamentarian, and Secretary.",
        "sourceTitle": "Laredo Independent School District — Rodolfo Morales",
        "sourceUrl": "https://www.laredoisd.org/page/rudy-morales"
      },
      {
        "fact": "In an August 29, 2026 post from his public Facebook account, Morales announced a campaign kickoff and described himself as Rodolfo ‘Rudy’ Morales III for Municipal Court Judge.",
        "sourceTitle": "Rodolfo Morales — Campaign Kickoff Post",
        "sourceUrl": "https://www.facebook.com/61580057573524/posts/-its-time-to-kick-off-the-campaign-im-excited-to-invite-my-friends-family-suppor/122146077465001919/"
      }
    ],
    "questionnaireFollowups": [
      "The City lists you as an Assistant City Attorney. What conflict-screening, recusal, or other safeguards would you use to preserve independence if a matter involving the City comes before Municipal Court?",
      "The City biography says you served five years as a Webb County misdemeanor and felony assistant district attorney. Which parts of that experience would most directly inform your approach to Municipal Court’s docket and defendants’ due-process rights?",
      "Laredo ISD identifies you as its District 2 trustee. If elected, how would you address the practical and ethical demands of holding that elected school-board post while serving as Municipal Court Judge?",
      "Your August 2026 campaign announcement cites service, experience, fairness, and community. What specific administrative or access-to-justice changes would you seek to implement in Municipal Court?"
    ],
    "financeStatus": "no_2026_filing_located",
    "financeNotes": "The City of Laredo Campaign Finance Reports page was checked for 2026 filings under Rodolfo Morales III, Rudy Morales III, Rodolfo ‘Rudy’ Morales III, and related Morales variants. Its 2026 sections list current officeholders only and contain no 2026 campaign-finance report entry or City-hosted report document link attributable to this candidate. The ballot application and campaign-treasurer information were not treated as finance reports.",
    "financeFilings": [],
    "sourceUrls": [
      "https://www.cityoflaredo.com/departments/elections/2026-candidates-information",
      "https://www.cityoflaredo.com/home/showpublisheddocument/24171/639225638130230000",
      "https://www.cityoflaredo.com/departments/city-secretary-s-office/campaign-finance-reports",
      "https://www.cityoflaredo.com/Home/Components/StaffDirectory/StaffDirectory/498/21?backlist=%2Fdepartments%2Fcity-attorney-s-office%2F-sortn-SName-344&widgetId=344",
      "https://www.laredoisd.org/page/rudy-morales",
      "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=332180",
      "https://www.facebook.com/61580057573524/posts/-its-time-to-kick-off-the-campaign-im-excited-to-invite-my-friends-family-suppor/122146077465001919/",
      "https://www.kgns.tv/2026/08/20/random-drawing-sets-ballot-order-laredos-november-election/"
    ]
  }
};
