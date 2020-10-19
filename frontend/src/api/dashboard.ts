import axios from 'axios';
import axiosUtils from '@/utils/axios-utils';

export const getPublicLayout: any = (username: string) => {
    return [
        {
            i: '1',
            x: 0,
            y: 0,
            w: 3,
            h: 2,
            minW: 3,
            minH: 2,
            maxH: 6,
            static: true,
            wgGb: 'CPA',
            wgType: 'N',
            wgTitle: '차트 테스트',
            method: 'GET',
            jsonUrl: 'dummy'
        },
        {
            i: '2',
            x: 3,
            y: 0,
            w: 3,
            h: 2,
            minW: 3,
            minH: 2,
            maxH: 6,
            wgGb: 'CA',
            wgType: 'N',
            wgTitle: '데이터 센터 차트',
            method: 'GET',
            option1: 'date',
            option2: 'powerOn, powerOff',
            option3: '',
            option4: '#323232, #464646',
            jsonUrl: '/api/clouds/vmware/datacenter/metric?cloudId=ce5a00e2-f4a3-4c3e-bed7-f8f8e56341f4&id=Datacenter&metricNames=Number1,Number2&hour=1',
            respObjNm: 'data'
        },
        {
            i: '3',
            x: 6,
            y: 0,
            w: 3,
            h: 2,
            minW: 3,
            minH: 2,
            maxH: 6,
            wgGb: 'CA',
            wgType: 'N',
            wgTitle: '클러스터 차트',
            method: 'GET',
            option1: 'date',
            option2: 'cpuUsage, cpuMhz, memoryUsage',
            option3: '',
            option4: '#323232, #464646',
            jsonUrl: '/api/clouds/vmware/cluster/metric?cloudId=a68bc3ea-195b-4faa-b6c8-a9d251d21e17&id=ING-DC:ING-MGMT:ing-esxi01.ing.lab&metricNames=CPU1,CPU2,Memory1&hour=1',
            respObjNm: 'data'
        },
        {
            i: '4',
            x: 9,
            y: 0,
            w: 3,
            h: 2,
            minW: 3,
            minH: 2,
            maxH: 6,
            wgGb: 'CA',
            wgType: 'N',
            wgTitle: '가상머신 차트',
            method: 'GET',
            option1: 'date',
            option2: 'cpuUsage, cpuMhz, cpuReady',
            option3: '',
            option4: '#323232, #464646',
            jsonUrl: '/api/clouds/vmware/vm/metric?cloudId=a68bc3ea-195b-4faa-b6c8-a9d251d21e17&id=cda45465-dcf7-4566-8bcc-f955b890c965:52f2de7a-dda8-3f4e-70ec-f9b7d40e0b92&metricNames=CPU1,CPU2,CPU3&hour=1',
            respObjNm: 'data'
        },
        {
            i: '5',
            x: 0,
            y: 2,
            w: 6,
            h: 2,
            minW: 3,
            minH: 2,
            maxH: 6,
            wgGb: 'CT',
            wgType: 'N',
            wgTitle: '토폴로지 테스트',
            method: 'GET',
            jsonUrl: 'dummy'
        },
        {
            i: '6',
            x: 6,
            y: 2,
            w: 6,
            h: 2,
            minW: 3,
            minH: 2,
            maxH: 6,
            wgGb: 'CS',
            wgType: 'N',
            wgTitle: 'Scatter 테스트',
            method: 'GET',
            jsonUrl: 'dummy'
        },
        {
            i: '7',
            x: 0,
            y: 4,
            w: 12,
            h: 2,
            minW: 3,
            minH: 2,
            maxH: 6,
            wgGb: 'CR',
            wgType: 'N',
            wgTitle: 'Raidal 테스트',
            method: 'GET',
            jsonUrl: 'dummy'
        },
    ];
};

