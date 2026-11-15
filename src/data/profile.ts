export const profile = {
  name: 'Sirivella Sri Charan Reddy',
  initials: 'SCR',
  headline: 'Building Reliable Cloud Solutions.',
  subtitle: 'AWS Certified Solutions Architect – Associate | Aspiring Cloud Engineer',
  heroIntro:
    'I am a Computer Science and Engineering student specialising in Cloud Computing, passionate about AWS, cloud architecture, serverless systems, infrastructure and building practical cloud-based solutions.',
  summary:
    'Exploring cloud architecture, serverless technologies and scalable infrastructure through practical AWS and Azure projects.',
  location: 'Bengaluru, Karnataka, India',
  email: 'sricharanreddy9105@gmail.com',
  phoneDisplay: '+91 88854 79552',
  phoneHref: 'tel:+918885479552',
  github: 'https://github.com/sricharanreddy5414',
  githubHandle: 'sricharanreddy5414',
  linkedin: 'https://www.linkedin.com/in/sri-charan-reddy-5490ba324',
  avatarUrl: 'https://github.com/sricharanreddy5414.png?size=480',
  siteUrl: 'https://sricharanreddy5414.github.io/',
} as const

export const heroRoles = [
  'AWS Certified Solutions Architect – Associate',
  'Cloud Computing Enthusiast',
  'Aspiring Cloud Architect',
  'AWS & Serverless Developer',
] as const

export const aboutParagraphs = [
  'I am a Computer Science and Engineering student at Alliance University, Bengaluru, specialising in Cloud Computing. I hold the AWS Certified Solutions Architect – Associate credential and I am aiming toward Cloud Support Associate, AWS Cloud Engineer, and Cloud Infrastructure Engineer roles, with a longer-term goal of becoming a Solutions Architect.',
  'The practical work on this site is personal and academic. I independently designed a serverless emergency resource allocation prototype on AWS, independently built a traffic analytics dashboard on Microsoft Azure, and collaborated on frontend development for CampusRadar with a four-member hackathon team. That work covers Lambda and Azure Functions, REST APIs, DynamoDB and Cosmos DB, IAM, event-driven workflows, monitoring, and static deployment.',
  'I am an early-career candidate. This portfolio presents my AWS certification, university study, independent cloud prototypes, hackathon collaboration, and the troubleshooting I practised while deploying those prototypes.',
]

export const focusAreas = [
  {
    title: 'AWS cloud architecture',
    detail: 'Solutions Architect – Associate study applied to a serverless prototype with Lambda, API Gateway, DynamoDB, S3, IAM, and Amplify.',
  },
  {
    title: 'Serverless development',
    detail: 'Request and notification workflows built with AWS Lambda, EventBridge, SNS, and Azure Functions.',
  },
  {
    title: 'Azure cloud projects',
    detail: 'A personal traffic analytics dashboard using Functions, Cosmos DB, Storage static hosting, and GitHub Actions.',
  },
  {
    title: 'Practical troubleshooting',
    detail: 'Configuration investigation during personal project deployment, including a narrowly scoped IAM permission fix.',
  },
  {
    title: 'Continuous learning',
    detail: 'University cloud coursework alongside AWS, Oracle, NPTEL, and Coursera certifications.',
  },
  {
    title: 'Solutions Architect path',
    detail: 'Early-career direction from cloud support and infrastructure engineering toward solutions architecture.',
  },
] as const

export type SkillGroup = {
  title: string
  note: string
  items: readonly string[]
  wide?: boolean
}

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'AWS',
    wide: true,
    note: 'Services used to design and deploy the emergency resource allocation prototype.',
    items: [
      'Amazon EC2',
      'AWS Lambda',
      'Amazon API Gateway',
      'Amazon DynamoDB',
      'Amazon S3',
      'AWS IAM',
      'Amazon CloudWatch',
      'Amazon SNS',
      'Amazon EventBridge',
      'AWS Amplify',
    ],
  },
  {
    title: 'Microsoft Azure',
    note: 'Services used for the smart traffic monitoring and analytics dashboard, including Azure Storage static website hosting.',
    items: ['Azure Functions', 'Azure Cosmos DB', 'Azure Storage'],
  },
  {
    title: 'Programming',
    note: 'Python is used in the Azure traffic project. Java, C, and C++ are part of my programming foundation.',
    items: ['Python', 'Java', 'C', 'C++'],
  },
  {
    title: 'Cloud and systems',
    wide: true,
    note: 'Linux, networking, and SQL come from coursework and certification study. REST APIs are part of the ERAP prototype. Docker and Docker Compose are part of my toolchain. CI/CD fundamentals come from the GitHub Actions deployment on the Azure dashboard.',
    items: [
      'Linux',
      'Networking fundamentals',
      'TCP/IP',
      'DNS',
      'HTTP/HTTPS',
      'REST APIs',
      'SQL',
      'Git',
      'GitHub',
      'Docker',
      'Docker Compose',
      'CI/CD fundamentals',
    ],
  },
]

