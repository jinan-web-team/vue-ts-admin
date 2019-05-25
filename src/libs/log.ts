import {Direction} from '@/interface/enum';

interface ILog {
  capsule(title: string, info: string, type: Direction): void;

  colorful(textArray: Array<{ text: string, type: Direction }>): void;

  default(text: string): void;

  primary(text: string): void;

  success(text: string): void;

  warning(text: string): void;

  danger(text: string): void;
}

const log: ILog = {
  capsule(title: string, info: string, type: Direction = Direction.primary): void {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${type}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent',
    );
  },
  colorful(textArray: Array<{ text: string, type: Direction }>): void {
    console.log(
      `%c${textArray.map((item) => item.text || '').join('%c')}`,
      ...textArray.map((item) => `color: ${item.type};`),
    );
  },
  default(text: string): void {
    this.colorful([{text, type: Direction.default}]);
  },
  primary(text: string): void {
    this.colorful([{text, type: Direction.primary}]);
  },
  success(text: string): void {
    this.colorful([{text, type: Direction.success}]);
  },
  warning(text: string): void {
    this.colorful([{text, type: Direction.warning}]);
  },
  danger(text: string): void {
    this.colorful([{text, type: Direction.danger}]);
  },
};

export default log;
