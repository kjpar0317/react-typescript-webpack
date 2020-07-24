import axioUtils from '@/utils/axios-utils';

const doLogin : any = (username : string, password : string) => {
    return axioUtils.post(`/auth/login`, {
        'username': username,
        'password': password
    }).then(res => {
        return res.data;
    });
};

export { doLogin };
