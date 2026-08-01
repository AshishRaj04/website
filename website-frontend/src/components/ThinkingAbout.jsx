import { BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import infoData from '../../public/info.json';

const ThinkingAbout = () => {
  const researchSection = infoData.sections.find((s) => s.id === 'research');
  const writingSection = infoData.sections.find((s) => s.id === 'writing');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 font-sans">
      {/* Research Log */}
      {researchSection && (
        <section id="research">
          <div className="border-b border-zinc-200 pb-2 mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold tracking-tight text-zinc-900 uppercase flex items-center gap-2">
              <BookOpen size={16} className="text-zinc-700" /> {researchSection.title}
            </h2>
            <Link to="/blogs" className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
              View All →
            </Link>
          </div>

          <div className="space-y-2.5">
            {researchSection.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-white border border-zinc-200 hover:border-zinc-300 transition-colors rounded-sm text-sm"
              >
                <span className="font-semibold text-zinc-800">
                  {item.title}
                </span>
                <span
                  className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs border ${
                    item.status === 'Published'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-zinc-100 text-zinc-500 border-zinc-200'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Things I'm Thinking About */}
      {writingSection && (
        <section id="writing">
          <div className="border-b border-zinc-200 pb-2 mb-4">
            <h2 className="text-base font-bold tracking-tight text-zinc-900 uppercase flex items-center gap-2">
              <Lightbulb size={16} className="text-zinc-700" /> {writingSection.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {writingSection.items.map((item, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-sm"
              >
                💡 {item}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ThinkingAbout;