export const getPrivateLayouts: any = (username: string) => {
    return [
        [
            {
                i: '1',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                static: true,
                wgGb: 'B',
                wgType: 'N',
                wgTitle: '보드 테스트',
                method: 'GET',
                jsonUrl: 'dummy'
            },
            {
                i: '2',
                x: 3,
                y: 0,
                w: 3,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                wgGb: 'CPA',
                wgType: 'N',
                wgTitle: '차트 테스트',
                method: 'GET',
                jsonUrl: 'dummy'
            },
            {
                i: '3',
                x: 6,
                y: 0,
                w: 3,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                wgGb: 'OT',
                wgType: 'N',
                wgTitle: '타임라인 테스트',
                method: 'GET',
                jsonUrl: 'dummy',
            },
            {
                i: '4',
                x: 9,
                y: 0,
                w: 3,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                wgGb: 'CA',
                wgType: 'N',
                wgTitle: '가상머신 차트',
                method: 'GET',
                option1: 'date',
                option2: 'cpuUsage, cpuMhz, cpuReady',
                option3: '',
                option4: '#323232, #464646',
                jsonUrl: '/api/clouds/vmware/vm/metric?cloudId=a68bc3ea-195b-4faa-b6c8-a9d251d21e17&id=cda45465-dcf7-4566-8bcc-f955b890c965:52f2de7a-dda8-3f4e-70ec-f9b7d40e0b92&metricNames=CPU1,CPU2,CPU3&hour=1',
                respObjNm: 'data'
            },
            {
                i: '5',
                x: 0,
                y: 2,
                w: 3,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                wgGb: 'CT',
                wgType: 'N',
                wgTitle: '토폴로지 테스트',
                method: 'GET',
                jsonUrl: 'dummy'
            },
            {
                i: '6',
                x: 3,
                y: 2,
                w: 3,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                wgGb: 'CP',
                wgType: 'N',
                wgTitle: 'PIE 차트',
                method: 'GET',
                jsonUrl: 'dummy',
            },
            {
                i: '7',
                x: 6,
                y: 2,
                w: 6,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                wgGb: 'CS',
                wgType: 'N',
                wgTitle: 'Scatter 테스트',
                method: 'GET',
                jsonUrl: 'dummy'
            },
            {
                i: '8',
                x: 0,
                y: 4,
                w: 12,
                h: 2,
                minW: 3,
                minH: 2,
                maxH: 6,
                wgGb: 'CR',
                wgType: 'N',
                wgTitle: 'Raidal 테스트',
                method: 'GET',
                jsonUrl: 'dummy'
            },
        ],
    ];
};

