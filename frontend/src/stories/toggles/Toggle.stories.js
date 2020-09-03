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
import { CToggleGroup } from '@/components/toggles';

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

storiesOf('Toggle 컴포넌트', module)
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
    .add('Toggle 그룹', () => (
        <CToggleGroup
            id="test-toggle"
            items={object('options', [
                { id: 'test1', name: '테스트1', icon: 'PlayArrow' },
                { id: 'test2', name: '테스트2', icon: 'Stop' },
            ])}
            size={select(
                '버튼 크기',
                { 없음: '', small: 'small', medium: 'medium', large: 'large' },
                '',
            )}
            orientation={select(
                '방향',
                {
                    없음: '',
                    horizontal: 'horizontal',
                    vertical: 'vertical',
                },
                '',
            )}
            {...actions}
        />
    ))

    .addDecorator(withKnobs);
