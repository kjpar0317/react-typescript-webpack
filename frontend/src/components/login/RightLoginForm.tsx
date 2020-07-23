import * as React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import loginTltMsg from '@images/login/login_tit_msg.png';

type RightLoginFormProps = {
    setUsername : (name : string) => void,
    setPassword : (password : string) => void,
    handleSubmit: (e : any) => void;
}

const RightLoginForm : React.FC<RightLoginFormProps> = ({ setUsername, setPassword, handleSubmit }) => {
    const [ tusername, setName ] = React.useState('');
    const [ tpassword, setPwd ] = React.useState('');
    const [ disabled, setDisabled ] = React.useState(false);

    React.useEffect(() => {
        if(tusername && tpassword) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [tusername, tpassword]);

    const handleClick = (e : any) => {
        if(e.currentTarget.id === 'username') {
            setName(e.currentTarget.value);
            setUsername(e.currentTarget.value);
        } else {
            setPwd(e.currentTarget.value);
            setPassword(e.currentTarget.value);
        }
    };

    return (
        <div className="wrap">
            <div className="login_wrap">
                <div className="login_tit_img">
                    <img src={loginTltMsg} alt="Welcome" />
                </div>
                <div className="login_tit_txt">
                    플랫폼을 이용하시려면 로그인해주세요.
                    <section>
                        <form noValidate autoComplete="off">
                            <TextField autoFocus id="username" label="유저명" variant="outlined" className="input_style" onChange={(e) => handleClick(e)} error={ !tusername? true : false} />
                            <TextField id="password" type="password" label="패스워드" variant="outlined" className="input_style" onChange={(e) => handleClick(e)} error={ !tpassword? true : false} />
                            <Button variant="contained" color="primary" disableElevation className="login_btn" onClick={(e) => handleSubmit(e)} disabled={disabled} >
                                SIGN IN
                            </Button>
                        </form>
                </section>
                </div>
            </div>
        </div>
    );
};

export { RightLoginForm };
