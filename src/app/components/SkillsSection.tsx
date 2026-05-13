import { portfolioData } from '../data/portfolio';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.skills.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4">
          {portfolioData.skills.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md flex-shrink-0 w-52"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">{category.title}</h3>
              <div className="flex flex-col gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-blue-50 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors text-center"
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
}
