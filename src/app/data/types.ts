// TypeScript type definitions for portfolio data

export interface HeroData {
  name: string;
  taglines: string[];
  description: string;
  ctaButtons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
      external: boolean;
    };
  };
}

export interface AboutData {
  title: string;
  content: string[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

export interface Role {
  title: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  description: string[];
  skills: string[];
}

export interface Company {
  name: string;
  logo: string;
  duration: string;
  location: string;
  roles: Role[];
}

export interface ExperienceData {
  title: string;
  companies: Company[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Award Winner';
}

export interface ProjectsData {
  title: string;
  projects: Project[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  skills: string[];
}

export interface EducationData {
  title: string;
  education: Education[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface CertificationsData {
  title: string;
  certifications: Certification[];
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  achievement: string;
}

export interface AwardsData {
  title: string;
  awards: Award[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
}

export interface ContactData {
  title: string;
  description: string;
  contactInfo: ContactInfo;
  ctaButtons: {
    email: {
      text: string;
      href: string;
    };
    linkedin: {
      text: string;
      href: string;
      external: boolean;
    };
  };
  footer: {
    name: string;
    additionalText: string;
    showTechStack: boolean;
  };
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationData {
  brand: string;
  links: NavigationLink[];
}

// Main portfolio data type
export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  experience: ExperienceData;
  projects: ProjectsData;
  education: EducationData;
  certifications: CertificationsData;
  awards: AwardsData;
  contact: ContactData;
  navigation: NavigationData;
}
