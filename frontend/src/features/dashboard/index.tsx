import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { COMMON } from '@/features/commonSlice';

import { ReactGridLayouts } from '@/components/grids';
import { DropTarget } from 'react-dnd';

let layouts = [
    { i: '1', x: 0, y: 0, w: 3, h: 2, minW: 3, minH: 2, maxH: 6, static: true },
    { i: '2', x: 3, y: 0, w: 3, h: 2, minW: 3, minH: 2, maxH: 6 },
    { i: '3', x: 6, y: 0, w: 3, h: 2, minW: 3, minH: 2, maxH: 6 },
    { i: '4', x: 9, y: 0, w: 3, h: 2, minW: 3, minH: 2, maxH: 6 },
    { i: '5', x: 0, y: 2, w: 6, h: 2, minW: 3, minH: 2, maxH: 6 },
    { i: '6', x: 6, y: 2, w: 6, h: 2, minW: 3, minH: 2, maxH: 6 },
    { i: '7', x: 0, y: 4, w: 12, h: 2, minW: 3, minH: 2, maxH: 6 },
];

const items = [
    {
        i: '1',
        wid: '1',
        type: 'text',
        data: {
            title: '고정 위젯 테스트',
            text:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
    },
    {
        i: '2',
        wid: '3',
        type: 'areachart',
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
    {
        i: '3',
        wid: '1',
        type: 'text',
        data: {
            title: '테스트3',
            text: '한글 테스트',
        },
    },
    {
        i: '4',
        wid: '1',
        type: 'text',
        data: {
            title: '테스트4',
            text:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
    },
    {
        i: '5',
        wid: '2',
        type: 'image',
        data: {
            title: '테스트5',
            image:
                'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffta-ez-prod%2Fez%2Fimages%2F1%2F9%2F7%2F1%2F1481791-4-eng-GB%2Farchitecture-camera-city-827209+%281%29.jpg%3Fv1?width=700&source=ftadviser',
            text:
                'For advisers, the turbulent economic waters of recent years have been difficult to navigate – Brexit uncertainty, trade wars and monetary policy all continue to add pressure.',
        },
    },
    {
        i: '6',
        wid: '2',
        type: 'image',
        data: {
            title: '해가 지는 동안 산들.여름의 아름다운 자연 풍경',
            image:
                'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg',
            text: '좋네',
        },
    },
    {
        i: '7',
        wid: '1',
        type: 'text',
        data: { title: '테스트7', text: 'Wow. Failed!!' },
    },
];

const useStyles = makeStyles(() =>
    createStyles({
        dashboard: {
            display: 'flex',
            flexDirection: 'column',
            margin: '10px 10px 10px 10px',
        },
    }),
);

const TestDashboardFeatures: React.FC<{}> = () => {
    const classes = useStyles();
    const { customSidebar, windowSize } = useSelector((state) => {
        return state[COMMON];
    });
    const [mounted, setMounted] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (customSidebar) {
            setWidth(windowSize.width - 290);
        } else {
            setWidth(windowSize.width - 70);
        }
    }, [customSidebar]);

    return (
        <div className={classes.dashboard}>
            <ReactGridLayouts
                layouts={layouts}
                items={items}
                width={width}
                mounted={mounted}
            />
        </div>
    );
};

export default withRouter(TestDashboardFeatures);
