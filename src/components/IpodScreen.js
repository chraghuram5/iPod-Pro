import React from 'react';
import FullScreenItem from './FullScreenItem';
import MenuItemScreen from './MenuItemScreen';
import NavBar from './Navbar';
import ReactAudioPlayer from 'react-audio-player';
import song2 from "../static/Shape of you.mp3";

class IpodScreen extends React.Component {
    render() {
        const { homeScreen, screen1, screen2, menuItems, images, currentScreen, togglePlayPause} = this.props;
        return (
            <div className="ipod-screen">
                <NavBar />
                <div className="main-display">
                    {homeScreen && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen} />}
                    {screen1 && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen} />}
                    {/* {screen2 && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen} />} */}
                    <div>
                    </div>
                </div>
                {screen2 && <FullScreenItem menuItems={menuItems} images={images} currentScreen={currentScreen} togglePlayPause={togglePlayPause}/>}
                <ReactAudioPlayer
                    src={song2}
                    controls={screen2}
                    id="song"
                />
            </div>
        )
    }
}
export default IpodScreen;