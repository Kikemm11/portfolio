import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import NavbarButton from './NavbarButton';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-2 flex items-center justify-between w-full rounded-full shadow-md">
      {/* Left: Home Icon */}
      <div className="flex items-center space-x-2">
        <AiFillHome className="text-2xl" />
        <Link to="/portfolio" className="text-white font-semibold hover:text-gray-300">
          Home
        </Link>
      </div>

      {/* Right: Buttons */}
      <div className="flex space-x-4">
        <NavbarButton content={"Skills"} link={"/portfolio/skills"} />
        <NavbarButton content={"Projects"} link={"/portfolio/projects"} />
        <NavbarButton content={"Contact"} link={"/portfolio/contact"} />
      </div>
    </nav>
  );
};

export default Navbar;
