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
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
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
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
    }),
);

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
    const [value, setValue] = React.useState(defaultValue);
    const [open, setOpen] = React.useState(false);
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
        var svalue = event.target.value as string;

        var idx = findIndex(cloneItems, ['src', svalue]);

        setValue(event.target.value);

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
                input={<BootstrapInput />}
            >
                {defaultValue && defaultItem && !open && (
                    <MenuItem value={value}>
                        <div style={{ float: 'left' }}>
                            <Avatar
                                alt={defaultItem.label}
                                src={defaultItem.src}
                                className={classes.small}
                            />
                        </div>
                        <div style={{ float: 'left' }}>
                            &nbsp;{defaultItem.label}
                        </div>
                    </MenuItem>
                )}
                {items.map((item: any, index: number) => {
                    return (
                        <MenuItem value={item.src} key={index}>
                            <div style={{ float: 'left' }}>
                                <Avatar
                                    alt={item.label}
                                    src={item.src}
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
