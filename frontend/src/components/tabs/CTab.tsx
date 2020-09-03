import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tab, { TabProps } from '@material-ui/core/Tab';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        default: {
            fontWeight: 600,
            color: 'black',
            minWidth: 100,
        },
        ctab1: {
            fontWeight: 600,
            color: theme.palette.success.main,
        },
        ctab2: {
            fontWeight: 600,
            color: theme.palette.info.main,
        },
        ctab3: {
            fontWeight: 600,
            color: theme.palette.warning.main,
        },
        ctab4: {
            fontWeight: 600,
            color: theme.palette.error.main,
        },
    }),
);

export interface CTabProps extends TabProps {
    label: string;
    type?: 'ctab1' | 'ctab2' | 'ctab3' | 'ctab4' | undefined;
}

const CTab: React.FC<CTabProps> = (props) => {
    const { label, type, style, children, ...other } = props;
    const classes = useStyles();

    const className =
        (type === 'ctab1' && classes.ctab1) ||
        (type === 'ctab2' && classes.ctab2) ||
        (type === 'ctab3' && classes.ctab3) ||
        (type === 'ctab4' && classes.ctab4) ||
        classes.default;

    return <Tab label={label} {...other} className={className}></Tab>;
};

export { CTab };
