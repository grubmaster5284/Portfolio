// Consolidated portfolio data - single source of truth
export const portfolioData = {
  hero: {
    name: "Satvik Gedam",
    taglines: [
      "AI Software Developer @ Cetas Healthcare",
      "AI-Driven Flutter Specialist", 
      "GenAI Integrator & Automation Expert",
      "Rapid App Development Consultant"
    ],
    description: "AI Software Developer at Cetas Healthcare, specializing in AI integration into existing apps and rapid consulting-based app development. Certified GenAI Mastermind with expertise in Flutter, GenAI integration, and leveraging AI tools for accelerated development.",
    ctaButtons: {
      primary: { text: "Get In Touch", href: "#contact" },
      secondary: { text: "LinkedIn", href: "https://www.linkedin.com/in/satvik-gedam-2a2866295/", external: true }
    }
  },
  
  about: {
    title: "About Me",
    content: [
      "I'm an AI Software Developer at Cetas Healthcare, where I specialize in integrating AI capabilities into existing applications and rapidly developing custom apps for clients. My expertise lies in AI-augmented mobile development with advanced AI tools stack.",
      "With a strong foundation in Flutter development and AI integration, I focus on scalable user experience and intelligent automation rather than backend engineering. I architect apps using CLEAN Architecture and SOLID principles, emphasizing maintainable, scalable AI-driven solutions."
    ],
    highlights: [
      {
        title: "AI Integration Specialist",
        description: "Expert in integrating generative AI and LLMs directly into existing mobile applications, modernizing apps with cutting-edge AI capabilities."
      },
      {
        title: "Rapid Development",
        description: "Specialize in rapid development and deployment using advanced AI tools stack including Cursor, Replit, Dialogflow CX, Lovable, and Emergent."
      }
    ]
  },

  skills: {
    title: "Skills",
    categories: [
      {
        title: "AI & Machine Learning",
        skills: ["Dialogflow CX", "LLM Integration", "OpenAI APIs", "Gemini", "ChatGPT", "Vertex AI"]
      },
      {
        title: "Mobile Development",
        skills: ["Flutter", "Rapid Mobile App Deployment", "Clean Architecture", "SOLID Principles"]
      },
      {
        title: "Development Tools",
        skills: ["Cursor", "Replit", "Lovable", "Emergent", "Workflow Automation", "AI Tools"]
      },
      {
        title: "Business & Consulting",
        skills: ["Client Consulting", "Market Research", "Business Intelligence", "Automation"]
      }
    ]
  },

  experience: {
    title: "Experience",
    companies: [
      {
        name: "Cetas Healthcare",
        duration: "2 yrs 1 mo",
        location: "Remote",
        roles: [
          {
            title: "AI Software Developer",
            employmentType: "Freelance",
            period: "May 2024 - Present",
            location: "Mumbai, Maharashtra, India",
            summary: "Integrating AI capabilities into existing applications and rapidly developing custom apps for clients, specializing in AI-augmented mobile development with advanced AI tools stack.",
            description: [
              "Specialize in rapid development and deployment using advanced AI tools stack including Cursor, Replit, Dialogflow CX, Lovable, and Emergent",
              "Integrate generative AI and LLMs directly into existing mobile applications, modernizing apps with cutting-edge AI capabilities",
              "Act as AI consultant for diverse client domains, embedding intelligent automation and enhancing existing apps with AI features",
              "Architect apps using CLEAN Architecture and SOLID principles, emphasizing maintainable, scalable AI-driven solutions"
            ],
            skills: ["Dialogflow CX", "Rapid Mobile App Deployment", "Flutter", "AI Integration", "Client Consulting", "LLM", "OpenAI APIs", "Workflow Automation"]
          }
        ]
      },
      {
        name: "Numerade",
        duration: "1 yr 6 mos",
        location: "Remote",
        roles: [
          {
            title: "Online Tutor",
            employmentType: "Part-time",
            period: "Jan 2020 - Jun 2021",
            location: "Remote",
            summary: "Provided online tutoring in mathematics, physics, and computer science, creating detailed video explanations for complex STEM problems.",
            description: [
              "Created detailed video explanations and step-by-step solutions for complex STEM problems",
              "Helped students understand fundamental concepts through clear, engaging teaching methods"
            ],
            skills: ["Mathematics", "Physics", "Computer Science", "Online Teaching", "Video Creation", "STEM Education"]
          }
        ]
      }
    ]
  },

  projects: {
    title: "Projects",
    projects: [
      {
        title: "AI-Enhanced Healthcare App",
        description: "Integrated AI capabilities into existing healthcare application using Dialogflow CX and Flutter, improving patient engagement through intelligent automation.",
        technologies: ["Flutter", "Dialogflow CX", "OpenAI API", "Healthcare AI"],
        status: "Completed"
      },
      {
        title: "Rapid Prototyping Platform",
        description: "Developed a rapid prototyping platform using AI tools stack for quick client app development and deployment.",
        technologies: ["Flutter", "AI Tools", "Rapid Development", "Client Solutions"],
        status: "In Progress"
      }
    ]
  },

  education: {
    title: "Education",
    education: [
      {
        institution: "SASTRA University",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        period: "2021 - 2025",
        grade: "8.5 CGPA",
        location: "Thanjavur, Tamil Nadu, India",
        skills: ["Computer Science", "Software Engineering", "Data Structures", "Algorithms", "Machine Learning"]
      }
    ]
  },

  certifications: {
    title: "Certifications",
    certifications: [
      {
        title: "GenAI Mastermind Certification",
        issuer: "AI Certification Body",
        date: "2024",
        description: "Certified in Generative AI integration and implementation for modern applications."
      }
    ]
  },

  awards: {
    title: "Awards & Recognition",
    awards: [
      {
        title: "AI Innovation Award",
        organization: "Tech Innovation Summit",
        date: "2024",
        description: "Recognized for innovative AI integration in healthcare applications.",
        achievement: "Winner"
      }
    ]
  },

  contact: {
    title: "Contact",
    description: "I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work together.",
    contactInfo: {
      email: "satvik.gedam@example.com",
      linkedin: "https://www.linkedin.com/in/satvik-gedam-2a2866295/",
      location: "Mumbai, Maharashtra, India"
    },
    ctaButtons: {
      email: { text: "Send Email", href: "mailto:satvik.gedam@example.com" },
      linkedin: { text: "Connect on LinkedIn", href: "https://www.linkedin.com/in/satvik-gedam-2a2866295/", external: true }
    },
    footer: {
      name: "Satvik Gedam",
      additionalText: "AI Software Developer & Flutter Specialist"
    }
  },

  navigation: {
    brand: "Satvik Gedam",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  }
};

// Simple utility functions
export const getCurrentYear = () => new Date().getFullYear();
export const getCopyrightText = (name: string, additionalText?: string) => {
  const year = getCurrentYear();
  const baseText = `© ${year} ${name}. All rights reserved.`;
  return additionalText ? `${baseText} ${additionalText}` : baseText;
};
export const getProjectStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'in progress': return 'bg-yellow-100 text-yellow-800';
    case 'award winner': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
