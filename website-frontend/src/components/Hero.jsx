import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../content';

const Hero = () => (
  <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-6 md:py-8 border-b border-zinc-200">
    <div className="flex-1 max-w-xl">
      <div className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-zinc-400"></span> {portfolioData.title.split(' | ')[0]}
      </div>
      
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4 leading-tight">
        {portfolioData.name}
      </h1>

      <div className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 space-y-4">
        <p className="font-medium text-zinc-800">{portfolioData.title}</p>
        <p>{portfolioData.about.intro}</p>
        <p>{portfolioData.about.focus}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base font-semibold">
        <Link 
          to="/projects" 
          className="group inline-flex items-center gap-1.5 text-zinc-900 hover:text-zinc-500 transition-colors"
        >
          View Projects <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <Terminal size={16} /> Research Log
        </Link>
      </div>
    </div>

    <div className="shrink-0 mb-6 md:mb-0">
      <img
        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-2 border-zinc-200 transition-all duration-300"
        src="https://avatars.githubusercontent.com/u/122210726?v=4"
        alt={portfolioData.name}
      />
    </div>
  </section>
);

export default Hero;

