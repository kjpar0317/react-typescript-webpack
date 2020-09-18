import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { find, isEmpty } from 'lodash';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// import { COMMON, commonAction } from '@/features/commonSlice';

// import MultiToggle from 'react-multi-toggle';

import './styles.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                // margin: theme.spacing(1),
            },
        },
        backgroud: {
            backgroundColor: theme.palette.background.default,
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
            backgroundColor: '#6f9140',
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }),
);

const SideToggleButton: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { formatMessage } = useIntl();
    // const { group, breakpoint, customSidebar } = useSelector(
    //     (state) => state[COMMON],
    // );
    const [largeButtonDisplay, setLargeButtonDisplay] = useState('display');
    const [smallButtonDisplay, setSmallButtonDisplay] = useState('none');
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [svalue, setSValue] = React.useState('A');
    const open = Boolean(anchorEl);

    // useEffect(() => {
    //     if (breakpoint === 'xs') {
    //         setLargeButtonDisplay('none');
    //         setSmallButtonDisplay('none');
    //     } else if (breakpoint === 'sm') {
    //         setLargeButtonDisplay('none');
    //         setSmallButtonDisplay('block');
    //     } else {
    //         if (customSidebar) {
    //             setLargeButtonDisplay('block');
    //             setSmallButtonDisplay('none');
    //         } else {
    //             setLargeButtonDisplay('none');
    //             setSmallButtonDisplay('block');
    //         }
    //     }
    // }, [breakpoint, customSidebar]);

    const groupOptions = [
        {
            displayName: formatMessage({ id: 'w.admin' }),
            value: 'admin',
            svalue: 'A',
        },
        {
            displayName: formatMessage({ id: 'w.group' }),
            value: 'group',
            svalue: 'G',
        },
        {
            displayName: formatMessage({ id: 'w.user' }),
            value: 'user',
            svalue: 'U',
        },
    ];

    const handleSelGroup = (value: string) => {
        // dispatch(commonAction.changeGroup(value));

        const selGroup = find(groupOptions, { value: value }) as any;

        setSValue(selGroup.svalue);

        setAnchorEl(null);
    };

    const handleRightPopoverOpen = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleRightPopoverClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div
                className={classes.backgroud}
                style={{ display: largeButtonDisplay }}
            >
                {/* <MultiToggle
                    options={groupOptions}
                    selectedOption={group}
                    onSelectOption={handleSelGroup}
                /> */}
            </div>
            <div
                className={classes.root}
                style={{ display: smallButtonDisplay }}
            >
                <IconButton
                    aria-controls="icon-menu"
                    aria-haspopup="true"
                    onClick={handleRightPopoverOpen}
                >
                    <Avatar className={classes.small}>{svalue}</Avatar>
                </IconButton>

                <Menu
                    id="mouse-over-popover"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleRightPopoverClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {groupOptions.map((item, index) => (
                        <MenuItem key={index}>
                            <ListItemIcon
                                onClick={() => handleSelGroup(item.value)}
                            >
                                <Avatar className={classes.small}>
                                    {item.svalue}
                                </Avatar>
                                {item.displayName}
                            </ListItemIcon>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </>
    );
};

export default SideToggleButton;
