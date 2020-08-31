import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
);

export interface CIconButtonProps {
    icon: string;
    type?: 'btn1' | 'btn2' | 'btn3' | 'btn4' | undefined;
    disabled?: IconButtonProps['disabled'];
    size?: IconButtonProps['size'];
    edge?: IconButtonProps['edge'];
    tooltip?: TooltipProps['title'];
    onClick?: () => void;
}

const CIconButton: React.FC<CIconButtonProps> = (props) => {
    const {
        icon,
        type,
        children,
        disabled = false,
        size,
        edge,
        tooltip = '',
        onClick,
        ...other
    } = props;
    const classes = useStyles();

    const buttonType =
        (type === 'btn1' && classes.cbutton1) ||
        (type === 'btn2' && classes.cbutton2) ||
        (type === 'btn3' && classes.cbutton3) ||
        (type === 'btn4' && classes.cbutton4) ||
        classes.cbutton1;

    const MuiIcon = ({ icon }) => {
        let resolved = require(`@material-ui/icons/${icon}`).default;
        return React.createElement(resolved);
    };

    return (
        <Tooltip title={tooltip}>
            <IconButton
                {...other}
                className={buttonType}
                disabled={disabled}
                size={size}
                edge={edge}
                onClick={onClick}
            >
                <MuiIcon icon={icon} />
            </IconButton>
        </Tooltip>
    );
};

export { CIconButton };
