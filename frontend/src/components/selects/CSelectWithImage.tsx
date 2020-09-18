import React, { useState } from 'react';
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
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';

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
            padding: '7px 0px 7px 10px',
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
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
    }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CSelectWithImage: React.FC<CSelectProps> = (props) => {
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
    const [value, setValue] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    let defaultItem: any = undefined;

    if (defaultValue) {
        let cloneItems: any = cloneDeep(items);
        var idx = findIndex(cloneItems, ['value', defaultValue]);

        defaultItem = cloneItems[idx];
    }

    const getCovertedLabel = (val: string) => {
        if (val && (val.startsWith('w.') || val.startsWith('s.'))) {
            return formatMessage({ id: val });
        } else {
            return val;
        }
    };

    const handleChange = (event: any, child?: any) => {
        let cloneItems: any = cloneDeep(items);
        var value = event.target.value as any;

        var idx = findIndex(cloneItems, ['value', value]);

        setValue(value);

        props.onChange &&
            props.onChange(cloneItems[idx].value, cloneItems[idx].label);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <FormControl className={classes.root} style={style} disabled={disabled}>
            {title && (
                <InputLabel htmlFor={id}>{getCovertedLabel(title)}</InputLabel>
            )}
            <Select
                open={open}
                id={id}
                value={value}
                variant={variant}
                autoWidth
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
                inputProps={{
                    id: id,
                }}
                input={
                    ((!variant || variant === 'outlined') && (
                        <BootstrapInput />
                    )) || <Input />
                }
                MenuProps={MenuProps}
            >
                {defaultValue && defaultItem && !open && (
                    <MenuItem value={value}>
                        <div style={{ float: 'left' }}>
                            <Avatar
                                alt={defaultItem.label}
                                src={defaultItem.id}
                                className={classes.small}
                            />
                        </div>
                        <div style={{ float: 'left' }}>
                            &nbsp;{defaultItem.label}
                        </div>
                    </MenuItem>
                )}
                {emptyOptObj && (
                    <MenuItem value={emptyOptObj.value}>
                        <div style={{ float: 'left' }}>
                            <Avatar alt="N" className={classes.small}>
                                N
                            </Avatar>
                        </div>
                        <div style={{ float: 'left' }}>
                            &nbsp;{getCovertedLabel(emptyOptObj.label)}
                        </div>
                    </MenuItem>
                )}
                {items.map((item: any, index: number) => {
                    return (
                        <MenuItem value={item.value} key={index}>
                            <div style={{ float: 'left' }}>
                                <Avatar
                                    alt={item.label}
                                    src={item.image}
                                    className={classes.small}
                                />
                            </div>
                            <div style={{ float: 'left' }}>
                                &nbsp;{item.label}
                            </div>
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export { CSelectWithImage };
