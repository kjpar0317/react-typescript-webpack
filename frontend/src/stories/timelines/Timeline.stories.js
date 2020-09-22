import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, number, select } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import {
    CAlternateTimeline,
    CLeftTimeline,
    CRightTimeline,
} from '@/components/timelines';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

import markdown from './timelines.md';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

storiesOf('Timeline 컴포넌트', module)
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
        'Timeline 기본',
        () => (
            <CAlternateTimeline
                items={object('timeline items', [
                    {
                        variant: 'outlined',
                        icon: 'Android',
                        title: '테스트 제목',
                        content: '테스트 내용',
                    },
                    {
                        variant: 'outlined',
                        title: '테스트 제목2',
                        content: '테스트 내용2',
                        revert: {
                            title: '09:00',
                            content: '반대 텍스트',
                        },
                    },
                    {
                        icon: 'Apple',
                        type: 'ctimeline2',
                        variant: 'outlined',
                        bline: true,
                        title: '테스트 제목2',
                        content: '테스트 내용2',
                    },
                    {
                        type: 'ctimeline1',
                        icon: 'Done',
                        content: '테스트 내용4',
                    },
                ])}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        'Timeline 왼쪽',
        () => (
            <CLeftTimeline
                items={object('timeline items', [
                    {
                        variant: 'outlined',
                        icon: 'Android',
                        title: '테스트 제목',
                        content: '테스트 내용',
                    },
                    {
                        variant: 'outlined',
                        icon: 'Apple',
                        title: '테스트 제목2',
                        content: '테스트 내용2',
                    },
                    {
                        icon: 'Backup',
                        type: 'ctimeline2',
                        variant: 'outlined',
                        bline: true,
                        title: '테스트 제목2',
                        content: '테스트 내용2',
                    },
                    {
                        type: 'ctimeline1',
                        icon: 'Done',
                        content: '테스트 내용4',
                    },
                ])}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        'Timeline 오른쪽',
        () => (
            <CRightTimeline
                items={object('timeline items', [
                    {
                        variant: 'outlined',
                        icon: 'Android',
                        title: '테스트 제목',
                        content: '테스트 내용',
                    },
                    {
                        variant: 'outlined',
                        icon: 'Apple',
                        title: '테스트 제목2',
                        content: '테스트 내용2',
                    },
                    {
                        icon: 'Backup',
                        type: 'ctimeline2',
                        variant: 'outlined',
                        bline: true,
                        title: '테스트 제목2',
                        content: '테스트 내용2',
                    },
                    {
                        type: 'ctimeline1',
                        icon: 'Done',
                        content: '테스트 내용4',
                    },
                ])}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .addDecorator(withKnobs);
