interface IFormatInterface {
  GET: string[];
  POST: string[];
  put: string[];
  DELETE: string[];
}
class Tools {
  public setTitle(title: string) {
    const processTitle = process.env.VUE_APP_TITLE || 'vue-ts-admin';
    window.document.title = `${ processTitle } ${ title ? `| ${title}` : '' }`;
  }
  public open(url: string) {
    const aHref = document.createElement('a');
    aHref.setAttribute('href', url);
    aHref.setAttribute('target', '_black');
    aHref.setAttribute('id', 'ts-admin-link');
    document.body.appendChild(aHref);
    aHref.click();
    const aLinkNode: HTMLElement = document.getElementById('ts-admin-link') as HTMLElement;
    document.body.removeChild(aLinkNode);
  }
}

const tools = new Tools();

export default tools;
