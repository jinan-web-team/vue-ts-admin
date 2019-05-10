export interface IRouteItem {
  name?: string;
  component?: any;
  path: string;
  redirect?: string | object;
  children?: IRouteItem[];
  meta?: {
    title?: string;
    hidden?: boolean;
    permission?: string[];
    icon?: string;
    href?: string;
    [key: string]: any;
  };
}
