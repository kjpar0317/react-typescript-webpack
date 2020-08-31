import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { SynchronizedAreaChart } from '@/components/charts/areaCharts';

const store = createStore();

const actions = {
    onClick: action('onClick'),
};

const data = [
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

storiesOf('Chart 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={createMuiTheme(customTheme)}>
                    <Route path="/" component={() => story()} />
                </ThemeProvider>
            </Router>
        </Provider>
    ))
    .add('SynchronizedAreaChart 차트', () => (
        <SynchronizedAreaChart
            data={object('차트 데이터', data)}
            xPvt={text('X축', 'name')}
            yPvt={text('Y축', 'pv')}
            height={text('높이', '400px')}
            strokeDasharray={text('차트 대시 모양', '0,12')}
            storkColor={text('stork color', '#82ca9d')}
            fillColor={text('fill color', '#82ca9d')}
            xRange={object('xAxis범위', [])}
            yRange={object('yAxis범위', [])}
        />
    ))
    .addDecorator(withKnobs);
