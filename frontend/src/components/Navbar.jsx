import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
  const linkClass = "text-[var(--eerie-black)] hover:text-[var(--keppel)] transition-all duration-300 cursor-pointer transform hover:scale-110";
  const activeLinkClass = "text-[var(--eerie-black)]";

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-[var(--onyx)]/80 backdrop-blur-sm p-4 shadow-md sticky top-0 z-50">
      <ul className="flex justify-center items-center space-x-8 bg-[var(--steel-blue)]/20 rounded-full px-6 py-2">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experiences" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/learning" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Learning
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/simulations" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Simulations.
          </NavLink>
        </li>
        
        {/* Authentication section */}
        {isLoggedIn ? (
          <li className="flex items-center space-x-4">
            <span className="text-[var(--eerie-black)] text-sm">
              Welcome, <span className="font-semibold text-[var(--keppel)]">{user?.username}</span>
            </span>
            <button
              onClick={handleLogout}
              className="text-[var(--eerie-black)] hover:text-red-500 transition-all duration-300 cursor-pointer transform hover:scale-110 text-sm bg-[var(--steel-blue)]/30 px-3 py-1 rounded-full"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <NavLink 
              to="/signin" 
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
            >
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
