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
import { CCheckbox } from '@/components/checkboxs';

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

storiesOf('Checkbox 컴포넌트', module)
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
    .add('Checkbox', () => (
        <CCheckbox
            id="test-checkbox"
            title={text('타이틀', '테스트 타이틀')}
            type={select(
                'checkbox 스타일',
                {
                    없음: '',
                    ccheck1: 'ccheck1',
                    ccheck2: 'ccheck2',
                    ccheck3: 'ccheck3',
                    ccheck4: 'ccheck4',
                },
                '',
            )}
            items={object('options', [
                { label: '테스트1', checked: true },
                { label: '테스트2', checked: false },
            ])}
            row={select(
                '방향',
                {
                    없음: '',
                    horizontal: true,
                    vertical: false,
                },
                '',
            )}
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
