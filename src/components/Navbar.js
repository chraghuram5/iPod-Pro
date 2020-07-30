import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryThreeQuarters, faWifi } from '@fortawesome/free-solid-svg-icons';
class NavBar extends React.Component {
    state={

        curTime : new Date().toTimeString().substr(0,5),
    
      }
    
    render() {
        return (
            <div className="nav-bar">
                <div className="time">{this.state.curTime}<span><FontAwesomeIcon icon={faWifi} /></span></div>
                <div className="screen-name">iPod</div>
                <div className="battery-icon">
                    <FontAwesomeIcon icon={faBatteryThreeQuarters} />
                </div>
            </div>
        )
    }
}
export default NavBar;