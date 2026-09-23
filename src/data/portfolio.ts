import {
  BadgeCheck,
  BarChart3,
  Bot,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  Headphones,
  HeartPulse,
  Languages,
  Laptop,
  type LucideIcon,
  Mail,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

export const profile = {
  name: "Jason S. Azuela",
  firstName: "Jason",
  role: "Healthcare Virtual Assistant",
  location: "Naga City, Philippines",
  email: "jasonazuela2001@gmail.com",
  phone: "+63 931 984 9926",
  phoneHref: "+639319849926",
  linkedinLabel: "linkedin.com/in/jason-azuela-7372aa287",
  linkedinUrl: "https://linkedin.com/in/jason-azuela-7372aa287",
  headshot: "https://cdn.enter.pro/resources/uid_100591117/f9f4010d-0916-42.jpg",
  availability: "Available full-time — US EST / PST hours",
  summary:
    "Results-driven Healthcare Virtual Assistant with 3 years of BPO voice experience supporting Healthcare, Travel, and Telecommunications accounts. Experienced in patient pre-registration, insurance verification, and EHR/CRM data entry within HIPAA-compliant environments. Skilled in customer service, problem-solving, and managing multiple tasks in fast-paced, high-volume remote settings.",
  about: [
    "I started my career on the phones — three years of BPO voice experience across Healthcare, Travel, and Telecommunications accounts — and healthcare is where I chose to specialize. Today I work the front end of the revenue cycle: pre-registration, eligibility, benefits, and prior authorization support.",
    "My day looks like verifying patient demographics and insurance eligibility before an appointment, confirming plan coverage and network participation, chasing down deductible and out-of-pocket details, and keeping the EHR accurate so the claim does not come back as rework. I raise the ticket when something is wrong instead of letting it reach the biller.",
    "I am reliable, tech-adaptive, and used to high-volume remote queues. I am fully set up to work US business hours from a dedicated home office with redundant internet and power, and I hold a HIPAA Compliance certificate of completion.",
  ],
  taglines: [
    "Your practice's first point of contact — accurate, compliant, always on.",
    "Pre-registration without the rework.",
    "Insurance verification that holds up.",
    "HIPAA-compliant. Detail-obsessed. US-hours ready.",
  ],
};

export type TrustFact = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

export const trustFacts: TrustFact[] = [
  {
    icon: ShieldCheck,
    label: "HIPAA Certified",
    detail: "Compliance Training Program, 7/26",
  },
  {
    icon: Headphones,
    label: "3 Years BPO Voice",
    detail: "Healthcare, Travel, Telecommunications",
  },
  {
    icon: Clock,
    label: "US Business Hours",
    detail: "Full-time across EST / PST",
  },
  {
    icon: Stethoscope,
    label: "Revenue Cycle Front End",
    detail: "Pre-registration, eligibility, prior auth",
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "3", label: "Years BPO experience" },
  { value: "4", label: "Employer accounts" },
  { value: "3", label: "Industries served" },
  { value: "HIPAA", label: "Compliance certified" },
];

export type SkillGroup = {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "patient",
    label: "Patient Support",
    icon: HeartPulse,
    blurb: "Front-desk conversations handled with care and accuracy.",
    skills: [
      "Patient Pre-Appointment Registration",
      "Multi-Line Phone, Chat & Email Support",
      "CRM and EHR Management",
      "Remote Team Collaboration",
    ],
  },
  {
    id: "insurance",
    label: "Insurance & Claims",
    icon: FileText,
    blurb: "Coverage answers that hold up before the claim is filed.",
    skills: [
      "Insurance Verification & Eligibility",
      "Benefits, Eligibility, and Claims Status Review",
      "Prior Authorization Support",
      "HIPAA Compliant Records Handling",
    ],
  },
  {
    id: "systems",
    label: "Systems & Data",
    icon: MonitorSmartphone,
    blurb: "Clean records, every time, in every system your team uses.",
    skills: [
      "Data Entry & Documentation Accuracy",
      "EPIC, Salesforce, OneSource & Availity",
      "Microsoft 365 & WorkSched",
      "Slack, Zoom, Google Meet, Microsoft Teams",
    ],
  },
  {
    id: "style",
    label: "Working Style",
    icon: BadgeCheck,
    blurb: "How I stay dependable in a high-volume remote queue.",
    skills: [
      "Time Management & Multitasking",
      "Problem-Solving Under Pressure",
      "Tech-Adaptive Learning",
      "Documentation-First Escalation",
    ],
  },
];

