// Example data structures for easy content updates
// Copy these examples and modify them for your own content

export const exampleHeroData = {
  name: "Your Name",
  taglines: [
    "Your Current Role @ Company",
    "Your Specialization",
    "Your Unique Value Proposition",
    "Your Expertise Area"
  ],
  description: "Brief professional summary highlighting your key strengths and current focus areas.",
  ctaButtons: {
    primary: {
      text: "Get In Touch",
      href: "#contact"
    },
    secondary: {
      text: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
      external: true
    }
  }
};

export const exampleProject = {
  title: "Project Name",
  description: "Detailed description of what the project does, technologies used, and impact achieved.",
  technologies: ["Technology 1", "Technology 2", "Technology 3"],
  status: "Completed" as const // or "In Progress" or "Award Winner"
};

export const exampleExperience = {
  title: "Job Title",
  company: "Company Name",
  period: "Start Date – End Date",
  description: "Detailed description of your role, responsibilities, and key achievements.",
  highlights: ["Key Achievement 1", "Key Achievement 2", "Key Achievement 3"]
};

export const exampleSkillCategory = {
  title: "Category Name",
  skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
};

export const exampleCertification = {
  title: "Certification Name",
  issuer: "Issuing Organization",
  date: "Month Year",
  description: "What this certification covers and its relevance to your career."
};

export const exampleAward = {
  title: "Award Name",
  organization: "Awarding Organization",
  date: "Month Year",
  description: "What you achieved and why it's significant.",
  achievement: "Achievement Level"
};

export const exampleEducation = {
  institution: "University/Institution Name",
  degree: "Degree Name",
  period: "Start Date – End Date",
  grade: "GPA or Percentage",
  location: "City, Country",
  skills: ["Relevant Skill 1", "Relevant Skill 2", "Relevant Skill 3"]
};
