import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, select, text } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import {
    CButton,
    CIconButton,
    CButtonGroup,
    CSplitButton,
} from '@/components/buttons';

import markdown from './buttons.md';

const store = createStore();

const actions = {
    onClick: action('onClick'),
};

const groupItems = [
    {
        name: 'test1',
        onClick: function (e) {
            console.log(e);
        },
    },
    {
        name: 'test2',
        onClick: function (e) {
            console.log(e);
        },
    },
];

const groupItems2 = [
    {
        name: 'test1',
    },
    {
        name: 'test2',
    },
];

storiesOf('Button 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={createMuiTheme(customTheme)}>
                    <Route path="/" component={() => story()} />
                </ThemeProvider>
            </Router>
        </Provider>
    ))
    .add(
        '일반 버튼',
        () => (
            <CButton
                type={select(
                    '버튼 색깔',
                    {
                        없음: undefined,
                        btn1: 'btn1',
                        btn2: 'btn2',
                        btn3: 'btn3',
                        btn4: 'btn4',
                    },
                    undefined,
                )}
                variant={select(
                    '버튼 스타일',
                    {
                        없음: undefined,
                        contained: 'contained',
                        outlined: 'outlined',
                    },
                    undefined,
                )}
                size={select(
                    '버튼 크기',
                    {
                        없음: undefined,
                        small: 'small',
                        medium: 'medium',
                        large: 'large',
                    },
                    undefined,
                )}
                sicon={text('앞버튼 아이콘', '')}
                eicon={text('뒤버튼 아이콘', '')}
                style={object('css', { width: '150px' })}
                {...actions}
            >
                {object('버튼텍스트', '테스트 버튼')}
            </CButton>
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        '아이콘 버튼',
        () => (
            <CIconButton
                icon={text('아이콘 모양', 'Alarm')}
                type={select(
                    '버튼 색깔',
                    {
                        없음: undefined,
                        btn1: 'btn1',
                        btn2: 'btn2',
                        btn3: 'btn3',
                        btn4: 'btn4',
                    },
                    undefined,
                )}
                size={select(
                    '버튼 크기',
                    { 없음: undefined, small: 'small', medium: 'medium' },
                    undefined,
                )}
                edge={select(
                    '버튼 위치',
                    { 없음: undefined, start: 'start', end: 'end' },
                    undefined,
                )}
                disabled={select(
                    'disabled',
                    {
                        없음: undefined,
                        true: true,
                        false: false,
                    },
                    undefined,
                )}
                tooltip={text('툴팁', '')}
                style={object('css', {})}
                {...actions}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        '아이콘 그룹 버튼',
        () => (
            <CButtonGroup
                type={select(
                    '버튼 색깔 스타일',
                    {
                        없음: undefined,
                        btn1: 'btn1',
                        btn2: 'btn2',
                        btn3: 'btn3',
                        btn4: 'btn4',
                    },
                    undefined,
                )}
                variant={select(
                    '버튼 모양 스타일',
                    {
                        없음: undefined,
                        contained: 'contained',
                        outlined: 'outlined',
                    },
                    undefined,
                )}
                size={select(
                    '버튼 크기',
                    {
                        없음: '',
                        small: 'small',
                        medium: 'medium',
                        large: 'large',
                    },
                    undefined,
                )}
                items={object('버튼 items', groupItems)}
                style={object('css', {})}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .add(
        '아이콘 Split 버튼',
        () => (
            <CSplitButton
                type={select(
                    '버튼 색깔 스타일',
                    {
                        없음: undefined,
                        btn1: 'btn1',
                        btn2: 'btn2',
                        btn3: 'btn3',
                        btn4: 'btn4',
                    },
                    undefined,
                )}
                variant={select(
                    '버튼 모양 스타일',
                    {
                        없음: undefined,
                        contained: 'contained',
                        outlined: 'outlined',
                    },
                    undefined,
                )}
                size={select(
                    '버튼 크기',
                    {
                        없음: undefined,
                        small: 'small',
                        medium: 'medium',
                        large: 'large',
                    },
                    undefined,
                )}
                items={object('버튼 items', groupItems)}
                style={object('css', {})}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .addDecorator(withKnobs);
