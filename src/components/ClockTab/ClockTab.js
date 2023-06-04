import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClockTab.css';
import SwitchBtn from '../Switch/Switch';


const DigitalClock = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toDateString());

    const updateDate = (newDate) => {
        setDate(newDate);
      };
    const updateClock = (newClock) => {
        setClock(newClock);
      };
    
    //toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
    return (
        <div className="container-fluid text-center">
            <h1>{clock}</h1>
            <h2>{date}</h2>
            <div className='d-flex justify-content-evenly'>
                <SwitchBtn label="12-hour" updateClock={updateClock}/>
                <SwitchBtn label="Seconds" updateClock={updateClock}/>
                <SwitchBtn label="Date" updateDate={updateDate}/>
            </div>
        </div>
    )
        
    
}
export default DigitalClock;