export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  team: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "r1rcm",
    title: "Senior Associate, Pre-Registration",
    company: "R1 RCM Philippines Inc.",
    team: "Financial Clearance Center — Pre-Registration",
    location: "Quezon City, Philippines",
    period: "Mar 2026 — Jul 2026",
    summary: "Financial clearance work: registering patients correctly the first time.",
    bullets: [
      "Managed pre-registration processes by verifying patient demographics, insurance eligibility, and appointment details to ensure accurate and timely registration.",
      "Assisted patients with scheduling inquiries, updated electronic health records, maintained HIPAA compliance, and coordinated with healthcare providers to support efficient patient care and a seamless registration experience.",
      "Created rework tickets for insurance verification issues such as inaccurate patient responsibility, network participation, and deductible/out-of-pocket status.",
    ],
  },
  {
    id: "concentrix",
    title: "Customer Advocate",
    company: "Concentrix Inc.",
    team: "Health Rules Payer — Provider Services",
    location: "Naga City, Philippines",
    period: "Aug 2024 — Feb 2026",
    summary: "Payer-side provider services: coverage, authorizations, claims, and appeals.",
    bullets: [
      "Provided patients' plan coverage, benefits, and eligibility information based on insurance policy details.",
      "Assisted multiple provider clinics and facilities by checking authorization, claims, and appeal status, advising on denial reasons and options in compliance with Medicare/AMA/NCCI guidelines.",
      "Created tickets for escalations and rework requests by verifying additional documentation submitted by providers.",
    ],
  },
  {
    id: "sutherland",
    title: "Customer Care / Telesales Agent",
    company: "Sutherland Global Inc.",
    team: "Travel & Events",
    location: "Naga City, Philippines",
    period: "Jan 2024 — Jul 2024",
    summary: "Multi-channel travel support across voice, chat, and email.",
    bullets: [
      "Assisted international customers through multiple platforms (voice, chat, email) with tours and events bookings.",
      "Provided assistance with customer disputes and concerns, including cancellations, amendments, complaints, and reservation changes.",
    ],
  },
  {
    id: "nqx",
    title: "Technical Support Representative",
    company: "NQX Inc. (formerly Quantrics)",
    team: "Small Business",
    location: "Naga City, Philippines",
    period: "Jan 2023 — Dec 2023",
    summary: "Small-business technical support and retention-driven cross-selling.",
    bullets: [
      "Assisted business owners by troubleshooting landline, internet, and satellite TV issues.",
      "Created tickets for escalations of outages, cyberhacking incidents, damaged equipment, and pedestals.",
      "Increased revenue by cross-selling accessories such as WiFi extenders, a la carte channels, and copper-to-fiber line upgrades.",
    ],
  },
];

export type ToolCategory = {
  label: string;
  icon: LucideIcon;
  tools: string[];
};

export const toolCategories: ToolCategory[] = [
  {
    label: "CRM & EHR",
    icon: ClipboardList,
    tools: ["Salesforce", "EPIC", "OneSource", "Availity"],
  },
  {
    label: "Productivity & Admin",
    icon: BarChart3,
    tools: ["Microsoft 365", "WorkSched"],
  },
  {
    label: "Communication",
    icon: MessageSquare,
    tools: ["Slack", "Zoom", "Google Meet", "Microsoft Teams"],
  },
  {
    label: "AI & Automation",
    icon: Bot,
    tools: ["ChatGPT", "Grammarly", "Copilot"],
  },
];

export type ReadinessItem = {
  icon: LucideIcon;
  label: string;
  lines: string[];
};

export const readiness: ReadinessItem[] = [
  {
    icon: Wifi,
    label: "Internet",
    lines: ["Primary: Star Fiber 50 Mbps", "Backup: DITO 4G Wowfi 25 Mbps"],
  },
  {
    icon: Zap,
    label: "Power Backup",
    lines: ["Ecoflow portable power station"],
  },
  {
    icon: Laptop,
    label: "Equipment",
    lines: [
      "ASUS TUF FX504 / HP Laptop",
      "Jabra noise-cancelling headset",
      "Laptop webcam",
    ],
  },
  {
    icon: MapPin,
    label: "Workspace",
    lines: [
      "Dedicated home office, quiet environment",
      "Professional video-call background",
    ],
  },
  {
    icon: Clock,
    label: "Availability",
    lines: [
      "Full-time, flexible across US (EST/PST), UK (GMT), and AU (AEST) time zones",
    ],
  },
];

export const credentials: { icon: LucideIcon; title: string; detail: string }[] = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance Training Program",
    detail: "Certificate of Completion — 7/26",
  },
  {
    icon: GraduationCap,
    title: "BS in Criminology",
    detail: "Central Bicol State University of Agriculture, Sipocot, Philippines — 2022",
  },
];

export const languages: { icon: LucideIcon; name: string; level: string }[] = [
  { icon: Languages, name: "English", level: "Conversational" },
  { icon: Languages, name: "Tagalog", level: "Fluent" },
];

export const contactLinks = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copyable: true,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    copyable: true,
  },
  {
    id: "linkedin",
    icon: Users,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedinUrl,
    copyable: false,
  },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "experience", label: "Experience" },
  { id: "readiness", label: "Setup" },
  { id: "contact", label: "Contact" },
];
