import { useState, useRef, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import SEO from "./components/SEO";


// Lazy load components
const Projects = lazy(() => import("./components/Projects"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const PostPage = lazy(() => import("./components/[slug]/page"));

export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const location = useLocation();
  
  const sections = {
    Hero: useRef(null),
    Contact: useRef(null),
    About: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId =
              entry.target.id.charAt(0).toUpperCase() +
              entry.target.id.slice(1);
            setActiveSection(sectionId);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
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
    if (sections[section]?.current) {
      sections[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HelmetProvider>
      <div className="bg-white font-sans min-h-screen flex flex-col">
        <SEO />
        <ScrollToTop />
        <Navbar
          activeSection={activeSection}
          setActiveSection={handleSetActiveSection}
        />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <>
                    <div ref={sections.Hero} id="hero">
                      <Hero />
                    </div>
                    <div ref={sections.About} id="about">
                      <About />
                    </div>
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="/blogs"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Blog />
                  </Suspense>
                }
              />
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Projects />
                  </Suspense>
                }
              />
              <Route
                path="/posts/:slug"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <PostPage />
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </HelmetProvider>
  );
}
