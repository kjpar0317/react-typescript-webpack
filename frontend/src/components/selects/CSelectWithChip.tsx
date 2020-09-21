import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { includes, last, find, isEmpty, pull, findIndex } from 'lodash';

import {
    createStyles,
    Theme,
    makeStyles,
    withStyles,
} from '@material-ui/core/styles';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import Select, { SelectProps } from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

import { CChipForSelect } from '@/components/chips';
import { MuiIcon } from '@/components/icons';

interface CSelectProps {
    id: string;
    title?: string;
    variant?: SelectProps['variant'];
    defaultValues?: any;
    items: Array<object>;
    style?: React.CSSProperties;
    disabled?: FormControlProps['disabled'];
    onChange?(values: any): void;
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
            padding: '3px 0px 3px 10px',
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
        formControl: {
            // margin: theme.spacing.unit,
            minWidth: 120,
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        menuItem: {
            display: 'block',
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

const CSelectWithChip: React.FC<CSelectProps> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const {
        id,
        title,
        variant,
        defaultValues = [],
        style,
        disabled = false,
        items,
    } = props;
    const [values, setValues] = useState<any>(defaultValues);
    const [open, setOpen] = useState(false);
    let defaultItems: any = undefined;

    if (defaultValues) {
        defaultItems = items.filter((item: any) => {
            return includes(defaultValues, item.value);
        });
    }

    const getCovertedLabel = (val: string) => {
        if (val && (val.startsWith('w.') || val.startsWith('s.'))) {
            return formatMessage({ id: val });
        } else {
            return val;
        }
    };

    const handleClose = () => setOpen(false);

    const handleOpen = () => setOpen(true);

    const handleChange = (event: any) => {
        var vitems = event.target.value as Array<any>;

        if (
            findIndex(values, (f: any) => {
                return f === last(vitems).value;
            }) >= 0
        ) {
            const tvalues = pull(values, last(vitems).value);
            setValues(tvalues);
            props.onChange && props.onChange(tvalues);
        } else {
            const tvalues = values.concat(last(vitems).value);
            setValues(values.concat(last(vitems).value));
            props.onChange && props.onChange(tvalues);
        }

        setOpen(false);
    };

    const handleDelete = (value: any) => {
        setValues(pull(values, value));
        setOpen(false);
    };

    return (
        <FormControl
            className={classes.formControl}
            onChange={handleChange}
            disabled={disabled}
        >
            {title && (
                <InputLabel htmlFor={id}>{getCovertedLabel(title)}</InputLabel>
            )}
            <Select
                multiple
                value={values}
                defaultValue={defaultValues}
                renderValue={(selected: any) => {
                    return (
                        <div style={{ float: 'left', display: 'flex' }}>
                            {values &&
                                items
                                    .filter((item: any) => {
                                        return !isEmpty(
                                            find(values, (f: any) => {
                                                return f === item.value;
                                            }),
                                        );
                                    })
                                    .map((item: any) => (
                                        <CChipForSelect
                                            key={item.value}
                                            item={item}
                                        />
                                    ))}
                        </div>
                    );
                }}
                displayEmpty
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
                input={
                    ((!variant || variant === 'outlined') && (
                        <BootstrapInput />
                    )) || <Input />
                }
                MenuProps={MenuProps}
                style={style}
            >
                {defaultValues && defaultItems && !open && (
                    <div style={{ float: 'left', display: 'flex' }}>
                        {defaultItems.map((item: any) => (
                            <CChipForSelect key={item.value} item={item} />
                        ))}
                    </div>
                )}
                {items.map((item: any, index: number) => {
                    const checkIcon = findIndex(values, (f: any) => {
                        return f === item.value;
                    }) >= 0 && <MuiIcon icon="Check" />;
                    return (
                        <MenuItem
                            key={index}
                            value={item}
                            className={classes.menuItem}
                        >
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
                            <div style={{ float: 'right', color: 'green' }}>
                                {checkIcon}
                            </div>
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export { CSelectWithChip };
