import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import ButtonGroup, { ButtonGroupProps } from '@material-ui/core/ButtonGroup';

interface CButtonGroup {
    id: string;
    type?: 'btn1' | 'btn2' | 'btn3' | 'btn4' | undefined;
    variant?: ButtonProps['variant'];
    items: Array<any>;
    size?: ButtonGroupProps['size'];
    style?: React.CSSProperties;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // '& > *': {
            //     margin: theme.spacing(1),
            // },
        },
        cbutton1: {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.success.dark,
                color: theme.palette.success.contrastText,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
        cbutton2: {
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.info.dark,
                color: theme.palette.info.contrastText,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
        cbutton3: {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.warning.dark,
                color: theme.palette.warning.contrastText,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
        cbutton4: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.error.dark,
                color: theme.palette.error.contrastText,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
        obutton1: {
            color: theme.palette.success.main,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.success.main}`,
            '&:hover': {
                color: theme.palette.success.dark,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.success.dark}`,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
        obutton2: {
            color: theme.palette.info.main,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.info.main}`,
            '&:hover': {
                color: theme.palette.info.dark,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.info.dark}`,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
        obutton3: {
            color: theme.palette.warning.main,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.warning.main}`,
            '&:hover': {
                color: theme.palette.warning.dark,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.warning.dark}`,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
        obutton4: {
            color: theme.palette.error.main,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.error.main}`,
            '&:hover': {
                color: theme.palette.error.dark,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.error.dark}`,
            },
            '&:disabled': {
                backgroundColor: '#eeeeee',
            },
        },
    }),
);

const CButtonGroup: React.FC<CButtonGroup> = (props) => {
    const classes = useStyles();
    const { id, type, variant, items, size, style } = props;

    const buttonType =
        (variant === 'contained' && type === 'btn1' && classes.cbutton1) ||
        (variant === 'contained' && type === 'btn2' && classes.cbutton2) ||
        (variant === 'contained' && type === 'btn3' && classes.cbutton3) ||
        (variant === 'contained' && type === 'btn4' && classes.cbutton4) ||
        (variant === 'outlined' && type === 'btn1' && classes.obutton1) ||
        (variant === 'outlined' && type === 'btn2' && classes.obutton2) ||
        (variant === 'outlined' && type === 'btn3' && classes.obutton3) ||
        (variant === 'outlined' && type === 'btn4' && classes.obutton4) ||
        (type === 'btn1' && classes.cbutton1) ||
        (type === 'btn2' && classes.cbutton2) ||
        (type === 'btn3' && classes.cbutton3) ||
        (type === 'btn4' && classes.cbutton4) ||
        classes.cbutton1;

    // const handleClick = (
    //     event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    // ) => {
    //     console.log(event.target);
    //     props.onClick && event.target && props.onClick(event.target);
    // };

    return (
        <div className={classes.root}>
            <ButtonGroup aria-label={id} size={size}>
                {items.map((item: any, index: number) => {
                    return (
                        <Button
                            key={`btngrp-${index}`}
                            className={buttonType}
                            disabled={item.disabled}
                            onClick={(
                                e: React.MouseEvent<
                                    HTMLButtonElement,
                                    MouseEvent
                                >,
                            ) => item.onClick(e)}
                            style={style}
                        >
                            {item.name}
                        </Button>
                    );
                })}
            </ButtonGroup>
        </div>
    );
};

export { CButtonGroup };
