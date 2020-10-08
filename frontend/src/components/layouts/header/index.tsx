import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useIntl } from 'react-intl';
import { filter, cloneDeep } from 'lodash';
import moment from 'moment';
import 'moment/locale/ko';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Settings from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Dehaze from '@material-ui/icons/Dehaze';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ReactCountryFlag from 'react-country-flag';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

import Swal from 'sweetalert2';

import { COMMON, commonAction } from '@/features/commonSlice';
import { dashboardSelector, dashboardAction } from '@/features/dashboard/slice';
import { CDialog } from '@/components/dialogs';
import { ThemeBuilder } from '@/components/themes';

import loginTlt from '@/images/login/login_tit.png';

interface HeaderProps {
    onTrigger: (open: boolean) => void;
}

const customCountryArr = [
    { code: 'ko', iconCode: 'kr', text: 'Korea' },
    { code: 'en', iconCode: 'us', text: 'English' },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
        header: {
            position: 'absolute',
            zIndex: 3,
            backgroundColor: '#233245',
            borderBottom: '3px solid #2d3d51',
        },
        logo: {
            zIndex: 1,
            padding: '20px',
            fontWeight: 700,
            color: '#233245',
        },
        toolbar: {
            zIndex: 1,
            padding: '20px',
            fontWeight: 700,
            textAlign: 'right',
            color: '#ffffff',
            float: 'right',
            top: '-75px',
            position: 'relative',
        },
        dividerSpacing: {
            marginTop: '2px',
            marginBottom: '2px',
        },
        smallNoticeFont: {
            fontSize: '5pt',
            float: 'right',
            display: 'table-cell',
            verticalAlign: 'bottom',
        },
        largeNoticeFont: {
            fontSize: '10pt',
            padding: theme.spacing(2),
        },
        langFont: {
            fontSize: '10pt',
            fontWeight: 500,
            padding: theme.spacing(1),
        },
        navTrigger: {
            float: 'right',
            display: 'block',
            paddingRight: '20px',
            top: '-55px',
            color: '#fff',
            position: 'relative',
        },
    }),
);

