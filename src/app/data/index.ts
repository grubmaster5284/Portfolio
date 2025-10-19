// Central data exports for easy importing
export { heroData } from './heroData';
export { aboutData } from './aboutData';
export { skillsData } from './skillsData';
export { experienceData } from './experienceData';
export { projectsData } from './projectsData';
export { educationData } from './educationData';
export { certificationsData } from './certificationsData';
export { awardsData } from './awardsData';
export { contactData } from './contactData';
export { navigationData } from './navigationData';

// Import all data for the combined object
import { heroData } from './heroData';
import { aboutData } from './aboutData';
import { skillsData } from './skillsData';
import { experienceData } from './experienceData';
import { projectsData } from './projectsData';
import { educationData } from './educationData';
import { certificationsData } from './certificationsData';
import { awardsData } from './awardsData';
import { contactData } from './contactData';
import { navigationData } from './navigationData';

// Re-export all data as a single object for convenience
export const portfolioData = {
  hero: heroData,
  about: aboutData,
  skills: skillsData,
  experience: experienceData,
  projects: projectsData,
  education: educationData,
  certifications: certificationsData,
  awards: awardsData,
  contact: contactData,
  navigation: navigationData,
};
