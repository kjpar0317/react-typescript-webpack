import React, { useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import { Header, SideNavbar, MainContents }  from '@/components/layouts';

interface PrivateProps extends RouteProps {

};

const menuItems = [
    {
      id: '1',
      name: '대시보드',
      Icon: IconDashboard,
      items: [
        {
          id: '2',
          name: '서비스',
          items: [
            {
              id: '3',
              name: '전체',
              link: '/admin/dashboard',
            },
            {
              id: '4',
              name: '퍼블릭',
              link: '/admin/user',
            },
            {
                id: '5',
                name: '프라이빗',
                link: '/admin/board',
            },
          ],
        },
        {
            id: '6',
            name: 'Openstack',
            items: [
              {
                id: '7',
                name: '모니터링 대시보드',
                link: '/admin/user',
              },
              {
                id: '8',
                name: '관리자 대시보드',
                link: '/admin/user',
              },
            ],
          },
          {
            id: '9',
            name: 'VMware',
            items: [
              {
                id: '10',
                name: '모니터링 대시보드',
                link: '/admin/user',
              },
              {
                id: '11',
                name: '관리자 대시보드',
                link: '/admin/user',
              },
            ],
          },
      ],
    },
    {
      id: '12',
      name: '퍼블릭 클라우드',
      Icon: IconShoppingCart,
      items: [
        {
          id: '13',
          name: 'AWS EC2',
          items: [
            {
              id: '14',
              name: '컴퓨트',
              link: '/admin/user',
            },
            {
              id: '15',
              name: '볼륨',
              link: '/admin/user',
            },
            {
                id: '16',
                name: '네트워크',
                link: '/admin/user',
            },
            {
                id: '17',
                name: 'IAM',
                link: '/admin/user',
            },
            {
                id: '18',
                name: '사용량',
                link: '/admin/user',
            },
          ],
        },
        {
            id: '19',
            name: 'Azure',
            items: [
              {
                id: '20',
                name: '컴퓨트',
                link: '/admin/user',
              },
              {
                id: '21',
                name: '디스크',
                link: '/admin/user',
              },
              {
                  id: '22',
                  name: '네트워크',
                  link: '/admin/user',
              },
              {
                  id: '23',
                  name: '관리',
                  link: '/admin/user',
              },
              {
                  id: '24',
                  name: '사용량',
                  link: '/admin/user',
              },
            ],
          },
        ]
    },
    {
      id: '25',
      name: '프라이빗 클라우드',
      Icon: IconPeople,
      items: [
        {
          id: '26',
          name: 'OpenStack - stein',
          items: [
            {
              id: '27',
              name: '컴퓨트',
              link: '/admin/user',
            },
            {
              id: '28',
              name: '볼륨',
              link: '/admin/user',
            },
            {
                id: '29',
                name: '네트워크',
                link: '/admin/user',
            },
            {
                id: '30',
                name: '관리',
                link: '/admin/user',
            },
            {
                id: '31',
                name: '사용량',
                link: '/admin/user',
            },
          ],
        },
        {
            id: '32',
            name: 'openstack',
            items: [
              {
                id: '33',
                name: '컴퓨트',
                link: '/admin/user',
              },
              {
                id: '34',
                name: '디스크',
                link: '/admin/user',
              },
              {
                  id: '35',
                  name: '네트워크',
                  link: '/admin/user',
              },
              {
                  id: '36',
                  name: '관리',
                  link: '/admin/user',
              },
              {
                  id: '37',
                  name: '사용량',
                  link: '/admin/user',
              },
            ],
          },
          {
            id: '38',
            name: 'VMWare',
            items: [
              {
                id: '39',
                name: '컴퓨트',
                link: '/admin/user',
              },
              {
                id: '40',
                name: '데이터스토어',
                link: '/admin/user',
              },
              {
                  id: '41',
                  name: '네트워크',
                  link: '/admin/user',
              },
              {
                  id: '42',
                  name: '사용량',
                  link: '/admin/user',
              },
            ],
          },
        ]
    },
    {
      id: '43',
      name: '인증 & 권한',
      Icon: IconBarChart,
      items: [
        {
          id: '44',
          name: '그룹',
          link: '/admin/user'
        },
        {
          id: '45',
          name: '사용자',
          link: '/admin/user'
        },
        {
          id: '46',
          name: '역할',
          link: '/admin/user'
        },
        {
          id: '47',
          name: '권한',
          link: '/admin/user'
        },
      ]
    },
    {
      id: '48',
      name: '관리',
      Icon: IconLibraryBooks,
      items: [
        {
          id: '49',
          name: '설정',
          link: '/admin/user'
        },
        {
            id: '50',
            name: '자원 승인',
            link: '/admin/user'
          },
          {
            id: '51',
            name: '자격 증명',
            link: '/admin/user'
          },
          {
            id: '52',
            name: '빌링',
            link: '/admin/user'
          },
          {
            id: '53',
            name: '사양',
            link: '/admin/user'
          },
          {
            id: '54',
            name: '관리자 보안 설정',
            link: '/admin/user'
          },
      ],
    },
];

const muiThemeCustomized = createMuiTheme({
    typography: {
      fontFamily: '"Noto Sans KR", sans-serif;',
      fontWeightRegular: 300,
      fontSize: 12,
    },
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: red[700],
        },
        background: {
            default: '#35475e',
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 800,
          lg: 1280,
          xl: 1920,
        },
    },
});

/*
    function DeepChild() {
      const theme = useTheme();
      return <span>{`spacing ${theme.spacing}`}</span>;
    }

*/
export const PrivateRoute : React.FC<PrivateProps> = props => {
    const [ navTrigger, setNavTrigger ] = useState(true);
    const [ sidebarOpen, setSidebarOpen ] = useState(true);

    if (sessionStorage.getItem('token'))  {
        return (
            <ThemeProvider theme={muiThemeCustomized}>
                <Header onTrigger={ setNavTrigger } />
                <SideNavbar visible={navTrigger} menuItems={menuItems} onTrigger={setNavTrigger} onSidebarOpen={setSidebarOpen} />
                <MainContents sidebarOpen={sidebarOpen}>
                    <Route {...props} />
                </MainContents>
            </ThemeProvider>
        );
    } else {
        return (
            <Redirect to="/login" />
        );
    }
};
