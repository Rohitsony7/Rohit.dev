import { format } from "path";
import { calculateTotalExperience } from "./calculate-experience";
import { formatPeriod } from "./format-period";

// Calculate total experience once and reuse it
const totalExperience = calculateTotalExperience("2019-01-01");
export { totalExperience };

export const resumeData = {
  name: "Rohit Soni",
  title: "Lead Frontend Engineer",
  location: "Mumbai, India",
  email: "rsony.721@gmail.com",
  phone: "+91.789.193.8911",
  github: "https://github.com/Rohitsony7",
  linkedin: "https://www.linkedin.com/in/rohitsony7/",
  bio: `Software Engineer with ${totalExperience} of professional experience and a good problem solver with a demonstrated history of working in the tech industry.`,
  resumeLink: "/resume.pdf",
  totalExperience, // Reuse the calculated value
  skills: [
    "JavaScript",
    "TypeScript",
    "Angular",
    "Node.js",
    "Express.js",
    "HTML/CSS",
    "Chart.js",
    "D3.js",
  ],
  experience: [
    {
      id: 1,
      title: "Lead Frontend Engineer",
      company: "Jio Platforms Limited (5G R&D Team)",
      period: `Nov 2020 - Present `,
      location: "Mumbai, India",
      description: [
        "Designed & implemented JIO UAP (Issue Tracking System) from scratch.",
        "Led the design and development of JIO Learning Platform for onboarding and training.",
        "Led frontend for JIO GPT (AI chatbot) and JIO Office (using Collabora Online).",
        "Created JIO SON (Self Organizing Network) project with dynamic dashboards and live reports.",
        "Architected JIO Backup & Restore and JIO SCP Frontend projects, guiding frontend team.",
        "Visualized Indian telecom circles using Open Street Map API and Chart.js.",
        "Reduced main.js bundle size by 97.4% using lazy loading.",
        "Developed reusable NPM packages reducing build size by 23%.",
      ],
      technologies: [
        "Angular",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Angular Material",
        "RxJs",
        "Docker",
      ],
      current: false,
    },
    {
      id: 2,
      title: "Mentor (Part-time)",
      company: "Newton School",
      period: `Feb 2022 - Dev 2024 for 2 years`,
      location: "Remote",
      description: [
        "Provide personalized mentorship and insightful lessons to guide students and professionals in full-stack development.",
        "Address queries promptly, conduct code reviews, collaborate on curriculum development, and organize coding workshops.",
      ],
      technologies: [
        "Mentoring",
        "Teaching",
        "Algorithms",
        "Node.js",
        "React.js",
        "Angular",
        "Core Java",
        "JavaScript",
        "Data Structures",
      ],
      current: false,
    },
    {
      id: 3,
      title: "Full Stack Software Engineer",
      company: "Celebal Technologies",
      period: ` June 2020 - Oct 2020 for 5 months`,
      location: "Jaipur, India",
      description: [
        "CT-Mining - Interface for training and managing ML answer sets with UI and backend integration.",
        "Dalmia Cement web App - Web app for parametric data analysis across multiple filters.",
      ],
      technologies: [
        "Angular 8",
        "HTML",
        "CSS",
        "JSON",
        "Node.js",
        "Express.js",
        "Git",
      ],
    },
    {
      id: 4,
      title: "Software Development Engineer",
      company: "RoboMQ",
      period: `Jan 2019 - May 2020  for 1 year 5 months`,
      location: "Jaipur, India",
      description: [
        "Managed RoboMQ Connect iPaaS (no-code API/data integration platform) across teams in India and USA.",
        "Developed frontend and backend systems using Angular, Node.js, and MySQL.",
        "Wrote end-to-end Protractor test cases including UI and API tests using Jasmine framework.",
      ],
      technologies: [
        "Angular 7",
        "Node.js",
        "Express",
        "MySQL",
        "Angular Material",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
      ],
    },
  ],
  education: {
    degree:
      "Bachelor in Technology with HONOURS in Computer Science & Engineering",
    year: "2019",
    institution: "Jaipur Engineering College and Research Centre",
    location: "Jaipur, India",
  },
  certificates: [
    {
      issuer: "FreeCodeCamp",
      name: "JavaScript Algorithms and Data Structures Developer",
      url: "https://www.freecodecamp.org/certification/rohit_sony7/javascript-algorithms-and-data-structures",
    },
    {
      issuer: "FreeCodeCamp",
      name: "Responsive Web Design",
      url: "https://www.freecodecamp.org/certification/rohit_sony7/responsive-web-design",
    },
  ],
  languages: ["English", "Hindi"],
  skills_categories: {
    frontend_stack: [
      "JavaScript",
      "TypeScript",
      "Angular",
      "HTML",
      "CSS",
      "Angular Material",
      "jQuery",
      "Bootstrap",
    ],
    backend_stack: ["Node.js", "Express.js", "Core Java"],
    data_visualisation: ["Chart.js", "D3.js", "Open Street Map", "Highcharts"],
    message_queue: ["Kafka", "RabbitMQ"],
    version_control: ["GIT"],
    operating_systems: ["Linux", "MacOS", "Windows"],
  },
};
