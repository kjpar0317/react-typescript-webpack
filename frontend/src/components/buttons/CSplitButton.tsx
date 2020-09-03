import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button, { ButtonProps } from '@material-ui/core/Button';
import ButtonGroup, { ButtonGroupProps } from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

interface CSplitButtonProps {
    id: string;
    type?: 'btn1' | 'btn2' | 'btn3' | 'btn4' | undefined;
    variant?: ButtonProps['variant'];
    items: Array<any>;
    size?: ButtonGroupProps['size'];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {
            zIndex: 9998,
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

const CSplitButton: React.FC<CSplitButtonProps> = (props) => {
    const classes = useStyles();
    const { id, type, variant, items, size } = props;
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

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

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    ref={anchorRef}
                    aria-label={id}
                    size={size}
                >
                    <Button
                        className={buttonType}
                        onClick={(
                            e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                        ) => items[selectedIndex].onClick(e)}
                    >
                        {items[selectedIndex].name}
                    </Button>
                    <Button
                        className={buttonType}
                        color="primary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    className={classes.popover}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {items.map(
                                            (item: any, index: number) => (
                                                <MenuItem
                                                    key={`splitmenu-${index}`}
                                                    disabled={item.disabled}
                                                    selected={
                                                        index === selectedIndex
                                                    }
                                                    onClick={(event: any) =>
                                                        handleMenuItemClick(
                                                            event,
                                                            index,
                                                        )
                                                    }
                                                >
                                                    {item.name}
                                                </MenuItem>
                                            ),
                                        )}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Grid>
        </Grid>
    );
};

export { CSplitButton };
