import React from 'react';
import FullScreenItem from './FullScreenItem';
import MenuItemScreen from './MenuItemScreen';
import ZingTouch from 'zingtouch';
import NavBar from './Navbar';

class IpodScreen extends React.Component {

    componentDidMount() {

        const { onSelectButton, onMenuButton, togglePlayPause } = this.props;
        var selectButton = document.getElementsByClassName("ipod-inner-circle")[0];
        var selectButtonArea = new ZingTouch.Region(selectButton);

        selectButtonArea.bind(selectButton, 'tap', function (e) {
            onSelectButton();
        });

        var menuButton = document.getElementsByClassName("buttons-first-row")[0];
        var menuButtonArea = new ZingTouch.Region(menuButton);

        menuButtonArea.bind(menuButton, 'tap', function (e) {
            //console.log("menuButtonclicked");
            onMenuButton();
        });

        var playbutton = document.getElementsByClassName("buttons-third-row")[0];
        var playbuttonArea = new ZingTouch.Region(playbutton);

        playbuttonArea.bind(playbutton, 'tap', function (e) {
            togglePlayPause();
        });

        let touchArea = document.getElementsByClassName("ipod-controls")[0];
        let menuItems = document.getElementsByClassName("menu-item");
        if (menuItems.length === 0) {
            return;
        }

        let customRotate=new ZingTouch.Rotate({
            draggable: false
        })
        let myRegion = new ZingTouch.Region(touchArea);
        menuItems[0].classList.add("active");
        //console.log(menuItems[0].innerText);
        myRegion.bind(touchArea, customRotate, function (e) {
            console.log(e.detail.angle+" "+e.detail.distanceFromLast+" "+e.detail.distanceFromOrigin);
            if(e.detail.distanceFromLast===0)
                return;
            if (e.detail.distanceFromLast > 15 || Math.abs(this.angle - e.detail.angle) > 300) {
                for (let i = 0; i < menuItems.length; i++) {
                    if (menuItems[i].classList[1] === "active") {
                        menuItems[(i + 1) % menuItems.length].classList.add("active");
                        menuItems[i].classList.remove("active");
                        break;
                    }
                }
            }
            if (e.detail.distanceFromLast < -15 || Math.abs(this.angle - e.detail.angle) > 300) {
                for (let i = 0; i < menuItems.length; i++) {
                    if (menuItems[i].classList[1] === "active") {
                        if (menuItems[i].classList[1] === "active") {
                            menuItems[(i+menuItems.length-1) % menuItems.length].classList.add("active");
                            menuItems[i].classList.remove("active");
                            break;
                        }
                    }
                }
            }
        });

    }

    render() {
        const { homeScreen, screen1, screen2, menuItems, images, currentScreen, togglePlayPause, isPlaying } = this.props;
        return (
            <div className="ipod-screen">
                <NavBar />
                <div className="main-display">
                    {homeScreen && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen}/>}
                    
                    {screen1 && <MenuItemScreen menuItems={menuItems} images={images} currentScreen={currentScreen}/>}
                   
                    {screen2 && <FullScreenItem menuItems={menuItems} images={images}  currentScreen={currentScreen} togglePlayPause={togglePlayPause} isPlaying={isPlaying}/>}
                </div>
            </div>
        )
    }
}
export default IpodScreen;