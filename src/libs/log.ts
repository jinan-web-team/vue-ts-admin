import {Direction} from '@/interface/enum';

class Log {
  public capsule(title: string, info: string, type: Direction = Direction.primary): void {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${type}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent',
    );
  }
  public default(text: string): void {
    this.colorful([{ text, type: Direction.default }]);
  }
  public primary(text: string): void {
    this.colorful([{ text, type: Direction.primary }]);
  }
  public success(text: string): void {
    this.colorful([{ text, type: Direction.success }]);
  }
  public warning(text: string): void {
    this.colorful([{ text, type: Direction.warning }]);
  }
  public danger(text: string): void {
    this.colorful([{ text, type: Direction.danger }]);
  }
  private colorful(textArray: Array<{text: string, type: Direction}>): void {
    console.log(
      `%c${textArray.map((item) => item.text || '').join('%c')}`,
      ...textArray.map((item) => `color: ${item.type};`),
    );
  }
}

const log = new Log();

export default log;
