import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
    makeStyles,
    Theme,
    createStyles,
    useTheme,
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Code from '@material-ui/icons/Code';

// import { COMMON, commonAction } from '@/features/commonSlice';

import SideNavProfile from './SideNavProfile';
import SideToggleButton from './SideToggleButton';
import SideNavbarItem from './SideNavbarItems';
import MenuPopItem from './MenuPopItem';

import loginTit from '@/images/login/login_tit.png';

const SMALL_PAD_LEFT_SIZE = '50px';
const LARGE_PAD_LEFT_SIZE = '250px';
// 나중에 anchorEl을 자동으로 가져오면 이거 필요없음
const MENU_PAD = {
    top: '55px',
    left: '35px',
};

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
    createStyles({
        root: {
            backgroundColor: palette.background.default,
            color: palette.primary.main,
        },
        sideNav: {
            position: 'absolute',
            backgroundColor: palette.background.default,
            zIndex: 1,
        },
        logo: {
            height: 70,
            padding: 20,
            fontWeight: 700,
            textAlign: 'center',
        },
        sideTrigger: {
            position: 'absolute',
            float: 'left',
            paddingTop: 15,
            paddingLeft: 210,
            zIndex: 3,
        },
    }),
);

interface SideNavBarProps {
    visible: boolean;
    menuItems: Array<any>;
    onTrigger: (open: boolean) => void;
}

const SideNavbar: React.FC<SideNavBarProps> = (props) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles(theme);
    const hisotry = useHistory();
    // const { breakpoint } = useSelector((state) => state[COMMON]);
    const [open, setOpen] = useState(true);
    const [width, setWidth] = useState(LARGE_PAD_LEFT_SIZE);
    const [display, setDisplay] = useState('block');
    const [displaySideTrigger, setDisplaySideTrigger] = useState('block');
    const [zIndex, setZIndex] = useState(1);
    const [filteritems, setFilteritems] = useState<null | any>(null);
    const [targetId, setTargetId] = useState(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // useEffect(() => {
    //     if (breakpoint === 'xs') {
    //         setWidth('100%');
    //         setDisplay('none');
    //         setDisplaySideTrigger('none');
    //         // setZIndex(0);
    //         props.onTrigger(false);
    //     } else if (breakpoint === 'sm') {
    //         setWidth(SMALL_PAD_LEFT_SIZE);
    //         setDisplay('block');
    //         setDisplaySideTrigger('none');
    //         setZIndex(2);
    //     } else {
    //         setWidth(LARGE_PAD_LEFT_SIZE);
    //         setDisplay('block');
    //         setDisplaySideTrigger('block');
    //         setZIndex(1);
    //     }
    //     dispatch(commonAction.changeScreen(true));
    //     setOpen(true);
    // }, [breakpoint]);

    useEffect(() => {
        // if (breakpoint === 'xs') {
        //     setDisplay('none');
        //     props.onTrigger(false);
        // }
    }, [hisotry.location.pathname]);

    useEffect(() => {
        if (props.visible) {
            setDisplay('block');
        } else if (!props.visible) {
            setDisplay('none');
        }
    }, [props.visible]);

    useEffect(() => {
        if (anchorEl) {
            const filter = props.menuItems.filter(
                (item) => item.name === targetId,
            );
            if (filter) {
                setFilteritems(filter[0]);
            }
        }
    }, [anchorEl]);

    const handleTrigger = () => {
        if (open) {
            setWidth(SMALL_PAD_LEFT_SIZE);
        } else {
            setWidth(LARGE_PAD_LEFT_SIZE);
        }
        // dispatch(commonAction.changeScreen(!open));
        setOpen(!open);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div
                className={classes.sideNav}
                style={{
                    width: width,
                    height: '100vh',
                    display: display,
                    zIndex: zIndex,
                }}
            >
                <div className={classes.logo}>
                    <img src={loginTit} alt="CMP" width="170" height="30" />
                </div>
                <SideNavProfile />
                <SideToggleButton />
                <List component="nav" className={classes.root} disablePadding>
                    {props.menuItems.map((item, index) => (
                        <SideNavbarItem
                            {...item}
                            key={index}
                            fopen={open}
                            setAnchorEl={setAnchorEl}
                            setTargetId={setTargetId}
                        />
                    ))}
                    {anchorEl && filteritems && (
                        <MenuPopItem
                            id={targetId}
                            menuItems={filteritems.items}
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={MENU_PAD}
                        />
                    )}
                </List>
            </div>
            <div
                className={classes.sideTrigger}
                style={{ display: displaySideTrigger }}
            >
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

export { SideNavbar };
