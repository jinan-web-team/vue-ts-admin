import request from '@/plugins/axios';


export function getUserPermissionInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  });
}

export function authLogin(data: { username: string, password: string }) {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  });
}
