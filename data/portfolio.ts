
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

export const MILEAGE = {
  slug: "mileage",
  title: "Mileage",
  tagline: "Every dollar, further.",
  kicker: "A budgeting app I built for myself",
  story:
    "I wanted a second car but couldn't answer a simple question: what would it actually cost me each month, given how I really spend? So I built a native Mac app to find out.",
  repo: "https://github.com/mazeencdev/mileage",
  video: "/mileage/demo.mp4",
  poster: "/mileage/poster.jpg",
  platform: "macOS 14+",
  stickers: ["Swift", "SwiftUI", "Swift Charts", "made for me", "0 dependencies"],
  markers: [
    { title: "Weekly spending money", body: "Income minus bills and savings, turned into one number with a per-day pace." },
    { title: "Read-only bank sync", body: "SimpleFIN pulls transactions in and auto-categorizes them, learning from my corrections." },
    { title: "Second-car planner", body: "Loan, insurance, gas and upkeep, with a live verdict on what I can comfortably afford." },
    { title: "Always within reach", body: "A menu bar item and a desktop widget showing what's left this week." },
  ],
};

export const SNAPNAMER = {
  slug: "snapnamer",
  title: "SnapNamer",
  tagline: "Every screenshot, named.",
  story:
    "A tiny background app for macOS. Every screenshot I take is copied to my clipboard, read on-device with Apple's Vision framework, and filed with a name that says what it is.",
  repo: "https://github.com/mazeencdev/snapnamer",
  video: "/snapnamer/demo.mp4",
  poster: "/snapnamer/poster.jpg",
  platform: "macOS 13+",
  stack: ["Swift", "AppKit", "Vision", "Dispatch", "launchd"],
  // Fictional examples in SnapNamer's real naming format.
  renames: [
    { before: "Screenshot 2026-11-26 at 8.09.19 PM.png", stamp: "2026-11-26 at 20.09.19", app: "Safari", text: "Quarterly Sales Report - Revenue grew 24" },
    { before: "Screenshot 2026-11-25 at 11.42.07 AM.png", stamp: "2026-11-25 at 11.42.07", app: "Figma", text: "Onboarding Flow v3" },
    { before: "Screenshot 2026-11-24 at 3.15.52 PM.png", stamp: "2026-11-24 at 15.15.52", app: "Xcode", text: "Build Succeeded" },
    { before: "Screenshot 2026-11-22 at 9.03.30 PM.png", stamp: "2026-11-22 at 21.03.30", app: "Notes", text: "Trip ideas - Lisbon" },
  ],
  features: [
    { title: "Instant clipboard", body: "Copied the moment you take it, ready to paste." },
    { title: "On-device OCR", body: "Vision reads the text. Nothing leaves your Mac." },
    { title: "Names that say what it is", body: "Timestamp, the app you were in, and the biggest text." },
    { title: "Searchable index", body: "A running _index.md plus Spotlight comments." },
    { title: "Invisible", body: "A login agent. No Dock icon, no menu bar clutter." },
  ],
};

export const HAZE = {
  slug: "haze",
  title: "haze",
  tagline: "Your calendar,",
  taglineSoft: "but calmer.",
  story:
    "A native macOS calendar and to-do app with a soft, frosted-glass design. It syncs both ways with Apple Calendar and Reminders, so every account on my Mac just shows up.",
  repo: "https://github.com/mazeencdev/haze",
  video: "/haze/demo.mp4",
  poster: "/haze/poster.jpg",
  icon: "/haze/icon.png",
  platform: "macOS 15+",
  stack: ["Swift", "SwiftUI", "EventKit", "MapKit"],
  upNext: [
    { title: "Send Q4 budget to Sarah", tag: "Work", minutes: 24 },
    { title: "Coffee with Ana", tag: "Personal", minutes: 52 },
    { title: "Design review", tag: "Design", minutes: 95 },
  ],
  typing: { text: "Coffee with Ana tomorrow 9am", when: "Tomorrow", time: "9:00 AM", title: "Coffee with Ana" },
  agenda: [
    { time: "08:00", title: "Four ways to see your time", body: "Week, Month, Agenda and Places views, with a live now line and a focus mode.", tone: "sky" },
    { time: "09:30", title: "Two-way sync", body: "Built on EventKit, so iCloud, Google and Exchange calendars sync on their own.", tone: "peach" },
    { time: "11:00", title: "Drag to reschedule", body: "Events snap to 15-minute steps, with trackpad haptics and undo.", tone: "lilac" },
    { time: "13:15", title: "Type it like you'd say it", body: "“Coffee with Ana tomorrow 9am” fills in the date and time for you.", tone: "sage" },
    { time: "15:00", title: "Places that go somewhere", body: "Place search, map previews and one-click directions in Apple or Google Maps.", tone: "sky" },
    { time: "17:45", title: "A sky that lives", body: "The background drifts and shifts colour with the time of day.", tone: "peach" },
  ],
};
