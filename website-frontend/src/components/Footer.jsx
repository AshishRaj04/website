import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import portfolioData from "../content";

const Footer = () => (
  <footer className="mt-8 pt-6 pb-8 border-t border-zinc-200">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex gap-6">
        <a href={`mailto:${portfolioData.contact.email}`} className="text-zinc-500 hover:text-zinc-900 transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
        {portfolioData.socials.github && (
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
        )}
        {portfolioData.socials.linkedin && (
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        )}
        {portfolioData.socials.twitter && (
          <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors" aria-label="Twitter">
            <Twitter size={18} />
          </a>
        )}
      </div>
      <p className="text-zinc-500 text-[13px] font-medium">
        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;