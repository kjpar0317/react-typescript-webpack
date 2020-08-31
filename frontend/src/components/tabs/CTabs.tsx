import React from 'react';
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from '@material-ui/core/styles';
import Tabs, { TabsProps } from '@material-ui/core/Tabs';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        ctabs1: {
            backgroundColor: 'transparent',
            '& > div': {
                backgroundColor: 'white',
            },
        },
        ctabs2: {
            backgroundColor: 'transparent',
            '& > div': {
                backgroundColor: 'white',
            },
        },
        ctabs3: {
            backgroundColor: 'transparent',
            '& > div': {
                backgroundColor: 'white',
            },
        },
        ctabs4: {
            backgroundColor: 'transparent',
            '& > div': {
                backgroundColor: 'white',
            },
        },
    }),
);

export interface CTabsProps {
    value: string | number;
    type?: 'ctabs1' | 'ctabs2' | 'ctabs3' | 'ctabs4' | undefined;
    variant?: TabsProps['variant'];
    children: React.ReactNode;
    onChange?(event: React.ChangeEvent<{}>, newValue: number): any;
}

const CTabs: React.FC<CTabsProps> = (props) => {
    const { value, type, variant, children, onChange, ...others } = props;
    const theme = useTheme();
    const classes = useStyles();

    const className =
        (type === 'ctabs1' && classes.ctabs1) ||
        (type === 'ctabs2' && classes.ctabs2) ||
        (type === 'ctabs3' && classes.ctabs3) ||
        (type === 'ctabs4' && classes.ctabs4) ||
        classes.ctabs1;

    const indicatorColor =
        (type === 'ctabs1' && theme.palette.success.main) ||
        (type === 'ctabs2' && theme.palette.info.main) ||
        (type === 'ctabs3' && theme.palette.warning.main) ||
        (type === 'ctabs4' && theme.palette.error.main) ||
        theme.palette.success.main;

    return (
        <Tabs
            {...others}
            value={value}
            className={className}
            variant={variant}
            TabIndicatorProps={{
                style: { background: indicatorColor },
            }}
            onChange={onChange}
        >
            {children}
        </Tabs>
    );
};

export { CTabs };
