import moment from 'moment';

export const formatDate = (date: string, fmt: string): string => {
  switch (fmt) {
    case 'YYYY-MM-DD HH:mm:ss':
      return moment(date).format(fmt);
    case 'YYYY-MM-DD':
      return moment(date).format(fmt);
    default:
      return moment().format(fmt);
  }
};
