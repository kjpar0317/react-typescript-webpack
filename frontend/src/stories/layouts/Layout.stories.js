import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import createStore from '@/store';

import { Header, SideNavbar, MainContents } from '@/components/layouts';

import IconDashboard from '@material-ui/icons/Dashboard'

// import '@/components/layouts/sideNavbar/styles.scss';

const store = createStore();

const menuItems = [
    {
      name: '대시보드',
      Icon: IconDashboard,
      items: [
        {
          name: '서비스',
          items: [
            {
              name: '전체',
              link: '/admin/user',
            },
            {
              name: '퍼블릭',
              link: '/admin/user',
            },
            {
                name: '프라이빗',
                link: '/admin/user',
            },
          ],
        },
      ]
    }
];
storiesOf('레이아웃 컴포넌트', module)
    .addDecorator((story) => (
        <Provider store={store}>
            <Router>
                <Route path="/" component={() => story()} />
            </Router>
        </Provider>
    ))
    .add('헤더', () => <Header onTrigger={action('')}/>)
    .add('사이드바', () => <SideNavbar visible={true} menuItems={menuItems} onTrigger={action()} onSidebarOpen={action()}/>)
    .add('내용', () => <MainContents />)
    .addDecorator(withKnobs);
