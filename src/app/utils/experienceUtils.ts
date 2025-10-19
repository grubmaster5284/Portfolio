import { calculateYearsOfExperience } from './dateUtils';

/**
 * Calculate total years of professional experience
 */
export const calculateTotalExperience = (startDate: string): string => {
  // Validate input date
  if (!startDate || typeof startDate !== 'string') {
    return "Invalid date";
  }
  
  const result = calculateYearsOfExperience(startDate);
  
  // Handle error cases
  if (!result.success) {
    return result.error === 'Future date' ? "Future date" : "Invalid date";
  }
  
  const years = result.years!;
  
  if (years === 0) {
    return "Less than 1 year";
  } else if (years === 1) {
    return "1 year";
  } else {
    return `${years} years`;
  }
};

/**
 * Get experience duration in a readable format using accurate month calculations
 */
export const getExperienceDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  // Validate dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "Invalid date";
  }
  
  // Calculate accurate years and months
  let diffYears = end.getFullYear() - start.getFullYear();
  let diffMonths = end.getMonth() - start.getMonth();
  
  // Adjust for negative months
  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }
  
  // Adjust for day differences within the month
  // Only adjust if we have at least 1 month and end day is before start day
  if (diffMonths > 0 && end.getDate() < start.getDate()) {
    diffMonths--;
    if (diffMonths < 0) {
      diffYears--;
      diffMonths += 12;
    }
  }
  
  if (diffYears > 0) {
    if (diffMonths === 0) {
      return `${diffYears} yr${diffYears > 1 ? 's' : ''}`;
    } else {
      return `${diffYears} yr${diffYears > 1 ? 's' : ''} ${diffMonths} mo${diffMonths > 1 ? 's' : ''}`;
    }
  } else if (diffMonths > 0) {
    return `${diffMonths} mo${diffMonths > 1 ? 's' : ''}`;
  } else {
    const diffDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
  }
};

/**
 * Check if a role is current (no end date)
 */
export const isCurrentRole = (endDate?: string): boolean => {
  return !endDate || endDate.toLowerCase().includes('present');
};

/**
 * Format experience period with dynamic calculations
 */
export const formatExperiencePeriod = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate && !endDate.toLowerCase().includes('present') ? new Date(endDate) : new Date();
  
  const startFormatted = start.toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
  
  const endFormatted = isCurrentRole(endDate) 
    ? 'Present' 
    : end.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
      });
  
  const duration = getExperienceDuration(startDate, endDate);
  
  return `${startFormatted} - ${endFormatted} · ${duration}`;
};

/**
 * Get career highlights based on experience
 */
export const getCareerHighlights = (totalExperience: number): string[] => {
  const highlights = [];
  
  if (totalExperience >= 3) {
    highlights.push("Senior-level experience");
  }
  
  if (totalExperience >= 2) {
    highlights.push("Proven track record");
  }
  
  if (totalExperience >= 1) {
    highlights.push("Professional experience");
  }
  
  return highlights;
};
