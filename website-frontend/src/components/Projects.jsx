import { useState, useEffect } from "react";
import { client } from "../sanity/client";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS_QUERY = `*[_type == "project"]|order(order asc, publishedAt desc){
  _id,
  title,
  description,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg font-bold text-zinc-900 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-3 shrink-0">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="GitHub Repository">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-zinc-600 leading-relaxed mb-6 text-base">
                  {project.description}
                </p>
                
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-zinc-600 uppercase tracking-widest bg-zinc-50 px-2 py-1 border border-zinc-200">
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