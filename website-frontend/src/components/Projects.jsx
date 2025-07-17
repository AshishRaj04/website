import portfolioData from "../content";
import { ArrowRight } from "lucide-react";

const Projects = () => (
  <section id="projects" className="py-20 sm:py-24 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Projects</h2>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">A selection of my work in machine learning and software development.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-base text-gray-600 flex-grow">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center">
                View on GitHub <ArrowRight className="ml-1 h-4 w-4" />
              </a>
              {project.liveDemo && (
                 <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-green-600 hover:text-green-800 flex items-center">
                   Live Demo <ArrowRight className="ml-1 h-4 w-4" />
                 </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;