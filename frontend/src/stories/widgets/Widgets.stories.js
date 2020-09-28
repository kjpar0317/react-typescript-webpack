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
    AreaChartWidget,
} from '@/components/widgets';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

const imagedata = {
    title: '해가 지는 동안 산들.여름의 아름다운 자연 풍경',
    image:
        'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg',
    text: '좋네',
};
const textdata = { title: '테스트7', text: 'Wow. Failed!!' };

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
    .add('텍스트 위젯', () => <TextWidget data={object('내용', textdata)} />)
    .add('이미지 위젯', () => <ImageWidget data={object('내용', imagedata)} />)
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
