import { portfolioData } from '../data/portfolio';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.certifications.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.certifications.certifications.map((cert, index) => (
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
}
