import React, { useState } from 'react';
import { RouteProps } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { ButtonProps } from '@material-ui/core/Button';

import { CDialog } from '@/components/dialogs';

import loadingImg from '@/images/loading.gif';

interface AGGridProps extends RouteProps {
    title?: string;
    modules?: Array<string>;
    variant?: ButtonProps['variant'];
    columnDefs: any;
    rowPerPage: number;
    height?: string | number;
    onGridReady(params: any): any;
    onClick?(event: any): any;
    onCreate?: () => void;
    onUpdate?: () => void;
    onDelete?: () => void;
    // onClose?: () => void;
}

const DialogAGGridComponent: React.FC<AGGridProps> = (props) => {
    const [open, setOpen] = useState(false);
    const [overlayLoadingTemplate] = useState(
        `<span class="ag-overlay-loading-center"><img src=${loadingImg} width="15" height="15"/>&nbsp;&nbsp;Please wait while your rows are loading</span>`,
    );
    const [overlayNoRowsTemplate] = useState(
        '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">no rows</span>',
    );
    const {
        title,
        modules,
        variant,
        columnDefs,
        rowPerPage,
        height = 'calc(100vh - 250px)',
        onClick,
        onCreate,
        onUpdate,
        onDelete,
        children,
        ...others
    } = props;

    const onGridReady = (params: any) => {
        params.api.sizeColumnsToFit();
        props.onGridReady(params);
    };

    const handleClick = (event: any) => {
        setOpen(true);
        props.onClick && props.onClick(event);
    };

    const handleClose = () => {
        setOpen(false);
        // props.onClose && props.onClose();
    };

    // row data will be provided via redux on this.props.rowData
    return (
        <div style={{ width: '100%', height: height }}>
            <div
                style={{
                    height: '100%',
                    paddingTop: '26px',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    id="myGrid"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    className="ag-theme-alpine"
                >
                    <AgGridReact
                        // properties
                        columnDefs={columnDefs}
                        defaultColDef={{ filter: true }}
                        animateRows={true}
                        pagination={true}
                        paginationPageSize={rowPerPage}
                        cacheBlockSize={rowPerPage}
                        onGridReady={onGridReady}
                        rowModelType="infinite"
                        onCellClicked={handleClick}
                        overlayLoadingTemplate={overlayLoadingTemplate}
                        overlayNoRowsTemplate={overlayNoRowsTemplate}
                    />
                </div>
                {children && (
                    <CDialog
                        id="create-dialog"
                        modules={modules}
                        variant={variant}
                        open={open}
                        fullWidth={true}
                        title={title}
                        onCreate={onCreate}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        onClose={handleClose}
                    >
                        {children}
                    </CDialog>
                )}
            </div>
        </div>
    );
};

export { DialogAGGridComponent };
