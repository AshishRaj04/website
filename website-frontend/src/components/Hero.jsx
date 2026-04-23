import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../content';

const Hero = () => (
  <section id="hero" className="flex flex-col items-center text-center justify-center gap-6 py-12 md:py-24 border-b border-zinc-200 min-h-[65vh]">
    <div className="shrink-0 mb-2">
      <img
        className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full border-2 border-zinc-200 transition-transform duration-500 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-md"
        src="https://avatars.githubusercontent.com/u/122210726?v=4"
        alt={portfolioData.name}
      />
    </div>

    <div className="max-w-xl flex flex-col items-center">
      <div className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> {portfolioData.title.split(' | ')[0]}
      </div>
      
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5 leading-tight">
        {portfolioData.name}
      </h1>

      <div className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 space-y-4">
        <p className="font-medium text-zinc-800">{portfolioData.title}</p>
        <p>{portfolioData.about.intro}</p>
        <p>{portfolioData.about.focus}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base font-semibold justify-center">
        <Link 
          to="/projects" 
          className="group inline-flex items-center justify-center gap-1.5 text-zinc-900 hover:text-zinc-500 transition-colors"
        >
          View Projects <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link 
          to="/blogs" 
          className="inline-flex items-center justify-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <Terminal size={16} /> Research Log
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;

