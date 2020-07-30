import React from 'react';
import IpodScreen from './IpodScreen';
import Wheel from './Wheel';
import Music from '../static/04 Aaja - Nucleya 190Kbps.mp3';
import Albums from '../static/albums.jpg';
import Artists from '../static/artists.jpg';
import COC from '../static/coc-wallpaper.jpeg';
import Volume from '../static/volume.png';
import PUBG from '../static/pubg.jpg';
import Playlist from '../static/playlist.png';
import Songs from '../static/maxresdefault.jpg';

class App extends React.Component {
  constructor() {
    super();

    //Initializing the state
    this.state = {
      homeScreen: true,
      screen1: false,
      screen2: false,
      menuItems: ['Music', 'Games', 'Settings'],
      screenItems: {
        "Music": ['Songs', 'Albums', 'Artists', 'Playlists'],
        "Games": ['PUBG', 'COC'],
        "Settings": ['Volume', 'Battery']
      },
      currentScreen: 'HomeScreen',
      images: {
        "Music": Music,
        "Albums": Albums,
        "Artists": Artists,
        "Playlists": Playlist,
        "Volume": Volume,
        "Battery": Volume,
        "PUBG": PUBG,
        "COC": COC,
        "Songs":Songs
      }
    }
  }

  //Menu Items scroll down on clockwise rotation of wheel
  handleClockwise = () => {
    let menuItems = document.getElementsByClassName("menu-item");
    if (menuItems.length === 0) {
      return;
    }
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].classList[1] === "active") {
        menuItems[(i + 1) % menuItems.length].classList.add("active");
        menuItems[i].classList.remove("active");
        break;
      }
    }
  }

  //Menu Items scroll down on Anticlockwise rotation of wheel
  handleAntiClockwise = () => {
    let menuItems = document.getElementsByClassName("menu-item");
    if (menuItems.length === 0) {
      return;
    }
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].classList[1] === "active") {
        if (menuItems[i].classList[1] === "active") {
          menuItems[(i + menuItems.length - 1) % menuItems.length].classList.add("active");
          menuItems[i].classList.remove("active");
          break;
        }
      }
    }
  }

  //Play Pause button on wheel
  togglePlayPause = () => {

    let song = document.getElementById("song");
    if (song.paused) {
      song.play();
    }
    else {
      song.pause();
    }
  }

  //Select button at the center of the wheel
  handleSelectButton = () => {
    let { homeScreen, screen1, screen2, screenItems, menuItems, currentScreen } = this.state;
    if (screen2)
      return;
    if (homeScreen) {
      let dom = document.getElementsByClassName("active")[0].innerText;
      homeScreen = false;
      screen1 = true;
      screen2 = false;
      menuItems = screenItems[dom];
      currentScreen = dom;
    }
    else if (screen1) {
      let dom = document.getElementsByClassName("active")[0].innerText;
      homeScreen = false;
      screen1 = false;
      screen2 = true;
      menuItems = dom;
      currentScreen = dom;
    }
    else {
      let dom = document.getElementsByClassName("active")[0].innerText;
      homeScreen = false;
      screen1 = false;
      screen2 = true;
      menuItems = dom;
      currentScreen = dom;
    }

    this.setState({
      homeScreen, screen1, screen2, menuItems, currentScreen
    })
  }


  //Menu button at the top of the wheel
  handleMenuButton = () => {
    let { homeScreen, screen1, screen2, screenItems, menuItems, currentScreen } = this.state;
    //console.log("menuButton");
    if (homeScreen)
      return;
    if (screen1) {
      homeScreen = true;
      screen1 = false;
      screen2 = false;
      menuItems = Object.keys(screenItems);
      currentScreen = 'HomeScreen';
    }
    else if (screen2) {
      homeScreen = false;
      screen1 = true;
      screen2 = false;
      let dom = document.getElementsByClassName("full-screen-heading")[0].innerText;
      console.log('dom' + dom);
      for (let screenItem in screenItems) {
        console.log('screenItem' + screenItem)
        if (screenItems[screenItem].includes(dom)) {
          console.log('inside loop' + screenItems[screenItem]);
          menuItems = screenItems[screenItem];
          currentScreen = screenItem;
          break;
        }
      }
    }
    this.setState({
      homeScreen, screen1, screen2, menuItems, currentScreen
    })
  }

  //Setting a menuItem active upon rendering
  componentDidMount() {
    let menuItems = document.getElementsByClassName("menu-item");
    if (menuItems.length === 0) {
      return;
    }
    menuItems[0].classList.add("active");
  }
  
  //Setting a menuItem active upon updating
  componentDidUpdate() {
    let menuItems = document.getElementsByClassName("menu-item");
    let activeItems = document.getElementsByClassName("active")[0];
    console.log(activeItems);
    if (activeItems !== undefined || menuItems.length === 0) {
      return;
    }
    menuItems[0].classList.add("active");
  }

  render() {
    const { homeScreen, screen1, screen2, menuItems, screenItems, images, currentScreen} = this.state;

    return (
      <div className="ipod-page">
        <div className="ipod-container">
          <IpodScreen
            menuItems={menuItems}
            homeScreen={homeScreen}
            screen1={screen1}
            screen2={screen2}
            screenItems={screenItems}
            onSelectButton={this.handleSelectButton}
            onMenuButton={this.handleMenuButton}
            images={images}
            currentScreen={currentScreen}
            togglePlayPause={this.togglePlayPause}
            handleClockwise={this.handleClockwise}
            handleAntiClockwise={this.handleAntiClockwise}
          />
          <Wheel
            onSelectButton={this.handleSelectButton}
            onMenuButton={this.handleMenuButton}
            togglePlayPause={this.togglePlayPause}
            handleClockwise={this.handleClockwise}
            handleAntiClockwise={this.handleAntiClockwise}
          />
        </div>
      </div>
    );
  }
}

export default App;
