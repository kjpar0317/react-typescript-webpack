import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, select, text } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CDialog, CDialogTitle, CDialogAction } from '@/components/dialogs';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

const actions = {
    onCreate: action('onCreate'),
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    onClose: action('onClose'),
    onClick: action('onClick'),
};

storiesOf('Dialog 컴포넌트', module)
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
    .add('Dialog 전체', () => (
        <CDialog
            id="create-dialog"
            title={text('title', '테스트 타이틀')}
            modules={object('버튼 사용 모듈들', ['create', 'close'])}
            variant={select(
                '버튼 모양 스타일',
                { contained: 'contained', outlined: 'outlined' },
                'contained',
            )}
            validated={select(
                'validated',
                {
                    없음: '',
                    true: true,
                    false: false,
                },
                '없음',
            )}
            open={true}
            fullWidth={true}
            maxWidth={select(
                '다이얼로그 크기',
                {
                    없음: '',
                    xs: 'xs',
                    sm: 'sm',
                    md: 'md',
                    lg: 'lg',
                    xl: 'xl',
                },
                '',
            )}
            {...actions}
        >
            {text('내용', '테스트 내용')}
        </CDialog>
    ))
    .add('Dialog 타이틀', () => (
        <CDialogTitle id="create-dialog" {...actions}>
            {text('제목', '테스트')}
        </CDialogTitle>
    ))
    .add('Dialog 액션', () => (
        <CDialogAction
            modules={object('버튼 사용 모듈들', ['create', 'close'])}
            variant={select(
                '버튼 모양 스타일',
                { contained: 'contained', outlined: 'outlined' },
                'contained',
            )}
            validated={select(
                'validated',
                {
                    없음: '',
                    true: true,
                    false: false,
                },
                '없음',
            )}
            {...actions}
        />
    ))
    .addDecorator(withKnobs);
