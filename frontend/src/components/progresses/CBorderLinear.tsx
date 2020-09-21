import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress, {
    LinearProgressProps,
} from '@material-ui/core/LinearProgress';

interface CBorderLinearProps {
    type?: string;
    value: number;
    valueBuffer?: number;
    variant?: LinearProgressProps['variant'];
    borderRadius?: number;
    height?: number;
}

const CBorderLinear: React.FC<CBorderLinearProps> = (props) => {
    const {
        type,
        value,
        valueBuffer,
        variant = 'determinate',
        borderRadius = 5,
        height = 10,
    } = props;

    const useStyle = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                height: height,
                borderRadius: borderRadius,
            },
            colorPrimary: {
                backgroundColor: '#eeeeee',
            },
            cprogress1: {
                backgroundColor: theme.palette.success.main,
                borderRadius: borderRadius,
            },
            cprogress2: {
                backgroundColor: theme.palette.info.main,
                borderRadius: borderRadius,
            },
            cprogress3: {
                backgroundColor: theme.palette.warning.main,
                borderRadius: borderRadius,
            },
            cprogress4: {
                backgroundColor: theme.palette.error.main,
                borderRadius: borderRadius,
            },
        }),
    );
    const classes = useStyle();

    const className =
        (type === 'cprogress1' && classes.cprogress1) ||
        (type === 'cprogress2' && classes.cprogress2) ||
        (type === 'cprogress3' && classes.cprogress3) ||
        (type === 'cprogress4' && classes.cprogress4) ||
        classes.cprogress1;

    return (
        <LinearProgress
            value={value}
            valueBuffer={valueBuffer}
            variant={variant}
            classes={{
                root: classes.root,
                colorPrimary: classes.colorPrimary,
                barColorPrimary: className,
            }}
        />
    );
};

export { CBorderLinear };
