import React, { useContext } from 'react';
import { RouteProps } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { RowEvent } from 'ag-grid-community';

interface AGGridProps extends RouteProps {
    columnDefs: any;
    rowPerPage: number;
    height?: string | number;
    onGridReady(params: any): any;
    onClick?(event: any): any;
}

/*
var gridOptions = {
    columnDefs: columnDefs,
    rowData: students,
    defaultColDef: {
        editable: true,
        width: 100
    },
    rowSelection: 'single',
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    enableRangeSelection: true,
    suppressRowClickSelection: false,
    animateRows: true,
    suppressHorizontalScroll: true,
    localeText: {noRowsToShow: '조회 결과가 없습니다.'},
    getRowStyle: function (param) {
        if (param.node.rowPinned) {
            return {'font-weight': 'bold', background: '#dddddd'};
        }
        return {'text-align': 'center'};
    },
    getRowHeight: function(param) {
        if (param.node.rowPinned) {
            return 30;
        }
        return 24;
    },
    // GRID READY 이벤트, 사이즈 자동조정
    onGridReady: function (event) {
        event.api.sizeColumnsToFit();
    },
    // 창 크기 변경 되었을 때 이벤트
    onGridSizeChanged: function(event) {
        event.api.sizeColumnsToFit();
    },
    onRowEditingStarted: function (event) {
        console.log('never called - not doing row editing');
    },
    onRowEditingStopped: function (event) {
        console.log('never called - not doing row editing');
    },
    onCellEditingStarted: function (event) {
        console.log('cellEditingStarted');
    },
    onCellEditingStopped: function (event) {
        console.log('cellEditingStopped');
    },
    onRowClicked : function (event){
        console.log('onRowClicked');
    },
    onCellClicked : function (event){
        console.log('onCellClicked');
    },
    isRowSelectable : function(event){
        console.log('isRowSelectable');
        return true;
    },
    onSelectionChanged : function (event) {
        console.log('onSelectionChanged');
    },
    onSortChanged: function (event) {
        console.log('onSortChanged');
    },
    onCellValueChanged: function (event) {
        console.log('onCellValueChanged');
    },
    getRowNodeId : function(data) {
        return null;
    },
    // 리드 상단 고정
    setPinnedTopRowData: function(data) {
        return null;
    },
    // 그리드 하단 고정
    setPinnedBottomRowData: function(data) {
        return null;
    },
    components:{
        numericCellEditor: NumericCellEditor,
        moodEditor: MoodEditor
    },
    debug: false
};

*/

const AGGridComponent: React.FC<AGGridProps> = (props) => {
    const {
        columnDefs,
        rowPerPage,
        height = 'calc(100vh - 250px)',
        onClick,
        children,
        ...others
    } = props;

    const onGridReady = (params: any) => {
        params.api.sizeColumnsToFit();
        props.onGridReady(params);
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
                        localeText={{ noRowsToShow: '조회 결과가 없습니다.' }}
                        onGridReady={onGridReady}
                        rowModelType="infinite"
                        onCellClicked={onClick}
                    >
                        {children}
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
};

export { AGGridComponent };
