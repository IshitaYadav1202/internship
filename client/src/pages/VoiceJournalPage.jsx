import React, { useState } from "react";
import Navbar from "../components/Navbar";
import VoiceJournal from "../components/VoiceJournal";

const demoEntries = [
  { id: 100, audioUrl: "/demo-audio.mp3", transcript: "Felt great today!", date: "2025-11-14" }
];

// Voice journal logs/timeline
const VoiceJournalPage = () => {
  const [entries] = useState(demoEntries);

  return (
    <div className="voice-journal-page">
      <Navbar />
      <VoiceJournal entries={entries} />
    </div>
  );
};

export default VoiceJournalPage;

