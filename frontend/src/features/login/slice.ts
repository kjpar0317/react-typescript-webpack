import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginInfo } from "login-interface";

const initState : ILoginInfo = {
    isLoading: false,
    token: '',
    username: '',
    password: '',
    error: null,
};

const slice = createSlice({
    name: 'LOGIN',
    initialState: initState,
    reducers : {
        dologin: (state : ILoginInfo, { payload : { username, password } } : PayloadAction<any>) => {
            console.log('reducer : '+ username)
            state.isLoading = true;
            state.username = username;
            state.password = password;
        },
        dologout: (state : ILoginInfo) => {
        },
        doremove: (state : ILoginInfo) => {
            // delete state.username;
            // delete state.password;
            // delete state.token;
            state.username = '';
            state.password = '';
            state.token = '';
        },
        loginSuccess: (state : ILoginInfo, { payload: token }  : PayloadAction<string>) => {
            state.isLoading = false;
            state.token = token;
            state.error = null;
        },
        loginFail: (state : ILoginInfo, { payload: error }  : PayloadAction<any>) => {
            state.isLoading = false;
            state.error = error;
        },
    },
});

const selectPassword = createSelector(
    (state : ILoginInfo) => state.password,
    (password : string) => password
);

const selectUsername = createSelector(
    (state : ILoginInfo) => state.username,
    (username : string) => username
);

const selectToken = createSelector(
    (state : ILoginInfo) => state.token,
    (token : string) => token
);

const selectLoading = createSelector(
    (state : ILoginInfo) => state.isLoading,
    (isLoading : boolean) => isLoading
);

const selectAllState = createSelector(
    selectPassword,
    selectUsername,
    selectToken,
    selectLoading,
    (password, username, token, isLoading) => {
        return { password, username, token, isLoading };
    },
);

export const LOGIN = slice.name;
export const loginSelector = {
    all: (state : any) => selectAllState(state[slice.name]),
    token: (state : any) => selectToken(state[slice.name]),
    isLoading: (state : any) => selectLoading(state[slice.name]),
}
export const loginReducer = slice.reducer;
export const loginAction = slice.actions;