export type ProjectLink = {
  href: string
  label: string
}

export type Project = {
  id: string
  number: string
  title: string
  kind: string
  summary: string
  contributionTitle: string
  contribution: readonly string[]
  technologies: readonly string[]
  github: string
  live?: ProjectLink
  unavailable?: ProjectLink
  disclosures: readonly string[]
  troubleshooting?: {
    title: string
    body: string
  }
  features?: readonly string[]
}

export const projects: readonly Project[] = [
  {
    id: 'erap',
    number: '01',
    title: 'Emergency Resource Allocation Platform (ERAP)',
    kind: 'Independent personal project',
    summary:
      'Designed and independently developed an AWS-based serverless emergency resource allocation prototype. The application manages emergency requests and resource records through serverless backend workflows.',
    contributionTitle: 'What I built',
    contribution: [
      'Designed backend workflows using AWS Lambda.',
      'Integrated REST APIs through Amazon API Gateway.',
      'Managed request and resource data using DynamoDB.',
      'Integrated SNS notification workflows.',
      'Used S3 for storage.',
      'Configured IAM permissions.',
      'Used CloudWatch for monitoring.',
      'Implemented event-driven workflows using EventBridge.',
      'Deployed the dashboard using AWS Amplify.',
      'Performed API and application testing.',
    ],
    technologies: [
      'AWS Lambda',
      'Amazon API Gateway',
      'Amazon DynamoDB',
      'Amazon S3',
      'AWS IAM',
      'Amazon CloudWatch',
      'Amazon SNS',
      'Amazon EventBridge',
      'AWS Amplify',
    ],
    github: 'https://github.com/sricharanreddy5414/emergency-resource-allocation',
    live: {
      href: 'https://main.d3enpe7opotop5.amplifyapp.com',
      label: 'View live prototype',
    },
    disclosures: [
      'This is a working prototype that uses fictional test data. It is not a live emergency dispatch service and has not been used for actual emergency response.',
    ],
    troubleshooting: {
      title: 'Independent project troubleshooting',
      body: 'During deployment, an IAM permission failure occurred because the deployment role lacked lambda:CreateAlias permission. I investigated the configuration, identified the missing permission, applied a narrowly scoped permission, and validated the configuration using IAM policy simulation and security checks. This was personal project troubleshooting, separate from professional production support.',
    },
  },
  {
    id: 'traffic',
    number: '02',
    title: 'Smart Traffic Monitoring and Analytics Dashboard',
    kind: 'Independent personal project',
    summary:
      'Independently developed a cloud-based traffic monitoring and analytics dashboard using Microsoft Azure.',
    features: [
      'Traffic monitoring dashboard',
      'Location-based traffic information',
      'Congestion analysis',
      'Traffic visualisation',
      'Traffic distribution charts',
      'Moving-average short-term traffic prediction',
      'Location-based map',
      'Traffic information table',
      'Simulated traffic dataset',
    ],
    contributionTitle: 'What I built',
    contribution: [
      'Developed backend functionality using Python and Azure Functions.',
      'Configured Cosmos DB for traffic data.',
      'Created dashboard visualisations.',
      'Implemented moving-average prediction.',
      'Hosted the frontend through Azure Storage Static Website Hosting.',
      'Configured GitHub Actions deployment automation.',
    ],
    technologies: [
      'Microsoft Azure',
      'Azure Functions',
      'Python',
      'Azure Cosmos DB',
      'Azure Storage Static Website Hosting',
      'GitHub Actions',
    ],
    github: 'https://github.com/sricharanreddy5414/smart-traffic-monitoring-analytics-dashboard',
    unavailable: {
      href: 'https://stsmarttrafficweb5414.z29.web.core.windows.net/',
      label: 'Dashboard currently unavailable',
    },
    disclosures: [
      'The traffic readings are simulated. This project does not integrate with government or real-time city traffic systems.',
    ],
  },
  {
    id: 'campusradar',
    number: '03',
    title: 'CampusRadar – Smart Campus Opportunity Intelligence System',
    kind: 'Four-member DevCampus hackathon team project',
    summary:
      'A centralised campus opportunity discovery platform designed to help students find internships, hackathons, workshops, scholarships, seminars, and placement opportunities.',
    contributionTitle: 'My contribution',
    contribution: [
      'Identified the problem of fragmented campus announcements.',
      'Proposed the centralised opportunity discovery idea.',
      'Contributed to frontend development.',
      'Collaborated with a four-member team.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/varunteja3107/campusRadar',
    disclosures: [
      'My scope on this team project was problem identification, the product idea, and frontend collaboration.',
    ],
  },
]

export type Certification = {
  title: string
  issuer: string
  platform?: string
  exam?: string
  score?: string
  issued?: string
  expires?: string
  verifyUrl?: string
  featured?: boolean
}

export const certifications: readonly Certification[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    exam: 'SAA-C03',
    score: '872/1000',
    issued: '13 November 2026',
    expires: '13 November 2029',
    verifyUrl: 'https://www.credly.com/badges/2f298ff2-ff8e-4640-9e42-8a3874280cd7/public_url',
    featured: true,
  },
  {
    title: 'Oracle Certified Foundation Associate',
    issuer: 'Oracle',
    issued: 'July 2025',
  },
  {
    title: 'NPTEL Elite Certification – Discrete Mathematics',
    issuer: 'IIT Madras',
    issued: '2026',
  },
  {
    title: 'Programming for Everybody',
    issuer: 'University of Michigan',
    platform: 'Coursera',
  },
  {
    title: 'C++ Programmers',
    issuer: 'University of California, Santa Cruz',
    platform: 'Coursera',
  },
  {
    title: 'Fundamentals of Network Communication',
    issuer: 'University of Colorado',
    platform: 'Coursera',
  },
  {
    title: 'Fundamentals of Computer Organisations',
    issuer: 'IIIT Hyderabad',
    platform: 'Coursera',
  },
  {
    title: 'Introduction to Operating Systems',
    issuer: 'Codio',
    platform: 'Coursera',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
    platform: 'Coursera',
  },
]

