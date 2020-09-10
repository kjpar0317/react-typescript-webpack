import React from 'react';
import { isNumber } from 'lodash';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress, {
    CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface CCircularWithLabelProps {
    type?: string;
    value: any;
    size?: number;
    thickness?: number;
    variant?: CircularProgressProps['variant'];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cprogress1: {
            color: theme.palette.success.main,
        },
        cprogress2: {
            color: theme.palette.info.main,
        },
        cprogress3: {
            color: theme.palette.warning.main,
        },
        cprogress4: {
            color: theme.palette.error.main,
        },
    }),
);

const CCircularWithLabel: React.FC<CCircularWithLabelProps> = (props) => {
    const classes = useStyles();
    const {
        type,
        value,
        size = 20,
        thickness = 3.6,
        variant = 'static',
    } = props;
    let rvalue = '';

    const className =
        (type === 'cprogress1' && classes.cprogress1) ||
        (type === 'cprogress2' && classes.cprogress2) ||
        (type === 'cprogress3' && classes.cprogress3) ||
        (type === 'cprogress4' && classes.cprogress4) ||
        classes.cprogress1;

    const textSize =
        (size < 50 && 'caption') ||
        (size < 100 && 'subtitle1') ||
        (size < 150 && 'h6') ||
        (size < 200 && 'h5') ||
        (size < 250 && 'h4') ||
        (size < 300 && 'h3') ||
        (size < 350 && 'h2') ||
        (size >= 350 && 'h1') ||
        'caption';

    if (isNumber(value)) {
        rvalue = `${Math.round(value)}%`;
    } else {
        rvalue = value;
    }

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress
                variant={variant}
                {...props}
                classes={{
                    colorPrimary: className,
                }}
                size={size}
                thickness={thickness}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {value && (
                    <Typography
                        variant={textSize}
                        component="div"
                        color="textSecondary"
                    >
                        {rvalue}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export { CCircularWithLabel };
