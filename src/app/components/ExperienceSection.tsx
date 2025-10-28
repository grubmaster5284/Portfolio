'use client';

import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export default function ExperienceSection() {
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
          {portfolioData.experience.companies.map((company, companyIndex) => (
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
                {company.roles.map((role, roleIndex) => {
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
                            {role.description.map((desc, descIndex) => (
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
                        {role.skills.map((skill, skillIndex) => (
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
}
