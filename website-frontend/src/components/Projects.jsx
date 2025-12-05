import { useState, useEffect } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { client } from "../sanity/client";
import { motion } from "framer-motion";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 bg-gray-50/50 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A selection of my work in machine learning and software development, built with modern tech stacks.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={item}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden"
              >
                {/* Image container with blur effect for fitting */}
                <div className="relative pt-[60%] overflow-hidden bg-gray-100 border-b border-gray-100">
                  {project.imageUrl ? (
                    <>
                      {/* Blurred Background */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-60"
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                      />
                      {/* Main Image */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain z-10 p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                      No Image Available
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-20 pointer-events-none" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 group-hover:bg-green-50 group-hover:text-green-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex gap-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 -ml-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all"
                            aria-label="GitHub Link"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full text-gray-500 hover:text-green-600 hover:bg-green-50 transition-all"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                      
                      {(project.link || project.liveDemo) && (
                        <a
                          href={project.liveDemo || project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-gray-900 hover:text-green-600 flex items-center group/btn"
                        >
                          View Project
                          <ArrowRight className="ml-1 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;