'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % portfolioData.hero.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
}
