import React from 'react';
import IpodScreen from './IpodScreen';
import Wheel from './Wheel';
import song2 from "../static/Shape of you.mp3";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeScreen: true,
      screen1: false,
      screen2: false,
      menuItems: ['Music', 'Games', 'Settings'],
      screenItems: {
        "Music": ['Songs', 'Albums', 'Artists', 'Playlists'],
        "Games": ['PUBG', 'Call Of Duty'],
        "Settings": ['Volume', 'Battery'], 
        "Songs":['Song1', 'Song2']
      },
      currentScreen:'HomeScreen',
      isPlaying: false,
      images:{
        "Games":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8v1ZouqoDkEISyXIJjEyfDlFC9LesvL4aOw&usqp=CAU",
        "Settings":"https://images.macrumors.com/t/jkQHgM7mEiT37sJfhY6vvQuu2jk=/400x0/filters:quality(90)/article-new/2019/08/apple-settings-icon-19.jpg-250x250.jpg?lossy",
        "Music":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg",
        "Albums":"https://image.freepik.com/free-icon/music-album_318-1832.jpg",
        "Artists":"https://www.freeiconspng.com/uploads/artist-music-player-representation-icons--free-download-11.jpg",
        "Songs":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg",
        "Playlists":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg",
        "Game1":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg",
        "Volume":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg",
        "Battery":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg",
        "Song1":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg",
        "Song2":"https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb900_1-1.jpg"
      }
    }

    this.audio=new Audio(song2);
  }

  togglePlayPause=()=>{
    //console.log("Hi");
    if(this.state.isPlaying===true){
      this.setState({isPlaying:false});
      this.audio.pause();
    }
    else{
      this.setState({isPlaying:true});
      this.audio.play();
    }
  }

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
      currentScreen=dom;
    }

    this.setState({
      homeScreen, screen1, screen2, menuItems, currentScreen
    })
  }

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
      console.log('dom'+dom);
      for (let screenItem in screenItems) {
        console.log('screenItem'+screenItem)
        if (screenItems[screenItem].includes(dom)) {
          console.log('inside loop'+screenItems[screenItem]);
          menuItems = screenItems[screenItem];
          currentScreen = screenItem;
          break;
        }
      }

      // for(let screenItem in screenItems){
      //   console.log('screenItem'+screenItem);
      //   console.log('screenItems'+screenItems[screenItem]);
      //   for(let item in screenItems[screenItem]){
      //     console.log('item'+screenItems[screenItem][item]);
      //     console.log(screenItems[screenItem][item]===dom);
      //     if(screenItems[screenItem][item]===dom){
      //       menuItems=screenItems[screenItem];
      //       console.log('menuItems'+menuItems);
      //       currentScreen=screenItem;
      //       break;
      //     }
      //   }
      // }
      // console.log(menuItems);
      // console.log(currentScreen);
    }

    this.setState({
      homeScreen, screen1, screen2, menuItems, currentScreen
    })
  }

  componentDidMount(){
    let menuItems = document.getElementsByClassName("menu-item");
    if (menuItems.length === 0) {
      return;
    }
    menuItems[0].classList.add("active");
  }

  componentDidUpdate() {
    let menuItems = document.getElementsByClassName("menu-item");
    let activeItems=document.getElementsByClassName("active")[0];
    console.log(activeItems);
    if (activeItems !== undefined || menuItems.length===0) {
      return;
    }
    menuItems[0].classList.add("active");
  }

  render() {
    const { homeScreen, screen1, screen2, menuItems, screenItems, images, currentScreen, isPlaying } = this.state;

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
            isPlaying={isPlaying}
          />
          <Wheel
            onSelectButton={this.handleSelectButton}
            onMenuButton={this.handleMenuButton}
          />
        </div>
      </div>
    );
  }
}

export default App;
