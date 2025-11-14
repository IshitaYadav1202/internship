import React from "react";
import { Link, useLocation } from "react-router-dom";

// Top navigation bar for the app
const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">💎</span>
        EchoCapsule
      </Link>
      <div className="navbar-links">
        <Link to="/capsules" className={isActive('/capsules')}>Capsules</Link>
        <Link to="/dreams" className={isActive('/dreams')}>Dream Mapper</Link>
        <Link to="/voice-journal" className={isActive('/voice-journal')}>Voice Journal</Link>
        <Link to="/profile" className={isActive('/profile')}>Profile</Link>
        <Link to="/login" className={`nav-button ${isActive('/login')}`}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

