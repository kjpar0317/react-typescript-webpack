import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

interface CChipForSelectProps {
    item: any;
    onClick?(e: any): any;
    onDelete?(e: any): any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        cchips1: {
            backgroundColor: theme.palette.success.main,
            borderColor: theme.palette.success.dark,
            color: theme.palette.success.contrastText,
            '&:hover, &:focus': {
                backgroundColor: theme.palette.success.dark,
            },
        },
        cchips2: {
            backgroundColor: theme.palette.info.main,
            borderColor: theme.palette.info.dark,
            color: theme.palette.info.contrastText,
            '&:hover, &:focus': {
                backgroundColor: theme.palette.info.dark,
            },
        },
        cchips3: {
            backgroundColor: theme.palette.warning.main,
            borderColor: theme.palette.warning.dark,
            color: theme.palette.warning.contrastText,
            '&:hover, &:focus': {
                backgroundColor: theme.palette.warning.dark,
            },
        },
        cchips4: {
            backgroundColor: theme.palette.error.main,
            borderColor: theme.palette.error.dark,
            color: theme.palette.error.contrastText,
            '&:hover, &:focus': {
                backgroundColor: theme.palette.error.dark,
            },
        },
    }),
);

const CChipForSelect: React.FC<CChipForSelectProps> = (props) => {
    const classes = useStyles();
    const { item } = props;

    const className =
        (item.type === 'cchips1' && classes.cchips1) ||
        (item.type === 'cchips2' && classes.cchips2) ||
        (item.type === 'cchips3' && classes.cchips3) ||
        (item.type === 'cchips4' && classes.cchips4) ||
        undefined;

    return (
        <div className={classes.root}>
            {(item.image && (
                <Chip
                    label={item.label}
                    avatar={<Avatar src={item.image} />}
                    clickable={true}
                    size="small"
                    className={className}
                />
            )) || (
                <Chip
                    label={item.label}
                    clickable={item.clickable}
                    size="small"
                    className={className}
                />
            )}
        </div>
    );
};

export { CChipForSelect };
