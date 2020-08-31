import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    select,
    optionsKnob as options,
    text,
} from '@storybook/addon-knobs';

import createStore from '@/store';
import { CTextField } from '@/components/textfields';

const store = createStore();

const actions = {
    onChange: action('onChange'),
};

storiesOf('TextField 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <Router>
                <Route path="/" component={() => story()} />
            </Router>
        </Provider>
    ))
    .add('공통 입력필드', () => {
        const [value, setValue] = useState('');
        return (
            <CTextField
                id="create-text"
                value={value}
                label={text('라벨', 'test')}
                variant={select(
                    '텍스트 모양 스타일',
                    {
                        standard: 'standard',
                        filled: 'filled',
                        outlined: 'outlined',
                    },
                    'standard',
                )}
                required={select('필수값', { true: true, false: false }, false)}
                {...actions}
            ></CTextField>
        );
    })
    .addDecorator(withKnobs);
