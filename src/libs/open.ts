const openPage = (url: string) => {
  const a: HTMLElement = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_black');
  a.setAttribute('id', 'admin-link-template');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(document.getElementById('admin-link-template') as HTMLElement);
};

export default openPage;
