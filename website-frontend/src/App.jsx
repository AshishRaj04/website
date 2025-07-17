import { useState , useRef , useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState('About');
  const sections = {
    About: useRef(null),
    Projects: useRef(null),
    Blog: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
            setActiveSection(sectionId);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // Adjust rootMargin to trigger when section is more centered
    );

    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      Object.values(sections).forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);
  
  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    sections[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white font-sans">
      <Navbar activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      <main>
        <div ref={sections.About}><About /></div>
        <div ref={sections.Projects}><Projects /></div>
        <div ref={sections.Blog}><Blog /></div>
        <div ref={sections.Contact}><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}