import React from 'react';
class FullScreenItem extends React.Component {

    render() {
        const { menuItems, images} = this.props;
        return (
            //Full screen display with image 
            <div className="full-screen">
                <div className="full-screen-heading">{menuItems}</div>
                <img alt={menuItems} src={images[menuItems]} height="90%" width="100%"></img>
            </div>
        )
    }
}
export default FullScreenItem;