import React from 'react';

class RightDisplay extends React.Component {
    render() {
        const {images, currentImage}=this.props;
        const str=document.getElementsByClassName("active");
        console.log(str);
        return (
        <div className="screen-display">
            <img src={images[currentImage]}></img>
        </div>
        )
    }
}
export default RightDisplay;