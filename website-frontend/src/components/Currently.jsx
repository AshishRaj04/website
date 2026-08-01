import { Clock } from 'lucide-react';
import infoData from '../../public/info.json';

const Currently = () => {
  const currentlySection = infoData.sections.find((s) => s.id === 'currently');
  if (!currentlySection) return null;

  return (
    <section id="currently" className="font-sans py-4">
      <div className="border-b border-zinc-200 pb-2 mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-zinc-900 uppercase flex items-center gap-2">
          <Clock size={16} className="text-zinc-700" /> {currentlySection.title}
        </h2>
        <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest">
          2026 Focus
        </span>
      </div>

      <div className="space-y-4">
        {currentlySection.items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between p-4 bg-white border border-zinc-200 hover:border-zinc-300 transition-colors rounded-sm shadow-2xs gap-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-xs w-fit">
                {item.date}
              </span>
              <h3 className="font-bold text-zinc-900 text-base">
                {item.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Currently;
