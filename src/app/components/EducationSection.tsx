import { portfolioData } from '../data/portfolio';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.education.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {portfolioData.education.education.map((edu, index) => (
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
                {edu.skills.map((skill, skillIndex) => (
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
}
