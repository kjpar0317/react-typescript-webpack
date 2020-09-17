import React, { useState } from 'react';
import { cloneDeep } from 'lodash';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import { MuiIcon } from '@/components/icons';

interface CChipsProps {
    items: Array<any>;
    onClick?(e: any): any;
    onDelete?(e: any): any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        cchips1: {
            backgroundColor: theme.palette.success.main,
            borderColor: theme.palette.success.dark,
            color: theme.palette.success.contrastText,
        },
        cchips2: {
            backgroundColor: theme.palette.info.main,
            borderColor: theme.palette.info.dark,
            color: theme.palette.info.contrastText,
        },
        cchips3: {
            backgroundColor: theme.palette.warning.main,
            borderColor: theme.palette.warning.dark,
            color: theme.palette.warning.contrastText,
        },
        cchips4: {
            backgroundColor: theme.palette.error.main,
            borderColor: theme.palette.error.dark,
            color: theme.palette.error.contrastText,
        },
        cochips1: {
            borderColor: theme.palette.success.dark,
            color: theme.palette.success.dark,
        },
        cochips2: {
            borderColor: theme.palette.info.dark,
            color: theme.palette.info.dark,
        },
        cochips3: {
            borderColor: theme.palette.warning.dark,
            color: theme.palette.warning.dark,
        },
        cochips4: {
            borderColor: theme.palette.error.dark,
            color: theme.palette.error.dark,
        },
    }),
);

const CChips: React.FC<CChipsProps> = (props) => {
    const classes = useStyles();
    const { items } = props;
    const [citems, setCItems] = useState(items);

    const handleDelete = (label: any) => () => {
        const filter = citems.filter((item) => item.label !== label);
        setCItems(filter);
        props.onDelete && props.onDelete(filter);
    };

    const handleClick = (item: any) => () => {
        props.onClick && props.onClick(item);
    };

    return (
        <div className={classes.root}>
            {citems.map((item: any) => {
                const deleteIcon =
                    (item.action === 'done' && <DoneIcon />) || undefined;

                const className =
                    (item.type === 'cchips1' &&
                        item.variant === 'outlined' &&
                        classes.cochips1) ||
                    (item.type === 'cchips2' &&
                        item.variant === 'outlined' &&
                        classes.cochips2) ||
                    (item.type === 'cchips3' &&
                        item.variant === 'outlined' &&
                        classes.cochips3) ||
                    (item.type === 'cchips4' &&
                        item.variant === 'outlined' &&
                        classes.cochips4) ||
                    (item.type === 'cchips1' && classes.cchips1) ||
                    (item.type === 'cchips2' && classes.cchips2) ||
                    (item.type === 'cchips3' && classes.cchips3) ||
                    (item.type === 'cchips4' && classes.cchips4) ||
                    undefined;

                return (
                    (item.icon && (
                        <Chip
                            label={item.label}
                            icon={<MuiIcon icon={item.icon} />}
                            variant={item.variant}
                            disabled={item.disabled}
                            clickable={item.clickable}
                            className={className}
                            onClick={handleClick(item)}
                            onDelete={handleDelete(item.label)}
                            deleteIcon={deleteIcon}
                        />
                    )) ||
                    (item.image && (
                        <Chip
                            label={item.label}
                            avatar={<Avatar src={item.image} />}
                            variant={item.variant}
                            disabled={item.disabled}
                            clickable={item.clickable}
                            className={className}
                            onClick={handleClick(item)}
                            onDelete={handleDelete(item.label)}
                            deleteIcon={deleteIcon}
                        />
                    )) || (
                        <Chip
                            label={item.label}
                            variant={item.variant}
                            disabled={item.disabled}
                            clickable={item.clickable}
                            className={className}
                            onClick={handleClick(item)}
                            onDelete={handleDelete(item.label)}
                            deleteIcon={deleteIcon}
                        />
                    )
                );
            })}
        </div>
    );
};

export { CChips };
