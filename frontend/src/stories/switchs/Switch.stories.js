import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, object } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CSwitch } from '@/components/switchs';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

const actions = {
    onChange: action('onChange'),
};

storiesOf('Switch 컴포넌트', module)
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
    .add('Switch 일반', () => (
        <CSwitch
            label={text('타이틀', '테스트 라벨')}
            type={select(
                '버튼 색깔 스타일',
                {
                    cswitch1: 'cswitch1',
                    cswitch2: 'cswitch2',
                    cswitch3: 'cswitch3',
                    cswitch4: 'cswitch4',
                },
                'cswitch1',
            )}
            checked={select(
                'checked',
                {
                    없음: '',
                    true: true,
                    false: false,
                },
                '',
            )}
            labelPlacement={select(
                '텍스트 방향',
                {
                    없음: '',
                    bottom: 'bottom',
                    end: 'end',
                    start: 'start',
                    top: 'top',
                },
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
            {...actions}
        />
    ))

    .addDecorator(withKnobs);
