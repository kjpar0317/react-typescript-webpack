import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

// import { COMMON } from '@/features/commonSlice';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '100%',
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
    profile: {
        width: '100%',
        color: '#ddd',
        textAlign: 'center',
        paddingTop: '10px',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
}));

interface ISideNavProfileProps {}

const SMALL_PROFILE_SIZE = '30px';
const LARGE_PROFILE_SIZE = '80px';

const SideNavProfile: React.FC<ISideNavProfileProps> = (props) => {
    const classes = useStyles();
    // const { breakpoint, customSidebar } = useSelector((state) => state[COMMON]);
    const [height, setHeight] = useState(LARGE_PROFILE_SIZE);
    const [largeDisplayImg, setLargeDisplayImg] = useState('flex');
    const [smallDisplayImg, setSmallDisplayImg] = useState('none');

    // useEffect(() => {
    //     if (breakpoint === 'xs') {
    //         setLargeDisplayImg('none');
    //         setSmallDisplayImg('none');
    //         setHeight('0px');
    //     } else if (breakpoint === 'sm') {
    //         setLargeDisplayImg('none');
    //         setSmallDisplayImg('flex');
    //         setHeight(SMALL_PROFILE_SIZE);
    //     } else {
    //         setLargeDisplayImg('flex');
    //         setSmallDisplayImg('none');
    //         setHeight(LARGE_PROFILE_SIZE);
    //     }
    // }, [breakpoint]);

    // useEffect(() => {
    //     if (breakpoint === 'xs' || breakpoint === 'sm') {
    //         return;
    //     }

    //     if (customSidebar) {
    //         setLargeDisplayImg('flex');
    //         setSmallDisplayImg('none');
    //         setHeight(LARGE_PROFILE_SIZE);
    //     } else {
    //         setLargeDisplayImg('none');
    //         setSmallDisplayImg('flex');
    //         setHeight(SMALL_PROFILE_SIZE);
    //     }
    // }, [customSidebar]);

    return (
        <>
            <div className={classes.root} style={{ alignSelf: 'center' }}>
                <div className={classes.profile} style={{ height: height }}>
                    <div
                        style={{
                            justifyContent: 'center',
                            display: largeDisplayImg,
                        }}
                    >
                        <Avatar
                            alt="User"
                            src="/images/tmp_header_user_profile.png"
                            className={classes.large}
                        />
                    </div>
                    <div
                        style={{
                            justifyContent: 'center',
                            display: smallDisplayImg,
                        }}
                    >
                        <Avatar
                            alt="User"
                            src="/images/tmp_header_user_profile.png"
                            className={classes.small}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideNavProfile;
