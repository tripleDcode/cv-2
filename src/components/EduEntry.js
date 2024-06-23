import React from 'react';
import './EduEntry.css';

function EduEntry({ title, location, dates, responsibilities }) {
  return (
    <div className="Edu-entry">
      <h3 className="Edu-title">{title}</h3>
      <div className="Edu-details">
        <span className="Edu-location">{location}</span>
        <span className="Edu-dates">{dates}</span>
      </div>
      <ul className="Edu-responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default EduEntry;
