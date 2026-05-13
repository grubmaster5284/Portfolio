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
            <p className="text-gray-500 text-sm mb-8">Personal builds and research papers from SASTRA University</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personal.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 flex-1">{project.title}</h4>
                    <span className={`ml-2 shrink-0 px-3 py-1 rounded-full text-sm font-medium ${getProjectStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-purple-600 text-sm font-medium mb-3">{project.context}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                  {'link' in project && project.link && (
                    <a
                      href={project.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
