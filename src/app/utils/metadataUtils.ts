import { portfolioData } from '../data';
import { getCurrentYear } from './dateUtils';

/**
 * Generate dynamic metadata for the portfolio
 */
export const generateMetadata = () => {
  const currentYear = getCurrentYear();
  
  return {
    title: `${portfolioData.hero.name} - ${portfolioData.hero.taglines[0]}`,
    description: portfolioData.hero.description,
    keywords: [
      portfolioData.hero.taglines.join(', '),
      'AI Software Developer',
      'Healthcare AI',
      'Flutter Development',
      'GenAI',
      'AI Integration',
      'Healthcare Technology',
      'Cetas Healthcare',
      'SASTRA University',
      'Machine Learning',
      'AI Tools',
      portfolioData.contact.contactInfo.location
    ].join(', '),
    authors: [{ name: portfolioData.contact.footer.name }],
    openGraph: {
      title: `${portfolioData.hero.name} - ${portfolioData.hero.taglines[0]}`,
      description: portfolioData.hero.description,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${portfolioData.hero.name} - ${portfolioData.hero.taglines[0]}`,
      description: portfolioData.hero.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'copyright': `© ${currentYear} ${portfolioData.contact.footer.name}`,
      'author': portfolioData.contact.footer.name,
      'contact': portfolioData.contact.contactInfo.email,
    }
  };
};

/**
 * Generate dynamic page title
 */
export const generatePageTitle = (pageName?: string): string => {
  const baseTitle = `${portfolioData.hero.name} - ${portfolioData.hero.taglines[0]}`;
  return pageName ? `${pageName} | ${baseTitle}` : baseTitle;
};

/**
 * Generate dynamic description
 */
export const generateDescription = (): string => {
  return portfolioData.hero.description;
};
