import { Briefcase } from 'lucide-react';
import infoData from '../../public/info.json';

const Experience = () => {
  const expSection = infoData.sections.find((s) => s.id === 'experience');
  if (!expSection) return null;

  return (
    <section id="experience" className="font-sans py-4">
      <div className="border-b border-zinc-200 pb-2 mb-6">
        <h2 className="text-lg font-bold tracking-tight text-zinc-900 uppercase flex items-center gap-2">
          <Briefcase size={16} className="text-zinc-700" /> {expSection.title}
        </h2>
      </div>

      <div className="space-y-3">
        {expSection.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-white border border-zinc-200 hover:border-zinc-300 transition-colors rounded-sm shadow-2xs"
          >
            <div>
              <h3 className="font-bold text-zinc-900 text-base">
                {item.company}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600">
                {item.role}
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-xs">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
