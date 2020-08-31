import React from 'react';

import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { ButtonProps } from '@material-ui/core/Button';

import { CDialogTitle, CDialogAction } from './index';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export interface CDialogProps {
    id: string;
    title?: string;
    modules?: Array<string>;
    variant?: ButtonProps['variant'];
    validated?: boolean;
    children?: React.ReactNode;
    open: boolean;
    fullWidth?: boolean;
    maxWidth?: DialogProps['maxWidth'];
    onCreate?: () => void;
    onUpdate?: () => void;
    onDelete?: () => void;
    onClose?: () => void;
}

const CDialog: React.FC<CDialogProps> = (props) => {
    const {
        id,
        title,
        modules,
        variant,
        validated,
        children,
        fullWidth = true,
        maxWidth,
        onCreate,
        onUpdate,
        onDelete,
        onClose,
        ...other
    } = props;

    return (
        <Dialog
            onClose={onClose}
            aria-labelledby={props.id}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            {...other}
        >
            <CDialogTitle id={props.id} onClose={onClose}>
                {title}
            </CDialogTitle>
            <DialogContent dividers>{children}</DialogContent>
            <CDialogAction
                modules={modules}
                variant={variant}
                validated={validated}
                onCreate={onCreate}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onClose={onClose}
            ></CDialogAction>
        </Dialog>
    );
};

export { CDialog };
