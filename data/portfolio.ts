
export const HERO = {
  name: "mazeen chawdhury",
  location: "new york city",
  role: "fullstack engineer",
  bio: "hey, i'm mazeen — a fullstack web developer and designer who loves building applications that look clean.",
  bio2: "when i'm not developing, i'm probably asleep, going out on trips throughout the city, or binge watching a show i love.",
  currentRole: "Cliniq",
};

export const EXPERIENCE = [
  {
    company: "Cliniq",
    url: "#",
    role: "Founder",
    period: "August 2026 – present",
    description: "Creating a new and improved system to help hospital staff deal with less paperwork and help more patients.",
    active: true,
  },
  {
    company: "Payly",
    url: "#",
    role: "Founder",
    period: "August 2026 – present",
    description: "Building a payment platform for small businesses: invoices, online receipts, and one-time, recurring and automatic payments in one place.",
    active: true,
  },
];

export type Project = {
  id: number;
  slug: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  year: string;
  /** Live link. Leave empty to show the card without a "Visit live site" link. */
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "city-world",
    title: "City World Dealer Suite",
    label: "built for City World Ford, Hyundai & Toyota",
    description:
      "Tracks sales rep and dealership performance, and uses AI to tell dealers which cars to prioritize moving based on how long they've been on the lot.",
    tags: ["automotive", "analytics", "ai", "shipped"],
    year: "2026",
  },
  {
    id: 2,
    slug: "payly",
    title: "Payly",
    label: "payments for small businesses",
    description:
      "Lets businesses generate invoices, send online receipts, and take one-time, recurring and automatic payments.",
    tags: ["fintech", "payments", "invoicing"],
    year: "2026",
  },
  {
    id: 3,
    slug: "exam-solver",
    title: "Exam Solver",
    label: "two models agree, or a third decides",
    description:
      "Students snap homework or exam questions, even at odd angles. ChatGPT and Gemini both answer; if they match, that's the answer, and if they don't, Claude makes the final call.",
    tags: ["edtech", "openai", "gemini", "claude"],
    year: "2026",
  },
];

export const TOOLS = [
  "figma",
  "framer",
  "Next.JS",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "Clerk",
  "blender",
  "notion",
  "linear",
  "Python",
  "tailwind css",
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn",  url: "https://www.linkedin.com/in/mazeenc/" },
  { label: "Resume",   url: "/MCResume.pdf" },
  { label: "Email",     url: "mailto:mazeencdev@gmail.com" },
];

export const SKILL_GROUPS = [
  { title: "Frontend", blurb: "Interfaces that feel calm and fast.", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer"] },
  { title: "Backend & data", blurb: "Auth, databases and APIs that hold up.", items: ["PostgreSQL", "Prisma", "Supabase", "Clerk", "Python"] },
  { title: "Design", blurb: "From first sketch to final pixel.", items: ["Figma", "Framer", "Blender"] },
  { title: "AI & workflow", blurb: "LLMs wired into real products, shipped on schedule.", items: ["OpenAI", "Gemini", "Claude", "Linear", "Notion"] },
];

export const MISSION =
  "I build software that removes friction from everyday life, from hospital paperwork to dealership lots and small-business payments, and I make sure it looks as good as it works.";

export const ABOUT = {
  school: "Computer Science student at Manhattan University",
  location: "New York City",
};

export const NAV_LINKS     = [];
export const BRANDS        = [{ name: "Cliniq", label: "Cliniq" }, { name: "Synk", label: "Synk" }];
export const POSTS         = [];
export const FAQS          = [];
export const FOOTER_COLUMNS = [];
