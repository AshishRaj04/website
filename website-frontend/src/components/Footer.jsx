import portfolioData from "../content";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
    <footer className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8">
                <motion.a 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={`mailto:${portfolioData.contact.email}`} 
                    className="text-gray-400 hover:text-green-600 transition-colors"
                >
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={portfolioData.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={portfolioData.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={portfolioData.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                </motion.a>
            </div>
            <p className="mt-8 text-center text-base text-gray-500">
                &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
        </div>
    </footer>
);
export default Footer;