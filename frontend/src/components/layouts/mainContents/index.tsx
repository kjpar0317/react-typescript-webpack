import React from 'react';
import { RouteProps } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

interface MainContentsProps extends RouteProps {

}

const MainContents : React.FC<MainContentsProps> = (props) => {
    return (
        <div className="main-content">
			<div className="title">
				<Breadcrumbs aria-label="">
                    <Link color="inherit" href="/">
                        Dashboard
                    </Link>
                    <Link color="inherit" href="/admin/dashboard">
                        Core
                    </Link>
                    <Typography color="textPrimary">Sub</Typography>
                </Breadcrumbs>
    		</div>
            <div className="main">
                {props.children}
            </div>
		</div>
    );
};

export { MainContents };
