import portfolioData from "../content";

const ServiceCard = ({ title, role, tools }) => (
  <div className="group relative w-full md:w-72 lg:w-96 flex flex-col p-6 h-full bg-[#333] rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-white text-xl font-semibold mb-2 text-center">
        {title}
      </h3>
      <p className="text-white text-sm font-light text-center">{role}</p>
    </div>

    <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
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
      <div className="w-3/4 m-auto">
        <h2 className="text-3xl text-center font-bold text-gray-800 my-8">
          About me.
        </h2>
        <div className="flex flex-row justify-between items-start gap-8">
          <div className="basis-1/2">
            <p className="mt-8 text-secondary text-[18px] max-w-3xl leading-relaxed text-center px-8 md:px-6 font-medium text-textColorWhite dark:text-paragraph transition-all duration-500 ease-in-out">
              I'm a{" "}
              <span className="font-bold text-blue-500">
                software developer
              </span>{" "}
              with experience in
              <span className="font-bold text-yellow-500">Python</span> and
              <span className="font-bold text-green-500">JavaScript</span>. I
              create{" "}
              <span className="font-bold text-indigo-500">
                machine learning projects
              </span>{" "}
              and integrate them into websites.
              <br />
              <br />
              I'm passionate about{" "}
              <span className="font-bold text-purple-500">
                machine learning
              </span>{" "}
              and
              <span className="font-bold text-red-500">deep learning</span>. I
              love solving complex problems and working with large datasets,
              especially when it involves training{" "}
              <span className="font-bold text-pink-500">
                deep neural networks
              </span>
              . Let's work together to bring your ideas to life!
            </p>

            <p className="mt-4 mb-8 text-secondary text-[16px] max-w-2xl leading-relaxed text-center px-6 font-light text-textColorWhite dark:text-paragraph">
              In my free time, I enjoy exploring new technologies, contributing
              to open-source projects, and continuously expanding my knowledge
              in the field of AI and data science.
            </p>
          </div>
          <div className=" basis-1/2 w-full px-16 flex flex-row flex-wrap gap-5 leading-6 justify-center items-center">
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