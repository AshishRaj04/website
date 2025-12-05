import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import portfolioData from "../content";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Blog", to: "/blogs" },
];

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    if (location.pathname === "/") {
      setActiveSection(section);
    }
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <nav
        className={cn(
          "relative w-full max-w-4xl rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled || isOpen
            ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/20"
            : "bg-transparent backdrop-blur-none border border-transparent"
        )}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                onClick={() => handleLinkClick("About")}
                className="text-xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                {portfolioData.name || "Portfolio"}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-green-700"
                        : "text-gray-600 hover:text-green-600 hover:bg-green-50/50"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white shadow-sm border border-green-100 rounded-full"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100/50 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/50 backdrop-blur-xl rounded-b-2xl border-t border-gray-100"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                      location.pathname === link.to
                        ? "bg-green-50 text-green-700 shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
