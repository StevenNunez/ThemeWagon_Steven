import { Link } from "react-router-dom";

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-gradient-to-br from-[#fdf6f6] via-[#f5f7ff] to-[#e8f8ff] shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 md:px-6">
        <div className="flex items-center gap-2">
          <img src="/navbar/logo.png" alt="Klean Logo" className="h-6 md:h-8" />
        </div>
        <ul className="flex flex-wrap space-x-2 md:space-x-6 font-medium text-gray-700 text-xs sm:text-sm">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#features" onClick={(e) => handleScroll(e, "features")} className="hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#details" onClick={(e) => handleScroll(e, "details")} className="hover:text-blue-600">
              Details
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#team" onClick={(e) => handleScroll(e, "team")} className="hover:text-blue-600">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
          <button className="text-blue-500 hover:underline">Log In</button>
          <button className="bg-white text-purple-500 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md hover:bg-purple-50 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;