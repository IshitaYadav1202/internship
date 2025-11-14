import React from "react";

// Timeline for events/capsules
const Timeline = ({ events }) => (
  <div className="timeline">
    {events.map(event => (
      <div key={event.id} className="timeline-event">
        <span>{event.title}</span>
        <span>{new Date(event.date).toLocaleDateString()}</span>
      </div>
    ))}
  </div>
);

export default Timeline;

