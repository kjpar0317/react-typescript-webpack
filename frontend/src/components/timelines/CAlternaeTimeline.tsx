import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline, { TimelineProps } from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

import { CTimelineProps } from './';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    ctimeline1: {
        backgroundColor: theme.palette.success.main,
    },
    ctimeline2: {
        backgroundColor: theme.palette.info.main,
    },
    ctimeline3: {
        backgroundColor: theme.palette.warning.main,
    },
    ctimeline4: {
        backgroundColor: theme.palette.error.main,
    },
    cotimeline1: {
        borderColor: theme.palette.success.main,
    },
    cotimeline2: {
        borderColor: theme.palette.info.main,
    },
    cotimeline3: {
        borderColor: theme.palette.warning.main,
    },
    cotimeline4: {
        borderColor: theme.palette.error.main,
    },
}));

const CAlternaeTimeline: React.FC<CTimelineProps> = (props) => {
    const classes = useStyles();
    const { items } = props;

    const MuiIcon = ({ icon }) => {
        let resolved = require(`@material-ui/icons/${icon}`).default;
        return React.createElement(resolved);
    };

    return (
        <Timeline align="alternate">
            {items &&
                items.map((item: any, index: number) => {
                    const fontsize: TypographyProps['variant'] =
                        (item.fontsize == 'large' && 'h4') ||
                        (item.fontsize == 'medium' && 'h6') ||
                        (item.fontsize == 'small' && 'body2') ||
                        undefined;

                    const timelineType =
                        (item.variant === 'outlined' &&
                            item.type === 'ctimeline1' &&
                            classes.cotimeline1) ||
                        (item.variant === 'outlined' &&
                            item.type === 'ctimeline2' &&
                            classes.cotimeline2) ||
                        (item.variant === 'outlined' &&
                            item.type === 'ctimeline3' &&
                            classes.cotimeline3) ||
                        (item.variant === 'outlined' &&
                            item.type === 'ctimeline4' &&
                            classes.cotimeline4) ||
                        (item.type === 'ctimeline1' && classes.ctimeline1) ||
                        (item.type === 'ctimeline2' && classes.ctimeline2) ||
                        (item.type === 'ctimeline3' && classes.ctimeline3) ||
                        (item.type === 'ctimeline4' && classes.ctimeline4) ||
                        undefined;

                    const lineType =
                        (item.type === 'ctimeline1' && classes.ctimeline1) ||
                        (item.type === 'ctimeline2' && classes.ctimeline2) ||
                        (item.type === 'ctimeline3' && classes.ctimeline3) ||
                        (item.type === 'ctimeline4' && classes.ctimeline4) ||
                        undefined;

                    const bLast = index === items.length - 1 && true;

                    return (
                        <TimelineItem key={index}>
                            {item.revert && (
                                <TimelineOppositeContent>
                                    {(item.revert.content && (
                                        <Paper
                                            elevation={3}
                                            className={classes.paper}
                                        >
                                            {item.revert.title && (
                                                <Typography
                                                    variant={fontsize}
                                                    color="textSecondary"
                                                >
                                                    {item.revert.title}
                                                </Typography>
                                            )}
                                            <Typography>
                                                {item.revert.content}
                                            </Typography>
                                        </Paper>
                                    )) ||
                                        (item.revert.title &&
                                            item.revert.title)}
                                </TimelineOppositeContent>
                            )}
                            <TimelineSeparator>
                                <TimelineDot
                                    className={timelineType}
                                    variant={item.variant}
                                >
                                    {item.icon && <MuiIcon icon={item.icon} />}
                                </TimelineDot>
                                {!bLast &&
                                    ((item.bline && (
                                        <TimelineConnector
                                            className={lineType}
                                        />
                                    )) || <TimelineConnector />)}
                            </TimelineSeparator>
                            <TimelineContent>
                                {(item.content && (
                                    <Paper
                                        elevation={3}
                                        className={classes.paper}
                                    >
                                        <Typography
                                            variant={fontsize}
                                            component="h1"
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography>{item.content}</Typography>
                                    </Paper>
                                )) ||
                                    (item.title && item.title)}
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
        </Timeline>
    );
};

export { CAlternaeTimeline };