export const getLayouts: any = (wgId?: number, wgType?: string) => {
    const layouts = [
        {
            wgId: 1,
            wgGb: 'T',
            wgType: 'N',
            wgTitle: 'Text Title (default)',
            option1: 'DEFAULT Text',
        },
        {
            wgId: 2,
            wgGb: 'B',
            wgType: 'N',
            wgTitle: 'Board Title (default)',
            wgDefault: [
                {
                    "title": "테스트 입니다.1",
                    "date": "2020-01-01"
                },
                {
                    "title": "테스트 입니다.2",
                    "date": "2020-01-02"
                },
                {
                    "title": "테스트 입니다.3",
                    "date": "2020-01-03"
                },
                {
                    "title": "테스트 입니다.4",
                    "date": "2020-01-04"
                },
                {
                    "title": "테스트 입니다.5",
                    "date": "2020-01-05"
                },
            ],
        },
        {
            wgId: 3,
            wgGb: 'CA',
            wgType: 'N',
            wgTitle: '차트 테스트',
            option1: 'name',
            option2: 'pv, amt',
            wgDefault: [
                    {
                        name: 'Page A',
                        uv: 4000,
                        pv: 2400,
                        amt: 2400,
                    },
                    {
                        name: 'Page B',
                        uv: 3000,
                        pv: 1398,
                        amt: 2210,
                    },
                    {
                        name: 'Page C',
                        uv: 2000,
                        pv: 9800,
                        amt: 2290,
                    },
                    {
                        name: 'Page D',
                        uv: 2780,
                        pv: 3908,
                        amt: 2000,
                    },
                    {
                        name: 'Page E',
                        uv: 1890,
                        pv: 4800,
                        amt: 2181,
                    },
                    {
                        name: 'Page F',
                        uv: 2390,
                        pv: 3800,
                        amt: 2500,
                    },
                    {
                        name: 'Page G',
                        uv: 3490,
                        pv: 4300,
                        amt: 2100,
                    },
                ],
        },
        {
            wgId: 4,
            wgGb: 'CP',
            wgType: 'N',
            wgTitle: 'Pie Title (Default)',
            wgDefault: [
                {
                    "key": "Phishing Attack",
                    "data": 10
                  },
                  {
                    "key": "IDS",
                    "data": 14
                  },
                  {
                    "key": "Malware",
                    "data": 5
                  },
                  {
                    "key": "DLP",
                    "data": 18
                  }
            ]
        },
        {
            wgId: 5,
            wgGb: 'CPA',
            wgType: 'N',
            wgTitle: 'Pie Title (Default)',
            wgDefault: [
                { name: 'Group A', value: 400 },
                { name: 'Group B', value: 300 },
                { name: 'Group C', value: 300 },
                { name: 'Group D', value: 200 },
            ]
        },
        {
            wgId: 6,
            wgGb: 'CR',
            wgType: 'N',
            wgTitle: 'Radial Title (Default)',
            wgDefault: [
                {
                    "key": "Phishing Attack",
                    "data": 10
                },
                {
                    "key": "IDS",
                    "data": 14
                },
                {
                    "key": "Malware",
                    "data": 5
                },
                {
                    "key": "DLP",
                    "data": 18
                }
            ]
        },
        {
            wgId: 7,
            wgGb: 'CS',
            wgType: 'N',
            wgTitle: 'Scatter Title (Default)',
            wgDefault: [
                {
                    id: '5',
                    key: new Date('2020-02-27T08:00:00.000Z'),
                    data: 19
                },
                {
                    id: '4',
                    key: new Date('2020-02-28T08:00:00.000Z'),
                    data: 17
                },
                {
                    id: '3',
                    key: new Date('2020-02-29T08:00:00.000Z'),
                    data: 25
                },
                {
                    id: '2',
                    key: new Date('2020-03-01T08:00:00.000Z'),
                    data: 45
                },
                {
                    id: '1',
                    key: new Date('2020-03-02T08:00:00.000Z'),
                    data: 25
                }
            ]
        },
        {
            wgId: 8,
            wgGb: 'CT',
            wgType: 'N',
            wgTitle: 'Topology Title (Default)',
            wgDefault: {
                nodes: [
                    { id: 1, label: 'Server', shape: 'image', imageGb: 'server' },
                    { id: 2, label: 'Storage', shape: 'image', imageGb: 'storage' },
                    { id: 3, label: 'Backup', shape: 'image', imageGb: 'backup' },
                    { id: 4, label: 'Software', shape: 'image', imageGb: 'software' },
                    { id: 5, label: 'Database', shape: 'image', imageGb: 'database' }
                ],
                edges: [
                    { from: 1, to: 2 },
                    { from: 1, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 }
                ]
            }
        },
        {
            wgId: 9,
            wgGb: 'OT',
            wgType: 'N',
            wgTitle: 'Timeline Title (Default)',
            wgDefault: [
                {
                    variant: 'outlined',
                    type: 'ctimeline2',
                    icon: 'Android',
                    content: '정상 시작',
                    revert: {
                        title: '08:00',
                    },
                },
                {
                    variant: 'outlined',
                    content: '장애 예측',
                    revert: {
                        title: '09:00',
                    },
                },
                {
                    icon: 'Apple',
                    type: 'ctimeline4',
                    variant: 'outlined',
                    content: '장애 발생',
                    revert: {
                        title: '09:30',
                    },
                },
                {
                    icon: 'Done',
                    type: 'ctimeline1',
                    variant: 'outlined',
                    content: '정상 복구되었습니다.',
                    revert: {
                        title: '12:00',
                    },
                },
            ]
        },
    ];

    if (wgId) {
        return layouts.filter((f: any) => f.wgId === wgId)[0];
    } else if (wgType) {
        return layouts.filter((f: any) => f.wgType === wgType);
    } else {
        return layouts;
    }
};

// 대시보드 데이터 가져오기
export const getDashboardResources: any = async () => {
    return axiosUtils
        .get(`/api/dashboard/resources`)
        .then((res) => {
            return res.data;
        })
        .catch((e) => e);
};

// 프라이빗 COST 가져오기
export const getPrivateCost: any = async (type: string, id: string) => {
    return axiosUtils
        .get(`/api/dashboard/getCost?cloud=${type}&credentialId=${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((e) => e);
};

// API 환율 정보
export const getExchange: any = async () => {
    return axios.get(`https://earthquake.kr:23490/query/KRWUSD`).then((res) => {
        return res.data.KRWUSD;
    });
};
