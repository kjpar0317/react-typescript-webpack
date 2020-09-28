import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

interface TextWidgetProps {
    data: any;
}

const TextWidget: React.FC<TextWidgetProps> = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.data.title}
                titleTypographyProps={{ variant: 'h6' }}
                subheader="마지막 업데이트 : 2020-01-02 13:45:44"
            />
            <CardActionArea classes={{ root: classes.area }}>
                <CardContent classes={{ root: classes.content }}>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                    >
                        {props.data.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export { TextWidget };
