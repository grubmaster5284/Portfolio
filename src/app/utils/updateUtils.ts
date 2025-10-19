import { getCurrentDate, getCurrentISODate } from './dateUtils';

/**
 * Get last updated information
 */
export const getLastUpdatedInfo = () => {
  return {
    date: getCurrentDate(),
    iso: getCurrentISODate(),
    timestamp: Date.now(),
    humanReadable: `Last updated: ${getCurrentDate()}`
  };
};

/**
 * Get portfolio freshness indicator
 */
export const getPortfolioFreshness = (): string => {
  const now = new Date();
  const currentHour = now.getHours();
  
  // Determine freshness based on time of day
  if (currentHour >= 6 && currentHour < 12) {
    return "Freshly updated this morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Updated this afternoon";
  } else if (currentHour >= 18 && currentHour < 22) {
    return "Updated this evening";
  } else {
    return "Updated overnight";
  }
};

/**
 * Get dynamic update message
 */
export const getUpdateMessage = (): string => {
  const freshness = getPortfolioFreshness();
  const lastUpdated = getLastUpdatedInfo();
  
  return `${freshness} - ${lastUpdated.humanReadable}`;
};

/**
 * Get version information
 */
export const getVersionInfo = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  
  return {
    major: currentYear,
    minor: currentMonth,
    patch: 1,
    full: `v${currentYear}.${currentMonth}.1`,
    build: Date.now().toString().slice(-6)
  };
};

/**
 * Get maintenance status
 */
export const getMaintenanceStatus = (): string => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  
  // Simulate maintenance windows (weekends, early morning)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return "Weekend maintenance mode";
  } else if (hour >= 2 && hour <= 4) {
    return "Scheduled maintenance";
  } else {
    return "All systems operational";
  }
};
