import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { all } from 'redux-saga/effects';

import { LOGIN, loginReducer } from '@features/login/slice';
import { watchLogin } from '@features/login/saga';

import { ILoginInfo } from "login-interface";

export type RootState = {
    userinfo: ILoginInfo;
};

export const rootReducer = combineReducers({
    [LOGIN]: loginReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([watchLogin()]);
}

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [sagaMiddleware],
    });
    sagaMiddleware.run(rootSaga);
    return store;
};

export default createStore;
