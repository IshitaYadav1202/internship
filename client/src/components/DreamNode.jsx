import React from "react";

// Single dream/goal node inside DreamMap
const DreamNode = ({ node, onClick }) => (
  <div className="dream-node" onClick={onClick}>
    <h4>{node.title}</h4>
    <p>Status: {node.status}</p>
    {node.dueDate && <span>Due: {node.dueDate}</span>}
  </div>
);

export default DreamNode;

