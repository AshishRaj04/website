import { motion } from "framer-motion";
import portfolioData from "../content";

const ServiceCard = ({ title, role, tools, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative w-full sm:w-72 lg:w-80 flex flex-col p-6 h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    
    <div className="flex flex-col items-center justify-center h-full relative z-10">
      <h3 className="text-gray-900 text-xl font-bold mb-3 text-center group-hover:text-green-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm font-medium text-center leading-relaxed">
        {role}
      </p>
    </div>

    <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 z-20 transform translate-y-4 group-hover:translate-y-0">
      <h4 className="text-green-400 text-lg font-bold mb-4">Tools I Use</h4>
      <div className="flex flex-wrap justify-center gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded-md border border-gray-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:basis-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-200 -z-10 transform -rotate-1"></span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I build{" "}
              <span className="font-bold text-indigo-600">
                ML-powered applications
              </span>{" "}
              with <span className="font-bold text-yellow-600">Python</span> and{" "}
              <span className="font-bold text-green-600">JavaScript</span>. From
              training models to deploying scalable web integrations, I focus on
              making{" "}
              <span className="font-bold text-purple-600">AI practical</span>
              —optimizing inference, refining datasets, and streamlining
              production pipelines.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              My expertise spans{" "}
              <span className="font-bold text-red-500">deep learning</span> and
              real-world system design. When not coding, I analyze cutting-edge
              research in{" "}
              <span className="font-bold text-pink-500">arXiv papers</span>.
              Beyond work, I contribute to{" "}
              <span className="italic font-medium text-gray-900">open-source projects</span> and explore
              emerging tools in AI/ML.
            </p>
          </motion.div>

          <div className="w-full lg:basis-1/2 flex flex-row flex-wrap gap-6 justify-center items-stretch">
            {portfolioData.services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
