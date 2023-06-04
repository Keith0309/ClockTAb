import React from 'react';

const ChildComponent = ({ updateClock }) => {
  const handleClick = () => {
    const newClockValue = new Date().toLocaleTimeString();
    updateClock(newClockValue);
  };

  return (
    <button onClick={handleClick}>
      Update Clock
    </button>
  );
};

export default ChildComponent;