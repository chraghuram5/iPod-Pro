import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
class MenuItem extends React.Component {
    render() {
        const {menuItem}=this.props
        return (
            <div className="menu-item">
                <div>{menuItem}</div>
                <div className="side-icon"><FontAwesomeIcon icon={faChevronRight} /></div>
            </div>
        )
    }
}
export default MenuItem;