import React, { useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel, {
    FormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface CSwitchProps {
    label: string;
    type?: 'cswitch1' | 'cswitch2' | 'cswitch3' | 'cswitch4' | undefined;
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    checked?: boolean;
    disabled?: boolean;
    onChange?(checked: boolean): any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cswitch1: {
            color: theme.palette.success.light,
            '&$checked': {
                color: theme.palette.success.main,
            },
            '&$checked + $track': {
                backgroundColor: theme.palette.success.dark,
            },
        },
        cswitch2: {
            color: theme.palette.info.light,
            '&$checked': {
                color: theme.palette.info.main,
            },
            '&$checked + $track': {
                backgroundColor: theme.palette.info.dark,
            },
        },
        cswitch3: {
            color: theme.palette.warning.light,
            '&$checked': {
                color: theme.palette.warning.main,
            },
            '&$checked + $track': {
                backgroundColor: theme.palette.warning.dark,
            },
        },
        cswitch4: {
            color: theme.palette.error.light,
            '&$checked': {
                color: theme.palette.error.main,
            },
            '&$checked + $track': {
                backgroundColor: theme.palette.error.dark,
            },
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create([
                'background-color',
                'border',
            ]),
        },
        checked: {},
    }),
);

const CSwitch: React.FC<CSwitchProps> = (props) => {
    const classes = useStyles();
    const { label, type, checked, labelPlacement, disabled } = props;
    const [schecked, setSchecked] = useState(checked);

    const className =
        (type === 'cswitch1' && classes.cswitch1) ||
        (type === 'cswitch2' && classes.cswitch2) ||
        (type === 'cswitch3' && classes.cswitch3) ||
        (type === 'cswitch4' && classes.cswitch4) ||
        classes.cswitch1;

    const handleChange = (
        event: React.ChangeEvent<{}>,
        dstChecked: boolean,
    ) => {
        setSchecked(dstChecked);
        props.onChange && props.onChange(dstChecked);
    };

    return (
        <div>
            <FormControlLabel
                checked={schecked}
                control={
                    <Switch
                        disableRipple
                        classes={{
                            switchBase: className,
                            track: classes.track,
                            checked: classes.checked,
                        }}
                    />
                }
                label={label}
                labelPlacement={labelPlacement}
                disabled={disabled}
                onChange={handleChange}
            />
        </div>
    );
};

export { CSwitch };
