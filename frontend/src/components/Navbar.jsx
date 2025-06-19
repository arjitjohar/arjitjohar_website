import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    color: '#8B4513', // primary-brown
    textDecoration: 'underline',
  };

  return (
    <nav className="bg-primary-green p-4 shadow-md">
      <ul className="flex justify-center space-x-8">
        <li>
          <NavLink 
            to="/about" 
            style={({ isActive }) => isActive ? activeStyle : undefined}
            className="text-background-light hover:text-primary-brown transition-colors duration-300"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experiences" 
            style={({ isActive }) => isActive ? activeStyle : undefined}
            className="text-background-light hover:text-primary-brown transition-colors duration-300"
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/learning" 
            style={({ isActive }) => isActive ? activeStyle : undefined}
            className="text-background-light hover:text-primary-brown transition-colors duration-300"
          >
            Learning
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
