import React from 'react';
import { useIntl } from 'react-intl';
import { cloneDeep, findIndex } from 'lodash';

import {
    createStyles,
    makeStyles,
    withStyles,
    Theme,
} from '@material-ui/core/styles';
import { SelectProps } from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

interface CSelectProps {
    id: string;
    title?: string;
    variant?: SelectProps['variant'];
    defaultValue?: number | string | undefined;
    emptyOptObj?: any;
    items: Array<object>;
    style?: React.CSSProperties;
    disabled?: FormControlProps['disabled'];
    onChange?(value: string | number, label?: string | undefined): void;
}

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
            margin: 0,
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            padding: '10px 0px 10px 10px',
            transition: theme.transitions.create([
                'border-color',
                'box-shadow',
            ]),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
        },
    }),
);

const CSelect: React.FC<CSelectProps> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const {
        id,
        title,
        variant,
        defaultValue,
        style,
        items,
        emptyOptObj,
        disabled,
    } = props;
    const [value, setValue] = React.useState(defaultValue);

    const getCovertedLabel = (val: string) => {
        if (val && (val.startsWith('w.') || val.startsWith('s.'))) {
            return formatMessage({ id: val });
        } else {
            return val;
        }
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        let cloneItems: any = cloneDeep(items);
        var svalue = event.target.value as string;

        var idx = findIndex(cloneItems, ['value', svalue]);

        setValue(svalue);

        props.onChange &&
            props.onChange(svalue, cloneItems[idx] && cloneItems[idx].label);
    };

    return (
        <FormControl className={classes.root} style={style} disabled={disabled}>
            {title && (
                <InputLabel htmlFor={id}>{getCovertedLabel(title)}</InputLabel>
            )}
            <NativeSelect
                id={id}
                value={value}
                variant={variant}
                onChange={handleChange}
                input={<BootstrapInput />}
            >
                {emptyOptObj && (
                    <option aria-label="None" value={emptyOptObj.value}>
                        {getCovertedLabel(emptyOptObj.label)}
                    </option>
                )}
                {items.map((item: any, index: number) => {
                    return (
                        <option key={index} value={item.value}>
                            {getCovertedLabel(item.label)}
                        </option>
                    );
                })}
            </NativeSelect>
        </FormControl>
    );
};

export { CSelect };
