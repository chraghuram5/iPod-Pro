import React from 'react';
import FullScreenItem from './FullScreenItem';
import MenuItemScreen from './MenuItemScreen';
import NavBar from './Navbar';
import ReactAudioPlayer from 'react-audio-player';

class IpodScreen extends React.Component {
    render() {
        const { homeScreen, screen1, screen2, menuItems, images, currentScreen, togglePlayPause} = this.props;
        return (
            <div className="ipod-screen">
                <NavBar />
                {(screen1||homeScreen) && <div className="main-display">
                    {homeScreen && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen} />}
                    {screen1 && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen} />}
                    <div>
                    </div>
                </div>}
                {screen2 && <FullScreenItem menuItems={menuItems} images={images} currentScreen={currentScreen} togglePlayPause={togglePlayPause}/>}
                <ReactAudioPlayer
                    src={images["Music"]}
                    controls={screen2 && menuItems ==="Songs"}
                    id="song"
                />
            </div>
        )
    }
}
export default IpodScreen;