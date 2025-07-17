import portfolioData from "../content";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
    <footer className="bg-white">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
                <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                </a>
                <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                </a>
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                </a>
            </div>
            <p className="mt-8 text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
        </div>
    </footer>
);
export default Footer;