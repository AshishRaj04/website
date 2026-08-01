import { Cpu, Terminal, Layers } from 'lucide-react';
import infoData from '../../public/info.json';

const iconMap = {
  "Training Systems": Cpu,
  "LLM Systems": Terminal,
  "Scientific ML": Layers,
};

const EngineeringHighlights = () => {
  const engSection = infoData.sections.find((s) => s.id === 'engineering');
  if (!engSection) return null;

  return (
    <section id="engineering" className="font-sans py-4">
      <div className="border-b border-zinc-200 pb-2 mb-6">
        <h2 className="text-lg font-bold tracking-tight text-zinc-900 uppercase">
          {engSection.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {engSection.items.map((cat, idx) => {
          const IconComp = iconMap[cat.title] || Terminal;
          return (
            <div
              key={idx}
              className="p-5 bg-white border border-zinc-200 hover:border-zinc-300 transition-colors rounded-sm shadow-2xs flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-4 border-b border-zinc-100 pb-3">
                <div className="p-1.5 bg-zinc-100 rounded-xs text-zinc-800">
                  <IconComp size={16} />
                </div>
                <h3 className="font-bold text-zinc-900 text-base">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2 mt-auto">
                {cat.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-zinc-600 flex items-center gap-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EngineeringHighlights;
