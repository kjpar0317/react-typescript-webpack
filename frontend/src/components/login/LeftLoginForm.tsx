import * as React from 'react';

import './styles.scss';

import loginTlt from '@images/login/login_tit.png';

const LeftLoginForm : React.FC = () => {

    return (
        <>
            <div className="header">
                <div className="subheader">
                    <img src={loginTlt} alt="Cloud Management Platform" />
                </div>
            </div>
            <div className="copyright">Copyright (C) 2019 innogrid. All rights reserved.</div>
        </>
    );
};

export {LeftLoginForm};
