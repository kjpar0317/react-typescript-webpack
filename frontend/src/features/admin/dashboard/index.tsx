import * as React from 'react';
import { withRouter, useHistory } from "react-router-dom";

const DashboardFeatures : React.FC = () => {
    // let history = useHistory();

    // const handleMoveTest = () => {
    //     history.push('/admin/user');
    // };

    return (
        <>
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
        </>
    );
};

export default withRouter(DashboardFeatures);
