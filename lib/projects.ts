export type Kind = 'hackathon' | 'fullstack';

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
  hackathon: 'Hackathon builds',
  fullstack: 'Full stack products',
};

export const projects: Project[] = [
  {
    slug: 'fintech-banking',
    file: 'DA-04',
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
    slug: 'crowdx',
    file: 'DA-03',
    name: 'CrowdX',
    kind: 'hackathon',
    summary:
      'An offline-first metro crowd-reporting and incident-response dashboard with a crowd-risk scoring engine.',
    role: 'Builder',
    status: 'MetroHackathon',
    type: 'Offline-first PWA',
    flow: ['Crowd report', 'Risk scoring engine', 'Priority queue', 'Staff action', 'Backup and export'],
    did: [
      'Built the dashboard with a crowd-risk scoring engine.',
      'Designed a priority queue for incidents (Open, Acknowledged, Resolved) so staff act on high-risk reports first.',
      'Added JSON backup, CSV export, safe restore and installable PWA support for use without network access.',
    ],
    stack: ['React', 'TypeScript', 'PWA', 'IndexedDB'],
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

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Neighbours in list order, wrapping around, for previous / next links. */
export function neighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
}
