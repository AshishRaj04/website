import { Link, useLocation } from "react-router-dom";
import portfolioData from "../content";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Blog", to: "/blogs" },
  { name: "Notes", to: "/notes" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 mb-8 border-b border-zinc-200 gap-4">
      <Link 
        to="/" 
        className="text-lg font-bold tracking-tight text-zinc-900 hover:text-zinc-500 transition-colors duration-200"
      >
        {portfolioData.name || "Ashish Raj"}
      </Link>
      
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`transition-colors duration-200 py-1 ${
                  isActive 
                    ? "text-zinc-900" 
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
