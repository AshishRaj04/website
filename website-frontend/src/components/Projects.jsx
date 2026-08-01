import { useState, useEffect } from "react";
import { client } from "../sanity/client";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS_QUERY = `*[_type == "project"]|order(order asc, publishedAt desc){
  _id,
  title,
  category,
  headline,
  description,
  metrics,
  tags,
  link,
  liveDemo,
  "imageUrl": image.asset->url
}`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(PROJECTS_QUERY).then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="projects" className="py-8">
      <div className="border-b border-zinc-200 pb-3 mb-8">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
          Selected Projects
        </h2>
      </div>

      {loading ? (
        <div className="text-zinc-500 italic text-base">Retrieving projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project._id} className="flex flex-col border border-zinc-200 hover:border-zinc-300 transition-colors bg-white">
              {project.imageUrl && (
                <div className="w-full border-b border-zinc-100 p-2 pb-0">
                   <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full aspect-[21/9] object-cover filter transition-all duration-300 border border-zinc-100" 
                  />
                </div>
              )}
              
              <div className="p-5 flex flex-col flex-1">
                {project.category && (
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                )}

                <div className="flex justify-between items-start gap-3 mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-2.5 shrink-0">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="GitHub Repository">
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {project.headline && (
                  <p className="text-sm font-medium text-zinc-700 mb-2 leading-snug">
                    {project.headline}
                  </p>
                )}
                
                <p className="text-zinc-500 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-zinc-500">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
                
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest bg-zinc-50 px-1.5 py-0.5 border border-zinc-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;