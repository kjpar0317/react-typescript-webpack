import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { all } from 'redux-saga/effects';

import { COMMON, commonReducer } from '@/features/commonSlice';

import { LOGIN, loginReducer } from '@/features/login/slice';
import { watchLogin } from '@/features/login/saga';

import { DASHBOARD, dashboardReducer } from '@/features/dashboard/slice';
import { watchDashboard } from '@/features/dashboard/saga';

export const rootReducer = combineReducers({
    [LOGIN]: loginReducer,
    [COMMON]: commonReducer,
    [DASHBOARD]: dashboardReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([watchLogin(), watchDashboard()]);
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

export type RootState = ReturnType<typeof rootReducer>

export default createStore;
