import React from "react";

// Notification component (use type: 'success', 'error', etc.)
const Notification = ({ message, type }) => (
  <div className={`notification notification-${type}`}>{message}</div>
);

export default Notification;

