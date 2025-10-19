// Comprehensive dynamic utilities for the portfolio
import { getCurrentYear, getCurrentDate, getCopyrightText } from './dateUtils';
import { getProjectStatusColor, getProjectStatus } from './projectUtils';
import { formatExperiencePeriod, isCurrentRole } from './experienceUtils';

/**
 * Main dynamic utilities class
 */
export class DynamicUtils {
  /**
   * Get current year
   */
  static getCurrentYear(): number {
    return getCurrentYear();
  }

  /**
   * Get current date
   */
  static getCurrentDate(): string {
    return getCurrentDate();
  }

  /**
   * Get copyright text
   */
  static getCopyrightText(name: string, additionalText?: string): string {
    return getCopyrightText(name, additionalText);
  }

  /**
   * Get project status color
   */
  static getProjectStatusColor(status: string): string {
    return getProjectStatusColor(status);
  }

  /**
   * Get project status with dynamic updates
   */
  static getProjectStatus(status: string, completionDate?: string): string {
    return getProjectStatus(status, completionDate);
  }

  /**
   * Format experience period
   */
  static formatExperiencePeriod(startDate: string, endDate?: string): string {
    return formatExperiencePeriod(startDate, endDate);
  }

  /**
   * Check if role is current
   */
  static isCurrentRole(endDate?: string): boolean {
    return isCurrentRole(endDate);
  }

  /**
   * Get dynamic page title
   */
  static getPageTitle(baseTitle: string, pageName?: string): string {
    const currentYear = this.getCurrentYear();
    return pageName ? `${pageName} | ${baseTitle} (${currentYear})` : `${baseTitle} (${currentYear})`;
  }

  /**
   * Get dynamic meta description
   */
  static getMetaDescription(baseDescription: string): string {
    const currentYear = this.getCurrentYear();
    return `${baseDescription} - Updated ${currentYear}`;
  }

  /**
   * Get last updated timestamp
   */
  static getLastUpdated(): string {
    return `Last updated: ${getCurrentDate()}`;
  }

  /**
   * Get portfolio version (based on year)
   */
  static getPortfolioVersion(): string {
    const currentYear = this.getCurrentYear();
    return `v${currentYear}.1.0`;
  }
}

// Export individual functions for convenience
export {
  getCurrentYear,
  getCurrentDate,
  getCopyrightText
} from './dateUtils';

export {
  getProjectStatusColor,
  getProjectStatus
} from './projectUtils';

export {
  formatExperiencePeriod,
  isCurrentRole
} from './experienceUtils';
