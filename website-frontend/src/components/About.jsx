import portfolioData from "../content";

const About = () => {
  return (
    <section id="about" className="font-sans text-base text-zinc-600 space-y-10">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 mb-4 border-b border-zinc-200 pb-2 inline-block">
          About
        </h2>
        <p className="leading-relaxed mb-4">
          I'm a Deep Learning Engineer focused on building <strong className="font-semibold text-zinc-900">Large Language Models</strong>, RAG systems, and deploying AI solutions into production. Over the past year, I built and trained <strong>NyayAI</strong>, a 103M parameter foundation model trained entirely from scratch on Indian legal data using PyTorch. I also developed <strong>GeoNet-Inversion</strong>, utilizing deep neural networks to translate seismic wave signals into detailed underground structures.
        </p>
        <p className="leading-relaxed">
          My expertise spans across deep learning, multimodal generation, and real-world system infrastructure. Outside of training models, I've shipped full-stack AI SaaS platforms like <strong>Arqenpics</strong> with GPU inference APIs and custom billing architectures. I'm constantly exploring scaling laws, transformer optimizations, and efficient training pipelines.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold tracking-tight text-zinc-900 mb-6 border-b border-zinc-200 pb-2 inline-block">
          Tools & Expertise
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => (
            <div key={index} className="flex flex-col border-l-2 border-zinc-200 pl-4">
              <h4 className="font-semibold text-zinc-900 mb-1">{service.title}</h4>
              <p className="text-sm text-zinc-500 mb-4 leading-snug">{service.role}</p>
              <div className="flex flex-wrap gap-2">
                 {service.tools.map((tool, i) => (
                   <span key={i} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded-sm uppercase tracking-wider font-semibold">
                     {tool}
                   </span>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
