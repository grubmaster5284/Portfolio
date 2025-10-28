import { portfolioData } from '../data/portfolio';

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.awards.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {portfolioData.awards.awards.map((award, index) => (
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
}