export const education = [
  {
    school: 'Alliance University',
    place: 'Bengaluru, Karnataka',
    credential: 'Bachelor of Technology (B.Tech)',
    detail: 'Computer Science and Engineering – Cloud Computing',
    period: 'August 2024 – December 2028',
    status: 'In progress',
    points: ['Expected graduation: 2028', 'Current CGPA: 8.8/10 through Semester 5'],
  },
  {
    school: 'Narayan Junior College',
    place: 'Andhra Pradesh State Board',
    credential: 'Class XII',
    detail: 'Senior secondary education',
    period: '2024',
    status: 'Completed',
    points: ['Score: 91.4%'],
  },
  {
    school: 'Narayana School',
    place: 'Andhra Pradesh State Board',
    credential: 'Class X',
    detail: 'Secondary education',
    period: '2022',
    status: 'Completed',
    points: ['Score: 88%'],
  },
] as const

export const hackathons = [
  {
    title: 'Cyber Kushti – Nexora II / NSD Global',
    kind: 'Participation',
    summary:
      'I took part with a team. My contribution was problem analysis and team challenge assessment. The team qualifier score was 95.5%. The team did not qualify for Round 2.',
  },
  {
    title: 'CampusRadar – Smart Campus Opportunity Intelligence System',
    kind: 'Four-member DevCampus hackathon',
    summary:
      'I identified fragmented campus announcements, proposed a centralised opportunity discovery platform, and contributed to frontend development with the team.',
    href: 'https://github.com/varunteja3107/campusRadar',
    linkLabel: 'Team GitHub repository',
  },
] as const

export const navLinks = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#expertise', id: 'expertise', label: 'Expertise' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#certifications', id: 'certifications', label: 'Certifications' },
  { href: '#achievements', id: 'achievements', label: 'Achievements' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#contact', id: 'contact', label: 'Contact' },
] as const
