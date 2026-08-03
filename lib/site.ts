/**
 * Single source of truth for site copy. Everything here is carried over from
 * the existing indusvalley.com content inventory — no invented claims.
 */

export const company = {
  name: "Indus Valley Consultants, Inc.",
  short: "Indus Valley",
  founded: 1996,
  years: 30,
  tagline: "Unlocking value through continuous innovation",
  address: "9049 Springboro Pike, Suite C, Miamisburg, OH 45342",
  hours: "8AM – 6PM",
  emails: {
    general: "info@indusvalley.com",
    hr: "hr@indusvalley.com",
    jobs: "jobs@indusvalley.com",
  },
  phones: {
    main: "937-660-4748",
    sales: "(937)-660-4746",
    hr: "937-660-5775",
  },
} as const;

/**
 * Two offices. The pair is what makes the onsite–offshore model real rather
 * than a claim, so they are shown together wherever location comes up.
 */
export const offices = [
  {
    id: "us",
    slot: "COMPANY-BUILDING-US",
    label: "Main office",
    city: "Miamisburg, Ohio",
    country: "United States",
    lines: ["9049 Springboro Pike, Suite C", "Miamisburg, OH 45342"],
    phone: "937-660-4748",
    email: "info@indusvalley.com",
    hours: "8AM – 6PM ET",
    note: "Where engagements are owned — senior practitioners onsite with the business.",
    maps: "https://maps.google.com/?q=9049+Springboro+Pike+Suite+C+Miamisburg+OH+45342",
    alt: "Indus Valley main office in Miamisburg, Ohio",
  },
  {
    id: "hyd",
    slot: "COMPANY-BUILDING-HYD",
    label: "Delivery centre",
    city: "Hyderabad, Telangana",
    country: "India",
    lines: [
      "1-A, 1st Floor, Plot No. 135, 136P, 134 & 133P",
      "Sai Aishwarya Residency, Sai Vaibhav Layout",
      "Niharika Lakefront, Khaja Guda",
      "Hyderabad, Rangareddy, Telangana 500104",
    ],
    phone: null,
    email: "info@indusvalley.com",
    hours: "9AM – 7PM IST",
    note: "Where the build continues after the US day ends — the offshore half of the model.",
    maps: "https://maps.google.com/?q=Niharika+Lakefront+Khaja+Guda+Hyderabad+Telangana+500104",
    alt: "Indus Valley delivery centre in Khaja Guda, Hyderabad",
  },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb: string }[];
};

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/company",
    children: [
      {
        label: "Company",
        href: "/company",
        blurb: "Three decades of consulting, and what we learned",
      },
      {
        label: "Vision & Mission",
        href: "/vision-mission",
        blurb: "What we are building toward",
      },
      {
        label: "Clients",
        href: "/clients",
        blurb: "34 enterprises who kept calling back",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "All services",
        href: "/services",
        blurb: "Three practices, one delivery discipline",
      },
      {
        label: "Health Care",
        href: "/services/health-care",
        blurb: "Facets, HealthRules and AMISYS Advance delivery",
      },
      {
        label: "Enterprise Performance Management & BI",
        href: "/services/epm-bi",
        blurb: "Close, plan, forecast and report with confidence",
      },
      {
        label: "Digital Integration",
        href: "/services/digital-integration",
        blurb: "Hybrid, B2B and enterprise application integration",
      },
      {
        label: "Testing Services",
        href: "/services/testing",
        blurb: "Functional, automated and performance, across every practice",
      },
    ],
  },
  { label: "Careers", href: "/careers" },
];

/* ------------------------------------------------------------------ */

export const services = [
  {
    n: "01",
    slug: "health-care",
    href: "/services/health-care",
    title: "Health Care",
    kicker: "Payer systems",
    blurb:
      "Healthcare consulting built for payers of any size — services and solutions that improve processes, increase efficiency and support greater productivity.",
    points: ["Facets™", "HealthRules™", "AMISYS Advance™"],
  },
  {
    n: "02",
    slug: "epm-bi",
    href: "/services/epm-bi",
    title: "Enterprise Performance Management & BI",
    kicker: "Plan, close, report",
    blurb:
      "More than two decades serving clients across Enterprise Performance Management and Business Intelligence, from concept to completion.",
    points: ["Consolidation & reporting", "Budgeting & forecasting", "Data visualization"],
  },
  {
    n: "03",
    slug: "digital-integration",
    href: "/services/digital-integration",
    title: "Digital Integration",
    kicker: "Connected enterprise",
    blurb:
      "End-to-end, future-ready enterprise application integration — innovative tools, tested templates and carefully designed organisational frameworks.",
    points: ["Hybrid integration", "B2B services", "24×7 support"],
  },
  {
    n: "04",
    slug: "onsite-offshore",
    href: "/services/digital-integration",
    title: "Onsite – Offshore Implementations",
    kicker: "Delivery model",
    blurb:
      "A blended delivery model that keeps senior practitioners close to the business while the build runs around the clock.",
    points: ["Follow-the-sun build", "Onshore accountability", "Managed service"],
  },
] as const;

