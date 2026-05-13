import { portfolioData, getProjectStatusColor } from '../data/portfolio';

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.awards.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioData.awards.awards.map((award, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 flex-1">{award.title}</h3>
                <span className={`ml-2 shrink-0 px-3 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(award.achievement)}`}>
                  {award.achievement}
                </span>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-1">{award.organization}</p>
              <p className="text-gray-400 text-xs mb-3">{award.date}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
