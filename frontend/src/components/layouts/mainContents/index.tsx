import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProps, useHistory } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

// import { COMMON } from '@/features/commonSlice';

interface MainContentsProps extends RouteProps {}

const useStyles = makeStyles(() =>
    createStyles({
        mainContent: {
            paddingTop: 70,
            overflow: 'scroll',
        },
        title: {
            backgroundColor: '#eef1f7',
            borderBottom: '1px solid #b8bec9',
            padding: '10px 20px',
            fontWeight: 700,
            color: '#333',
            fontSize: 18,
        },
    }),
);

const SMALL_PAD_LEFT_SIZE = '50px';
const LARGE_PAD_LEFT_SIZE = '250px';

const MainContents: React.FC<MainContentsProps> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const { breakpoint, windowSize, customSidebar } = useSelector(
    //     (state) => state[COMMON],
    // );
    const [paddingLeft, setPaddingLeft] = useState('0px');
    const history = useHistory();
    const arrPath = history.location.pathname.split('/');

    // useEffect(() => {
    //     if (breakpoint === 'xs') {
    //         setPaddingLeft('0px');
    //     } else if (breakpoint === 'sm') {
    //         setPaddingLeft(SMALL_PAD_LEFT_SIZE);
    //     } else {
    //         if (customSidebar) {
    //             setPaddingLeft(LARGE_PAD_LEFT_SIZE);
    //         } else {
    //             setPaddingLeft(SMALL_PAD_LEFT_SIZE);
    //         }
    //     }
    // }, [breakpoint]);

    // useEffect(() => {
    //     if (breakpoint === 'xs' || breakpoint === 'sm') {
    //         return;
    //     }

    //     if (customSidebar) {
    //         setPaddingLeft(LARGE_PAD_LEFT_SIZE);
    //     } else {
    //         setPaddingLeft(SMALL_PAD_LEFT_SIZE);
    //     }
    // }, [customSidebar]);

    return (
        <div
            className={classes.mainContent}
            style={{
                width: '100%',
                // height: windowSize.height,
                overflow: 'auto',
                paddingLeft: paddingLeft,
            }}
        >
            <div className={classes.title} style={{ width: '100%' }}>
                <Breadcrumbs aria-label="">
                    {arrPath.map((path, index) => {
                        if (index === 0) {
                            return (
                                <Link
                                    key={Math.random()}
                                    color="inherit"
                                    href="#"
                                >
                                    HOME
                                </Link>
                            );
                        } else if (index < arrPath.length - 1) {
                            return (
                                <Link
                                    key={Math.random()}
                                    color="inherit"
                                    href="#"
                                >
                                    {' '}
                                    {path.toUpperCase()}{' '}
                                </Link>
                            );
                        } else if (index === arrPath.length - 1) {
                            return (
                                <Typography
                                    key={Math.random()}
                                    color="textPrimary"
                                >
                                    {' '}
                                    {path.toUpperCase()}{' '}
                                </Typography>
                            );
                        }
                    })}
                </Breadcrumbs>
            </div>
            {props.children}
        </div>
    );
};

export { MainContents };
