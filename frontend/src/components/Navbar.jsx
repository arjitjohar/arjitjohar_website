import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-primary-green p-4 shadow-md sticky top-0 z-50">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link 
            to="about" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-background-light hover:text-primary-brown transition-colors duration-300 cursor-pointer"
            activeClass="text-primary-brown"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="experiences" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-background-light hover:text-primary-brown transition-colors duration-300 cursor-pointer"
            activeClass="text-primary-brown"
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link 
            to="learning" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-background-light hover:text-primary-brown transition-colors duration-300 cursor-pointer"
            activeClass="text-primary-brown"
          >
            Learning
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
