import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper, { StepperProps } from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

interface CStepperProps {
    type?: string;
    items: Array<string>;
    defaultStep?: number;
    orientation?: StepperProps['orientation'];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        cstepper1: {
            color: '#dddddd',
            '&$completed': {
                color: theme.palette.success.dark,
            },
            '&$active': {
                color: theme.palette.success.main,
            },
        },
        cstepper2: {
            color: '#dddddd',
            '&$completed': {
                color: theme.palette.info.dark,
            },
            '&$active': {
                color: theme.palette.info.main,
            },
        },
        cstepper3: {
            color: '#dddddd',
            '&$completed': {
                color: theme.palette.warning.dark,
            },
            '&$active': {
                color: theme.palette.warning.main,
            },
        },
        cstepper4: {
            color: '#dddddd',
            '&$completed': {
                color: theme.palette.error.dark,
            },
            '&$active': {
                color: theme.palette.error.main,
            },
        },
        active: {}, //needed so that the &$active tag works
        completed: {},
        disabled: {},
    }),
);

const CStepper: React.FC<CStepperProps> = (props) => {
    const classes = useStyles();
    const { type, items, defaultStep = 0, orientation = 'horizontal' } = props;
    const [activeStep, setActiveStep] = React.useState(defaultStep);
    let alternativeLabel = false;

    const className =
        (type === 'cstepper1' && classes.cstepper1) ||
        (type === 'cstepper2' && classes.cstepper2) ||
        (type === 'cstepper3' && classes.cstepper3) ||
        (type === 'cstepper4' && classes.cstepper4) ||
        classes.cstepper1;

    if (orientation === 'horizontal') {
        alternativeLabel = true;
    } else {
        alternativeLabel = false;
    }

    return (
        <Stepper
            activeStep={activeStep}
            alternativeLabel={alternativeLabel}
            orientation={orientation}
            className={classes.root}
            connector={<StepConnector />}
        >
            {items &&
                items.map((label: string) => (
                    <Step
                        key={label}
                        classes={{
                            root: className,
                            completed: classes.completed,
                        }}
                    >
                        <StepLabel
                            StepIconProps={{
                                classes: {
                                    root: className,
                                    completed: classes.completed,
                                    active: classes.active,
                                },
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
        </Stepper>
    );
};

export { CStepper };
