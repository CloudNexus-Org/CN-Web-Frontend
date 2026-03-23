export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDate: string;
}

export const jobsData: Job[] = [
  {
    id: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced backend engineer to help build and scale our cloud infrastructure. You'll work on distributed systems that power millions of API requests daily.",
    responsibilities: [
      "Design and implement scalable backend services and APIs",
      "Optimize database queries and improve system performance",
      "Collaborate with frontend engineers to deliver seamless experiences",
      "Participate in code reviews and mentor junior engineers",
      "Monitor and maintain production systems"
    ],
    requirements: [
      "5+ years of experience with backend development",
      "Strong proficiency in Node.js, Python, or Go",
      "Experience with PostgreSQL, Redis, and message queues",
      "Understanding of microservices architecture",
      "Excellent communication and collaboration skills"
    ],
    postedDate: "2026-03-10"
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our design team to craft intuitive and beautiful user experiences. You'll own the end-to-end design process from research to final implementation.",
    responsibilities: [
      "Lead design projects from concept to launch",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with product and engineering teams",
      "Contribute to and evolve our design system"
    ],
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio demonstrating UX/UI expertise",
      "Proficiency in Figma and modern design tools",
      "Understanding of frontend development (HTML/CSS)",
      "Experience with design systems and component libraries"
    ],
    postedDate: "2026-03-08"
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're seeking a talented frontend engineer to build modern web applications with React and TypeScript. You'll create performant, accessible interfaces used by thousands of developers.",
    responsibilities: [
      "Build and maintain React applications with TypeScript",
      "Implement pixel-perfect designs with attention to detail",
      "Optimize application performance and bundle size",
      "Write comprehensive tests and documentation",
      "Contribute to open-source projects"
    ],
    requirements: [
      "4+ years of frontend development experience",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Experience with Next.js, Tailwind CSS, and build tools",
      "Strong understanding of web performance and accessibility",
      "Passion for creating exceptional user experiences"
    ],
    postedDate: "2026-03-05"
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description: "Help us build and maintain reliable cloud infrastructure. You'll work with cutting-edge technologies to ensure our systems are secure, scalable, and highly available.",
    responsibilities: [
      "Manage and optimize cloud infrastructure (AWS/GCP)",
      "Implement CI/CD pipelines and automation tools",
      "Monitor system performance and respond to incidents",
      "Improve security posture and compliance",
      "Document infrastructure and runbooks"
    ],
    requirements: [
      "3+ years of DevOps or infrastructure experience",
      "Proficiency with Docker, Kubernetes, and Terraform",
      "Experience with AWS or Google Cloud Platform",
      "Strong scripting skills (Bash, Python)",
      "Knowledge of monitoring tools like Datadog or Prometheus"
    ],
    postedDate: "2026-03-12"
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Be the trusted advisor for our enterprise customers. You'll help them maximize value from our platform and drive product adoption across their organizations.",
    responsibilities: [
      "Build and maintain relationships with key accounts",
      "Drive product adoption and customer satisfaction",
      "Conduct business reviews and success planning",
      "Advocate for customer needs to internal teams",
      "Identify expansion and upsell opportunities"
    ],
    requirements: [
      "3+ years in customer success or account management",
      "Experience with B2B SaaS products",
      "Strong technical aptitude and communication skills",
      "Ability to analyze data and drive insights",
      "Track record of improving customer retention"
    ],
    postedDate: "2026-03-01"
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    description: "Create clear and comprehensive documentation for developers. You'll work closely with engineering teams to produce guides, API references, and tutorials.",
    responsibilities: [
      "Write and maintain technical documentation",
      "Create tutorials, guides, and code examples",
      "Review and edit content from engineers",
      "Improve documentation structure and discoverability",
      "Gather feedback from the developer community"
    ],
    requirements: [
      "2+ years of technical writing experience",
      "Understanding of software development concepts",
      "Excellent writing and editing skills",
      "Experience with documentation tools (Markdown, Git)",
      "Ability to explain complex topics simply"
    ],
    postedDate: "2026-02-28"
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Protect our platform and customer data. You'll implement security best practices, conduct audits, and respond to security incidents.",
    responsibilities: [
      "Implement and maintain security controls",
      "Conduct security assessments and penetration testing",
      "Respond to security incidents and vulnerabilities",
      "Develop security automation and monitoring tools",
      "Drive security awareness across the company"
    ],
    requirements: [
      "4+ years in application or cloud security",
      "Knowledge of common vulnerabilities (OWASP Top 10)",
      "Experience with security tools and frameworks",
      "Understanding of compliance standards (SOC 2, ISO 27001)",
      "Strong problem-solving and communication skills"
    ],
    postedDate: "2026-03-14"
  },
  {
    id: "sales-development-rep",
    title: "Sales Development Representative",
    department: "Sales",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our growing sales team to connect with potential customers. You'll identify opportunities, qualify leads, and schedule demos for our account executives.",
    responsibilities: [
      "Generate qualified leads through outbound outreach",
      "Research and identify target accounts",
      "Schedule demos and meetings for sales team",
      "Maintain accurate records in CRM",
      "Collaborate with marketing on campaigns"
    ],
    requirements: [
      "1+ years in sales or business development",
      "Strong communication and interpersonal skills",
      "Self-motivated with a drive to exceed goals",
      "Experience with CRM tools (Salesforce, HubSpot)",
      "Interest in technology and SaaS products"
    ],
    postedDate: "2026-03-16"
  }
];

export const departments = ["All", "Engineering", "Design", "Customer Success", "Marketing", "Sales"];
export const locations = ["All", "Remote", "San Francisco, CA", "New York, NY"];
export const types = ["All", "Full-time", "Contract"];
