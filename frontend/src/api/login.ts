import axioUtils from '@/utils/axios-utils';

// 로그인 처리
export const doLogin : any = (username : string, password : string) => {
    return axioUtils.post(`/auth/login`, {
        'username': username,
        'password': password
    }).then(res => {
        return res.data;
    });
};

// 로그아웃 처리
export const doLogout : any = (username : string, token : string) => {
    return axioUtils.post(`/auth/logout`, {
        'username': username,
        'access_token': token
    }).then(res => {
        return res.data;
    });
};