/* ------------------------------------------------------------------ */

export const clients = [
  "AIC",
  "Alluma",
  "Altran",
  "Ascendum",
  "Bisk Education",
  "BlueCross",
  "Capgemini",
  "Carestream",
  "Clopay",
  "Cognizant",
  "Erudex",
  "Fusion Alliance",
  "Harley-Davidson",
  "Hexaware",
  "ICS",
  "Judge",
  "Kelly",
  "Kforce",
  "Kroger",
  "Long Beach",
  "Modis",
  "Nilior",
  "OCBT",
  "Princess",
  "Randstad",
  "Sogeti",
  "Stanford University",
  "Synechron",
  "Tech Mahindra",
  "TEK",
  "Tekmark",
  "Toyota",
  "Workforce Logiq",
  "Zeus",
];

export const featuredClients = [
  "Toyota",
  "Cognizant",
  "Harley-Davidson",
  "Kroger",
  "Capgemini",
  "Carestream",
  "Tech Mahindra",
  "Stanford University",
];

/* ------------------------------------------------------------------ */

export const testimonial = {
  quote:
    "Carestream has benefitted from a long engagement with Indusvalley in the past. We received excellent consulting on middleware strategic topics, successful integration efforts delivering key B2B mappings over the standard EDI framework, as well as custom webMethods rollouts when unique internal integrations were required. Overall, Indusvalley team remain a favored vendor and we have a high degree of confidence in your ability to achieve business transformational outcomes as future opportunities arise.",
  name: "Eric E Zimmerman",
  role: "IT Director – Core Application Services",
  org: "Carestream Health",
};

/* ------------------------------------------------------------------ */

export const oldWay = [
  { title: "Fixate on one system", body: "The rest of the landscape is ignored." },
  { title: "No assessment", body: "Nobody maps what is actually in place." },
  { title: "Unnecessary replacement", body: "Rip-and-replace where a fix would do." },
  { title: "Poor results", body: "Inconsistent, expensive, late outcomes." },
];

export const newWay = [
  { title: "Read the whole landscape", body: "Every dependency mapped before we scope." },
  { title: "See the target state", body: "A modelled view of where this ends up." },
  { title: "A tailored protocol", body: "Sequenced for your constraints, not a template." },
  { title: "Results that hold", body: "Measured against the baseline we started from." },
];

/* ------------------------------------------------------------------ */

export const capabilities = [
  {
    group: "Health Care",
    count: 12,
    items: [
      "Implementation & upgrades",
      "Project planning and oversight",
      "Configuration design",
      "Business analysis",
      "Custom development — interfaces & extracts",
      "EDI transactions",
      "Business intelligence & reporting",
      "Functional, automated & performance testing",
      "Facets™ delivery",
      "HealthRules™ delivery",
      "AMISYS Advance™ delivery",
      "QNXT testing",
    ],
  },
  {
    group: "Enterprise Performance Management",
    count: 5,
    items: [
      "Consolidation and reporting",
      "Budgeting and forecasting",
      "Profit and cost management",
      "Account reconciliation",
      "Reporting, analysis and data visualization",
    ],
  },
  {
    group: "Digital Integration",
    count: 5,
    items: [
      "Architectural consulting",
      "Process optimization",
      "Hybrid integration",
      "B2B integration services",
      "Enterprise application integration",
    ],
  },
  {
    group: "Testing Services",
    count: 9,
    items: [
      "Testing execution and delivery",
      "Test requirement engineering",
      "Testing programs and projects",
      "Test automation tools",
      "Performance testing",
      "Testing tool selection",
      "Test management tools",
      "Automation & performance tools",
      "Defect tools",
    ],
  },
  {
    group: "Delivery Models",
    count: 3,
    items: [
      "Executive assessments",
      "Staff augmentation & onshore-only model",
      "Managed testing service",
    ],
  },
];

