import React from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SettingsPower from '@material-ui/icons/SettingsPower';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { loginAction } from '@/features/login/slice';

import loginTlt from '@/images/login/login_tit.png';

import '../styles.scss';

interface HeaderProps {
    onTrigger: () => void;
}

const Header : React.FC<HeaderProps> = ({onTrigger}) => {
    const dispatch = useDispatch();

    const handleLogOut = async() => {
        await dispatch(loginAction.dologout());

        document.location.href = "/";
    }

    return (
        <div className="dheader">
            <div className="logo">
                <img src={loginTlt} alt="CMP" width="170" height="30"/>
            </div>
            <div className="rightmail">
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <SettingsPower onClick={handleLogOut}/>
                </IconButton>
            </div>
            <a href="#" className="nav-trigger" onClick={() => onTrigger()}><span></span></a>
		</div>
    );
};

export default Header;
