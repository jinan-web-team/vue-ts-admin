import store from '@/store';
import router from '@/router';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { message } from 'ant-design-vue';
import log from '@/libs/log';

// 记录和显示错误
function errorLog(err: { message: string } ): void {
  store.dispatch('error/addLog', {
    type: 'error',
    err,
    info: '数据请求异常',
  });
  if (process.env.NODE_ENV === 'development') {
    log.danger('>>>>>> Error >>>>>> ');
    console.log(err);
  }
  message.error(err.message, 5000);
}

const httpRequest: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 20000,
});

httpRequest.interceptors.request.use((config: AxiosRequestConfig) => {
  // if (!permission.access(config, store)) {
  //   throw ({
  //     type: '403',
  //     config,
  //   });
  // }
  const url: string = config.url || '';
  if (!(/^https:\/\/|http:\/\//.test(url))) {
    const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNTU2NjA1Nzg3LCJleHAiOjE1NTcyMTA1ODd9.5UEEUXBsmqg8cdBppmYu9Iscsq7T4IpxVXBJoZFol30';
    if (token && token !== 'undefined') {
      config.headers.Authorization = `bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  console.error(error);
  Promise.reject(error);
});

httpRequest.interceptors.response.use((response: AxiosResponse) => {
  if (response.status !== 200) {
    message.error(response.statusText, 3000);
    return Promise.reject(response);
  }
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    message.error('登录信息已过期，请重新登录！');
    setTimeout(() => {
      router.replace({
        name: 'login',
      });
    }, 1000);
  } else if (error.message && error.message.indexOf('timeout') > -1) {
    errorLog(new Error(`网络超时!: ${error.config.url}`));
  } else if (error.type === '403') {
    errorLog(new Error(`没有请求权限!: ${error.config.url}`));
  } else {
    errorLog(new Error(`网络错误!: ${error.config.url}`));
  }
  return Promise.reject(error);
});


export default httpRequest;
