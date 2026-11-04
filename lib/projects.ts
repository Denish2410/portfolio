export type Kind = 'personal' | 'hackathon' | 'fullstack';

export interface Project {
  slug: string;
  file: string;
  name: string;
  kind: Kind;
  summary: string;
  role: string;
  status: string;
  type: string;
  flow: string[];
  did: string[];
  stack: string[];
  links: { label: string; href: string }[];
  evidence?: { value: string; label: string }[];
}

export const KIND_LABEL: Record<Kind, string> = {
  personal: 'Personal projects',
  hackathon: 'Hackathon builds',
  fullstack: 'Full stack products',
};

export const projects: Project[] = [
  {
    slug: 'mailpulse',
    file: 'DA-06',
    name: 'MailPulse',
    kind: 'personal',
    summary:
      'A full stack email campaign platform: write a campaign, check it, send it once to every recipient, then measure opens, clicks and failures.',
    role: 'Solo builder',
    status: 'Personal project, 2026',
    type: 'Email campaign and analytics platform',
    flow: ['Contacts', 'Draft and template', 'Safe preview and readiness check', 'Test email', 'Send or schedule', 'Open and click tracking', 'Analytics'],
    did: [
      'Built a MERN-style platform (React 19, Express, MongoDB) with JWT auth, argon2 password hashing and Zod validation on every route.',
      'Made sending safe by design: an atomic draft-to-sending step so a campaign can never go out twice, one delivery record per recipient, and crash-safe resume with a watchdog for stalled sends.',
      'Added a readiness check, a sandboxed preview and rate-limited test emails that reach only the sender, before anything goes to real recipients.',
      'Built scheduled sends, {name}-style personalisation, an unsubscribe suppression list, and open and click tracking with HMAC-signed tokens.',
      'Designed an analytics dashboard with KPI cards, daily charts and failure reasons over 7, 30 or 90 days, backed by a test suite on Node\'s built-in test runner.',
    ],
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Zod', 'JWT', 'Nodemailer'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Denish2410/mailPulse' }],
    evidence: [
      { value: '5,000', label: 'recipients per campaign' },
      { value: '27', label: 'backend test files' },
    ],
  },
  {
    slug: 'mailbombarding',
    file: 'DA-05',
    name: 'MailBombarding',
    kind: 'personal',
    summary:
      'A Python bulk email sender that reads contacts from Excel and sends each one a personalised HTML email over Gmail, with an inline logo and an optional PDF.',
    role: 'Solo builder',
    status: 'Personal project, used for client outreach',
    type: 'Python automation tool',
    flow: ['Excel contact list', 'Skip incomplete rows', 'Personalise plain and HTML body', 'Attach logo and PDF', 'Send over Gmail SMTP', 'Randomised pause', 'Log result'],
    did: [
      'Wrote a script that loads contacts with pandas and OpenPyXL and fills a {First Name} placeholder in both plain-text and HTML versions.',
      'Built the MIME message with an inline logo and an optional PDF attachment.',
      'Added randomised delays between sends to stay friendly to spam filters, and skips rows with a missing name or email.',
      'Logged every send, failure and skip to a file and printed a final sent / failed / skipped summary.',
    ],
    stack: ['Python', 'pandas', 'OpenPyXL', 'smtplib', 'email.mime', 'python-dotenv'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Denish2410/MailBombarding' }],
  },
  {
    slug: 'crowdx',
    file: 'DA-04',
    name: 'CrowdX',
    kind: 'personal',
    summary:
      'An offline-first metro crowd-reporting and incident-response dashboard with an explainable crowd-risk scoring engine.',
    role: 'Builder',
    status: 'Built at MetroHackathon',
    type: 'Offline-first PWA',
    flow: ['Crowd report', 'Risk scoring engine', 'Priority queue', 'Response checklist', 'Backup and export'],
    did: [
      'Built the dashboard around 23 Ahmedabad Metro Phase II stations on two corridors (demonstration data).',
      'Designed an explainable 0 to 100 risk score from reported severity, time unresolved and repeat reports at the same station, shown beside the staff-reported severity.',
      'Built a priority queue (Open, Acknowledged, Resolved) with status history, so staff act on the highest-risk reports first.',
      'Added response checklists, JSON backup, CSV export, safe restore and an installable PWA that works without a network, with data kept in IndexedDB.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA (Workbox)', 'IndexedDB', 'Vitest'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Denish2410/crowdX' }],
  },
  {
    slug: 'fintech-banking',
    file: 'DA-03',
    name: 'FinTech Banking App',
    kind: 'fullstack',
    summary:
      'A MERN-stack banking application with secure fund transfers, transaction history, account management and an analytics dashboard.',
    role: 'Full stack developer intern',
    status: 'Built at DIPC Software, 2026',
    type: 'Banking web application',
    flow: ['User signs in', 'JWT authentication', 'Role-based access control', 'Transfers and accounts', 'Analytics dashboard'],
    did: [
      'Built the application with JWT authentication and role-based access control.',
      'Implemented secure fund transfers, transaction history and account management.',
      'Added an analytics dashboard and designed a responsive interface with React.js and Tailwind CSS.',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JWT'],
    links: [],
  },
  {
    slug: 'geosense-ai',
    file: 'DA-02',
    name: 'GeoSense AI',
    kind: 'hackathon',
    summary:
      'A platform that turns satellite heat, vegetation (NDVI) and NO2 data into city-level environmental trends.',
    role: 'Builder',
    status: 'PDEU Hackathon',
    type: 'Environmental analytics platform',
    flow: ['Satellite data', 'Heat, NDVI and NO2 trends', 'AI insights', 'City report'],
    did: [
      'Built a web platform that turns satellite heat, vegetation and NO2 data into city-level trends.',
      'Generated AI-driven insights and downloadable environmental reports for each city.',
    ],
    stack: ['Web platform', 'Satellite data', 'AI'],
    links: [],
  },
  {
    slug: 'ecommerce',
    file: 'DA-01',
    name: 'E-commerce Platform',
    kind: 'fullstack',
    summary: 'A mobile-first online store with a simplified checkout flow and a conversion-focused product layout.',
    role: 'Full stack developer',
    status: 'Built',
    type: 'Online store',
    flow: ['Browse products', 'Product page', 'Simplified checkout', 'Order'],
    did: ['Built a mobile-first online store with a simplified checkout flow and a conversion-focused product layout.'],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    links: [],
  },
];

/** Ideas I am working on now. No case file yet; details to follow. */
export const upcoming: { name: string; note: string }[] = [
  { name: 'Emoji injection attack detection', note: 'In progress. Details soon.' },
  { name: 'Disprove AI model', note: 'In progress. Details soon.' },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Neighbours in list order, wrapping around, for previous / next links. */
export function neighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
}
