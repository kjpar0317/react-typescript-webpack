import React from 'react';
import { RouteProps } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import withWidth from '@material-ui/core/withWidth';

interface MainContentsProps extends RouteProps {
    sidebarOpen: boolean,
    width: string,
}

const MainContents : React.FC<MainContentsProps> = (props) => {
    const [ paddingLeft, setPaddingLeft ] = React.useState('250px');

    React.useEffect(() => {
        if(props.width == "xs") {
            setPaddingLeft('0px');
        } else if(props.width == "sm") {
            setPaddingLeft('70px');
        } else {
            if(props.sidebarOpen) {
                setPaddingLeft('250px');
            } else {
                setPaddingLeft('70px');
            }
        }
    }, [props]);

    return (
        <div className="main-content" style={{paddingLeft: paddingLeft}}>
			<div className="title">
				<Breadcrumbs aria-label="">
                    <Link color="inherit" href="/">
                        HOME
                    </Link>
                    <Link color="inherit" href="/admin/dashboard">
                        ADMIN
                    </Link>
                    <Typography color="textPrimary">Dashboard</Typography>
                </Breadcrumbs>
    		</div>
            {props.children}
		</div>
    );
};

const WidthMainContents = withWidth()(MainContents);

export { WidthMainContents as MainContents };
