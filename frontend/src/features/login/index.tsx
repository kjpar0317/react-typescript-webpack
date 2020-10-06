import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginAction, loginSelector } from './slice';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LeftLoginForm, RightLoginForm } from '@/components/login';

const useStyles = makeStyles((theme : Theme) => (
    createStyles({
        root: {
            flexGrow: 2,
        },
        paper1: {
            width: '700px',
            height: '100vh',
        },
        paper2: {
            width: 'calc(100vw - 700px)',
            height: '100vh',
        },
        control: {
            padding: theme.spacing(0),
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
));

const IndexFeatures : React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let history = useHistory();

    const { token, isLoading } = useSelector(loginSelector.all);

    const [ username, setUsername ] = React.useState('');
    const [ password, setPassword ] = React.useState('');

    React.useEffect(() => {
        // 초기화
        if(sessionStorage.getItem('token')) {
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('token');

            handleLogout();
        }

        if(token) {
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('token', token);

            history.push('/dashboard');
        }
    }, [token]);

    const handleSubmit = (e : any) => {
        e.preventDefault();

        dispatch(loginAction.dologin({ username, password }));
    };

    const handleLogout = async() => {
        await dispatch(loginAction.dologout());

        document.location.href = "/";
    };

    return (
        <>
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid key="0" item className={classes.paper1} xs={5}>
                            <LeftLoginForm  />
                        </Grid>
                        <Grid key="1" item className={classes.paper2} xs={7}>
                            <RightLoginForm setUsername={setUsername} setPassword={setPassword} handleSubmit={handleSubmit} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
};

export default IndexFeatures;
