import React from 'react';
import { useIntl } from 'react-intl';
import { join, split } from 'lodash';

import { MenuProps } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import MenuPopItem from './MenuPopItem';

const styles = {
    subMenuItem: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

interface SubMenuPopItemsProps extends MenuProps {
    id: any;
    key: string;
    menuItems: Array<any>;
    caption: string;
    open: boolean;
    onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SubMenuPopItems: React.FC<SubMenuPopItemsProps> = (props) => {
    const { formatMessage } = useIntl();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleItemClick = (event: any) => {
        if (!anchorEl) {
            setAnchorEl(event.currentTarget);
        }

        setMenuOpen(!menuOpen);
    };

    const handleSubMenuClose = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        setMenuOpen(false);
        props.onClose(e);
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

    return (
        <React.Fragment>
            <MenuItem onClick={handleItemClick}>
                {convertMenuItemNm(props.caption)}
                <ArrowRightIcon />
            </MenuItem>
            <MenuPopItem
                id={props.id}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={menuOpen}
                menuItems={props.menuItems}
                anchorEl={anchorEl}
                onClose={(e) => handleSubMenuClose(e)}
            />
        </React.Fragment>
    );
};

export default SubMenuPopItems;
