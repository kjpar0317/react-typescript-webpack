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
        ],
    ];
};

export const getLayouts: any = (wgId?: string, wgType?: string) => {
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
            wgId: 3,
            wgGb: 'I',
            wgType: 'N',
            wgTitle: 'Image Title (Default)',
            pageUrl: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F1%2F9%2F7%2F1%2F1481791-4-eng-GB%2Farchitecture-camera-city-827209+%281%29.jpg%3Fv1?width=700&source=ftadviser',
            option1: 'Default Text',
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
