import React from "react";
import CapsuleCard from "./CapsuleCard";

// List of all capsules
const CapsuleList = ({ capsules, onUnlock }) => (
  <div className="capsule-list">
    {capsules.map(c => (
      <CapsuleCard key={c.id} capsule={c} onUnlock={onUnlock} />
    ))}
  </div>
);

export default CapsuleList;

