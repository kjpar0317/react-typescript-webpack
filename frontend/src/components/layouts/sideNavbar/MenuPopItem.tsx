import React from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { join, split } from 'lodash';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SubMenuPopItems from './SubMenuPopItems';

interface MenuPopItemsProps extends MenuProps {
    id: any;
    menuItems: Array<any>;
    open: boolean;
    anchorEl: null | HTMLElement;
    onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        screen: theme.breakpoints.values,
    }),
);

const MenuPopItems: React.FC<MenuPopItemsProps> = ({
    id,
    open,
    menuItems,
    anchorEl,
    onClose,
    ...rest
}) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    let history = useHistory();

    const handleLink = (e: React.MouseEvent<any, MouseEvent>, link: string) => {
        history.push(link);
        onClose(e);
    };

    const convertMenuItemNm = (menuNm: string) => {
        if (!menuNm.startsWith('w.')) {
            return menuNm;
        }
        return join(
            split(menuNm, ' ').map((menunm) => formatMessage({ id: menunm })),
            ' ',
        );
    };

    const renderMenuItems = () => {
        return menuItems.map((item) => {
            if (item.hasOwnProperty('items')) {
                return (
                    <SubMenuPopItems
                        id={id}
                        key={item.id}
                        caption={item.name}
                        menuItems={item.items}
                        open={true}
                        onClose={onClose}
                    />
                );
            }

            return (
                <MenuItem
                    key={item.id}
                    onClick={(e) => handleLink(e, item.link)}
                >
                    {convertMenuItemNm(item.name)}
                </MenuItem>
            );
        });
    };

    return (
        <Menu
            {...rest}
            id={id}
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >
            {renderMenuItems()}
        </Menu>
    );
};

export default MenuPopItems;
