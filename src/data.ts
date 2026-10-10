// ── Centralized content data ─────────────────────────────────────────
// Edit this file to update portfolio content without touching components.

export const personal = {
  name: 'Arjun Ashkar N C',
  monogram: 'AA',
  role: 'Aspiring Web Developer | Computer Science Engineering Student',
  intro:
    "I'm a Computer Science Engineering student at SRM IST, Vadapalani, with a strong foundation in programming, algorithmic problem-solving, and web development. I enjoy building practical applications, exploring machine learning, and developing user-focused digital experiences.",
  // Replace with real URLs when available
  github: 'https://github.com/Arjun-Ashkar', // e.g. 'https://github.com/yourusername'
  linkedin: 'https://www.linkedin.com/in/arjunashkarnc/', // e.g. 'https://linkedin.com/in/yourusername'
  email: 'arjunashkarnc@gmail.com',
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Programming Languages',
    items: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
  },
  {
    group: 'Frameworks & Web',
    items: ['React', 'FastAPI', 'Flask', 'HTML', 'CSS'],
  },
  {
    group: 'Databases',
    items: ['MySQL'],
  },
  {
    group: 'Tools & Dev Tech',
    items: ['Git', 'GitHub', 'Visual Studio Code'],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  status?: 'complete' | 'in-progress';
  description: string;
  features: string[];
  stack: string[];
  demoUrl?: string;   // leave empty until real URL exists
  repoUrl?: string;   // leave empty until real URL exists
}

export const projects: Project[] = [
  {
    id: 'skillverse',
    title: 'SkillVerse AI',
    category: 'AI/ML · Career Technology',
    status: 'complete',
    description:
      'An AI-powered career intelligence platform designed to predict student placement readiness and provide personalized career guidance.',
    features: [
      'Random Forest model trained on 5,000+ student records',
      'Explainable AI insights via SHAP',
      'Resume parsing',
      'AI mock interviews',
      'Personalized career recommendations',
      'PDF report generation',
    ],
    stack: [
      'Python', 'FastAPI', 'scikit-learn', 'React 19',
      'TypeScript', 'Vite', 'Tailwind CSS', 'DuckDuckGo Search API',
    ],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'fair-distribution',
    title: 'Fair Distribution System',
    subtitle: 'Online Ration Card Management Portal',
    category: 'Full-Stack Web Development',
    status: 'complete',
    description:
      'A public ration distribution management portal supporting registration, inventory management, application tracking, and monthly eligibility validation.',
    features: [
      'Role-based authentication',
      'Aadhaar-based user registration',
      'Inventory management',
      'Application tracking',
      'Monthly eligibility validation',
      'Secure password hashing',
      'RESTful APIs',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Flask', 'Python', 'MySQL'],
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 'hr-leave',
    title: 'HR Leave Management System',
    subtitle: 'Role-Based Workflow',
    category: 'Full-Stack Web Development',
    status: 'in-progress',
    description:
      'A role-based HR leave management system designed to streamline leave requests, approval workflows, and employee leave tracking.',
    features: [
      'JWT authentication',
      'Role-based access control',
      'Leave request & approval workflows',
      'Email notifications',
      'Leave balance tracking',
      'Input validation',
      'Responsive dashboards',
    ],
    stack: [
      'Spring Boot', 'Spring Security', 'React', 'MySQL',
      'Hibernate/JPA', 'JWT', 'Axios', 'JavaMailSender',
    ],
    demoUrl: '',
    repoUrl: '',
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
  field?: string;
  year: string;
  score?: string;
  scoreLabel?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'SRM Institute of Science and Technology — Vadapalani',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    year: 'Expected 2027',
    score: '9.58 / 10',
    scoreLabel: 'CGPA',
  },
  {
    institution: 'Union Christian Matriculation Higher Secondary School',
    degree: 'Class XII',
    year: '2023',
    score: '78%',
    scoreLabel: 'Percentage',
  },
  {
    institution: 'Union Christian Matriculation Higher Secondary School',
    degree: 'Class X',
    year: '2021',
    // Score omitted — unverified value in source resume
  },
];

export interface Certification {
  title: string;
  provider: string;
  date: string;
  description?: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Divide and Conquer, Sorting and Searching, and Randomized Algorithms',
    provider: 'Stanford Online / Coursera',
    date: 'March 2025',
    description:
      'Studied algorithm design and problem-solving techniques, including merge sort, quicksort, binary search, recurrence analysis, and randomized algorithms.',
    credentialId: 'QI2K34VUOEB5',
  },
  {
    title: 'Certificate Program in Artificial Intelligence and Machine Learning',
    provider: 'NASSCOM FutureSkills Prime',
    date: 'October 2025',
    description:
      'AI and Machine Learning certification with a Gold Category result and 100% achievement across 26 modules.',
  },
  {
    title: 'Software Engineering Fundamentals — Software Development and Testing',
    provider: 'Infosys',
    date: 'March 2026',
    description:
      'Completed a certification covering core software engineering principles, including the software development lifecycle, coding practices, debugging, and software testing methodologies. The course focused on building reliable and maintainable software through structured development processes and quality assurance techniques.',
  },
  {
    title: 'Certificate Program in Cloud Computing Engineering (Azure/AWS)',
    provider: 'NASSCOM',
    date: 'March 2026',
    description:
      'Completed a cloud computing program covering compute, storage, networking, deployment, cloud architecture, scalability, and high availability.',
  },
];

export interface Publication {
  title: string;
  journal: string;
  date?: string;
  abstract: string;
  metrics?: { label: string; value: string }[];
}

export const publications: Publication[] = [
  {
    title:
      'Forest Fire Severity Prediction using Random Forest and Neural Network Stacking with SMOTE',
    journal: 'IJIREEICE',
    abstract:
      'Developed a hybrid stacking model combining Random Forest, Neural Network, and Logistic Regression for forest-fire prediction. Applied SMOTE and feature engineering to address class imbalance and support high-risk fire detection.',
    metrics: [
      { label: 'Accuracy', value: '87.2%' },
      { label: 'AUC', value: '0.925' },
    ],
  },
  {
    title:
      'Predictive Analytics for Career Risk and Opportunity Analysis for Students: A Calibrated Explainable AI Framework',
    journal: 'IJVRA',
    date: 'April 2026',
    abstract:
      'Published research on an explainable career intelligence system using Random Forest, calibration, and SHAP to predict student placement readiness. Model trained on 5,000 student records with personalized skill recommendations.',
    metrics: [
      { label: 'Accuracy', value: '92.6%' },
      { label: 'F1-Score', value: '0.92' },
      { label: 'Dataset', value: '5,000 records' },
    ],
  },
];
