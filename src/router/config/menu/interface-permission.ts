export default interface IPermissionRouter {
  path: string;
  name?: string;
  component?: string;
  meta: {
    title: string;
    cache?: boolean;
    hidden?: boolean;
    componentPath: string;
  };
  children?: IPermissionRouter[];
}
