import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClockTab.css';
const DigitalClock = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString())
    setInterval(() => {
        setClock(new Date().toLocaleTimeString())
    }, 100);
    return (
        <div className="d-flex justify-content-center align-items-center">
            <h1>{clock}</h1>
        </div>
    )
        
    
}
export default DigitalClock;