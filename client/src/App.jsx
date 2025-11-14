import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// Pages
import Home from "./pages/Home";
import Capsules from "./pages/Capsules";
import Dreams from "./pages/Dreams";
import VoiceJournalPage from "./pages/VoiceJournalPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/dreams" element={<Dreams />} />
        <Route path="/voice-journal" element={<VoiceJournalPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

