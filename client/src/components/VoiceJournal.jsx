import React from "react";
import VoiceRecorder from "./VoiceRecorder";

// Page to display/list voice journal entries
const VoiceJournal = ({ entries }) => (
  <div className="voice-journal">
    <VoiceRecorder />
    <ul>
      {entries.map(entry => (
        <li key={entry.id}>
          <audio controls src={entry.audioUrl}></audio>
          <span>{entry.transcript}</span>
          <span>{new Date(entry.date).toLocaleString()}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default VoiceJournal;

