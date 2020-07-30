import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";

import { AGGridComponent } from '@/components/grid';

import Faker from 'faker/locale/ko';

import './styles.scss';

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
    for(let i = 0; i < 200; i++) {
        fakeobj[i] = {
            id: i,
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

const BoardFeatures : React.FC = () => {
    const [ columnDefs, setColumnDefs ] = useState([{}]);
    const [ rowData, setRowData ] = useState([{}]);

    useEffect(() => {
        setColumnDefs(fakeHeader());
        setRowData(fakeData());
    }, []);

    return (
        <div className="ag-theme-bootstrap" style={{ height: '600px' }}>
            <AGGridComponent
                columnDefs={columnDefs}
                rowData={rowData}
                />
        </div>
    );
};

export default withRouter(BoardFeatures);
