import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-blue-600">Klean</Link>
        <ul className="flex space-x-4 md:space-x-6 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#details" onClick={(e) => handleScroll(e, 'details')} className="hover:text-blue-600">
              Details
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="hover:text-blue-600">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;