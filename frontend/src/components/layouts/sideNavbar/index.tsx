import React from 'react';

import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Code from '@material-ui/icons/Code';

import SideNavbarItem from './SideNavbarItems';
import MenuPopItem from './MenuPopItem';

import loginTit from '@/images/login/login_tit.png';

import '../styles.scss';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
    createStyles({
        root: {
            backgroundColor: palette.background.default,
            color: palette.primary.main,
        },
    }),
);

interface SideNavBarProps {
    visible: boolean;
    menuItems: any;
    width: string;
    onTrigger: (open) => void;
    onSidebarOpen: (open) => void;
}

const SideNavbar : React.FC<SideNavBarProps> = (props) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [ open, setOpen ] = React.useState(true);
    const [ width, setWidth ] = React.useState('250px');
    const [ display, setDisplay ] = React.useState('block');
    const [ filteritems, setFilteritems ] = React.useState<null | any>(null);
    const [ targetId, setTargetId ] = React.useState(null);
    const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);

    React.useEffect(() => {
        if(props.width == "xs") {
            setWidth('100%');
            setDisplay('none');
            props.onTrigger(false);
        } else if(props.width == "sm") {
            setWidth('70px');
            setDisplay('block');
        } else {
            setWidth('250px');
            setDisplay('block');
        }
        props.onSidebarOpen(true);
        setOpen(true);
    }, [props.width]);

    React.useEffect(() => {
        if(props.visible) {
            setDisplay('block');
        } else if(!props.visible) {
            setDisplay('none');
        }

    }, [props.visible]);

    React.useEffect(() => {
        if(anchorEl) {
            console.log(anchorEl);
            const filter = props.menuItems.filter(item => item.id == targetId);
            if(filter) {
                setFilteritems(filter[0]);
            }
        }
    }, [anchorEl]);

    const handleTrigger = () => {
        if(open) {
            setWidth('70px');
        } else {
            setWidth('250px');
        }
        props.onSidebarOpen(!open);
        setOpen(!open);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <div className="side-nav" style={{width: width, display: display}}>
                <div className="logo">
                    <img src={loginTit} alt="CMP" width="170" height="30"/>
                </div>
                <List component="nav" className={classes.root} disablePadding>
                    {props.menuItems.map((item, index) => (
                        <SideNavbarItem {...item} key={index} fopen={open} setAnchorEl={setAnchorEl} setTargetId={setTargetId} />
                    ))}
                    { anchorEl && filteritems && <MenuPopItem id={targetId} menuItems={filteritems.items} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} style={{top: '55px', left: '55px'}}/> }
                </List>
            </div>
            <div className="side-trigger">
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="primary"
                    className="button"
                    onClick={() => handleTrigger()}
                >
                    <Code />
                </IconButton>
            </div>
        </>
    );
};

const WidthSideNavbar = withWidth()(SideNavbar);

export { WidthSideNavbar as SideNavbar };
