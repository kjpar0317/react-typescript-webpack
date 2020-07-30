import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Faker from 'faker/locale/ko';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, object, array } from '@storybook/addon-knobs';

import createStore from '@/store';

import {AGGridComponent} from '@/components/grid';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import markdown from './aggrid-manual.md';

const store = createStore();

const fakeHeader = () => {
    return [
        {headerName: '이름', field: 'name', width: 100, resizable: true},
        {headerName: '직업', field: 'jobTitle', width: 100, resizable: true},
        {headerName: '위치', field: 'area', width: 100, resizable: true},
        {headerName: '분류', field: 'jobType', width: 100, resizable: true},
        {headerName: '전화번호', field: 'phone', width: 150, resizable: true},
        {headerName: '주소', field: 'address', resizable: true},
    ];
}

const fakeData = () => {
    let fakeobj = [{}];
    for(let i = 0; i < 30; i++) {
        fakeobj[i] = {
            name: `${Faker.name.lastName()} ${Faker.name.firstName()}`,
            jobTitle: `${Faker.name.jobTitle()}`,
            area: `${Faker.name.jobArea()}`,
            jobType: `${Faker.name.jobType()}`,
            phone: `${Faker.phone.phoneNumber()}`,
            address: `${Faker.address.country()} ${Faker.address.state()} ${Faker.address.city()}`
        }
    }

    return fakeobj;
};

storiesOf('DataGrid 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <Router>
                <Route path="/" component={() => story()} />
            </Router>
        </Provider>
    ))
    .add('기본 DataGrid', () => <div style={{ height: '95vh'}} ><AGGridComponent columnDefs={object('컬럼정보', fakeHeader())} rowData={object('데이터 정보', fakeData())}/></div>, { notes: { '메뉴얼': markdown } })
    .addDecorator(withKnobs);
