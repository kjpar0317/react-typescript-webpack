import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import markdown from './login.md';
// import { Welcome } from '@storybook/react/demo';

import { LeftLoginForm, RightLoginForm } from '../../components/login';
import '../../components/login/styles.scss';

// export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

storiesOf('로그인 컴포넌트', module)
    .addDecorator((story) => (
        <Router>
            <Route path="/" component={() => story()} />
        </Router>
    ))
    .add('왼쪽 폼', () => <LeftLoginForm />)
    .add('오른쪽 폼', () => <RightLoginForm setUsername={action('admin')} setPassword={action('admin')} handleSubmit={action('')} />, { notes: { '메뉴얼': markdown } },)
    .addDecorator(withKnobs);
