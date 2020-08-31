import React from 'react';
import { RouteProps } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        textStyle: {
            width: '100%',
            '& label.Mui-focused': {
                color: theme.palette.success.main,
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: theme.palette.primary.main,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.primary.main,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.success.dark,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.success.main,
                },
            },
        },
    }),
);

export interface CTextFieldProps extends RouteProps {
    id: string;
    value: string;
    label: string;
    defaultValue?: string;
    variant?: TextFieldProps['variant'];
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CTextField: React.FC<CTextFieldProps> = (props) => {
    const {
        id,
        value,
        label,
        defaultValue,
        variant,
        required,
        onChange,
        ...other
    } = props;
    const classes = useStyle();

    let errorFlag = false;

    if (required) {
        if (!value) {
            errorFlag = true;
        } else {
            errorFlag = false;
        }
    }

    return (
        <TextField
            error={errorFlag}
            id={id}
            label={label}
            defaultValue={defaultValue}
            variant={variant}
            className={classes.textStyle}
            onChange={props.onChange}
        />
    );
};

export { CTextField };
