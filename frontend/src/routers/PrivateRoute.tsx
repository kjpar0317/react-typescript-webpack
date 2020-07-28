import React, { useState } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

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
        {
            name: 'Openstack',
            items: [
              {
                name: '모니터링 대시보드',
                link: '/admin/user',
              },
              {
                name: '관리자 대시보드',
                link: '/admin/user',
              },
            ],
          },
          {
            name: 'VMware',
            items: [
              {
                name: '모니터링 대시보드',
                link: '/admin/user',
              },
              {
                name: '관리자 대시보드',
                link: '/admin/user',
              },
            ],
          },
      ],
    },
    {
      name: '퍼블릭 클라우드',
      Icon: IconShoppingCart,
      items: [
        {
          name: 'AWS EC2',
          items: [
            {
              name: '컴퓨트',
              link: '/admin/user',
            },
            {
              name: '볼륨',
              link: '/admin/user',
            },
            {
                name: '네트워크',
                link: '/admin/user',
            },
            {
                name: 'IAM',
                link: '/admin/user',
            },
            {
                name: '사용량',
                link: '/admin/user',
            },
          ],
        },
        {
            name: 'Azure',
            items: [
              {
                name: '컴퓨트',
                link: '/admin/user',
              },
              {
                name: '디스크',
                link: '/admin/user',
              },
              {
                  name: '네트워크',
                  link: '/admin/user',
              },
              {
                  name: '관리',
                  link: '/admin/user',
              },
              {
                  name: '사용량',
                  link: '/admin/user',
              },
            ],
          },
        ]
    },
    {
      name: '프라이빗 클라우드',
      Icon: IconPeople,
      items: [
        {
          name: 'OpenStack - stein',
          items: [
            {
              name: '컴퓨트',
              link: '/admin/user',
            },
            {
              name: '볼륨',
              link: '/admin/user',
            },
            {
                name: '네트워크',
                link: '/admin/user',
            },
            {
                name: '관리',
                link: '/admin/user',
            },
            {
                name: '사용량',
                link: '/admin/user',
            },
          ],
        },
        {
            name: 'openstack',
            items: [
              {
                name: '컴퓨트',
                link: '/admin/user',
              },
              {
                name: '디스크',
                link: '/admin/user',
              },
              {
                  name: '네트워크',
                  link: '/admin/user',
              },
              {
                  name: '관리',
                  link: '/admin/user',
              },
              {
                  name: '사용량',
                  link: '/admin/user',
              },
            ],
          },
          {
            name: 'VMWare',
            items: [
              {
                name: '컴퓨트',
                link: '/admin/user',
              },
              {
                name: '데이터스토어',
                link: '/admin/user',
              },
              {
                  name: '네트워크',
                  link: '/admin/user',
              },
              {
                  name: '사용량',
                  link: '/admin/user',
              },
            ],
          },
        ]
    },
    {
      name: '인증 & 권한',
      Icon: IconBarChart,
      items: [
        {
          name: '그룹',
          link: '/admin/user'
        },
        {
          name: '사용자',
          link: '/admin/user'
        },
        {
          name: '역할',
          link: '/admin/user'
        },
        {
          name: '권한',
          link: '/admin/user'
        },
      ]
    },
    {
      name: '관리',
      Icon: IconLibraryBooks,
      items: [
        {
          name: '설정',
          link: '/admin/user'
        },
        {
            name: '자원 승인',
            link: '/admin/user'
          },
          {
            name: '자격 증명',
            link: '/admin/user'
          },
          {
            name: '빌링',
            link: '/admin/user'
          },
          {
            name: '사양',
            link: '/admin/user'
          },
          {
            name: '관리자 보안 설정',
            link: '/admin/user'
          },
      ],
    },
];

const muiThemeCustomized = createMuiTheme({
    typography: {
      fontFamily: '"Noto Sans KR", serif'
    },
    palette: {
      primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
    }
});

/*
    function DeepChild() {
      const theme = useTheme();
      return <span>{`spacing ${theme.spacing}`}</span>;
    }

*/
export const PrivateRoute : React.FC<PrivateProps> = props => {
    const [ navTrigger, setNavTrigger ] = useState(false);

    const handleNavTrigger = () => {
        setNavTrigger(!navTrigger);
    }


    if (sessionStorage.getItem('token'))  {
        return (
            // <ThemeProvider theme={muiThemeCustomized}>
            <div className="dashboard">
                <Header onTrigger={handleNavTrigger}/>
                { navTrigger ? <SideNavbar visible='visible' menuItems={menuItems} /> : <SideNavbar visible='' menuItems={menuItems} />}
                <MainContents>
                    <Route {...props} />
                </MainContents>
            </div>
            // </ThemeProvider>
        );
    } else {
        return (
            <Redirect to="/login" />
        );
    }
};
