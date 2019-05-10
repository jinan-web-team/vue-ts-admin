import Mock from 'mockjs';
import qs from 'qs';
import withCredentials from './withCredentials';

/* 补丁 */
withCredentials(Mock);

/*
  Mock 默认配置
  指定被拦截的 Ajax 请求的响应时间，单位是毫秒。
  值可以是正整数，例如 400，表示 400 毫秒 后才会返回响应内容；
  也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'。
  配置拦截 Ajax 请求时的行为。支持的配置项有：timeout。
 */
Mock.setup({ timeout: '200-300' });

/* 扩展 [生成器] */
const Generator = (prop, template) => {
  const obj = {};
  obj[prop] = [template];
  return Mock.mock(obj)
};

/* 扩展 [循环] */
const Repeat = (num, itemTemplate) => Generator(`data|${num}`, itemTemplate).data;

const CustomExtends = {
  Generator,
  Repeat,
  Mock,
  Random: Mock.Random,
};

const extend = (prop, value) => {
  CustomExtends[prop] = value
};

/*
  装配配置组
   mock请求各项参数打包
*/
const wired = ({ url, type, body }) => ({
  method: type,
  params: qs.parse(url.split('?').length > 1 ? url.split('?')[1] : ''),
  body: JSON.parse(body),
  url: qs.parse(url.split('?')[0]),
  ...CustomExtends,
});

/**
 * mock 生成模拟请求
 * @param path
 * @param method
 * @param handle
 */
const setup = (path, method, handle) => {
  Mock.mock(
    RegExp(path),
    method,
    typeof handle === 'function' ? o => handle(wired(o)) : handle,
  )
};

const load = (collection) => {
  collection.map(({ path, method, handle }) => {
    if (method === '*') {
      method = [
        'get',
        'head',
        'post',
        'put',
        'delete',
        'connect',
        'options',
        'trace',
        'patch'
      ]
    }
    if (typeof method === 'string' && method.indexOf('|') > -1) method = method.split('|');
    if (method instanceof Array) {
      method.map(item => setup(path, item, handle));
    } else {
      setup(path, method, handle);
    }
  })
};

console.log(setup, load, extend);
export default { setup, load, extend };
