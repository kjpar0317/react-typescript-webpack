import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SubMenuPopItems from './SubMenuPopItems';

interface MenuPopItemsProps extends MenuProps {
    id: any;
    menuItems: any;
    open: boolean;
    anchorEl: null | HTMLElement;
    onClose: (e) => void;
}

const useStyles = makeStyles(theme => createStyles({
    screen: theme.breakpoints.values
  }),
);

const MenuPopItems : React.FC<MenuPopItemsProps> = ({id, open, menuItems, anchorEl, onClose, ...rest}) => {
    const classes = useStyles();
    let history = useHistory();

    const handleLink = (link) => {
        history.push(link);
    };

    const renderMenuItems = () => {
        return menuItems.map(item => {
            if (item.hasOwnProperty("items")) {
                return (
                    <SubMenuPopItems
                        id={id}
                        key={item.id}
                        caption={item.name}
                        menuItems={item.items}
                        open={true}
                    />
                );
            }

            return (
                <MenuItem key={item.id} onClick={() => handleLink(item.link)}>
                    {item.name}
                </MenuItem>
            );
        })
    };

    return (
        <Menu
            {...rest}
            id={id}
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >
            { renderMenuItems() }
        </Menu>
    );
};

export default MenuPopItems;
