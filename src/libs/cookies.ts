import Cookies, { CookieAttributes } from 'js-cookie';

export function setCookie(name: string, value: string, options?: CookieAttributes): void {
  Cookies.set(`web-${name}`, value, options);
}

export function getCookie(name: string): string {
  if (Cookies.get(name) !== 'undefined') {
    return Cookies.get(name) as string;
  } else {
    return '';
  }
}

export function removeCookie(name: string, options?: CookieAttributes): void {
  Cookies.remove(name, options);
}

export function getCookieJSON(name: string): any {
  return Cookies.getJSON(name);
}

export function getCookieJSONALL(): any {
  return Cookies.getJSON();
}
