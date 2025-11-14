import React from "react";
import { Link } from "react-router-dom";

// Top navigation bar for the app
const Navbar = () => (
  <nav className="navbar">
    <Link to="/">EchoCapsule</Link>
    <Link to="/capsules">Capsules</Link>
    <Link to="/dreams">Dream Mapper</Link>
    <Link to="/voice-journal">Voice Journal</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;