const Header: React.FC<HeaderProps> = ({ onTrigger }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { formatMessage } = useIntl();
    const { breakpoint, notice, locale } = useSelector(
        (state) => state[COMMON],
    );
    const { activeIndex, privateLayouts, tempLayout } = useSelector(
        dashboardSelector.all,
    );
    const [open, setOpen] = useState(false);
    const [langAnchorEl, setLangAnchorEl] = useState<HTMLButtonElement | null>(
        null,
    );
    const [
        settingAnchorEl,
        setSettingAnchorEl,
    ] = useState<HTMLButtonElement | null>(null);
    const [
        noticeAnchorEl,
        setNoticeAnchorEl,
    ] = useState<HTMLButtonElement | null>(null);
    const [displayTrigger, setDisplayTrigger] = useState('none');
    const [displayToolbar, setDisplayToolbar] = useState('block');
    const [openThemeBuilder, setOpenThemeBuilder] = useState(false);
    const langAnchorOpen = Boolean(langAnchorEl);
    const settingAnchorOpen = Boolean(settingAnchorEl);
    const noticeAnchorOpen = Boolean(noticeAnchorEl);
    const settingAnchorId = settingAnchorOpen ? 'setting-popover' : undefined;
    const langAnchorId = langAnchorOpen ? 'lang-popover' : undefined;
    const noticeAnchorId = noticeAnchorOpen ? 'notice-popover' : undefined;

    const handleOpenTrigger = () => {
        setOpen(!open);
        onTrigger(!open);
    };

    useEffect(() => {
        if (breakpoint === 'xs') {
            setDisplayTrigger('block');
            setDisplayToolbar('none');
        } else {
            setDisplayTrigger('none');
            setDisplayToolbar('block');
        }
    }, [breakpoint]);

    // 현재시간과 차이 구하는 함수
    const getFormatedDuration = (t1: any) => {
        const t2 = moment();
        const duration = moment.duration(t2.diff(t1));
        let str = '';

        if (duration.days() > 0) {
            str = duration.days() + formatMessage({ id: 'w.dayAgo' });
        } else if (duration.hours() > 0) {
            str = duration.hours() + formatMessage({ id: 'w.hourAgo' });
        } else if (duration.minutes() > 0) {
            str = duration.minutes() + formatMessage({ id: 'w.minuteAgo' });
        } else {
            str = duration.seconds() + formatMessage({ id: 'w.secondAgo' });
        }

        return str;
    };

    const handleNoticeClose = () => {
        setNoticeAnchorEl(null);
    };

    const handleLogOut = async () => {
        const confirmResult = await Swal.fire({
            title: formatMessage({ id: 'w.logoutTitle' }),
            text: formatMessage({ id: 'w.logoutContent' }),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: formatMessage({ id: 'w.check' }),
            cancelButtonText: formatMessage({ id: 'w.cancel' }),
        });

        if (confirmResult.value) {
            document.location.href = '/';
        }
    };

    const handleLangOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLangAnchorEl(event.currentTarget);
    };

    const handleLangClick = (lang: string) => {
        dispatch(commonAction.setLocale(lang));
        setLangAnchorEl(null);
    };

    const handleLangClose = () => {
        setLangAnchorEl(null);
    };

    const handleSettingOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSettingAnchorEl(event.currentTarget);
    };

    const handleSettingClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSettingAnchorEl(event.currentTarget);
    };

    const handleSettingClose = () => {
        setSettingAnchorEl(null);
    };

    const handleNoticeOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNoticeAnchorEl(event.currentTarget);
    };

    const handleThemeBuilderOpen = () => {
        setOpenThemeBuilder(true);
    };

    const handleThemeBuilderClose = () => {
        setOpenThemeBuilder(false);
    };

    const handleThemeSave = () => {
        if (privateLayouts.length === 0) {
            dispatch(dashboardAction.setPrivateLayouts([tempLayout]));
        } else {
            let cloneItems = cloneDeep(privateLayouts);
            cloneItems[activeIndex] = tempLayout;
            dispatch(dashboardAction.setPrivateLayouts(cloneItems));
        }
        setOpenThemeBuilder(false);
    };

    return (
        <div
            className={classes.header}
            style={{ width: '100%', height: '70px' }}
        >
            <div className={classes.logo}>
                <img src={loginTlt} alt="CMP" width="170" height="30" />
            </div>
            <div
                className={classes.toolbar}
                style={{ display: displayToolbar }}
            >
                <IconButton
                    aria-controls={langAnchorId}
                    aria-haspopup="true"
                    onClick={handleLangOpen}
                >
                    <ReactCountryFlag
                        countryCode={
                            filter(customCountryArr, ['code', locale])[0]
                                .iconCode
                        }
                        svg
                    />
                </IconButton>
                <Menu
                    id={langAnchorId}
                    anchorEl={langAnchorEl}
                    open={Boolean(langAnchorEl)}
                    onClose={handleLangClose}
                    elevation={0}
                >
                    {customCountryArr.map((item, index) => (
                        <MenuItem key={index} className={classes.langFont}>
                            <ListItemIcon
                                onClick={() => handleLangClick(item.code)}
                            >
                                <ReactCountryFlag
                                    countryCode={item.iconCode}
                                    svg
                                />
                                &nbsp;{item.text}
                            </ListItemIcon>
                        </MenuItem>
                    ))}
                </Menu>
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleThemeBuilderOpen}
                >
                    <DeveloperBoardIcon />
                </IconButton>
                <CDialog
                    id="layoutBuilder"
                    title="Layout Builder"
                    modules={['update', 'close']}
                    open={openThemeBuilder}
                    maxWidth="lg"
                    onUpdate={handleThemeSave}
                    onClose={handleThemeBuilderClose}
                >
                    <ThemeBuilder />
                </CDialog>
                <IconButton
                    aria-controls={settingAnchorId}
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleSettingOpen}
                >
                    <Settings />
                </IconButton>
                <Menu
                    id={settingAnchorId}
                    open={settingAnchorOpen}
                    anchorEl={settingAnchorEl}
                    onClose={handleSettingClose}
                    elevation={0}
                >
                    <MenuItem>
                        {formatMessage({ id: 'w.security-configuration' })}
                    </MenuItem>
                    <MenuItem>
                        {formatMessage({ id: 'w.otp-authentic-config' })}
                    </MenuItem>
                </Menu>
                <IconButton
                    aria-describedby={noticeAnchorId}
                    aria-label="show 17 new notifications"
                    color="inherit"
                    onClick={(e) => handleNoticeOpen(e)}
                >
                    <Badge badgeContent={notice.length} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Popover
                    id={noticeAnchorId}
                    open={noticeAnchorOpen}
                    anchorEl={noticeAnchorEl}
                    onClose={handleNoticeClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    {[...notice].reverse().map((item: any, index: number) => (
                        <div key={Math.random()}>
                            <div className={classes.largeNoticeFont}>
                                {item.message} &nbsp;&nbsp;&nbsp;{' '}
                                <span className={classes.smallNoticeFont}>
                                    {getFormatedDuration(item.createdTime)}
                                </span>
                            </div>
                            {index != notice.length - 1 && (
                                <Divider
                                    className={classes.dividerSpacing}
                                    style={{ width: '100%' }}
                                />
                            )}
                        </div>
                    ))}
                </Popover>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={() => handleLogOut()}
                >
                    <PowerSettingsNewIcon />
                </IconButton>
            </div>
            <div
                className={classes.navTrigger}
                style={{ display: displayTrigger }}
            >
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    className="nav-trigger"
                    onClick={() => handleOpenTrigger()}
                >
                    <Dehaze />
                </IconButton>
            </div>
        </div>
    );
};

export { Header };
