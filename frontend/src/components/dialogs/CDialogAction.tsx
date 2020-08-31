import React from 'react';
import { useIntl } from 'react-intl';
import { includes } from 'lodash';

import DialogActions from '@material-ui/core/DialogActions';
import { ButtonProps } from '@material-ui/core/Button';

import { CButton } from '@/components/buttons';

export interface CDialogActionProps {
    modules?: Array<string>;
    variant?: ButtonProps['variant'];
    validated?: boolean;
    onCreate?: () => void;
    onUpdate?: () => void;
    onDelete?: () => void;
    onClose?: () => void;
}

const CDialogAction: React.FC<CDialogActionProps> = (props) => {
    const {
        modules,
        variant,
        validated,
        onCreate,
        onUpdate,
        onDelete,
        onClose,
        ...other
    } = props;
    const { formatMessage } = useIntl();

    const createButton = includes(modules, 'create') && (
        <CButton
            type="btn1"
            variant={variant}
            validated={validated}
            onClick={onCreate}
        >
            {formatMessage({ id: 'w.create' })}
        </CButton>
    );

    const editButton = includes(modules, 'update') && (
        <CButton
            type="btn2"
            variant={variant}
            validated={validated}
            onClick={onUpdate}
        >
            {formatMessage({ id: 'w.update' })}
        </CButton>
    );

    const delButton = includes(modules, 'delete') && (
        <CButton
            type="btn3"
            variant={variant}
            validated={validated}
            onClick={onDelete}
        >
            {formatMessage({ id: 'w.delete' })}
        </CButton>
    );

    const closeButton = includes(modules, 'close') && (
        <CButton type="btn4" variant={variant} onClick={onClose}>
            {formatMessage({ id: 'w.close' })}
        </CButton>
    );

    return (
        <DialogActions {...other}>
            {createButton}
            {editButton}
            {delButton}
            {closeButton}
        </DialogActions>
    );
};

export { CDialogAction };
