import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CapsuleForm from "../components/CapsuleForm";
import CapsuleList from "../components/CapsuleList";

// Capsule browsing/creation
const Capsules = () => {
  const [capsules, setCapsules] = useState([]);

  const handleAddCapsule = capsule => {
    setCapsules([...capsules, { ...capsule, id: Date.now() }]);
  };

  const handleUnlock = id => {
    // TODO: unlock logic
    alert(`Capsule ${id} unlocked!`);
  };

  return (
    <div className="capsules">
      <Navbar />
      <CapsuleForm onSubmit={handleAddCapsule} />
      <CapsuleList capsules={capsules} onUnlock={handleUnlock} />
    </div>
  );
};

export default Capsules;

