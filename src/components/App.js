import React from 'react';
import IpodScreen from './IpodScreen';
import Wheel from './Wheel';

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
      //Images for display
      images: {
        "Music": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "Albums": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "Artists": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "Playlists": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "Volume": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "Battery": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "PUBG": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "COC": "https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg",
        "Songs":"https://cdn5.vectorstock.com/i/1000x1000/91/74/full-battery-icon-vector-22989174.jpg"
      }
    }
  }

  //Menu Items scroll down on clockwise rotation of wheel
  handleClockwise = () => {
    let menuItems = document.getElementsByClassName("menu-item");
    if (menuItems.length === 0) {
      return;
    }

    //Setting element as active based on the amount of rotation of wheel
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

    //Setting element as active based on the amount of rotation of wheel
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
      // changing screens based upon the boolean values homeScreen, screen1, screen2
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

      // changing screens based upon the boolean values homeScreen, screen1, screen2
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
      //searching for dom element present in list
      for (let screenItem in screenItems) {
        if (screenItems[screenItem].includes(dom)) {
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
    if (activeItems !== undefined || menuItems.length === 0) {
      return;
    }
    menuItems[0].classList.add("active");
  }

  render() {
    const { homeScreen, screen1, screen2, menuItems, screenItems, images, currentScreen} = this.state;

    return (
      <div className="ipod-page">
        {/*Container for Ipod*/}
        <div className="ipod-container">
          {/* iPod screen */}
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
          {/* Wheel(circle) */}
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
