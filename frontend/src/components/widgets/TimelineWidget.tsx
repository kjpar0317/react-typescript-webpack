import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { CAlternateTimeline } from '@/components/timelines';

const useStyles = makeStyles((theme) => ({
    root: {
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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
}));

interface TimelineWidgetProps {
    title: string;
    data: Array<any>;
}

const TimelineWidget: React.FC<TimelineWidgetProps> = (props) => {
    const classes = useStyles();
    const { title, data } = props;

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                titleTypographyProps={{ variant: 'h6' }}
            />
            <CardActionArea classes={{ root: classes.area }}>
                <CardContent classes={{ root: classes.content }}>
                    <CAlternateTimeline items={data} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export { TimelineWidget };
