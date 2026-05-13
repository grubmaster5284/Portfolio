import { portfolioData, getProjectStatusColor } from '../data/portfolio';

export default function ProjectsSection() {
  const { career, personal } = portfolioData.projects;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.projects.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Career Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Career Projects</h3>
          <p className="text-gray-500 text-sm mb-8">Built professionally at BluOpal Advisors & Cetas Healthcare</p>
          <div className="grid md:grid-cols-2 gap-8">
            {career.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 flex-1">{project.title}</h4>
                  <span className={`ml-2 shrink-0 px-3 py-1 rounded-full text-sm font-medium ${getProjectStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-blue-600 text-sm font-medium mb-3">{project.company}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal & Academic Projects */}
        {personal.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Personal & Academic Projects</h3>
            <p className="text-gray-500 text-sm mb-8">Research papers and university projects from SASTRA University</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personal.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 flex-1">{project.title}</h4>
                    <span className={`ml-2 shrink-0 px-3 py-1 rounded-full text-sm font-medium ${getProjectStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-purple-600 text-sm font-medium mb-3">{project.context}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
