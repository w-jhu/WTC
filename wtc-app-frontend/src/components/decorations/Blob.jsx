// Blobs.jsx
import React from 'react';
import './Blob.css';

const Blobs = () => {
  return (
    <div className="blobs-container">
      <div className="blob blob1" style={{ animationDelay: `-${Math.floor(Math.random() * 60)}s` }}/>
      <div className="blob blob2" style={{ animationDelay: `-${Math.floor(Math.random() * 80)}s` }}/>
      {/* Add more blob elements as needed */}
    </div>
  );
};

export default Blobs;
