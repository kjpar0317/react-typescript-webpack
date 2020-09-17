import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, select } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CTree, CFileTree, CStyleTree } from '@/components/trees';

import locale_ko from '@/locale/ko.json';
import locale_en from '@/locale/en.json';

const store = createStore();

const messages = {
    ko: locale_ko,
    en: locale_en,
};

const actions = {
    onClick: action('onClick'),
    onChange: action('onChange'),
};

const treedata = [
    {
        id: '1',
        name: 'parent',
        isDirectory: true,
        expanded: true,
        children: [
            { id: '2', name: 'child1' },
            { id: '3', name: 'child2' },
        ],
    },
    {
        id: '4',
        name: 'parent',
        isDirectory: true,
        expanded: false,
        children: [
            {
                id: '5',
                name: 'nested parent',
                isDirectory: true,
                expanded: false,
                children: [
                    { id: '6', name: 'nested child 1' },
                    { id: '7', name: 'nested child 2' },
                ],
            },
        ],
    },
];

const treedata2 = [
    {
        id: '1',
        name: 'parent',
        children: [
            { id: '2', name: 'child1', icon: 'SupervisorAccount' },
            { id: '3', name: 'child2', icon: 'Info' },
        ],
    },
    {
        id: '4',
        name: 'parent',
        labelIcon: 'Mail',
        children: [
            {
                id: '5',
                name: 'nested parent',
                labelIcon: 'Label',
                labelInfo: '2,394',
                color: '#1a73e8',
                bgColor: '#e8f0fe',
                children: [
                    {
                        id: '6',
                        name: 'nested child 1',
                        icon: 'Forum',
                        labelInfo: '2,294',
                        color: '#e3742f',
                        bgColor: '#fcefe3',
                    },
                    {
                        id: '7',
                        name: 'nested child 2',
                        icon: 'LocalOffer',
                        labelInfo: '100',
                        color: '#a250f5',
                        bgColor: '#f3e8fd',
                    },
                ],
            },
        ],
    },
];

storiesOf('Tree 컴포넌트', module)
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
    .add('Tree 기본', () => (
        <div style={{ height: '500px' }}>
            <CTree
                items={object('tree items', treedata)}
                canEdit={select(
                    '수정 가능 여부',
                    {
                        없음: undefined,
                        가능: true,
                        불가능: false,
                    },
                    undefined,
                )}
                {...actions}
            />
        </div>
    ))
    .add('Tree 파일용', () => (
        <div style={{ height: '500px' }}>
            <CFileTree
                items={object('tree items', treedata)}
                canEdit={select(
                    '수정 가능 여부',
                    {
                        없음: undefined,
                        가능: true,
                        불가능: false,
                    },
                    undefined,
                )}
                {...actions}
            />
        </div>
    ))
    .add('Tree Style Custom', () => (
        <div style={{ height: '500px' }}>
            <CStyleTree
                items={object('tree items', treedata2)}
                defaultExpanded={object('default값(배열(id))', ['1'])}
                collapseIcon={text('펼침 아이콘', undefined)}
                expandIcon={text('접힘 아이콘', undefined)}
                {...actions}
            />
        </div>
    ))
    .addDecorator((doTheThing) => (
        <DragDropContextProvider backend={HTML5Backend}>
            {doTheThing()}
        </DragDropContextProvider>
    ))
    .addDecorator(withKnobs);
