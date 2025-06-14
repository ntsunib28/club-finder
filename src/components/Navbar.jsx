// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'
    }`;

  return (
    <nav className="bg-black shadow mb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <NavLink to="/" className="text-xl font-bold text-blue-600">
              Campus Club Finder
            </NavLink>
          </div>
          <div className="flex space-x-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/clubs" className={navLinkClass}>
              Clubs
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
