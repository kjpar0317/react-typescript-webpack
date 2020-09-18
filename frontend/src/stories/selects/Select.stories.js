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
import {
    CSelect,
    CSelectWithImage,
    CSelectWithChip,
} from '@/components/selects';

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
                    없음: undefined,
                    true: true,
                    false: false,
                },
                undefined,
            )}
            {...actions}
        />
    ))
    .add('Select 이미지 박스', () => (
        <CSelectWithImage
            id="test-select"
            title={text('타이틀', '테스트 타이틀')}
            items={object('options', [
                {
                    label: '테스트1',
                    value: '1',
                    src: 'https://sharryhong.github.io/image/tomcat.png',
                },
                {
                    label: '테스트2',
                    value: '2',
                    src:
                        'https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/VMware-icon.png',
                },
            ])}
            variant={select(
                'Select 모양 스타일',
                {
                    없음: undefined,
                    filled: 'filled',
                    outlined: 'outlined',
                    standard: 'standard',
                },
                undefined,
            )}
            emptyOptObj={object('empty option', { label: '미할당', value: '' })}
            defaultValue={text('초기값', '')}
            style={object('CSS', { width: '200px' })}
            disabled={select(
                'disabled',
                {
                    없음: undefined,
                    true: true,
                    false: false,
                },
                undefined,
            )}
            {...actions}
        />
    ))
    .add('Select Chips(개발중)', () => (
        <CSelectWithChip
            id="test-select"
            title={text('타이틀', '테스트 타이틀')}
            items={object('options', [
                {
                    label: '테스트1',
                    value: '1',
                    src: 'https://sharryhong.github.io/image/tomcat.png',
                },
                {
                    label: '테스트2',
                    value: '2',
                    src:
                        'https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/VMware-icon.png',
                },
            ])}
            variant={select(
                'Select 모양 스타일',
                {
                    없음: undefined,
                    filled: 'filled',
                    outlined: 'outlined',
                    standard: 'standard',
                },
                undefined,
            )}
            emptyOptObj={object('empty option', { label: '미할당', value: '' })}
            defaultValue={text('초기값', '')}
            style={object('CSS', { width: '200px' })}
            disabled={select(
                'disabled',
                {
                    없음: undefined,
                    true: true,
                    false: false,
                },
                undefined,
            )}
            {...actions}
        />
    ))

    .addDecorator(withKnobs);
