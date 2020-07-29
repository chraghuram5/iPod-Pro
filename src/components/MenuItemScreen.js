import React from 'react';
import MenuItem from './MenuItem';

class MenuItemScreen extends React.Component {
    render() {
        const { menuItems, currentScreen } = this.props;
        return (
                <div className="screen-menu">
                    <div className="screen-title">{currentScreen}</div>
                    {typeof menuItems !== 'string' && menuItems.map((menuItem) => {
                        return (
                            <MenuItem
                            menuItem={menuItem}
                            />
                        )
                    })}
                    {typeof menuItems === 'string' && <MenuItem menuItem="menuItem"/>}
                </div>

        )
    }
}
export default MenuItemScreen;