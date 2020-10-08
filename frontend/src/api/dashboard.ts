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
            wgType: 'T',
            wgTitle: '고정 위젯 테스트',
            wgItem: {
                text:
                    'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            },
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
            wgType: 'CA',
            wgTitle: '차트 테스트',
            wgItem: {
                xPvt: 'name',
                yPvts: ['pv', 'amt'],
                data: [
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
            wgType: 'T',
            wgTitle: '테스트3',
            wgItem: {
                text: '한글 테스트',
                subtext: '마지막 업데이트: 2020-01-01 13:45:44',
            },
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
            wgType: 'T',
            wgTitle: '테스트4',
            wgItem: {
                text:
                    'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
                subtext: '마지막 업데이트: 2020-02-01 13:45:44',
            },
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
            wgType: 'I',
            wgTitle: '테스트5',
            wgItem: {
                title: '멋진 도시 풍경',
                image:
                    'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F1%2F9%2F7%2F1%2F1481791-4-eng-GB%2Farchitecture-camera-city-827209+%281%29.jpg%3Fv1?width=700&source=ftadviser',
                text:
                    'For advisers, the turbulent economic waters of recent years have been difficult to navigate – Brexit uncertainty, trade wars and monetary policy all continue to add pressure.',
            },
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
            wgType: 'I',
            wgTitle: '테스트6',
            wgItem: {
                title: '해가 지는 동안 산들.여름의 아름다운 자연 풍경',
                image:
                    'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg',
                text: '좋네',
            },
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
            wgType: 'T',
            wgTitle: '테스트7',
            wgItem: 'Wow. Failed!!',
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
                wgId: 1,
                wgType: 'T',
                wgTitle: '고정 위젯 테스트',
                wgItem: {
                    text:
                        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
                },
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
                wgId: 2,
                wgType: 'CA',
                wgTitle: '차트 테스트',
                wgItem: {
                    xPvt: 'name',
                    yPvts: ['pv', 'amt'],
                    data: [
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
                wgId: 1,
                wgType: 'T',
                wgTitle: '테스트3',
                wgItem: {
                    text: '한글 테스트',
                    subtext: '마지막 업데이트: 2020-01-01 13:45:44',
                },
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
                wgId: 1,
                wgType: 'T',
                wgTitle: '테스트4',
                wgItem: {
                    text:
                        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
                    subtext: '마지막 업데이트: 2020-02-01 13:45:44',
                },
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
                wgId: 3,
                wgType: 'I',
                wgTitle: '테스트5',
                wgItem: {
                    image:
                        'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F1%2F9%2F7%2F1%2F1481791-4-eng-GB%2Farchitecture-camera-city-827209+%281%29.jpg%3Fv1?width=700&source=ftadviser',
                    text:
                        'For advisers, the turbulent economic waters of recent years have been difficult to navigate – Brexit uncertainty, trade wars and monetary policy all continue to add pressure.',
                },
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
                wgId: 3,
                wgType: 'I',
                wgTitle: '테스트6',
                wgItem: {
                    image:
                        'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg',
                    text: '좋네',
                },
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
                wgId: 1,
                wgType: 'T',
                wgTitle: '테스트7',
                wgItem: {
                    text: 'Wow. Failed!!',
                    subtext: '마지막 업데이트: 2020-02-01 13:45:44',
                },
            },
        ],
    ];
};

export const getLayouts: any = (wgId?: string, wgType?: string) => {
    const layouts = [
        {
            wgId: 1,
            wgType: 'T',
            wgTitle: 'Text Title (default)',
            wgItem: {
                text: 'DEFAULT Text',
            },
        },
        {
            wgId: 2,
            wgType: 'CA',
            wgTitle: '차트 테스트',
            wgItem: {
                xPvt: 'name',
                yPvts: ['pv', 'amt'],
                data: [
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
        },
        {
            wgId: 3,
            wgType: 'I',
            wgTitle: 'Image Title (Default)',
            wgItem: {
                image:
                    'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F1%2F9%2F7%2F1%2F1481791-4-eng-GB%2Farchitecture-camera-city-827209+%281%29.jpg%3Fv1?width=700&source=ftadviser',
                text: 'Default Text',
            },
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
