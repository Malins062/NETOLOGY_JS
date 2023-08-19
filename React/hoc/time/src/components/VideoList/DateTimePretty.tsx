import dayjs from 'dayjs';
import { DateTime } from './DateTime';

export const DateTimePretty = ({ date }: { date: string }) => {
    function plural(n: number, titles: Array<string>) {
        return `${n} ` + titles[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
    }

    const now = dayjs();
    let displayDate = date;
    if (now.diff(date, 'hour') < 1) {
        displayDate = plural(now.diff(date, 'minute'), ['минута', 'минуты', 'минут']);
    } else if (now.diff(date, 'hour') <= 24) {
        displayDate = plural(now.diff(date, 'hour'), ['час', 'часа', 'часов']);
    } else if (now.diff(date, 'hour') > 24) {
        displayDate = plural(now.diff(date, 'day'), ['дент', 'дня', 'дней']);
    }
    displayDate += ' назад';
  return (
    <DateTime date={displayDate} />
  )
}

