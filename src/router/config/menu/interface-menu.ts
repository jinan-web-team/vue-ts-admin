export default interface IMenu {
  path: string;
  title: string;
  icon?: string;
  children?: IMenu[];
}
