// Data validation utilities for portfolio content

// Define proper types for validation
type HeroData = {
  name: string;
  taglines: string[];
  description: string;
  ctaButtons: {
    primary: unknown;
    secondary: unknown;
  };
};

type AboutData = {
  title: string;
  content: string[];
  highlights: unknown[];
};

type SkillsData = {
  title: string;
  categories: Array<{
    title: string;
    skills: string[];
  }>;
};

type ExperienceData = {
  title: string;
  companies: Array<{
    name: string;
    duration: string;
    location: string;
    roles: Array<{
      title: string;
      employmentType: string;
      period: string;
      location: string;
      summary: string;
      description: string[];
      skills: string[];
    }>;
  }>;
};

type ProjectsData = {
  title: string;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    status: string;
  }>;
};

type EducationData = {
  title: string;
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    grade: string;
    location: string;
    skills: string[];
  }>;
};

type CertificationsData = {
  title: string;
  certifications: Array<{
    title: string;
    issuer: string;
    date: string;
    description: string;
  }>;
};

type AwardsData = {
  title: string;
  awards: Array<{
    title: string;
    organization: string;
    date: string;
    description: string;
    achievement: string;
  }>;
};

type ContactData = {
  title: string;
  description: string;
  contactInfo: {
    email: string;
    linkedin: string;
    location: string;
  };
  ctaButtons: {
    email: unknown;
    linkedin: unknown;
  };
};

type NavigationData = {
  brand: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const validateHeroData = (data: unknown): data is HeroData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'name' in data &&
    typeof (data as Record<string, unknown>).name === 'string' &&
    'taglines' in data &&
    Array.isArray((data as Record<string, unknown>).taglines) &&
    'description' in data &&
    typeof (data as Record<string, unknown>).description === 'string' &&
    'ctaButtons' in data &&
    (data as Record<string, unknown>).ctaButtons !== null &&
    typeof (data as Record<string, unknown>).ctaButtons === 'object' &&
    'primary' in ((data as Record<string, unknown>).ctaButtons as Record<string, unknown>) &&
    'secondary' in ((data as Record<string, unknown>).ctaButtons as Record<string, unknown>)
  );
};

export const validateAboutData = (data: unknown): data is AboutData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'content' in data &&
    Array.isArray((data as Record<string, unknown>).content) &&
    'highlights' in data &&
    Array.isArray((data as Record<string, unknown>).highlights)
  );
};

export const validateSkillsData = (data: unknown): data is SkillsData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'categories' in data &&
    Array.isArray((data as Record<string, unknown>).categories) &&
    ((data as Record<string, unknown>).categories as unknown[]).every((cat: unknown) => 
      cat !== null &&
      typeof cat === 'object' &&
      'title' in cat &&
      typeof (cat as Record<string, unknown>).title === 'string' &&
      'skills' in cat &&
      Array.isArray((cat as Record<string, unknown>).skills)
    )
  );
};

export const validateExperienceData = (data: unknown): data is ExperienceData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'companies' in data &&
    Array.isArray((data as Record<string, unknown>).companies) &&
    ((data as Record<string, unknown>).companies as unknown[]).every((company: unknown) =>
      company !== null &&
      typeof company === 'object' &&
      'name' in company &&
      typeof (company as Record<string, unknown>).name === 'string' &&
      'duration' in company &&
      typeof (company as Record<string, unknown>).duration === 'string' &&
      'location' in company &&
      typeof (company as Record<string, unknown>).location === 'string' &&
      'roles' in company &&
      Array.isArray((company as Record<string, unknown>).roles) &&
      ((company as Record<string, unknown>).roles as unknown[]).every((role: unknown) =>
        role !== null &&
        typeof role === 'object' &&
        'title' in role &&
        typeof (role as Record<string, unknown>).title === 'string' &&
        'employmentType' in role &&
        typeof (role as Record<string, unknown>).employmentType === 'string' &&
        'period' in role &&
        typeof (role as Record<string, unknown>).period === 'string' &&
        'location' in role &&
        typeof (role as Record<string, unknown>).location === 'string' &&
        'summary' in role &&
        typeof (role as Record<string, unknown>).summary === 'string' &&
        'description' in role &&
        Array.isArray((role as Record<string, unknown>).description) &&
        'skills' in role &&
        Array.isArray((role as Record<string, unknown>).skills)
      )
    )
  );
};

export const validateProjectsData = (data: unknown): data is ProjectsData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'projects' in data &&
    Array.isArray((data as Record<string, unknown>).projects) &&
    ((data as Record<string, unknown>).projects as unknown[]).every((project: unknown) =>
      project !== null &&
      typeof project === 'object' &&
      'title' in project &&
      typeof (project as Record<string, unknown>).title === 'string' &&
      'description' in project &&
      typeof (project as Record<string, unknown>).description === 'string' &&
      'technologies' in project &&
      Array.isArray((project as Record<string, unknown>).technologies) &&
      'status' in project &&
      typeof (project as Record<string, unknown>).status === 'string'
    )
  );
};

