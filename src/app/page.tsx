'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from './data';
import { getCopyrightText } from './utils/dateUtils';
import { getProjectStatusColor } from './utils/projectUtils';
import type { NavigationLink, Role, Company, Project, Education, Certification, Award } from './data/types';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">{portfolioData.navigation.brand}</div>
          <div className="hidden md:flex space-x-8">
            {portfolioData.navigation.links.map((link: NavigationLink, index: number) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {portfolioData.navigation.links.map((link: NavigationLink, index: number) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % portfolioData.hero.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array since portfolioData is static

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          {portfolioData.hero.name}
        </h1>
        <div className="h-16 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-gray-600 transition-all duration-500 ease-in-out">
            {portfolioData.hero.taglines[currentTagline]}
          </p>
        </div>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          {portfolioData.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={portfolioData.hero.ctaButtons.primary.href} 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {portfolioData.hero.ctaButtons.primary.text}
          </a>
          <a 
            href={portfolioData.hero.ctaButtons.secondary.href} 
            target={portfolioData.hero.ctaButtons.secondary.external ? "_blank" : "_self"}
            rel={portfolioData.hero.ctaButtons.secondary.external ? "noopener noreferrer" : undefined}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {portfolioData.hero.ctaButtons.secondary.text}
          </a>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.about.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {portfolioData.about.content.map((paragraph: string, index: number) => (
            <p key={index} className="text-lg text-gray-600 leading-relaxed mb-8">
              {paragraph}
            </p>
          ))}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {portfolioData.about.highlights.map((highlight: { title: string; description: string }, index: number) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.skills.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.categories.map((category: { title: string; skills: string[] }, index: number) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill: string, skillIndex: number) => (
                  <div 
                    key={skillIndex}
                    className="bg-blue-50 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(new Set());

  const toggleRoleExpansion = (roleKey: string) => {
    setExpandedRoles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(roleKey)) {
        newSet.delete(roleKey);
      } else {
        newSet.add(roleKey);
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.experience.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.companies.map((company: Company, companyIndex: number) => (
            <div key={companyIndex} className="mb-16">
              {/* Company Header */}
              <div className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{company.name}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>{company.duration}</span>
                    <span>•</span>
                    <span>{company.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Roles for this company */}
              <div className="space-y-6">
                {company.roles.map((role: Role, roleIndex: number) => {
                  const roleKey = `${companyIndex}-${roleIndex}`;
                  const isExpanded = expandedRoles.has(roleKey);
                  
                  return (
                    <div 
                      key={roleIndex}
                      className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900">{role.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-blue-600 font-medium">{role.employmentType}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500">{role.period}</span>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{role.location}</p>
                        </div>
                        <button
                          onClick={() => toggleRoleExpansion(roleKey)}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mt-2 md:mt-0"
                        >
                          <span className="text-sm font-medium">
                            {isExpanded ? 'Show Less' : 'Show More'}
                          </span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Summary (always visible) */}
                      <div className="mb-4">
                        <p className="text-gray-600 leading-relaxed">{role.summary}</p>
                      </div>
                      
                      {/* Expanded Description */}
                      {isExpanded && (
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {role.description.map((desc: string, descIndex: number) => (
                              <li key={descIndex} className="text-gray-600 leading-relaxed flex items-start">
                                <span className="text-blue-500 mr-2 mt-1">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill: string, skillIndex: number) => (
                          <span 
                            key={skillIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.projects.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.projects.map((project: Project, index: number) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProjectStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <span 
                    key={techIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.education.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {portfolioData.education.education.map((edu: Education, index: number) => (
            <div 
              key={index}
              className="mb-12 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-xl text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-gray-500 font-medium block">{edu.period}</span>
                  <span className="text-blue-600 font-semibold">{edu.grade}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill: string, skillIndex: number) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Section Component
const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.certifications.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.certifications.certifications.map((cert: Certification, index: number) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                <span className="text-blue-600 font-medium">{cert.date}</span>
              </div>
              <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Awards Section Component
const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.awards.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {portfolioData.awards.awards.map((award: Award, index: number) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{award.title}</h3>
                  <p className="text-xl text-blue-600 font-medium">{award.organization}</p>
                </div>
                <div className="text-right">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {award.achievement}
                  </span>
                  <p className="text-gray-500 font-medium mt-2">{award.date}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.contact.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {portfolioData.contact.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${portfolioData.contact.contactInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {portfolioData.contact.contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <a 
                    href={portfolioData.contact.contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{portfolioData.contact.contactInfo.location}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a 
                  href={portfolioData.contact.ctaButtons.email.href}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {portfolioData.contact.ctaButtons.email.text}
                </a>
                <a 
                  href={portfolioData.contact.ctaButtons.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {portfolioData.contact.ctaButtons.linkedin.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            {getCopyrightText(portfolioData.contact.footer.name, portfolioData.contact.footer.additionalText)}
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}