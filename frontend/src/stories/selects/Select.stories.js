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
import { CSelect } from '@/components/selects';

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

storiesOf('Select 컴포넌트', module)
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
    .add('Select 박스', () => (
        <CSelect
            id="test-select"
            title={text('타이틀', '테스트 타이틀')}
            // variant={select(
            //     'Select 모양 스타일',
            //     {
            //         없음: '',
            //         filled: 'filled',
            //         outlined: 'outlined',
            //         standard: 'standard',
            //     },
            //     '',
            // )}
            items={object('options', [
                { label: '테스트1', value: '1' },
                { label: '테스트2', value: '2' },
            ])}
            emptyOptObj={object('empty option', { label: '미할당', value: '' })}
            defaultValue={text('초기값', '')}
            style={object('CSS', { width: '200px' })}
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
