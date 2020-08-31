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
import {
    menuItems,
    customTheme,
} from '@/constants';

interface PrivateProps extends RouteProps {

};

/*
    function DeepChild() {
      const theme = useTheme();
      return <span>{`spacing ${theme.spacing}`}</span>;
    }

*/
export const PrivateRoute : React.FC<PrivateProps> = props => {
    const [ navTrigger, setNavTrigger ] = useState(true);
    const [ sidebarOpen, setSidebarOpen ] = useState(true);
    
    const getCustomTheme = () => {
        let theme: any = customTheme;

        theme.palette.background = {
            default: getPaletteBackground(),
        };

        return theme;
    };
    
    const getPaletteBackground = () => {
        if (group === 'admin') {
            return '#35475e';
        } else if (group === 'group') {
            return '#3e5d70';
        } else {
            return '#577080';
        }
    };

    if (sessionStorage.getItem('token'))  {
        return (
            <ThemeProvider theme={createMuiTheme(getCustomTheme())}>
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
