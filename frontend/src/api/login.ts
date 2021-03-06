import axioUtils from '@/utils/axios-utils';

// 로그인 처리
export const doLogin : any = (username : string, password : string) => {
    return axioUtils.post(`/login`, {
        'userid': username,
        'password': password
    }).then(res => {
        return res.data;
    });
};

// 로그아웃 처리
export const doLogout : any = (username : string, token : string) => {
    return axioUtils.post(`/logout`, {
        'userid': username,
        'access_token': token
    }).then(res => {
        return res.data;
    });
};
