import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, object, text, select } from '@storybook/addon-knobs';

import createStore from '@/store';
import { IntlProvider } from 'react-intl';
import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

import {
    TextWidget,
    ImageWidget,
    CloudWidget,
    CloudFeeWidget,
    AreaChartWidget,
} from '@/components/widgets';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

const imagedata = {
    image:
        'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg',
    text: '좋네',
};

const cloudData = {
    all: {
        title: '퍼블릭 클라우드',
        color: '#037bfc',
        data: [
            { name: '실행', value: 0 },
            { name: '중지', value: 1 },
            { name: '기타', value: 1 },
        ],
    },
    items: [
        {
            title: 'AWS EC2',
            lastUpdatedAt: '2020-01-01 11:22:33',
            data: [
                { name: '실행', value: 0 },
                { name: '중지', value: 0 },
                { name: '기타', value: 1 },
            ],
        },
        {
            title: 'AZURE',
            lastUpdatedAt: '2020-02-01 11:22:33',
            data: [
                { name: '실행', value: 2 },
                { name: '중지', value: 0 },
                { name: '기타', value: 1 },
            ],
        },
    ],
};

const cloudFeeData = {
    info: {
        title: '퍼블릭 클라우드 요금',
        color: '#037bfc',
    },
    items: [
        {
            title: 'AWS EC2',
            lastUpdatedAt: '2020-01-01 11:22:33',
            data: [
                {
                    name: '이번달',
                    complete: 100,
                    inprogress: 80,
                },
                {
                    name: '저번달',
                    complete: 100,
                    inprogress: 100,
                },
            ],
        },
        {
            title: 'AZURE',
            lastUpdatedAt: '2020-02-01 11:22:33',
            data: [
                {
                    name: '이번달',
                    complete: 100,
                    inprogress: 5,
                },
                {
                    name: '저번달',
                    complete: 100,
                    inprogress: 50,
                },
            ],
        },
    ],
};

const chartData = [
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
];

storiesOf('Widgets 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <IntlProvider locale="ko" messages={messages['ko']}>
                <Router>
                    <Route path="/" component={() => story()} />
                </Router>
            </IntlProvider>
        </Provider>
    ))
    .add('텍스트 위젯', () => (
        <TextWidget
            title={text('텍스트 제목', '글짜 테스트')}
            text={text(
                '텍스트 내용',
                'For advisers, the turbulent economic waters of recent years have been difficult to navigate – Brexit uncertainty, trade wars and monetary policy all continue to add pressure.',
            )}
            subtext={text('서브 텍스트 내용', '')}
        />
    ))
    .add('이미지 위젯', () => (
        <ImageWidget
            title={text('이미지 제목', '이미지 테스트')}
            data={object('내용', imagedata)}
        />
    ))
    .add('클라우드 위젯', () => (
        <CloudWidget chartData={object('차트 object', cloudData)} />
    ))
    .add('클라우드 요금 위젯', () => (
        <CloudFeeWidget feeData={object('내용', cloudFeeData)} />
    ))
    .add('Area Chart 위젯', () => (
        <AreaChartWidget
            title={text('타이틀', '테스트')}
            data={chartData}
            xPvt={text('X축', 'name')}
            yPvts={object('Y축들', ['pv', 'amt'])}
            height={text('높이', '400px')}
            yRange={object('yAxis범위', [])}
            switchs={object('스위치 텍스트', [
                {
                    id: 'test1',
                    label: '테스트1',
                    checked: true,
                },
                {
                    id: 'test2',
                    label: '테스트2',
                    checked: true,
                },
            ])}
        />
    ))
    .addDecorator(withKnobs);
