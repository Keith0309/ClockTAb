import React, { useState } from 'react';
import Switch from "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css';

const SwitchBtn = (props) => {
    const [checked, setChecked] = useState(true);
    const updateDate = props.updateDate;
    const updateClock = props.updateClock;
 const handleChange = () => {
    setChecked(!checked);
    if (checked === false && props.label === '12-hour' ) {

    }
    else {

    }
    if (checked === false && props.label === 'am/pm' ) {
      console.log(this.props.label);
    }
    else {

    }
    if (checked === false && props.label === 'Seconds' ) {
        const newClockValue = new Date().toLocaleTimeString();
          updateClock(newClockValue);
    }
    if (checked === true && props.label === 'Seconds' ) {
        const newClockValue = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
          updateClock(newClockValue);
    }
    if (checked === false && props.label === 'Date' ) {
        const newDateValue = new Date().toDateString();
          updateDate(newDateValue);
    }
    if (checked === true && props.label === 'Date' ) {
        const newDateValue = '';
          updateDate(newDateValue);
    }

  }
    return (
      <label>
        <Switch onChange={handleChange} checked={checked} />
        <span className="fs-3 fw-bold">{props.label}</span>  
      </label>
    );
    
  }

export default SwitchBtn;
