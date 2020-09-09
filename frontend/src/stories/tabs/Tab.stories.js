import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import createStore from '@/store';
import { customTheme } from '@/constants';
import { CTabs, CTab, CTabPanel } from '@/components/tabs';

const store = createStore();

storiesOf('Tab 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={createMuiTheme(customTheme)}>
                    <Route path="/" component={() => story()} />
                </ThemeProvider>
            </Router>
        </Provider>
    ))
    .add('Tab', () => {
        const [value, setValue] = useState(0);

        const onChange = (event, newValue) => {
            setValue(newValue);
        };

        return (
            <>
                <CTabs
                    type={select(
                        '탭 외곽 스타일',
                        {
                            ctabs1: 'ctabs1',
                            ctabs2: 'ctabs2',
                            ctabs3: 'ctabs3',
                            ctabs4: 'ctabs4',
                        },
                        'ctabs1',
                    )}
                    variant={select(
                        '탭 스타일',
                        {
                            없음: '',
                            standard: 'standard',
                            fullWidth: 'fullWidth',
                            scrollable: 'scrollable',
                        },
                        '',
                    )}
                    value={value}
                    onChange={onChange}
                >
                    <CTab
                        label="테스트 탭1"
                        type={select(
                            '탭 안 스타일',
                            {
                                없음: '',
                                ctab1: 'ctab1',
                                ctab2: 'ctab2',
                                ctab3: 'ctab3',
                                ctab4: 'ctab4',
                            },
                            '',
                        )}
                        width={number('탭 너비', 100)}
                    ></CTab>
                    <CTab
                        label="테스트 탭2"
                        type={select(
                            '탭 안 스타일',
                            {
                                없음: '',
                                ctab1: 'ctab1',
                                ctab2: 'ctab2',
                                ctab3: 'ctab3',
                                ctab4: 'ctab4',
                            },
                            '',
                        )}
                        width={number('탭 너비', 100)}
                    ></CTab>
                </CTabs>
                <CTabPanel index={0} value={value}>
                    {text('탭1 텍스트', '테스트1')}
                </CTabPanel>
                <CTabPanel index={1} value={value}>
                    {text('탭2 텍스트', '테스트2')}
                </CTabPanel>
            </>
        );
    })

    .addDecorator(withKnobs);
