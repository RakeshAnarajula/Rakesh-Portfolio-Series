/**
 * Central portfolio data – updated for Anarajula Rakesh.
 * Sourced directly from 3.4 years_Exp_Resume_Rakesh.pdf
 */

export const profile = {
  fullName: 'Anarajula Rakesh',
  displayName: 'Rakesh Anarajula',
  firstName: 'RAKESH',
  seriesTag: '',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RAKESH ORIGINAL',
  role: 'Front-End Developer & React Developer',
  tagline: ['Front-End Developer', 'React.js & Next.js', 'UI/UX Specialist'],
  intro:
    'Results-driven Front-End Developer with 3.4+ years of professional experience creating high-performance, responsive web applications with React.js, Next.js, JavaScript (ES6+), Redux, Tailwind CSS, and REST/GraphQL APIs.',
  location: 'Siddipet, Telangana',
  email: 'rakeshanarajula305@gmail.com',
  phone: '+91 8374917602',
  links: {
    linkedin: 'https://www.linkedin.com/in/rakesh-anarajula/',
    github: 'https://github.com/rakeshanarajula',
  },
  resumePdf: '/assets/3.4 years_Exp_Resume_Rakesh.pdf',
  portrait: {
    src: '/assets/Rakesh_logo2.png',
    srcSet: '/assets/Rakesh_logo2.png 420w, /assets/Rakesh_logo2.png 720w, /assets/Rakesh_logo2.png 1100w',
    alt: 'Portrait of Anarajula Rakesh',
  },
  interests: ['UI/UX Design', 'Traveling', 'Sports', 'Photography', 'Open Source'],
};

export const education = [
  {
    school: 'Nalla Narasimha Reddy Group of Institutions',
    place: 'Hyderabad',
    degree: 'Bachelor of Technology – Computer Science Engineering',
    period: '2019 – 2023',
    score: 'CGPA 6.37',
    coursework: 'Data Structures, Algorithms, Web Development, Database Management',
  },
  {
    school: 'SR Junior College',
    place: 'Karimnagar',
    degree: 'Intermediate (MPC)',
    period: '2017 – 2019',
    score: '91%',
  },
  {
    school: 'Ambitus School',
    place: 'Siddipet',
    degree: 'Secondary School Certificate (SSC)',
    period: '2016 – 2017',
    score: 'CGPA 8.2',
  },
];

export const experience = [
  {
    company: 'Entro Labs IT Solutions Private Limited',
    role: 'Front-End Developer & React Developer',
    place: 'Hyderabad, India',
    period: 'June 2025 – Present',
    points: [
      'Developed responsive web applications using React.js, Next.js, Bootstrap, and SCSS.',
      'Built reusable UI components and implemented clean architecture for scalability.',
      'Integrated RESTful APIs and optimized page performance for better UX.',
      'Collaborated with UI/UX designers and back-end developers for end-to-end feature implementation.',
    ],
  },
  {
    company: 'Virtu Tech Solutions',
    role: 'Front-End Developer',
    place: 'Hyderabad, India',
    period: 'July 2023 – June 2025',
    points: [
      'Developed responsive web applications, increasing user engagement by 30%.',
      'Reduced page load time by 40% through code optimization and asset tuning.',
      'Implemented unit testing, achieving 90% code coverage and reducing bug reports by 50%.',
    ],
  },
];

