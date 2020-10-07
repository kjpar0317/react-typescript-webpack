import { call, put, select, takeLatest } from 'redux-saga/effects';
import { doLogin, doLogout } from '@/api/index';
import { loginAction, loginSelector } from './slice';

// 로그인 saga
function* handleLogin() {
    const { loginSuccess, loginFail } = loginAction;

    try {

        const logininfo = yield select(loginSelector.all);

        const res = yield call(doLogin, logininfo.username, logininfo.password);

        yield put(
            loginSuccess(res),
        );
    } catch (err) {
        yield put(loginFail(err));
    }
}

// 로그아웃 saga
function* handleLogout() {
    const { doremove, loginFail } = loginAction;

    try {
        const logininfo = yield select(loginSelector.all);

        yield call(doLogout, logininfo.username, logininfo.token);

        yield put(doremove());
    } catch (err) {
        yield put(loginFail(err));
    }
}

export function* watchLogin() {
    const { dologin, dologout } = loginAction;

    yield takeLatest(dologin, handleLogin);
    yield takeLatest(dologout, handleLogout);
}
