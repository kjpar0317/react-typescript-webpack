import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { cloneDeep, findIndex } from 'lodash';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormGroup, { FormGroupProps } from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        formControl: {
            margin: theme.spacing(3),
        },
        ccheck1: {
            '&$checked': {
                color: theme.palette.success.main,
            },
        },
        ccheck2: {
            '&$checked': {
                color: theme.palette.info.main,
            },
        },
        ccheck3: {
            '&$checked': {
                color: theme.palette.warning.main,
            },
        },
        ccheck4: {
            '&$checked': {
                color: theme.palette.error.main,
            },
        },
        checked: {},
    }),
);

interface CCheckboxProps {
    id: string;
    type?: 'ccheck1' | 'ccheck2' | 'ccheck3' | 'ccheck4' | undefined;
    title?: string;
    items: Array<object>;
    row?: FormGroupProps['row'];
    fullWidth?: FormControlProps['fullWidth'];
    disabled?: FormControlProps['disabled'];
    onChange?(items: Array<object>): any;
}

const CCheckbox: React.FC<CCheckboxProps> = (props) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const { id, type, title, items, disabled, row, fullWidth } = props;
    const [citems, setCitems] = useState<Array<any>>(items);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let cloneItems = cloneDeep(citems);
        const index = findIndex(cloneItems, ['label', event.target.name]);

        cloneItems[index] = {
            label: event.target.name,
            checked: event.target.checked,
        };

        setCitems(cloneItems);

        props.onChange && props.onChange(citems);
        // setCitems({ ...citems, [event.target.name]: event.target.checked });
    };

    const getCovertedLabel = (val: string) => {
        if (val && (val.startsWith('w.') || val.startsWith('s.'))) {
            return formatMessage({ id: val });
        } else {
            return val;
        }
    };

    const className =
        (type === 'ccheck1' && classes.ccheck1) ||
        (type === 'ccheck2' && classes.ccheck2) ||
        (type === 'ccheck3' && classes.ccheck3) ||
        (type === 'ccheck4' && classes.ccheck4) ||
        classes.ccheck1;

    return (
        <FormControl
            component="fieldset"
            className={classes.formControl}
            fullWidth={fullWidth}
            disabled={disabled}
        >
            {title && (
                <FormLabel component="legend">
                    {getCovertedLabel(title)}
                </FormLabel>
            )}
            <FormGroup row={row}>
                {citems.map((item: any, index: number) => {
                    return (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    checked={item.checked}
                                    onChange={handleChange}
                                    name={getCovertedLabel(item.label)}
                                    classes={{
                                        root: className,
                                        checked: classes.checked,
                                    }}
                                />
                            }
                            label={getCovertedLabel(item.label)}
                        />
                    );
                })}
            </FormGroup>
        </FormControl>
    );
};

export { CCheckbox };
