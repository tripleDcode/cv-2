import React from 'react';
import './CVEntry.css';

function CVEntry({ title, location, dates, responsibilities }) {
  return (
    <div className="cv-entry">
      <h3 className="cv-title">{title}</h3>
      <div className="cv-details">
        <span className="cv-location">{location}</span>
        <span className="cv-dates">{dates}</span>
      </div>
      <ul className="cv-responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default CVEntry;
