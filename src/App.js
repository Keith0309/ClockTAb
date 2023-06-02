import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitalClock from './components/ClockTab/ClockTab';
import SwitchExample from './components/Switch/Switch';

const App = () => {
    return (
        <div>
        <DigitalClock/>
          <div className='d-flex justify-content-evenly'>
            <SwitchExample label="12-hour"/>
            <SwitchExample label="am/pm"/>
            <SwitchExample label="Seconds"/>
            <SwitchExample label="Date"/>
          </div>
  

        </div>
       
    );
  }

export default App;
