// src/components/RefUsage.js
import React, { useRef } from 'react';

function RefUsage() {
  // Create the ref inside the component
  const inputRef = useRef(null);

  // Function to handle button click and access the ref
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Example action
    }
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Focus me when button is clicked" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default RefUsage;
