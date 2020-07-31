import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SettingsPower from '@material-ui/icons/SettingsPower';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Swal from 'sweetalert2';

import loginTlt from '@/images/login/login_tit.png';

import '../styles.scss';

interface HeaderProps {
    onTrigger: (open : boolean) => void;
}

const Header : React.FC<HeaderProps> = ({onTrigger}) => {
    const [ open, setOpen ] = React.useState(false);

    const handleOpenTrigger = () => {
        setOpen(!open);
        onTrigger(!open);
    }

    const handleLogOut = async() => {

        const confirmResult = await Swal.fire({
            title: '로그아웃 하시겠습니까?',
            text: "로그아웃 시 작업 내용이 삭제 될 수 있습니다!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '확인',
            cancelButtonText: '취소'
        });

        if (confirmResult.value) {
            document.location.href = "/";
        }
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
                    onClick={() => handleLogOut()}
                >
                    <SettingsPower />
                </IconButton>
            </div>
            <a href="#" className="nav-trigger" onClick={() => handleOpenTrigger()}><span></span></a>
		</div>
    );
};

export { Header };
