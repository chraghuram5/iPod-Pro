import React from 'react';
class FullScreenItem extends React.Component {

    render() {
        const { menuItems, images} = this.props;
        return (
            <div className="full-screen">
                <div className="full-screen-heading">{menuItems}</div>
                {/* <div>{isPlaying && menuItems === "Songs" && <div>Playing</div>}
                    {!isPlaying && menuItems === "Songs" && <div>Paused</div>}</div> */}
                <img alt={menuItems} src={images[menuItems]} height="90%" width="100%"></img>
            </div>
        )
    }
}
export default FullScreenItem;