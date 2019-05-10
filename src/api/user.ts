import {AxiosResponse} from 'axios';
import request, {IResponse} from '@/plugins/axios';

export function getUserPermissionInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  });
}

interface ILoginParams {
  userName: string;
  password: string;
  code?: string;
}

export interface ILoginResponseData {
  username: string;
  token: string;
  exp: number;
  permission: string[] | string | boolean;
}

export async function authlogin(params: ILoginParams): Promise<AxiosResponse<IResponse<ILoginResponseData>>>  {
    return await request.post<IResponse<ILoginResponseData>>('/auth/login', { data: params });
}
