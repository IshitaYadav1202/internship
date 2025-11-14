import React from "react";
import DreamNode from "./DreamNode";

// Visual mapping of group dreams/goals
const DreamMap = ({ dreams, onNodeClick }) => (
  <div className="dream-map">
    {dreams.map(node => (
      <DreamNode key={node.id} node={node} onClick={() => onNodeClick(node.id)} />
    ))}
  </div>
);

export default DreamMap;

