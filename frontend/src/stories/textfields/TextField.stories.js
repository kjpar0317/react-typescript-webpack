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

import markdown from './textfields.md';

const store = createStore();

const actions = {
    onChange: action('onChange'),
    onKeyPress: action('onKeyPress'),
};

storiesOf('TextField 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <Router>
                <Route path="/" component={() => story()} />
            </Router>
        </Provider>
    ))
    .add(
        '공통 입력필드',
        () => {
            const [value, setValue] = useState('');
            return (
                <CTextField
                    id="create-text"
                    type={select(
                        '텍스트 타입',
                        {
                            없음: undefined,
                            text: 'text',
                            number: 'number',
                            password: 'password',
                            date: 'date',
                            hidden: 'hidden',
                        },
                        undefined,
                    )}
                    defaultValue={text('디폴트 값', '')}
                    label={text('라벨', 'test')}
                    variant={select(
                        '텍스트 모양',
                        {
                            없음: undefined,
                            standard: 'standard',
                            filled: 'filled',
                            outlined: 'outlined',
                        },
                        undefined,
                    )}
                    margin={select(
                        '텍스트 margin',
                        {
                            없음: undefined,
                            dense: 'dense',
                            none: 'none',
                            normal: 'normal',
                        },
                        undefined,
                    )}
                    required={select(
                        '필수값',
                        { true: true, false: false },
                        false,
                    )}
                    {...actions}
                ></CTextField>
            );
        },
        { notes: { 메뉴얼: markdown } },
    )
    .addDecorator(withKnobs);
