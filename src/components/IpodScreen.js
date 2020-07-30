import React from 'react';
import FullScreenItem from './FullScreenItem';
import MenuItemScreen from './MenuItemScreen';
import NavBar from './Navbar';
import ReactAudioPlayer from 'react-audio-player';

class IpodScreen extends React.Component {
    render() {
        const { homeScreen, screen1, screen2, menuItems, images, currentScreen, togglePlayPause } = this.props;
        return (
            //iPod screen 
            <div className="ipod-screen">
                {/* navigation bar on the top */}
                <NavBar />
                {/* Display main-display if homeScreen or screen1 is true */}
                {(screen1 || homeScreen) && <div className="main-display">
                    {/* Display menuItems according for the screens */}
                    {homeScreen && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen} />}
                    {screen1 && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen} />}
                    <div>
                    </div>
                </div>}
                {screen2 && <FullScreenItem menuItems={menuItems} images={images} currentScreen={currentScreen} togglePlayPause={togglePlayPause} />}
                {/* Audio player visible only on screen 2 and not remaining screens but pause and play from any screen on click of play/pause button */}
                <ReactAudioPlayer
                    src={"a"}
                    controls={screen2 && menuItems === "Songs"}
                    id="song"
                />
            </div>
        )
    }
}
export default IpodScreen;