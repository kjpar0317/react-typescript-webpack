import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, select, text } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CButton, CIconButton } from '@/components/buttons';

const store = createStore();

const actions = {
    onClick: action('onClick'),
};

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
    .add('일반 버튼', () => (
        <CButton
            type={select(
                '버튼 색깔 스타일',
                { btn1: 'btn1', btn2: 'btn2', btn3: 'btn3', btn4: 'btn4' },
                'btn1',
            )}
            variant={select(
                '버튼 모양 스타일',
                { contained: 'contained', outlined: 'outlined' },
                'contained',
            )}
            size={select(
                '버튼 크기',
                { 없음: '', small: 'small', medium: 'medium', large: 'large' },
                '',
            )}
            sicon={text('앞버튼', '')}
            eicon={text('뒤버튼', '')}
            style={object('css', { width: '150px' })}
            {...actions}
        >
            {object('버튼텍스트', '테스트 버튼')}
        </CButton>
    ))
    .add('아이콘 버튼', () => (
        <CIconButton
            icon={text('아이콘 모양', 'Alarm')}
            type={select(
                '버튼 색깔 스타일',
                { btn1: 'btn1', btn2: 'btn2', btn3: 'btn3', btn4: 'btn4' },
                'btn1',
            )}
            size={select(
                '버튼 크기',
                { 없음: '', small: 'small', medium: 'medium' },
                '',
            )}
            edge={select(
                '버튼 위치',
                { 없음: '', start: 'start', end: 'end' },
                '',
            )}
            disabled={select(
                'disabled',
                {
                    없음: '',
                    true: true,
                    false: false,
                },
                '',
            )}
            tooltip={text('툴팁', '')}
            {...actions}
        />
    ))
    .addDecorator(withKnobs);