export const projects = [
  {
    id: 'vs-tech-waves',
    title: 'VS TECH WAVES',
    year: '2025',
    genre: 'Enterprise Web • React.js • Tailwind CSS',
    logline: 'Modern corporate web application showcasing SAP services, ERP solutions, and enterprise resources to attract clients.',
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'JavaScript (ES6+)'],
    build: [
      'Implemented multiple corporate pages including SAP Implementation, Careers, and Resources using React.js, Tailwind CSS, and Framer Motion for smooth animations and responsive design.',
      'Enhanced user interface performance by applying reusable component architectures, optimized layout structures, and fast bundling with Vite for an engaging user experience.',
    ],
    features: [
      'Interactive SAP & ERP solutions showcase',
      'Smooth animations powered by Framer Motion',
      'Optimized layout structures with Tailwind CSS',
      'High-speed build bundling with Vite',
      'Full cross-device mobile responsiveness',
    ],
    metrics: [
      { value: '100%', label: 'responsive design' },
      { value: '60%', label: 'faster Vite bundling' },
      { value: '3x', label: 'higher client engagement' },
      { value: '0', label: 'layout shift delays' },
    ],
    palette: { from: '#061a2a', via: '#0f4a7a', to: '#070b10', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'genzpay',
    title: 'GENZPAY',
    year: '2024',
    genre: 'FinTech • React & Redux • Payments',
    logline: 'High-volume digital payment platform serving 10,000+ daily active users with secure authentication and live transaction tracking.',
    stack: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    build: [
      'Led front-end development of a digital payment platform serving 10,000+ daily active users.',
      'Implemented secure user authentication workflows and real-time transaction tracking utilizing React.js and Redux state management.',
    ],
    features: [
      '10,000+ daily active user transaction processing',
      'Real-time transaction tracking & status monitoring',
      'Secure user authentication and token handling',
      'Centralized Redux state management architecture',
      'REST API integration with Express.js and MongoDB backend',
    ],
    metrics: [
      { value: '10,000+', label: 'daily active users' },
      { value: '99.9%', label: 'uptime & reliability' },
      { value: 'Real-time', label: 'transaction tracking' },
      { value: '100%', label: 'secure session handling' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'foneshack',
    title: 'FONESHACK',
    year: '2024',
    genre: 'E-Commerce • React Router • Vite',
    logline: 'Interactive, responsive e-commerce platform for mobile phones and accessories focused on seamless shopping.',
    stack: ['React.js', 'React Router', 'Vite', 'Tailwind CSS', 'Axios'],
    build: [
      'Developed FONESHACK, an interactive and responsive e-commerce platform for mobile phones and accessories, focused on enhancing user engagement.',
      'Built product pages for Mobile Phones, Accessories, and Vendor Services, ensuring smooth client-side navigation using React Router.',
      'Optimized page load speeds and performance by utilizing efficient React.js component structures and Vite for faster builds.',
    ],
    features: [
      'Dynamic catalog for Mobile Phones & Accessories',
      'Dedicated Vendor Services onboarding & browsing',
      'Seamless multi-route navigation with React Router',
      'High-speed cart and product view performance with Vite',
      'Interactive product filters and responsive layouts',
    ],
    metrics: [
      { value: '45%', label: 'faster page loads' },
      { value: '3+', label: 'product service verticals' },
      { value: '100%', label: 'mobile checkout ready' },
    ],
    palette: { from: '#071a0f', via: '#0f4a28', to: '#060e08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'ezbarrel',
    title: 'EZBARREL',
    year: '2024',
    genre: 'B2B Platform • Logistics & Trade',
    logline: 'Dynamic web application tailored for import/export businesses, enhancing operational efficiency and real-time tracking.',
    stack: ['React.js', 'REST APIs', 'Axios', 'Tailwind CSS', 'JavaScript'],
    build: [
      'Created EZBARREL, a dynamic web application tailored for import/export businesses, focusing on enhancing operational efficiency and user accessibility.',
      'Implemented secure user authentication and real-time shipment/transaction tracking dashboards for enterprise clients.',
    ],
    features: [
      'Import/export operational workflow management',
      'Real-time shipment and transaction tracking',
      'Secure enterprise client authentication',
      'Intuitive dashboards with responsive layout controls',
    ],
    metrics: [
      { value: '50%', label: 'operational efficiency gain' },
      { value: 'Live', label: 'transaction tracking' },
      { value: '100%', label: 'accessibility compliance' },
    ],
    palette: { from: '#1a1205', via: '#6e450b', to: '#0d0903', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'elento-hrms',
    title: 'Elento.io – EL FRS',
    year: '2024',
    genre: 'Enterprise HRMS • React.js • Axios',
    logline: 'Comprehensive Employee & HRMS Management System featuring dynamic data tables, interactive forms, and workflow management.',
    stack: ['React.js', 'Axios', 'REST APIs', 'Bootstrap', 'SCSS'],
    build: [
      'Designed and developed frontend interfaces for the employee and HRMS application.',
      'Integrated REST APIs using React.js and Axios with clean error handling.',
      'Implemented responsive UI, dynamic data rendering, interactive forms, tables, and core frontend HR functionalities.',
    ],
    features: [
      'Employee directory and lifecycle management',
      'Dynamic data rendering for complex records',
      'Interactive form validation & submission workflows',
      'Responsive tables with search and filtering',
    ],
    metrics: [
      { value: '1,000+', label: 'employee records handled' },
      { value: '40%', label: 'faster HR onboarding' },
      { value: '100%', label: 'responsive design' },
    ],
    palette: { from: '#120826', via: '#431982', to: '#080414', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'healthcare-portals',
    title: 'Trust MAA Care & 91Care',
    year: '2023',
    genre: 'HealthTech • React.js • GraphQL • PHR',
    logline: 'Healthcare management portal and personal health record (PHR) systems featuring dynamic API data integration.',
    stack: ['React.js', 'GraphQL', 'REST APIs', 'Axios', 'Responsive Web Design'],
    build: [
      'Designed and developed frontend interfaces for Trust MAA Care healthcare application and 91Care PHR application.',
      'Integrated REST APIs and GraphQL APIs for dynamic data handling, medical forms, tables, and health record tracking.',
      'Delivered fully responsive, accessible UI components ensuring smooth doctor and patient workflows.',
    ],
    features: [
      'Personal Health Record (PHR) dynamic data integration',
      'GraphQL & REST API hybrid connectivity',
      'Dynamic healthcare forms, tables, and appointment flows',
      'Cross-device mobile-ready user interfaces',
    ],
    metrics: [
      { value: '90%', label: 'code coverage' },
      { value: '30%', label: 'higher patient engagement' },
      { value: '2', label: 'flagship health systems' },
    ],
    palette: { from: '#061a1a', via: '#0c5252', to: '#030d0d', accent: '#46e3d5' },
    motif: 'shield',
  },
  {
    id: 'heritage-temple-portals',
    title: 'Heritage & Temple Portals',
    year: '2023',
    genre: 'Civic & Tourism • UI Redesign',
    logline: 'Modernized web portals for Yadadri, Bhadrachalam, Vemulawada, Sammakka Saralamma, and AP Urban Development.',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'UI Redesign'],
    build: [
      'Redesigned and developed responsive frontend web interfaces for major heritage portals: Yadadri Temple, Bhadrachalam Temple, Vemulawada Temple, and Sammakka Saralamma Temple.',
      'Worked on UI redesign and frontend development for the Andhra Pradesh Urban Development project, improving page layouts, styling, and navigation.',
    ],
    features: [
      'Modern, user-friendly UI redesign for 4 major temple portals',
      'AP Urban Development government portal interface enhancement',
      'Cross-device compatibility and optimized navigation',
      'Consistent layouts, typography, and visual accessibility',
    ],
    metrics: [
      { value: '5', label: 'civic & heritage portals' },
      { value: '100%', label: 'cross-device compatibility' },
      { value: '40%', label: 'better navigation speed' },
    ],
    palette: { from: '#241005', via: '#73330e', to: '#0d0602', accent: '#ff8a5c' },
    motif: 'flow',
  },
];

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    subtitle: 'Core UI & Frameworks',
    skills: [
      { name: 'React.js', mono: '⚛', note: 'Primary' },
      { name: 'Next.js', mono: '▲', note: 'SSR/SSG' },
      { name: 'JavaScript (ES6+)', mono: 'JS', note: 'Advanced' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'frameworks-styling',
    title: 'Frameworks & Styling',
    subtitle: 'State & Design Systems',
    skills: [
      { name: 'Redux', mono: 'Rx', note: 'State' },
      { name: 'Tailwind CSS', mono: 'TW' },
      { name: 'Bootstrap', mono: 'B' },
      { name: 'React Bootstrap', mono: 'RB' },
      { name: 'SCSS', mono: 'SC' },
      { name: 'CSS Modules', mono: 'CM' },
      { name: 'Responsive Web Design', mono: 'RD', note: 'Expert' },
    ],
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    subtitle: 'Services & Data Fetching',
    skills: [
      { name: 'REST APIs', mono: '⇌', note: 'Core' },
      { name: 'GraphQL', mono: '◈' },
      { name: 'Axios', mono: 'Ax' },
    ],
  },
  {
    id: 'tools-version-control',
    title: 'Tools & Version Control',
    subtitle: 'Workflows & CI/CD',
    skills: [
      { name: 'VS Code', mono: 'VS' },
      { name: 'Git', mono: '⎇' },
      { name: 'GitHub', mono: 'GH' },
      { name: 'GitLab', mono: 'GL' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Design',
    subtitle: 'Wireframing & Prototyping',
    skills: [
      { name: 'Figma', mono: 'Fg', note: 'UI/UX' },
      { name: 'Adobe Photoshop', mono: 'Ps' },
      { name: 'Wireframing & Prototyping', mono: 'Wf' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Backend Knowledge',
    subtitle: 'Data Stores',
    skills: [
      { name: 'MongoDB', mono: 'M' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Oracle', mono: 'Ora' },
    ],
  },
  {
    id: 'core-expertise',
    title: 'Core Expertise',
    subtitle: 'Engineering Strengths',
    skills: [
      { name: 'UI Development', mono: 'UI', note: 'Core' },
      { name: 'Website Redesign', mono: 'Re' },
      { name: 'Frontend Architecture', mono: 'FE' },
      { name: 'Performance Optimization', mono: '⚡' },
    ],
  },
];

export const skillEvidence = {
  'React.js': ['VS TECH WAVES', 'GENZPAY', 'FONESHACK', 'Entro Labs IT Solutions'],
  'Next.js': ['Entro Labs IT Solutions', 'Scalable Architecture', 'SSR Pages'],
  'JavaScript (ES6+)': ['Virtu Tech Solutions', 'Interactive UI Components', 'ES6+ Features'],
  'HTML5': ['Yadadri Temple', 'Bhadrachalam Temple', 'Semantic Web Standards'],
  'CSS3': ['Responsive Layouts', 'CSS Animations', 'Flexbox & CSS Grid'],
  'Redux': ['GENZPAY Platform', 'Centralized State Flow', 'Action Dispatching'],
  'Tailwind CSS': ['VS TECH WAVES', 'FONESHACK', 'Utility-First Design'],
  'Bootstrap': ['Entro Labs IT Solutions', 'EL FRS HRMS', 'Responsive Grids'],
  'React Bootstrap': ['Elento.io HRMS', 'Modal & Form Systems'],
  'SCSS': ['Entro Labs Web Apps', 'Modular Nested Styling'],
  'CSS Modules': ['Trust MAA Care', '91Care PHR Application'],
  'Responsive Web Design': ['AP Urban Development', 'Heritage Temple Portals', 'Mobile-First UI'],
  'REST APIs': ['Entro Labs IT Solutions', 'DC Management', 'Axios Data Pipelines'],
  'GraphQL': ['91Care PHR', 'Trust MAA Care Portal'],
  'Axios': ['Elento.io HRMS', 'GENZPAY', 'Error Handling & Interceptors'],
  'VS Code': ['Primary IDE', 'Code Snippets & Extensions'],
  'Git': ['Feature Branches', 'Version Control Workflows'],
  'GitHub': ['Open Source Contributions', 'Portfolio Projects'],
  'GitLab': ['Enterprise Repositories', 'Merge Requests'],
  'Postman': ['API Testing', 'Endpoint Validation'],
  'Figma': ['Design System Hand-off', 'Component Alignment'],
  'Adobe Photoshop': ['Asset Preparation', 'Image Optimization'],
  'Wireframing & Prototyping': ['UI/UX Prototyping', 'Layout Architecture'],
  'MongoDB': ['GENZPAY Digital Payments Store', 'MERN Stack'],
  'MySQL': ['Relational Schemas', 'Database Queries'],
  'Oracle': ['Enterprise Database Knowledge'],
  'UI Development': ['Entro Labs', 'Virtu Tech', '13+ Client Projects'],
  'Website Redesign': ['Yadadri & Temple Portals', 'AP Urban Development', 'VS TECH WAVES'],
  'Frontend Architecture': ['Clean Scalable Component Hierarchy'],
  'Performance Optimization': ['40% Page Load Time Reduction at Virtu Tech'],
};

const violet = { from: '#0d0714', via: '#3d1a6e', to: '#070510', accent: '#b98bff' };
const amber = { from: '#14100a', via: '#5a3a0a', to: '#0a0804', accent: '#ffb547' };
const crimson = { from: '#14060a', via: '#5a0b1b', to: '#070408', accent: '#ff3d5a' };
const ocean = { from: '#060d14', via: '#0a3050', to: '#040809', accent: '#4cc9ff' };
const jade = { from: '#060e09', via: '#0d3520', to: '#040806', accent: '#46e3a8' };

export const achievements = [
  {
    id: 'perf-reduction',
    title: '40% Load Time Cut',
    org: 'Virtu Tech Solutions',
    laurel: 'Performance',
    detail: 'Reduced page load time by 40% through code optimization, asset tuning, and efficient component structures.',
    palette: ocean,
  },
  {
    id: 'user-engagement',
    title: '30% Engagement Growth',
    org: 'Virtu Tech Solutions',
    laurel: 'User Experience',
    detail: 'Developed responsive, high-performing web applications leading to a 30% increase in active user engagement.',
    palette: jade,
  },
  {
    id: 'test-coverage',
    title: '90% Unit Test Coverage',
    org: 'Virtu Tech Solutions',
    laurel: 'Code Quality',
    detail: 'Implemented unit testing achieving 90% code coverage, cutting production bug reports by 50%.',
    palette: crimson,
  },
  {
    id: 'genzpay-scale',
    title: '10,000+ Daily Users',
    org: 'GENZPAY Platform',
    laurel: 'Scale & FinTech',
    detail: 'Led front-end engineering for a real-time digital payment platform serving 10,000+ daily active users.',
    palette: amber,
  },
  {
    id: 'academic-inter',
    title: '91% Distinction',
    org: 'SR Junior College (MPC)',
    laurel: 'Academic Merit',
    detail: 'Achieved 91% academic distinction in Intermediate (MPC) Board of Intermediate Education.',
    palette: violet,
  },
];

export const certifications = [
  { name: 'React.js Advanced Concepts', issuer: 'Professional Development', link: '#' },
  { name: 'NPTEL Online Certification', issuer: 'NPTEL', link: '#' },
  { name: 'NCC Certification', issuer: 'National Cadet Corps', link: '#' },
  { name: 'Open-Source Contributor', issuer: 'GitHub', link: 'https://github.com/rakeshanarajula' },
];

export const topPicks = [
  { label: 'The main character', title: 'Rakesh Anarajula', detail: 'Front-End & React Developer · 3.4 Yrs Exp', palette: crimson },
  { label: 'Enterprise Web', title: 'VS TECH WAVES', detail: 'React.js · Tailwind CSS · Framer Motion · Vite', palette: ocean },
  { label: '10,000+ Users', title: 'GENZPAY', detail: 'FinTech · Real-time digital payments & Redux', palette: crimson },
  { label: 'Performance high', title: '40% Faster Load', detail: 'Optimized page speeds at Virtu Tech Solutions', palette: ocean },
  { label: 'Code reliability', title: '90% Test Coverage', detail: '50% bug reduction through unit testing', palette: jade },
  { label: 'E-Commerce engine', title: 'FONESHACK', detail: 'Mobile & accessories shopping with React Router', palette: amber },
  { label: 'B2B Trade Platform', title: 'EZBARREL', detail: 'Import/export operations & transaction tracking', palette: amber },
  { label: 'Enterprise HRMS', title: 'Elento.io EL FRS', detail: 'Employee lifecycle, dynamic tables & Axios', palette: violet },
  { label: 'Healthcare portal', title: 'Trust MAA Care', detail: 'GraphQL & REST API health management', palette: jade },
  { label: 'Heritage & Civic', title: 'Temple Portals', detail: 'Yadadri, Bhadrachalam & AP Urban Dev', palette: crimson },
];

export const seasons = [
  {
    number: 1,
    title: 'The Origin & Discipline',
    period: '2016 – 2019',
    synopsis: 'Secondary school at Ambitus School (CGPA 8.2) and Intermediate MPC at SR Junior College with 91% distinction, alongside NCC certification.',
    episodes: [
      { code: 'S01E01', title: 'Foundation & Schooling', meta: 'Ambitus School, Siddipet', detail: 'Secondary School of Education · CGPA 8.2 · Foundational academics and discipline.' },
      { code: 'S01E02', title: 'Academic Distinction & NCC', meta: 'SR Junior College, Karimnagar', detail: 'Intermediate (MPC) · Scored 91% · Awarded NCC Certification.' },
    ],
  },
  {
    number: 2,
    title: 'Computer Science Engineering',
    period: '2019 – 2023',
    synopsis: 'Bachelor of Technology in Computer Science Engineering at Nalla Narasimha Reddy Group of Institutions — diving into data structures, algorithms, and web development.',
    episodes: [
      { code: 'S02E01', title: 'B.Tech in CSE', meta: 'NNRG Hyderabad', detail: 'B.Tech CSE · CGPA 6.37 · Coursework in Data Structures, Algorithms, Web Development & Databases.' },
      { code: 'S02E02', title: 'Web Development Spark', meta: 'NPTEL & Open Source', detail: 'Completed NPTEL certification and began building personal portfolios and web projects.' },
    ],
  },
  {
    number: 3,
    title: 'Industry Debut: Virtu Tech',
    period: 'July 2023 – June 2025',
    synopsis: 'Two years as Front-End Developer at Virtu Tech Solutions — boosting user engagement by 30%, cutting page load time by 40%, and achieving 90% unit test coverage.',
    episodes: [
      { code: 'S03E01', title: 'Front-End Engineering', meta: 'Virtu Tech Solutions', detail: 'Engineered responsive web applications that grew user engagement by 30%.' },
      { code: 'S03E02', title: 'Speed & Code Quality', meta: '40% Faster · 90% Coverage', detail: 'Reduced page load times by 40% and cut production bug reports by 50% through unit tests.' },
      { code: 'S03E03', title: 'Civic & Heritage Portals', meta: 'Yadadri & Bhadrachalam', detail: 'Delivered user-friendly UI redesigns for high-traffic temple and urban development websites.' },
    ],
  },
  {
    number: 4,
    title: 'Enterprise Scalability: Entro Labs',
    period: 'June 2025 – Present',
    synopsis: 'Front-End Developer & React Developer at Entro Labs IT Solutions — building reusable UI component systems with React.js, Next.js, SCSS, and RESTful APIs.',
    episodes: [
      { code: 'S04E01', title: 'React & Next.js Architecture', meta: 'Entro Labs IT Solutions', detail: 'Developed scalable enterprise applications using React.js, Next.js, Bootstrap, and SCSS.' },
      { code: 'S04E02', title: 'API & UX Optimization', meta: 'End-to-End Feature Delivery', detail: 'Integrated RESTful APIs, optimized page performance, and partnered with UI/UX designers.' },
    ],
  },
  {
    number: 5,
    title: 'The Flagship Productions',
    period: '2023 – 2025',
    synopsis: 'Production-grade applications spanning FinTech, enterprise corporate platforms, e-commerce, and healthcare systems.',
    episodes: [
      { code: 'S05E01', title: 'VS TECH WAVES', meta: 'Enterprise Showcase', detail: 'React.js, Tailwind CSS, Framer Motion, and Vite corporate platform.' },
      { code: 'S05E02', title: 'GENZPAY Platform', meta: '10,000+ Daily Users', detail: 'Digital payment platform with secure authentication & real-time tracking.' },
      { code: 'S05E03', title: 'FONESHACK & EZBARREL', meta: 'E-Commerce & Trade', detail: 'Responsive phone store with React Router & B2B import/export tracking system.' },
    ],
  },
];

export const introSlides = [
  {
    kicker: 'Identity',
    title: 'Front-End Developer',
    lines: ['3.4 Years Experience', 'React.js, Next.js, JavaScript (ES6+), Redux, Tailwind CSS', 'Entro Labs IT Solutions & Virtu Tech Solutions'],
    chips: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Redux', 'Tailwind CSS', 'REST APIs'],
  },
  {
    kicker: 'Work Experience',
    title: 'Entro Labs & Virtu Tech',
    lines: ['Entro Labs IT Solutions: React.js, Next.js, Bootstrap, SCSS & REST APIs', 'Virtu Tech Solutions: 40% page load reduction, 30% engagement jump, 90% test coverage'],
    chips: ['Entro Labs', 'Virtu Tech', 'UI Architecture', 'Page Speed'],
  },
  {
    kicker: 'Key Productions',
    title: 'Featured Works',
    lines: ['VS TECH WAVES – Corporate SAP & ERP showcase with Vite & Framer Motion', 'GENZPAY – Digital payment platform serving 10,000+ daily active users', 'FONESHACK – Interactive mobile & accessories e-commerce with React Router'],
  },
  {
    kicker: 'Engineering Impact',
    title: 'Proven Results',
    lines: ['40% reduction in page load time through optimization', '90% unit test code coverage cutting bugs by 50%', '13+ enterprise, civic, health, and e-commerce projects delivered'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech in CSE',
    lines: ['Nalla Narasimha Reddy Group of Institutions (2019 – 2023)', 'Intermediate (MPC) at SR Junior College (91% Distinction)', 'Ambitus School (CGPA 8.2)'],
  },
  {
    kicker: 'Certifications',
    title: 'Credentials',
    lines: ['React.js Advanced Concepts', 'NPTEL Online Certification', 'NCC Certification', 'Active GitHub Open Source Contributor'],
  },
];

export const viewerProfiles = [
  {
    id: 'rakesh',
    name: 'Rakesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, skills & experience first',
    color: '#4cc9ff',
    order: ['story', 'skills', 'originals', 'moments', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Experience & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Featured Works`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Key Moments · Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
