import * as React from 'react';
import { withRouter } from "react-router-dom";

import "./styles.scss";

const DashboardFeatures : React.FC = () => {
    // let history = useHistory();

    // const handleMoveTest = () => {
    //     history.push('/admin/user');
    // };

    return (
        <div className="main">
            <div className="widget">
                <div className="title">Number of views</div>
                <div className="chart"></div>
            </div>
            <div className="widget">
                <div className="title">Number of likes</div>
                <div className="chart"></div>
            </div>
            <div className="widget">
                <div className="title">Number of comments</div>
                <div className="chart"></div>
            </div>
        </div>
    );
};

export default withRouter(DashboardFeatures);
