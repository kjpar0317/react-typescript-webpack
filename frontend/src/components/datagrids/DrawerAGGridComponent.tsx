import React, { useState } from 'react';
import { RouteProps } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import loadingImg from '@/images/loading.gif';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface DrawerAGGridProps extends RouteProps {
    detailTitle?: string;
    columnDefs: any;
    rowsPerPage: number;
    sideBar: boolean;
    height?: string | number;
    drawerWidth?: number;
    fclose?: boolean;
    onGridReady(params: any): any;
    onClick?(event: any): any;
}

const DrawerAGGridComponent: React.FC<DrawerAGGridProps> = (props) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
            },
            appBar: {
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            },
            appBarShift: {
                width: `calc(100% - ${props.drawerWidth}px)`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: props.drawerWidth,
            },
            title: {
                flexGrow: 1,
            },
            hide: {
                display: 'none',
            },
            drawer: {
                width: props.drawerWidth,
                flexShrink: 0,
            },
            drawerPaper: {
                width: props.drawerWidth,
            },
            drawerHeader: {
                display: 'flex',
                alignItems: 'center',
                padding: theme.spacing(0, 1),
                // necessary for content to be below app bar
                ...theme.mixins.toolbar,
                justifyContent: 'flex-start',
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                marginRight: props.drawerWidth && props.drawerWidth * -1,
            },
            contentShift: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: 0,
            },
        }),
    );
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [overlayLoadingTemplate] = useState(
        `<span class="ag-overlay-loading-center"><img src=${loadingImg} width="15" height="15"/>&nbsp;&nbsp;Please wait while your rows are loading</span>`,
    );
    const [overlayNoRowsTemplate] = useState(
        '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">no rows</span>',
    );
    const {
        detailTitle,
        columnDefs,
        rowsPerPage,
        sideBar,
        drawerWidth = 800,
        fclose = false,
        height = 'calc(100vh - 250px)',
        children,
    } = props;

    const handleCellClicked = (e: any) => {
        setOpen(true);
        props.onClick && props.onClick(e);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onGridReady = (params: any) => {
        params.api.sizeColumnsToFit();

        props.onGridReady(params);
    };

    // row data will be provided via redux on this.props.rowData
    return (
        <div className="ag-theme-bootstrap" style={{ height: height }}>
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
                        defaultColDef={{ flex: 1, minWidth: 100 }}
                        animateRows={true}
                        pagination={true}
                        paginationPageSize={rowsPerPage}
                        cacheBlockSize={rowsPerPage}
                        onGridReady={onGridReady}
                        sideBar={sideBar}
                        onCellClicked={(e) => handleCellClicked(e)}
                        rowModelType="infinite"
                        overlayLoadingTemplate={overlayLoadingTemplate}
                        overlayNoRowsTemplate={overlayNoRowsTemplate}
                    ></AgGridReact>
                </div>
            </div>
            {!fclose && (
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <span style={{ width: '70%' }}>{detailTitle}</span>
                        <span style={{ width: '30%', textAlign: 'right' }}>
                            <IconButton onClick={handleDrawerClose}>
                                <CloseIcon />
                            </IconButton>
                        </span>
                    </div>
                    <Divider />
                    <div>{children}</div>
                </Drawer>
            )}
        </div>
    );
};

export { DrawerAGGridComponent };
