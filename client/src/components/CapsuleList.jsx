import React from "react";
import CapsuleCard from "./CapsuleCard";

// List of all capsules
const CapsuleList = ({ capsules, onUnlock, onDelete }) => {
  if (capsules.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">⏰</div>
        <h3>No Time Capsules Yet</h3>
        <p>Create your first time capsule to preserve memories for the future!</p>
      </div>
    );
  }

  return (
    <div className="capsule-list">
      {capsules.map(c => (
        <CapsuleCard 
          key={c.id} 
          capsule={c} 
          onUnlock={onUnlock} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CapsuleList;

