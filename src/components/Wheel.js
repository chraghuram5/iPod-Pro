import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons';

class Wheel extends React.Component {

    render() {
        return (
            <div className="ipod-controls">
                <div className="ipod-inner-circle">
                </div>
                <div className="buttons-first-row">
                    <div className="menu-button">
                        MENU
                    </div>
                </div>
                <div className="buttons-second-row">
                    <div className="previous-button">
                        <FontAwesomeIcon icon={faFastBackward} />
                    </div>
                    <div className="next-button">
                        <FontAwesomeIcon icon={faFastForward} />
                    </div>
                </div>
                <div className="buttons-third-row">
                    <div className="pause-button">
                        <FontAwesomeIcon icon={faPlay} />
                        <FontAwesomeIcon icon={faPause} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Wheel;