import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
    action: {
        height: '100%',
    },
    media: {
        height: 150,
    },
});

interface ImageWidgetProps {
    data: any;
}

const ImageWidget: React.FC<ImageWidgetProps> = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea classes={{ root: classes.area }}>
                <CardMedia
                    className={classes.media}
                    image={props.data.image}
                    title={props.data.title}
                />
                <CardContent classes={{ root: classes.content }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.data.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.data.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions classes={{ root: classes.action }}>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export { ImageWidget };
