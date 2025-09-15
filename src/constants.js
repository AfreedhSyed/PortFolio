// Portfolio Data Constants
// Update this file to automatically reflect changes across the site

// Personal Information
export const personalInfo = {
  name: "Afreedh",
  role: "Java Full Stack Developer",
  location: "Bangalore, India",
  email: "syedafreedh30@gmail.com",
  phone: "+91 9014495212",
  description: "Aspiring developer turning ideas into impactful web solutions through code and creativity",
  codeLines: [
    'const developer = {',
    '    name: "Afreedh Syed",',
    '    role: "Java Full Stack Developer",',
    '    location: "Bangalore, India",',
    '    email: "syedafreedh30@gmail.com",',
    '    skills: ["Java", "Spring Boot", "React", "MySQL"],',

    '};',
    
  ]
};

// Projects Data
export const projects = [
  {
    id: 1,
    title: "QuickBite",
    description: "A full-stack Food Ordering Website using Java Full Stack. Features include user authentication, payment integration, and admin dashboard.",
    image: "https://tse4.mm.bing.net/th/id/OIP.eyiBzixMGTKLgMXuoUtl2AHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
    technologies: [
      { name: "Java", icon: "fab fa-java" },
      { name: "JEE", icon: "fas fa-server" },
      { name: "JDBC", icon: "fas fa-database" },
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "MySQL", icon: "fas fa-database" }
    ],
    github: "https://github.com/AfreedhSyed/Food-Ordering-Website",
    demo: "https://www.linkedin.com/posts/afreedh-syed-07b093264_java-webdevelopment-jsp-activity-7348466417928728577-RCSb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDLrZ8BU0qnitWXvyGu2apmCY156bQWSmE",
    featured: true
  },
  {
    id: 2,
    title: "Library MS",
    description: "A full-stack Library Management System using Spring Boot and React. Features include user authentication, payment integration, and admin dashboard.",
    image: "https://cdn5.vectorstock.com/i/1000x1000/97/84/digital-library-vector-12489784.jpg",
    technologies: [
      { name: "React", icon: "fab fa-react" },
      { name: "Spring Boot", icon: "fas fa-leaf" },
      { name: "Spring Data JPA", icon: "fas fa-database" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
      { name: "MySQL", icon: "fas fa-database" }
    ],
    github: "https://github.com/AfreedhSyed/Library-Management-System",
    demo: "https://your-taskmanager-demo.com",
    featured: true
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and featuring dark theme, smooth animations, and dynamic content loading.",
    image: "https://cdn-icons-png.flaticon.com/512/3419/3419206.png",
    technologies: [
      { name: "React", icon: "fab fa-react" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "Responsive Design", icon: "fas fa-mobile-alt" }
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://elegant-sunburst-188804.netlify.app/",
    featured: true
  }
];

// Experience Data
export const experience = [
  
  {
    id: 1,
    type: "Training",
    company: "Tap Academy",
    position: "Java Full Stack Developer Trainee",
    duration: "Mar 2025 -Oct 2025",
    location: "Bangalore, Karnataka",
    achievements: [
      "Mastered Java, Spring Boot, React, and MySQL",
      "Built end-to-end full stack web applications",
      "Improved problem-solving through 200+ coding challenges",
      "Gained industry readiness with projects and mock interviews"
    ],
    
    technologies: ["Java", "Spring Boot", "React", "MySQL", "HTML5", "CSS3", "JavaScript", "Git"]
  },
  {
    id: 2,
    type: "education",
    company: "SIETK",
    position: "Bachelor of Computer Science",
    duration: "2021 - 2025",
    location: "Tirupati, Andhra Pradesh",
    achievements: [
      "Maintained consistent academic performance",
      "Completed multiple programming projects",
      "Participated in coding competitions",
      "Developed strong problem-solving skills"
    ],
    technologies: ["Java", "Python", "C++", "Database Design", "Software Engineering", "Data Structures", "Algorithms"]
  }
];

// Skills Data - Unified structure for grid display
export const skills = [
  {
    category: "All Skills",
    items: [
      { name: "Java", icon: "fab fa-java" },
      { name: "React", icon: "fab fa-react" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "SpringBoot", icon: "fas fa-leaf" },
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "Hibernate", icon: "fas fa-layer-group" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "AWS", icon: "fab fa-aws" }
      
    ]
  }
];

// Contact Information
export const contactInfo = {
  email: "syedafreedh30@gmail.com",
  phone: "+91 9014495212",
  location: "Bangalore, Karnataka",
  availability: "Available for freelance work",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/afreedh-syed-07b093264/",
      icon: "fab fa-linkedin"
    },
    {
      platform: "GitHub", 
      url: "https://github.com/AfreedhSyed",
      icon: "fab fa-github"
    },
    {
      platform: "Twitter",
      url: "https://x.com/afreedhsyed0301?t=oH8mZQvEp35TaKmfmkhd5w&s=09", 
      icon: "fab fa-twitter"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/_affi_007?igsh=ZWk1bHY4dTg1eHNy",
      icon: "fab fa-instagram"
    }
  ]
};

// Navigation Links
export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

// Footer Links
export const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
