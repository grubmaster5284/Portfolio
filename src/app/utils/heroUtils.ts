import { getCurrentYear } from './dateUtils';

/**
 * Get dynamic hero taglines based on current context
 */
export const getDynamicTaglines = (baseTaglines: string[]): string[] => {
  const currentYear = getCurrentYear();
  // Get current date for calculations
  
  // Add year-specific taglines
  const yearTaglines = [
    `Building the future in ${currentYear}`,
    `Innovating in ${currentYear}`,
    `${currentYear} AI Solutions`
  ];
  
  // Combine base taglines with dynamic ones
  return [...baseTaglines, ...yearTaglines];
};

/**
 * Get time-based greeting
 */
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 17) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
};

/**
 * Get dynamic hero description
 */
export const getDynamicHeroDescription = (baseDescription: string): string => {
  const greeting = getTimeBasedGreeting();
  
  return `${greeting} ${baseDescription}`;
};

/**
 * Get portfolio age in years
 */
export const getPortfolioAge = (): number => {
  // Assuming portfolio was created in 2024
  const portfolioStartYear = 2024;
  const currentYear = getCurrentYear();
  return currentYear - portfolioStartYear;
};

/**
 * Get dynamic CTA button text
 */
export const getDynamicCTAText = (baseText: string): string => {
  const currentYear = getCurrentYear();
  return `${baseText} (${currentYear})`;
};