/* ------------------------------------------------------------------ */

export const engagementModels = [
  {
    title: "Executive Assessment",
    body: "A short, senior-led read of where you stand — landscape, risk and the sequence that gets you moving.",
  },
  {
    title: "Staff Augmentation & Onshore-Only",
    body: "Experienced practitioners inside your team, accountable to your delivery lead, on your ground.",
  },
  {
    title: "Managed Service",
    body: "We own the outcome end to end, blended onsite–offshore, with 24×7 support and maintenance.",
  },
];

/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: "What does Indus Valley actually do?",
    a: "We are an IT services and consulting firm. Our three practices are healthcare payer systems, enterprise performance management and business intelligence, and digital integration — supported by a testing practice that works across all three.",
  },
  {
    q: "Which healthcare platforms do you support?",
    a: "Facets™, HealthRules™ and AMISYS Advance™, from planning through go-live and into upgrades. Our testing practice also covers QNXT.",
  },
  {
    q: "How do engagements usually start?",
    a: "Most start with an executive assessment — a short, senior-led review of your landscape that produces a scoped, sequenced plan. From there clients move into staff augmentation or a managed service, depending on how much of the outcome they want us to own.",
  },
  {
    q: "Do you work onsite, offshore, or both?",
    a: "Both. Our onsite–offshore model keeps senior practitioners close to the business while the build continues around the clock. If you need onshore-only, that is a supported model too.",
  },
  {
    q: "How long have you been doing this?",
    a: `Since ${company.founded}. That is ${company.years} years of continuous delivery for enterprises including Toyota, Cognizant, Harley-Davidson, Kroger and Carestream Health.`,
  },
  {
    q: "How do I get in touch?",
    a: `Email ${company.emails.general} or call ${company.phones.main}. For roles, write to ${company.emails.jobs}.`,
  },
];

/* ------------------------------------------------------------------ */

/**
 * There are no current openings. These are the tracks Indus Valley hires into
 * when a seat opens — shown so candidates know whether their background fits
 * before they send a CV. Not job postings.
 */
export const hasOpenRoles = false;

export const hiringTracks = [
  {
    title: "Senior Software Engineer",
    education: "Master's + 1 yr, or Bachelor's + 5 yrs progressive",
    skills: [
      "Java",
      "C#",
      "JavaScript",
      "React",
      "Angular",
      "SQL",
      "NoSQL",
      "Microservices",
      "AWS",
      "Azure",
      "GCP",
    ],
  },
  {
    title: "Sr. Software Engineers",
    education: "Master's + 1 yr",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "Angular.JS",
      "React.JS",
      "SQL",
      "NoSQL",
      "Microservices",
      "Cloud",
      "BigData",
    ],
  },
  {
    title: "Software Engineers",
    education: "Bachelor's + 5 yrs progressive",
    skills: [
      "Java",
      "JavaScript",
      "Microservices",
      "WebServices",
      "Cloud",
      "Oracle / SQL Server / NoSQL",
    ],
  },
  {
    title: "Senior Business Intelligence Analysts",
    education: "Master's + 1 yr",
    skills: [
      "Hyperion Suite",
      "Oracle EPM",
      "DB2",
      "UNIX",
      "SQL Server",
      "Applied OLAP Dodeca",
    ],
  },
  {
    title: "Business Intelligence Analysts",
    education: "Bachelor's + 2 yrs",
    skills: [
      "Hyperion Suite",
      "Oracle EPM",
      "DB2",
      "UNIX",
      "SQL Server",
      "Applied OLAP Dodeca",
    ],
  },
  {
    title: "Programmer Analyst",
    education: "Bachelor's + 2 yrs",
    skills: ["Systems analysis", "Testing", "Monitoring"],
  },
];

export const rolesNote =
  "Based in Miamisburg, OH. Work may be performed in various unanticipated locations throughout the U.S.";

/* ------------------------------------------------------------------ */

export const contacts = [
  { dept: "Marketing & Sales", email: "info@indusvalley.com", phone: "(937)-660-4746" },
  { dept: "Main", email: "hr@indusvalley.com", phone: "937-660-4748" },
  { dept: "HR", email: "jobs@indusvalley.com", phone: "937-660-5775" },
  { dept: "Finance", email: null, phone: "937-660-5775" },
];
