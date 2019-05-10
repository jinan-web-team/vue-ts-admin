import _ from 'lodash';
import { IRouteItem } from '@/interface/routes';

/**
 * @description 获取当前路由
 * @param path [string]
 */
export const getCurrentRoute = (path?: string): { pathList: string[], params: string } => {
  const pathList: string[] = [];
  let params: string = '';
  if (path) {
    let pathSplitList: string[] = path.split('/');
    pathSplitList = _.compact(pathSplitList);
    pathSplitList.forEach((item, index) => {
      if (parseInt(item, 10)) {
        params = item;
        return;
      }
      pathList.push(index ? item : `/${item}`);
    });
  }
  return {
    pathList,
    params,
  };
};
/*

/!**
 * @description 判断是有权限
 * @param target string[]
 * @param arr string[]
 *!/
export const hasOneOf = (target: string[], arr: string[]) => target.some((item) => arr.indexOf(item) > -1);

/!**
 * @description 获取权限路由
 * @param data IRouteItem[]
 * @param rules string[] | string | boolean
 * @return IRouteItem[]
 *!/
export const getPermissionRoutes = (data: IRouteItem[], rules: string[] | string | boolean): IRouteItem[] => {
  if (typeof rules === 'boolean') {
    return rules ? data : [];
  } else if (typeof rules === 'string') {
     return data.filter((item: IRouteItem) => {
      if (item.children) {
        item.children = getPermissionRoutes(item.children, rules);
      }
      const permission = item.meta && item.meta.permission;
      if ((permission && permission.length > 0) && rules) {
        return permission.includes(rules);
      }
      return true;
    });
  } else if (rules instanceof Array) {
    return data.filter((item: IRouteItem) => {
      if (item.children) {
        item.children = getPermissionRoutes(item.children, rules);
      }
      const permission = item.meta && item.meta.permission;
      if (permission && permission.length > 0 && rules) {
        return hasOneOf(rules, permission);
      }
      return true;
    });
  } else {
    throw new Error('未知的数据类型');
    return [];
  }
};

/!**
 * @description 格式化路径地址
 * @param data IRouteItem[]
 * @param parentPath string
 *!/
export function formatMenuPath(data: IRouteItem[], parentPath: string = ''): IRouteItem[] {
  return _.map(data, (item: IRouteItem) => {
    const result = {
      ...item,
    };
    if (item.children) {
      result.children = formatMenuPath(item.children, `${parentPath}${item.path}/`);
    }
    return result;
  });
}
*/
