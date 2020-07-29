import React from 'react';
//import Sound from 'react-sound';

class FullScreenItem extends React.Component {

    componentDidMount(){
        const {menuItems, togglePlayPause, isPlaying}=this.props;

        if(menuItems==="Songs" && !isPlaying){
            togglePlayPause();
        }

    }
    render() {
        const { menuItems, images, isPlaying } = this.props;
        return (
            <div className="full-screen">
                <div className="full-screen-heading">{menuItems}</div>
                <div>{isPlaying&& menuItems==="Songs" && <div>Playing</div>}
                {!isPlaying && <div>Paused</div>}</div>
                <img alt={menuItems} src={images[menuItems]} height="90%" width="100%"></img>
            </div>
        )
    }
}
export default FullScreenItem;