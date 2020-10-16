import React, { useState, useEffect } from 'react';

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { VisReactTopology } from '@/components/charts/topologys';

interface TopologyChartWidgetProps {
    title?: string;
    data: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    area: {
        height: '100%',
    },
    content: {
        height: '100%',
    },
}));

const TopologyChartWidget: React.FC<TopologyChartWidgetProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { title, data } = props;
    const [bData, setBData] = useState<any>(data);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card className={classes.root}>
                {title && (
                    <CardHeader
                        title={title}
                        titleTypographyProps={{ variant: 'h6' }}
                        style={{ textAlign: 'left' }}
                        action={
                            <IconButton
                                aria-label="settings"
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                )}
                {/* CardActionArea는 ie11을 지원안함 */}
                <CardActionArea classes={{ root: classes.area }}>
                    <CardContent classes={{ root: classes.content }}>
                        {/* <ReactD3GraphTopology config={config} data={data}/> */}
                        <VisReactTopology data={data}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export { TopologyChartWidget };
