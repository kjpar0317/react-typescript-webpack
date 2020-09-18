import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, number, select } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CStepper } from '@/components/steppers';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

storiesOf('Stepper 컴포넌트', module)
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
    .add('Stepper 기본', () => (
        <CStepper
            type={select(
                'stepper 스타일',
                {
                    없음: undefined,
                    cstepper1: 'cstepper1',
                    cstepper2: 'cstepper2',
                    cstepper3: 'cstepper3',
                    cstepper4: 'cstepper4',
                },
                undefined,
            )}
            items={object('stepper items', ['Step1', 'Step2', 'Step3'])}
            defaultStep={number('Default Step', 0)}
            orientation={select(
                '방향',
                {
                    없음: undefined,
                    horizontal: 'horizontal',
                    vertical: 'vertical',
                },
                undefined,
            )}
        />
    ))
    .addDecorator(withKnobs);
