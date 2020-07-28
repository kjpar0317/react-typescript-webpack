import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import SideNavbarItem from './SideNavbarItems';

import loginTit from '@/images/login/login_tit.png';

import '../styles.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        color: 'white',
        colorPrimary: 'white'
    },
  }),
);

interface SideNavBarProps {
    visible: string;
    menuItems: any;
}

const SideNavbar : React.FC<SideNavBarProps> = ({visible, menuItems}) => {
    const classes = useStyles();

    return (
        <div className={`side-nav ${visible}`}>
			<div className="logo">
                <img src={loginTit} alt="CMP" width="170" height="30"/>
			</div>
            <List component="nav" className={classes.root} disablePadding>
                {menuItems.map((item, index) => (
                    <SideNavbarItem {...item} key={index} id={index} />
                ))}
            </List>
        </div>

    );
};

export { SideNavbar };
