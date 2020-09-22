import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CBorderLinear, CCircularWithLabel } from '@/components/progresses';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

import markdown from './progresses.md';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

storiesOf('Progress 컴포넌트', module)
    .addDecorator((story) => (
        <IntlProvider locale="ko" messages={messages['ko']}>
            <Provider store={store}>
                <Router>
                    <ThemeProvider theme={createMuiTheme(customTheme)}>
                        <Route path="/" component={() => story()} />
                    </ThemeProvider>
                </Router>
            </Provider>
        </IntlProvider>
    ))
    .add(
        'BorderLinearProgress',
        () => (
            <CBorderLinear
                type={select(
                    'progress 색상',
                    {
                        없음: undefined,
                        cprogress1: 'cprogress1',
                        cprogress2: 'cprogress2',
                        cprogress3: 'cprogress3',
                        cprogress4: 'cprogress4',
                    },
                    undefined,
                )}
                value={number('진행률', 30)}
                variant={select(
                    'progress 스타일',
                    {
                        없음: undefined,
                        buffer: 'buffer',
                        determinate: 'determinate',
                        indeterminate: 'indeterminate',
                        query: 'query',
                    },
                    undefined,
                )}
                height={number('높이', 10)}
                borderRadius={number('테두리 반지름', 5)}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        'CircularWithLabel',
        () => (
            <CCircularWithLabel
                type={select(
                    'progress 색상',
                    {
                        없음: undefined,
                        cprogress1: 'cprogress1',
                        cprogress2: 'cprogress2',
                        cprogress3: 'cprogress3',
                        cprogress4: 'cprogress4',
                    },
                    undefined,
                )}
                variant={select(
                    'progress 스타일',
                    {
                        없음: undefined,
                        determinate: 'determinate',
                        indeterminate: 'indeterminate',
                        static: 'static',
                    },
                    undefined,
                )}
                value={text('라벨', 30)}
                size={number('크기', 50)}
                thickness={number('굵기', 3.6)}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .addDecorator(withKnobs);
