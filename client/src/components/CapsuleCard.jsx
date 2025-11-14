import React from "react";

// Card for displaying a single time capsule
const CapsuleCard = ({ capsule, onUnlock, onDelete }) => {
  const unlockDate = new Date(capsule.unlockDate);
  const isUnlocked = unlockDate <= new Date();
  const description = capsule.description || capsule.desc || 'No description';

  return (
    <div className="capsule-card">
      <h3>{capsule.title}</h3>
      <p>{description}</p>
      <div className="capsule-actions">
        {isUnlocked ? (
          <button className="unlock-btn" onClick={() => onUnlock(capsule.id)}>
            🔓 Unlock Now
          </button>
        ) : (
          <button className="locked-btn" disabled>
            🔒 Locked until {unlockDate.toLocaleDateString()}
          </button>
        )}
        {onDelete && (
          <button className="delete-btn" onClick={() => onDelete(capsule.id)}>
            Delete
          </button>
        )}
      </div>
      <div className="capsule-meta">
        <span>Unlocks: {unlockDate.toLocaleDateString()}</span>
        {capsule.createdAt && (
          <span>Created: {new Date(capsule.createdAt).toLocaleDateString()}</span>
        )}
      </div>
    </div>
  );
};

export default CapsuleCard;

