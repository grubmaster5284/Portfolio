// Consolidated portfolio data - single source of truth
export const portfolioData = {
  hero: {
    name: "Satvik Gedam",
    taglines: [
      "Flutter Developer & AI Integration Specialist @ BluOpal Advisors",
      "Mecasso Hackathon Winner | Published Researcher",
      "GenAI Integrator & LLM Automation Expert",
      "CLEAN Architecture | Scalable AI Solutions"
    ],
    description: "AI-Driven Flutter Specialist and GenAI Integrator with expertise in rapid mobile app development and workflow automation using LLMs. Currently building an AI-powered EdTech platform at BluOpal Advisors LLP. Certified Generative AI Mastermind (Outskill), Mecasso Hackathon 2023 winner, and published researcher in video upscaling, IoT security, and ML for healthcare.",
    ctaButtons: {
      primary: { text: "Get In Touch", href: "#contact" },
      secondary: { text: "LinkedIn", href: "https://www.linkedin.com/in/satvik-gedam-2a2866295/", external: true }
    }
  },

  about: {
    title: "About Me",
    content: [
      "I'm an AI-Driven Flutter Specialist and GenAI Integrator currently building an AI-powered EdTech platform at BluOpal Advisors LLP, integrating LLMs for real-time lesson generation and interactive learning content. Previously, I built scalable healthcare solutions at Cetas Healthcare — including a Practo-like platform democratizing medical access for rural India with multilingual AI voice interfaces.",
      "I specialize in AI-augmented Flutter development and workflow automation using LLMs to accelerate delivery, always under CLEAN Architecture and SOLID principles. I'm a certified Generative AI Mastermind (Outskill), winner of the Mecasso Hackathon 2023 for assistive technology innovation, and a published researcher in video upscaling, IoT security, and ML for healthcare."
    ],
    highlights: [
      {
        title: "AI Integration Specialist",
        description: "Expert in integrating generative AI and LLMs into mobile and web apps using Cursor, Replit, Lovable, Emergent, and Dialogflow CX for rapid, intelligent delivery."
      },
      {
        title: "Rapid App Development",
        description: "Specialize in AI-augmented Flutter development across Web and Android, building production-ready apps at consulting speed with CLEAN Architecture and SOLID principles."
      }
    ]
  },

  skills: {
    title: "Skills",
    categories: [
      {
        title: "AI & GenAI",
        skills: ["Generative AI", "Agentic AI", "LLM Integration", "OpenAI API", "Dialogflow CX", "Google Gemini", "Prompt Engineering"]
      },
      {
        title: "Mobile & App Dev",
        skills: ["Flutter", "Dart", "Kotlin", "Firebase", "Android Studio"]
      },
      {
        title: "ML & Data Science",
        skills: ["Machine Learning", "TensorFlow", "PyTorch", "Computer Vision", "Data Analysis"]
      },
      {
        title: "Web & Backend",
        skills: ["Python", "Flask", "JavaScript", "TypeScript", "HTML5", "SQL"]
      },
      {
        title: "Cloud & DevOps",
        skills: ["AWS", "Azure", "Google Cloud Platform", "Docker", "Git"]
      },
      {
        title: "Dev Tools",
        skills: ["Cursor", "Lovable", "Emergent", "Jira", "Workflow Automation"]
      }
    ]
  },

  experience: {
    title: "Experience",
    companies: [
      {
        name: "BluOpal Advisors LLP",
        duration: "1 yr 4 mos",
        location: "Pune, Maharashtra",
        roles: [
          {
            title: "Flutter Developer & AI Integration Specialist",
            employmentType: "Freelance",
            period: "Jan 2025 - Present",
            location: "Pune, Maharashtra",
            summary: "Building an AI-powered EdTech platform delivering dynamic, interactive learning experiences using generative AI and Flutter across Web and Android.",
            description: [
              "Integrated AI features to auto-generate lesson content and study material based on topics being studied, using LLMs and generative AI",
              "Built interactive content components (graphs, diagrams, charts, and visual interactables) that update in real-time as students progress through topics",
              "Designed and improved UI/UX across both Web and Android platforms using Flutter, ensuring a seamless, responsive experience on all form factors",
              "Built and maintained databases for practice tests, quizzes, and assessment modules to support the platform's learning management system",
              "Collaborated cross-functionally with multiple teams to streamline UI consistency and resolve design bottlenecks"
            ],
            skills: ["Flutter", "Dart", "LLMs", "Generative AI", "Firebase", "SQL", "AI Integration", "UI/UX"]
          }
        ]
      },
      {
        name: "Cetas Healthcare",
        duration: "2 yrs 3 mos",
        location: "Mumbai / Pune, Maharashtra",
        roles: [
          {
            title: "AI Software Developer",
            employmentType: "Contractual",
            period: "May 2025 - Jan 2026",
            location: "Mumbai, Maharashtra",
            summary: "Led development of a comprehensive Practo-like rural healthcare platform focused on democratizing medical access for underserved communities across India.",
            description: [
              "Led development of a scalable Practo-like healthcare platform targeting rural and remote regions in India",
              "Implemented multilingual interfaces and voice-based interactions, training custom voice models for underserved regional dialects",
              "Leveraged AI-augmented Flutter development with CLEAN Architecture and SOLID principles for long-term scalability",
              "Integrated medical intelligence using Dialogflow CX, Lovable, and Emergent for efficient code generation and deployment"
            ],
            skills: ["Flutter", "Dart", "Dialogflow CX", "LLMs", "Lovable", "Emergent", "CLEAN Architecture", "Voice AI"]
          },
          {
            title: "Python Developer",
            employmentType: "Contractual",
            period: "Jun 2024 - May 2025",
            location: "Pune, Maharashtra",
            summary: "Developed Android and Excel Add-in applications using generative AI and LLMs; deployed a multilingual AI-powered assistant across healthcare and banking client networks.",
            description: [
              "Developed Android and Excel Add-in apps leveraging generative AI and LLMs to automate code generation and accelerate delivery",
              "Integrated Google Text-to-Speech, Dialogflow CX, and Firebase into production applications",
              "Led design of a multilingual interface for rural communities, training custom voice models for underserved dialects",
              "Collaborated with healthcare and banking partners to deploy an AI-powered assistant that streamlined communications and service access",
              "Built solutions using .NET, HTML/CSS/JavaScript, and Dart/Flutter"
            ],
            skills: ["Python", "Flutter", "Dart", ".NET", "Dialogflow CX", "Firebase", "Google TTS", "JavaScript", "Generative AI"]
          },
          {
            title: "Python Developer Intern",
            employmentType: "Internship",
            period: "Oct 2023 - Jun 2024",
            location: "Mumbai, Maharashtra",
            summary: "Specialized in generative AI; developed Python scripts to automate XML-based form generation, streamlining company-specific workflows.",
            description: [
              "Developed Python scripts to automate XML-based form generation for internal company workflows",
              "Applied generative AI techniques to document and data processing pipelines",
              "Reduced manual processing overhead through targeted workflow automation"
            ],
            skills: ["Python", "Generative AI", "XML", "Workflow Automation"]
          }
        ]
      }
    ]
  },

  projects: {
    title: "Projects",
    career: [
      {
        title: "AI-Powered EdTech Platform",
        company: "BluOpal Advisors LLP",
        description: "Interactive learning platform with AI-generated lesson content and real-time visual components. Integrated LLMs to auto-generate study material and built dynamic graphs, diagrams, and charts that update as students progress through topics.",
        technologies: ["Flutter", "Dart", "LLMs", "Generative AI", "Firebase", "SQL"],
        status: "In Progress"
      },
      {
        title: "Rural Healthcare Platform",
        company: "Cetas Healthcare",
        description: "Practo-like healthcare platform for democratizing medical access across rural India. Features multilingual interfaces, voice-based interactions, and custom dialect voice models to serve underserved communities effectively.",
        technologies: ["Flutter", "Dart", "Dialogflow CX", "Voice AI", "LLMs", "CLEAN Architecture"],
        status: "Completed"
      },
      {
        title: "Plot-AI — Intelligent Data Analytics Platform",
        company: "Cetas Healthcare",
        description: "AI-driven data analytics desktop application built on Excel and PowerPoint. Designed and implemented the voice recognition module from scratch (OpenAI Speech API + NAudio), built a voice assistant UI with Web Speech API, and added Power BI/Tableau import utilities. Also modernized the add-in for Office 2019+ by migrating to WebView2, refactoring VSTO ribbon handlers, and targeting .NET 4.6.2+. 2,500+ lines added across 39 files over 19 commits.",
        technologies: ["VB.NET", "VSTO", "OpenAI API", "NAudio", "WebView2", "Web Speech API", "Excel", "PowerPoint", ".NET"],
        status: "Completed"
      },
      {
        title: "Multilingual AI Assistant",
        company: "Cetas Healthcare",
        description: "Android and Excel Add-in applications using GenAI and LLMs, with a multilingual voice interface featuring custom models for underserved dialects — deployed across healthcare and banking client networks.",
        technologies: ["Python", "Flutter", "Dart", ".NET", "Dialogflow CX", "Google TTS", "Firebase"],
        status: "Completed"
      },
      {
        title: "XML Workflow Automation",
        company: "Cetas Healthcare",
        description: "Python-based automation system for XML form generation, eliminating manual document processing and streamlining internal company-specific workflows using generative AI.",
        technologies: ["Python", "Generative AI", "XML", "Workflow Automation"],
        status: "Completed"
      }
    ],
    personal: [
      {
        title: "AIO Calculator",
        context: "Personal Project · Flutter",
        description: "All-in-one Flutter calculator app covering multiple calculation modes. Built as deliberate practice for AI-assisted rapid development workflows — shipped in 7–10 days.",
        technologies: ["Flutter", "Dart"],
        status: "Completed",
        link: "https://github.com/grubmaster5284/aio_calculator"
      },
      {
        title: "Voice-to-Text App",
        context: "Personal Project · Flutter",
        description: "Flutter mobile app for real-time speech-to-text transcription. Built as deliberate practice for AI-assisted rapid development — shipped in 7–10 days.",
        technologies: ["Flutter", "Dart", "Speech Recognition"],
        status: "Completed",
        link: "https://github.com/grubmaster5284/voice-to-text"
      },
      {
        title: "Nova Android Assistant",
        context: "Personal Project · Kotlin · Android",
        description: "Offline-first Android voice assistant with \"Hey Nova\" wake word detection via Porcupine. Features a background foreground service for continuous listening, automatic Bluetooth/headphone audio routing, and a Material Design 3 UI with animated orb visualizations. Built on feature-based Clean Architecture with MVVM.",
        technologies: ["Kotlin", "Jetpack Compose", "Porcupine", "Hilt", "DataStore", "Clean Architecture"],
        status: "Suspended",
        link: "https://github.com/grubmaster5284/nova-android-assistant"
      },
      {
        title: "Cost-Effective Video Upscaling",
        context: "Final Year Project · SASTRA University · 2024",
        description: "Hybrid super-resolution pipeline combining interpolation and post-processing to upscale low-resolution footage from low-cost cameras, improving security footage quality without expensive hardware upgrades.",
        technologies: ["Python", "OpenCV", "Machine Learning", "Super-Resolution", "Computer Vision"],
        status: "Completed"
      },
      {
        title: "CKD Prediction via ML Feature Selection",
        context: "University Project · SASTRA University · 2023",
        description: "Feature selection model for Chronic Kidney Disease prediction that identifies the most contributing diagnostic factors, reducing data volume required for accurate early-stage prediction.",
        technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "SHAP"],
        status: "Completed"
      },
      {
        title: "IoT Security Alert System",
        context: "University Project · SASTRA University · 2022",
        description: "IoT system using MQTT and TCP protocols to detect temperature threshold crossings and trigger real-time SMS alerts for fire and hazard prevention in monitored environments.",
        technologies: ["Python", "IoT", "MQTT", "TCP", "Arduino", "SMS API"],
        status: "Completed"
      }
    ]
  },

  education: {
    title: "Education",
    education: [
      {
        institution: "SASTRA University",
        degree: "Bachelor of Technology — Computer Science Engineering",
        period: "Mar 2020 – Jun 2024",
        grade: "6.72 CGPA",
        location: "Thanjavur, Tamil Nadu",
        skills: ["Computer Science", "Software Engineering", "Data Structures", "Algorithms", "Machine Learning"]
      },
      {
        institution: "Orchid School",
        degree: "12th Standard — CBSE, English Medium",
        period: "2018 – 2020",
        grade: "84%",
        location: "Pune, Maharashtra",
        skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
      },
      {
        institution: "City International School",
        degree: "10th Standard — CBSE, English Medium",
        period: "2016 – 2018",
        grade: "88%",
        location: "Pune, Maharashtra",
        skills: ["Mathematics", "Science", "Social Studies"]
      }
    ]
  },

  certifications: {
    title: "Certifications",
    certifications: [
      {
        title: "Generative AI Mastermind",
        issuer: "Outskill",
        date: "Oct 2025",
        description: "Successfully completed the Generative AI Mastermind program by Outskill, gaining hands-on expertise in advanced generative AI technologies including model development, deployment, and practical AI applications."
      },
      {
        title: "Introduction to Prompt Engineering",
        issuer: "Simplilearn",
        date: "Jan 2025",
        description: "Certified by Simplilearn in Prompt Engineering fundamentals, covering best practices for designing effective prompts for Generative AI applications."
      }
    ]
  },

  awards: {
    title: "Awards & Volunteering",
    awards: [
      {
        title: "Mecasso Hackathon — 1st Place",
        organization: "SASTRA University",
        date: "April 2023",
        description: "First place awarded for building an innovative assistive technology solution for people with disabilities.",
        achievement: "Winner"
      },
      {
        title: "TEDx Volunteer",
        organization: "Orchid School",
        date: "2019",
        description: "Volunteered at a TEDx event, supporting event coordination and community engagement initiatives.",
        achievement: "Volunteer"
      },
      {
        title: "Robin Hood Army — Volunteer Teacher",
        organization: "Robin Hood Army",
        date: "2018",
        description: "Part-time volunteer teacher providing education and support to underserved communities, contributing to reducing educational inequality.",
        achievement: "Volunteer"
      },
      {
        title: "Manava Gokul Project — Volunteer Teacher",
        organization: "Manava Gokul Project",
        date: "2018",
        description: "Delivered educational programs and mentorship to students in need, contributing to community development through education.",
        achievement: "Volunteer"
      }
    ]
  },

  contact: {
    title: "Contact",
    description: "I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work together.",
    contactInfo: {
      email: "satvikricky777@gmail.com",
      linkedin: "https://www.linkedin.com/in/satvik-gedam-2a2866295/",
      location: "Aundh, Pune, Maharashtra, India"
    },
    ctaButtons: {
      email: { text: "Send Email", href: "mailto:satvikricky777@gmail.com" },
      linkedin: { text: "Connect on LinkedIn", href: "https://www.linkedin.com/in/satvik-gedam-2a2866295/", external: true }
    },
    footer: {
      name: "Satvik Gedam",
      additionalText: "Flutter Developer & AI Integration Specialist"
    }
  },

  navigation: {
    brand: "Satvik Gedam",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Certifications", href: "#certifications" },
      { label: "Awards", href: "#awards" },
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
    case 'suspended': return 'bg-orange-100 text-orange-700';
    case 'winner': return 'bg-purple-100 text-purple-800';
    case 'volunteer': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
