import React from 'react';
import MenuItem from './MenuItem';

class MenuItemScreen extends React.Component {
    render() {
        const { menuItems, currentScreen } = this.props;
        return (
            //Menu Item screen on the left with menuItems
                <div className="screen-menu">
                    <div className="screen-title">{currentScreen}</div>
                    {typeof menuItems !== 'string' && menuItems.map((menuItem) => {
                        return (
                            // MenuItems for all the items
                            <MenuItem
                            menuItem={menuItem}
                            />
                        )
                    })}
                    {/* display menuItem based on the menuItems data type */}
                    {typeof menuItems === 'string' && <MenuItem menuItem="menuItem"/>}
                </div>

        )
    }
}
export default MenuItemScreen;