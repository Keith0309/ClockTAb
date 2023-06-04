import React, { useState, useEffect } from 'react';

const ClockTab = () => {
  const [clock, setClock] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleShowDate = () => {
    setShowDate(!showDate);
  };

  const toggleTimeFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    let options = {
      hour: is24HourFormat ? '2-digit' : 'numeric',
      minute: '2-digit',
      second: '2-digit'
    };

    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div>
      <button onClick={toggleShowDate}>Toggle Date</button>
      <button onClick={toggleTimeFormat}>
        {is24HourFormat ? 'Switch to 12-Hour' : 'Switch to 24-Hour'}
      </button>

      <div>
        {showDate && <h2>{formatDate(clock)}</h2>}
        <h1>{formatTime(clock)}</h1>
      </div>
    </div>
  );
};

export default ClockTab;
