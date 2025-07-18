import portfolioData from "../content";

const ServiceCard = ({ title, role, tools }) => (
  <div className="group relative w-full sm:w-72 lg:w-96 flex flex-col p-6 h-full bg-gray-900 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-white text-xl font-semibold mb-2 text-center">
        {title}
      </h3>
      <p className="text-white text-sm font-light text-center">{role}</p>
    </div>

    <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
      <h4 className="text-green-500 text-lg font-bold mb-4">Tools I Use</h4>
      <ul className="text-green-500 text-sm font-light text-center space-y-1">
        {tools.map((tool, index) => (
          <li key={index} className="">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:basis-1/2">
            <p className="mt-8 text-secondary text-[18px] max-w-3xl leading-relaxed text-center lg:text-left px-4 md:px-6 font-medium text-textColorWhite dark:text-paragraph transition-all duration-500 ease-in-out">
              I build{" "}
              <span className="font-bold text-indigo-500">
                ML-powered applications
              </span>{" "}
              with <span className="font-bold text-yellow-500">Python</span> and{" "}
              <span className="font-bold text-green-500">JavaScript</span>. From
              training models to deploying scalable web integrations, I focus on
              making{" "}
              <span className="font-bold text-purple-500">AI practical</span>
              —optimizing inference, refining datasets, and streamlining
              production pipelines.
              <br />
              <br />
              My expertise spans{" "}
              <span className="font-bold text-red-500">deep learning</span> and
              real-world system design. When not coding, I analyze cutting-edge
              research in{" "}
              <span className="font-bold text-pink-500">arXiv papers</span>.
            </p>

            <p className="mt-4 mb-8 text-secondary text-[16px] max-w-2xl leading-relaxed text-center lg:text-left px-4 font-light text-textColorWhite dark:text-paragraph">
              Beyond work, I contribute to{" "}
              <span className="italic">open-source projects</span> and explore
              emerging tools in AI/ML.
            </p>
          </div>
          <div className="w-full lg:basis-1/2 flex flex-row flex-wrap gap-5 leading-6 justify-center items-center px-0 sm:px-8">
            {portfolioData.services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
