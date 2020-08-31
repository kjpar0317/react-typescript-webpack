import React from 'react';
import { useIntl } from 'react-intl';
import { cloneDeep, findIndex } from 'lodash';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
import FormControlLabel, {
    FormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        cradio1: {
            '&$checked': {
                color: theme.palette.success.main,
            },
        },
        cradio2: {
            '&$checked': {
                color: theme.palette.info.main,
            },
        },
        cradio3: {
            '&$checked': {
                color: theme.palette.warning.main,
            },
        },
        cradio4: {
            '&$checked': {
                color: theme.palette.error.main,
            },
        },
        checked: {},
    }),
);

interface CRadioGroupProps {
    id: string;
    type?: 'cradio1' | 'cradio2' | 'cradio3' | 'cradio4' | undefined;
    title?: string;
    defaultValue?: string | undefined;
    items: Array<object>;
    row?: RadioGroupProps['row'];
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    fullWidth?: FormControlProps['fullWidth'];
    disabled?: FormControlLabelProps['disabled'];
    onChange?(value: string, label?: string | undefined): void;
}

const CRadioGroup: React.FC<CRadioGroupProps> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const {
        id,
        type,
        title,
        defaultValue = '',
        items,
        labelPlacement,
        fullWidth,
        disabled,
        row,
    } = props;
    const [value, setValue] = React.useState(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let cloneItems: any = cloneDeep(items);
        var tvalue = (event.target as HTMLInputElement).value;

        setValue(tvalue);

        var idx = findIndex(cloneItems, ['value', tvalue]);

        props.onChange &&
            props.onChange(tvalue, cloneItems[idx] && cloneItems[idx].label);
    };

    const getCovertedLabel = (val: string) => {
        if (val && (val.startsWith('w.') || val.startsWith('s.'))) {
            return formatMessage({ id: val });
        } else {
            return val;
        }
    };

    const className =
        (type === 'cradio1' && classes.cradio1) ||
        (type === 'cradio2' && classes.cradio2) ||
        (type === 'cradio3' && classes.cradio3) ||
        (type === 'cradio4' && classes.cradio4) ||
        classes.cradio1;

    return (
        <FormControl component="fieldset" fullWidth={fullWidth}>
            <FormLabel component="legend">{title}</FormLabel>
            <RadioGroup
                row={row}
                aria-label={id}
                name={id}
                value={value}
                onChange={handleChange}
            >
                {items.map((item: any, index: number) => {
                    return (
                        <FormControlLabel
                            key={index}
                            value={item.value}
                            control={
                                <Radio
                                    disableRipple
                                    classes={{
                                        root: className,
                                        checked: classes.checked,
                                    }}
                                />
                            }
                            label={getCovertedLabel(item.label)}
                            labelPlacement={labelPlacement}
                            checked={
                                item.value === value.toString() ? true : false
                            }
                            disabled={disabled}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
};

export { CRadioGroup };
