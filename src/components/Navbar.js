import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryThreeQuarters, faWifi } from '@fortawesome/free-solid-svg-icons';
class NavBar extends React.Component {
    state={
        curTime : new Date().toTimeString().substr(0,5), 
      }
    
    render() {
        return (
            //Navbar component on the top of the display
            <div className="nav-bar">
                {/* Time on the left of navbar */}
                <div className="time">{this.state.curTime}<span><FontAwesomeIcon icon={faWifi} /></span></div>
                {/* Ipod title at the center of navbar */}
                <div className="screen-name">iPod</div>
                {/* battery icon on the right of navbar */}
                <div className="battery-icon">
                    <FontAwesomeIcon icon={faBatteryThreeQuarters} />
                </div>
            </div>
        )
    }
}
export default NavBar;