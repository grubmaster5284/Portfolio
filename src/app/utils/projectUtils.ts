import { getCurrentYear } from './dateUtils';

/**
 * Get project status based on completion date and current status
 */
export const getProjectStatus = (status: string, completionDate?: string): string => {
  if (status === 'Completed' && completionDate) {
    const completionYear = new Date(completionDate).getFullYear();
    const currentYear = getCurrentYear();
    
    if (completionYear === currentYear) {
      return `Completed ${getCurrentYear()}`;
    } else {
      return `Completed ${completionYear}`;
    }
  }
  
  return status;
};

/**
 * Calculate project age in days
 */
export const getProjectAge = (startDate: string): number => {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Get project status color class
 */
export const getProjectStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'in progress':
      return 'bg-yellow-100 text-yellow-800';
    case 'award winner':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * Get relative project time
 */
export const getProjectRelativeTime = (date: string): string => {
  const projectDate = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - projectDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};
