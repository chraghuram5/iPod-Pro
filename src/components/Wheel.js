import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faFastForward, faFastBackward } from '@fortawesome/free-solid-svg-icons';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component {
    componentDidMount() {

        const { onSelectButton, onMenuButton, togglePlayPause, handleClockwise, handleAntiClockwise } = this.props;

        //Inner circle select button touch
        var selectButton = document.getElementsByClassName("ipod-inner-circle")[0];
        var selectButtonArea = new ZingTouch.Region(selectButton);

        selectButtonArea.bind(selectButton, 'tap', function (e) {
            onSelectButton();
        });

        //Menu Button touch
        var menuButton = document.getElementsByClassName("buttons-first-row")[0];
        var menuButtonArea = new ZingTouch.Region(menuButton);

        menuButtonArea.bind(menuButton, 'tap', function (e) {
            //console.log("menuButtonclicked");
            onMenuButton();
        });

        //Pauseplay button touch
        var playbutton = document.getElementsByClassName("buttons-third-row")[0];
        var playbuttonArea = new ZingTouch.Region(playbutton);

        playbuttonArea.bind(playbutton, 'tap', function (e) {
            togglePlayPause();
        });

        //Circle touch
        let wheel = document.getElementsByClassName("ipod-controls")[0];
        let customRotate = new ZingTouch.Rotate({
            draggable: false
        })
        let wheelRegion = new ZingTouch.Region(wheel);
        wheelRegion.bind(wheel, customRotate, function (e) {          
            if (e.detail.distanceFromOrigin === 0) {
                this.angle = e.detail.angle;
            }
            if (Math.abs(this.angle - e.detail.angle) > 300 || Math.abs(this.angle - e.detail.angle) > 15) {
                this.angle = Math.abs(e.detail.angle);
                if (e.detail.distanceFromLast === 0) {
                    return;
                }
                else if (e.detail.distanceFromLast > 0) {
                    handleClockwise();
                } else {
                    handleAntiClockwise();
                }
            }
        });

    }

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