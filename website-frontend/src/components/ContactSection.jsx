import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import infoData from '../../public/info.json';

const ContactSection = () => {
  const contactSection = infoData.sections.find((s) => s.id === 'contact');
  if (!contactSection) return null;

  return (
    <section id="contact" className="font-sans py-6 border-t border-zinc-200 mt-6">
      <div className="p-6 bg-zinc-900 text-white rounded-sm shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-1.5">
            <MessageSquare size={14} /> Get in Touch
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
            {contactSection.title}
          </h2>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Interested in collaboration, deep learning R&D, or inference system design? Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <a
            href={`mailto:${contactSection.email}`}
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-4 py-2.5 rounded-xs transition-colors text-sm"
          >
            <Mail size={16} /> Email Me
          </a>
          <div className="flex items-center justify-center gap-3">
            {contactSection.github && (
              <a
                href={`https://github.com/${contactSection.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xs transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {contactSection.linkedin && (
              <a
                href={`https://linkedin.com/in/${contactSection.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xs transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
