import React, { useState } from 'react';
import ChildComponent from '../Child/Child';

const ParentComponent = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  const updateClock = (newClock) => {
    setClock(newClock);
  };

  return (
    <div>
      <h1>{clock}</h1>
      <ChildComponent updateClock={updateClock} />
    </div>
  );
};

export default ParentComponent;
