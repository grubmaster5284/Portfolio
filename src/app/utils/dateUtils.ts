// Utility functions for dynamic date calculations

/**
 * Get the current year dynamically
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

/**
 * Get current date in a readable format
 */
export const getCurrentDate = (): string => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get current date in ISO format
 */
export const getCurrentISODate = (): string => {
  return new Date().toISOString();
};

/**
 * Calculate years of experience from a start date
 * Returns a result object with success/error information
 */
export const calculateYearsOfExperience = (startDate: string): { success: boolean; years?: number; error?: string } => {
  // Validate input
  if (!startDate || typeof startDate !== 'string') {
    return { success: false, error: 'Invalid input' };
  }
  
  const start = new Date(startDate);
  const now = new Date();
  
  // Check if date is invalid
  if (isNaN(start.getTime())) {
    return { success: false, error: 'Invalid date format' };
  }
  
  // If start date is in the future, return error
  if (start > now) {
    return { success: false, error: 'Future date' };
  }
  
  // Calculate years using proper date arithmetic to handle leap years
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  
  // Adjust if we haven't reached the anniversary yet
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  
  return { success: true, years };
};

/**
 * Get relative time (e.g., "2 years ago", "6 months ago")
 */
export const getRelativeTime = (date: string): string => {
  const now = new Date();
  const past = new Date(date);
  const diffTime = Math.abs(now.getTime() - past.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) {
    return `${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

/**
 * Check if a date is in the current year
 */
export const isCurrentYear = (date: string): boolean => {
  const year = new Date(date).getFullYear();
  return year === getCurrentYear();
};

/**
 * Get copyright text with dynamic year
 */
export const getCopyrightText = (name: string, additionalText?: string): string => {
  const year = getCurrentYear();
  const baseText = `© ${year} ${name}. All rights reserved.`;
  return additionalText ? `${baseText} ${additionalText}` : baseText;
};
