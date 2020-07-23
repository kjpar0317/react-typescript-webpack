import * as React from 'react';
import { withRouter, useHistory } from "react-router-dom";

import './index.scss';

const DashboardFeatures : React.FC = () => {
    let history = useHistory();

    const handleMoveTest = () => {
        history.push('/admin/user');
    };

    return (
        <div className="dashboard_wrap">
            로그인 성공
            <input type="button" value="유저 이동" onClick={handleMoveTest} />
        </div>
    );
};

export default withRouter(DashboardFeatures);
