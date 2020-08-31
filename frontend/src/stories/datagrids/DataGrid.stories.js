import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Faker from 'faker/locale/ko';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, select } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';

import {
    AGGridComponent,
    DialogAGGridComponent,
    DrawerAGGridComponent,
} from '@/components/datagrids';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import markdown from './aggrid-manual.md';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

const fakeHeader = () => {
    return [
        { headerName: '이름', field: 'name', width: 100, resizable: true },
        { headerName: '직업', field: 'jobTitle', width: 100, resizable: true },
        { headerName: '위치', field: 'area', width: 100, resizable: true },
        { headerName: '분류', field: 'jobType', width: 100, resizable: true },
        { headerName: '전화번호', field: 'phone', width: 150, resizable: true },
        { headerName: '주소', field: 'address', resizable: true },
    ];
};

const fakeData = () => {
    let fakeobj = [{}];
    for (let i = 0; i < 30; i++) {
        fakeobj[i] = {
            name: `${Faker.name.lastName()} ${Faker.name.firstName()}`,
            jobTitle: `${Faker.name.jobTitle()}`,
            area: `${Faker.name.jobArea()}`,
            jobType: `${Faker.name.jobType()}`,
            phone: `${Faker.phone.phoneNumber()}`,
            address: `${Faker.address.country()} ${Faker.address.state()} ${Faker.address.city()}`,
        };
    }

    return fakeobj;
};

const actions = {
    onCellClicked: action('handleClicked'),
};

storiesOf('DataGrid 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <IntlProvider locale="ko" messages={messages['ko']}>
                <ThemeProvider theme={createMuiTheme(customTheme)}>
                    <Router>
                        <Route path="/" component={() => story()} />
                    </Router>
                </ThemeProvider>
            </IntlProvider>
        </Provider>
    ))
    .add(
        '기본 DataGrid',
        () => {
            const onGridReady = (params) => {
                var datasource = {
                    getRows: (rowparams) => {
                        params.api.showLoadingOverlay();

                        rowparams.successCallback(
                            fakeData(),
                            fakeData().length,
                        );
                        params.api.hideOverlay();
                    },
                };
                params.api.setDatasource(datasource);
            };

            return (
                <AGGridComponent
                    {...actions}
                    columnDefs={object('컬럼정보', fakeHeader())}
                    rowsPerPage={20}
                    height={400}
                    onGridReady={onGridReady}
                />
            );
        },
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        '다이얼로그 DataGrid',
        () => {
            const onGridReady = (params) => {
                var datasource = {
                    getRows: (rowparams) => {
                        params.api.showLoadingOverlay();

                        rowparams.successCallback(
                            fakeData(),
                            fakeData().length,
                        );
                        params.api.hideOverlay();
                    },
                };
                params.api.setDatasource(datasource);
            };

            return (
                <DialogAGGridComponent
                    title={text('타이틀', '테스트 타이틀')}
                    modules={object('버튼 사용 모듈들', [
                        'update',
                        'delete',
                        'close',
                    ])}
                    variant={select(
                        '버튼 모양 스타일',
                        { contained: 'contained', outlined: 'outlined' },
                        'contained',
                    )}
                    validated={select(
                        'validated',
                        {
                            없음: '',
                            true: true,
                            false: false,
                        },
                        '없음',
                    )}
                    columnDefs={object('컬럼정보', fakeHeader())}
                    rowsPerPage={20}
                    height={400}
                    onGridReady={onGridReady}
                >
                    {text('내용', '테스트')}
                </DialogAGGridComponent>
            );
        },
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        '슬라이드 패널 DataGrid',
        () => {
            const onGridReady = (params) => {
                var datasource = {
                    getRows: (rowparams) => {
                        params.api.showLoadingOverlay();

                        rowparams.successCallback(
                            fakeData(),
                            fakeData().length,
                        );
                        params.api.hideOverlay();
                    },
                };
                params.api.setDatasource(datasource);
            };

            return (
                <DrawerAGGridComponent
                    {...actions}
                    columnDefs={object('컬럼정보', fakeHeader())}
                    sideBar={true}
                    rowsPerPage={20}
                    height={400}
                    onGridReady={onGridReady}
                >
                    {text('내용', '테스트')}
                </DrawerAGGridComponent>
            );
        },
        { notes: { 메뉴얼: markdown } },
    )
    .addDecorator(withKnobs);
