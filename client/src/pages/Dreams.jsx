import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DreamMap from "../components/DreamMap";

const initialDreams = [
  { id: 1, title: "Trip to Japan", status: "Planning", dueDate: "2025-12-31" },
  { id: 2, title: "Start a Podcast", status: "In Progress" }
];

// Dream/goal mapping and management
const Dreams = () => {
  const [dreams] = useState(initialDreams);

  const handleNodeClick = id => {
    // TODO: node interaction logic
    alert(`Clicked dream node: ${id}`);
  };

  return (
    <div className="dreams">
      <Navbar />
      <DreamMap dreams={dreams} onNodeClick={handleNodeClick} />
    </div>
  );
};

export default Dreams;

