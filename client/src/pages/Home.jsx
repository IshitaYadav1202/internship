import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Homepage/dashboard
const Home = () => (
  <div className="home">
    <Navbar />
    <div className="home-content">
      <h1>Welcome to EchoCapsule</h1>
      <p className="home-subtitle">Preserve memories, map dreams, and create collaborative voice journals</p>
      
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon">⏰</div>
          <h3>Time Capsules</h3>
          <p>Create time capsules that unlock in the future. Preserve your memories for tomorrow.</p>
          <Link to="/capsules" className="feature-link">Explore Capsules →</Link>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Dream Mapping</h3>
          <p>Visualize and connect your dreams and goals. See how your aspirations link together.</p>
          <Link to="/dreams" className="feature-link">Map Your Dreams →</Link>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎤</div>
          <h3>Voice Journals</h3>
          <p>Record and collaborate on voice journal entries. Share your thoughts with others.</p>
          <Link to="/voice-journal" className="feature-link">Start Journaling →</Link>
        </div>
      </div>
      
      <div className="home-cta">
        <Link to="/register" className="cta-button primary">Get Started</Link>
        <Link to="/login" className="cta-button secondary">Sign In</Link>
      </div>
    </div>
  </div>
);

export default Home;