export const validateEducationData = (data: unknown): data is EducationData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'education' in data &&
    Array.isArray((data as Record<string, unknown>).education) &&
    ((data as Record<string, unknown>).education as unknown[]).every((edu: unknown) =>
      edu !== null &&
      typeof edu === 'object' &&
      'institution' in edu &&
      typeof (edu as Record<string, unknown>).institution === 'string' &&
      'degree' in edu &&
      typeof (edu as Record<string, unknown>).degree === 'string' &&
      'period' in edu &&
      typeof (edu as Record<string, unknown>).period === 'string' &&
      'grade' in edu &&
      typeof (edu as Record<string, unknown>).grade === 'string' &&
      'location' in edu &&
      typeof (edu as Record<string, unknown>).location === 'string' &&
      'skills' in edu &&
      Array.isArray((edu as Record<string, unknown>).skills)
    )
  );
};

export const validateCertificationsData = (data: unknown): data is CertificationsData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'certifications' in data &&
    Array.isArray((data as Record<string, unknown>).certifications) &&
    ((data as Record<string, unknown>).certifications as unknown[]).every((cert: unknown) =>
      cert !== null &&
      typeof cert === 'object' &&
      'title' in cert &&
      typeof (cert as Record<string, unknown>).title === 'string' &&
      'issuer' in cert &&
      typeof (cert as Record<string, unknown>).issuer === 'string' &&
      'date' in cert &&
      typeof (cert as Record<string, unknown>).date === 'string' &&
      'description' in cert &&
      typeof (cert as Record<string, unknown>).description === 'string'
    )
  );
};

export const validateAwardsData = (data: unknown): data is AwardsData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'awards' in data &&
    Array.isArray((data as Record<string, unknown>).awards) &&
    ((data as Record<string, unknown>).awards as unknown[]).every((award: unknown) =>
      award !== null &&
      typeof award === 'object' &&
      'title' in award &&
      typeof (award as Record<string, unknown>).title === 'string' &&
      'organization' in award &&
      typeof (award as Record<string, unknown>).organization === 'string' &&
      'date' in award &&
      typeof (award as Record<string, unknown>).date === 'string' &&
      'description' in award &&
      typeof (award as Record<string, unknown>).description === 'string' &&
      'achievement' in award &&
      typeof (award as Record<string, unknown>).achievement === 'string'
    )
  );
};

export const validateContactData = (data: unknown): data is ContactData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'title' in data &&
    typeof (data as Record<string, unknown>).title === 'string' &&
    'description' in data &&
    typeof (data as Record<string, unknown>).description === 'string' &&
    'contactInfo' in data &&
    (data as Record<string, unknown>).contactInfo !== null &&
    typeof (data as Record<string, unknown>).contactInfo === 'object' &&
    'email' in ((data as Record<string, unknown>).contactInfo as Record<string, unknown>) &&
    typeof ((data as Record<string, unknown>).contactInfo as Record<string, unknown>).email === 'string' &&
    'linkedin' in ((data as Record<string, unknown>).contactInfo as Record<string, unknown>) &&
    typeof ((data as Record<string, unknown>).contactInfo as Record<string, unknown>).linkedin === 'string' &&
    'location' in ((data as Record<string, unknown>).contactInfo as Record<string, unknown>) &&
    typeof ((data as Record<string, unknown>).contactInfo as Record<string, unknown>).location === 'string' &&
    'ctaButtons' in data &&
    (data as Record<string, unknown>).ctaButtons !== null &&
    typeof (data as Record<string, unknown>).ctaButtons === 'object' &&
    'email' in ((data as Record<string, unknown>).ctaButtons as Record<string, unknown>) &&
    'linkedin' in ((data as Record<string, unknown>).ctaButtons as Record<string, unknown>)
  );
};

export const validateNavigationData = (data: unknown): data is NavigationData => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'brand' in data &&
    typeof (data as Record<string, unknown>).brand === 'string' &&
    'links' in data &&
    Array.isArray((data as Record<string, unknown>).links) &&
    ((data as Record<string, unknown>).links as unknown[]).every((link: unknown) =>
      link !== null &&
      typeof link === 'object' &&
      'label' in link &&
      typeof (link as Record<string, unknown>).label === 'string' &&
      'href' in link &&
      typeof (link as Record<string, unknown>).href === 'string'
    )
  );
};

// Validate all portfolio data
export const validatePortfolioData = (data: unknown): data is {
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
} => {
  return (
    data !== null &&
    typeof data === 'object' &&
    'hero' in data &&
    validateHeroData((data as Record<string, unknown>).hero) &&
    'about' in data &&
    validateAboutData((data as Record<string, unknown>).about) &&
    'skills' in data &&
    validateSkillsData((data as Record<string, unknown>).skills) &&
    'experience' in data &&
    validateExperienceData((data as Record<string, unknown>).experience) &&
    'projects' in data &&
    validateProjectsData((data as Record<string, unknown>).projects) &&
    'education' in data &&
    validateEducationData((data as Record<string, unknown>).education) &&
    'certifications' in data &&
    validateCertificationsData((data as Record<string, unknown>).certifications) &&
    'awards' in data &&
    validateAwardsData((data as Record<string, unknown>).awards) &&
    'contact' in data &&
    validateContactData((data as Record<string, unknown>).contact) &&
    'navigation' in data &&
    validateNavigationData((data as Record<string, unknown>).navigation)
  );
};
