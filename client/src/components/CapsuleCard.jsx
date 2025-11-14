import React from "react";

// Card for displaying a single time capsule
const CapsuleCard = ({ capsule, onUnlock }) => (
  <div className="capsule-card">
    <h3>{capsule.title}</h3>
    <p>{capsule.description}</p>
    <button onClick={() => onUnlock(capsule.id)}>Unlock Capsule</button>
    <div>
      <span>Unlocks on: {new Date(capsule.unlockDate).toLocaleDateString()}</span>
    </div>
  </div>
);

export default CapsuleCard;

