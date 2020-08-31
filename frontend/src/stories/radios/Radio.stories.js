import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, object } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CRadioGroup } from '@/components/radios';

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

storiesOf('Radio 컴포넌트', module)
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
    .add('Radio 그룹', () => (
        <CRadioGroup
            id="test-radio"
            title={text('타이틀', '테스트 타이틀')}
            type={select(
                '탭 외곽 스타일',
                {
                    없음: '',
                    cradio1: 'cradio1',
                    cradio2: 'cradio2',
                    cradio3: 'cradio3',
                    cradio4: 'cradio4',
                },
                '',
            )}
            row={select(
                '방향',
                {
                    없음: '',
                    horizontal: true,
                    vertical: false,
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
            items={object('radio', [
                { label: '테스트1', value: '1' },
                { label: '테스트2', value: '2' },
            ])}
            defaultValue={text('초기값', '')}
            fullWidth={select(
                'fullWidth',
                {
                    없음: '',
                    true: true,
                    false: false,
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
