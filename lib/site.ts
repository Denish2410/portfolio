export const person = {
  name: 'Denish Ahalpara',
  role: 'Full stack developer (MERN)',
  lede: 'Computer engineering student who ships MERN-stack products, from banking apps to offline-first PWAs, and integrates AI into production web apps.',
  email: 'ahalparadenish852@gmail.com',
  phone: '+91 93132 88482',
  location: 'Gandhinagar, Gujarat, India',
  github: 'https://github.com/Denish2410',
  linkedin: 'https://www.linkedin.com/in/denish-ahalpara',
};

export const education = [
  { label: 'Degree', value: 'Bachelor of Engineering, Computer Science' },
  { label: 'Institute', value: 'Institute of Advanced Research, Gandhinagar' },
  { label: 'Years', value: 'Aug 2024 to Aug 2028 (expected)' },
];

export const experience: { role: string; org: string; period: string; place: string; points: string[] }[] = [
  {
    role: 'Full Stack Engineer Intern (MERN Stack)',
    org: 'FirstTecPro',
    period: 'Apr 2026 to Sep 2026',
    place: 'On-site, Gandhinagar, India',
    points: [
      'Developed and shipped features for live client projects using MongoDB, Express.js, React.js and Node.js.',
      'Worked on AI model development and its integration into production web applications.',
      'Handled testing and debugging, and collaborated on requirement analysis, project planning and technical research.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    org: 'DIPC Software',
    period: '2026',
    place: 'FinTech project',
    points: [
      'Built a MERN-stack FinTech banking application with JWT authentication and role-based access control.',
      'Implemented secure fund transfers, transaction history, account management and an analytics dashboard.',
      'Designed a responsive interface using React.js and Tailwind CSS.',
    ],
  },
  {
    role: 'Business Growth Executive (Freelance)',
    org: 'Unicorn',
    period: 'Jan 2026 to Jun 2026',
    place: 'Remote, Dubai, UAE',
    points: [
      'Drove brand growth through strategic partnerships, client acquisition and lead generation.',
      'Automated client outreach with a Python tool (pandas, SMTP, OpenPyXL) that sends personalised HTML emails with PDF attachments from Excel lists, with send-failure logging.',
    ],
  },
];

export const recognition = [
  {
    title: 'Built CrowdX at MetroHackathon',
    detail: 'An offline-first metro crowd-reporting and incident-response dashboard.',
  },
  {
    title: 'Built GeoSense AI at PDEU Hackathon',
    detail: 'A platform that turns satellite data into city-level environmental trends and AI-written reports.',
  },
  {
    title: 'JEE Main 2024: 98.64 percentile',
    detail: 'All India Rank 5570.',
  },
  { title: 'JEE Advanced 2024: rank 6481', detail: 'Academic excellence in a national engineering entrance exam.' },
  {
    title: 'Business development, Dubai-based brand',
    detail: 'Partnership development, lead generation and client acquisition.',
  },
];

export const toolkit: { area: string; items: { name: string; level?: string }[] }[] = [
  { area: 'Languages', items: [{ name: 'C++' }, { name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'Python' }] },
  { area: 'Frontend', items: [{ name: 'React.js' }, { name: 'Tailwind CSS' }, { name: 'Progressive Web Apps' }, { name: 'IndexedDB' }] },
  {
    area: 'Backend and database',
    items: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'MongoDB' }, { name: 'RESTful APIs' }, { name: 'JWT authentication' }, { name: 'RBAC' }],
  },
  { area: 'Python libraries', items: [{ name: 'pandas' }, { name: 'OpenPyXL' }, { name: 'smtplib' }] },
  { area: 'Tools', items: [{ name: 'Git / GitHub' }, { name: 'IntelliJ IDEA' }, { name: 'HubSpot' }] },
  { area: 'Core concepts', items: [{ name: 'Data structures and algorithms' }, { name: 'Competitive programming' }, { name: 'OOP' }] },
];
