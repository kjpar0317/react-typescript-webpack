import { call, put, select, takeLatest } from 'redux-saga/effects';
import { dashboardAction } from './slice';
import { getPublicLayout, getPrivateLayouts } from '@/api';

// 전사 레이아웃 handle
function* handleLayout() {
    const { setLayouts, errorPublic, errorPrivate, setReady } = dashboardAction;
    let pubRes = [];
    let privRes = [];

    try {
        privRes = yield call(
            getPrivateLayouts,
            sessionStorage.getItem('username'),
        );
    } catch (err) {
        yield put(errorPrivate(err));
    }

    try {
        pubRes = yield call(
            getPublicLayout,
            sessionStorage.getItem('username'),
        );
    } catch (err) {
        yield put(errorPublic(err));
    }

    try {
        yield put(
            setLayouts({ publicLayout: pubRes, privateLayouts: privRes }),
        );
        yield put(setReady(true));
    } catch (err) {
        yield put(errorPublic(err));
    }
}

export function* watchDashboard() {
    const { loadLayouts } = dashboardAction;

    yield takeLatest(loadLayouts, handleLayout);
}
