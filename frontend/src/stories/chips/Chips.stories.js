import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CChips } from '@/components/chips';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

import markdown from './chips.md';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

const actions = {
    onClick: action('onClick'),
    onDelete: action('onDelete'),
};

storiesOf('Chips 컴포넌트', module)
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
        'Chips 기본',
        () => (
            <CChips
                items={object('chips items', [
                    { id: '1', label: '테스트' },
                    { id: '2', label: '테스트2', type: 'cchips1' },
                    {
                        id: '3',
                        label: '테스트3',
                        type: 'cchips1',
                        variant: 'outlined',
                    },
                    {
                        id: '4',
                        label: '테스트4',
                        type: 'cchips1',
                        disabled: true,
                    },
                    {
                        id: '5',
                        label: '테스트5',
                        type: 'cchips2',
                        clickable: true,
                    },
                    {
                        id: '6',
                        label: '테스트6',
                        type: 'cchips2',
                        icon: 'Done',
                        deleteable: true,
                    },
                    {
                        id: '7',
                        label: '테스트7',
                        type: 'cchips2',
                        size: 'small',
                        deleteable: true,
                    },
                    {
                        id: '8',
                        label: '테스트8',
                        type: 'cchips4',
                        image: 'https://sharryhong.github.io/image/tomcat.png',
                        deleteable: true,
                    },
                    {
                        id: '9',
                        label: '테스트9',
                        type: 'cchips3',
                        image:
                            'https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/VMware-icon.png',
                        action: 'done',
                        deleteable: true,
                    },
                ])}
                {...actions}
            />
        ),
        { notes: { 메뉴얼: markdown } },
    )
    .addDecorator(withKnobs);
