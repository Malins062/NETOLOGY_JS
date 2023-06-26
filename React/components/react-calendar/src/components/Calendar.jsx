import moment from 'moment/moment';
import 'moment/locale/ru';
import './Calendar.css';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const Calendar = (props) => {
    const { date } = props; // Переданная дата

    moment.updateLocale('ru', {week: {dow: 1}}); // Смещение начала недели на ПН
    

    const today = moment(date).clone(), // Текущая дата 
        
        // Начальная дата 
        startDay = today.clone()
            .startOf('month')
            .startOf('week')
            .subtract(1, 'day'), 

        totalWeeks = 5,
        totalWeekDays = 7,

        // Массив всех дат в карточке календаря
        allDays = [...Array(totalWeeks)]
            .map(() => [...Array(totalWeekDays)]
                .map(() =>  startDay.add(1, 'day').clone()));
    
    // Метод проверки являептся ли дата текущей 
    const isCurrentDay = (day) => today.isSame(day, 'day');

    // Метод проверки являептся входит ли дата в текущий месяц 
    const isSelectedMonth = (day, today) => today.isSame(day, 'month');

    // Месяца в родительном падеже
    const months = [
        'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 
        'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 
        'Ноября', 'Декабря'
    ];

    // Данные для вставки в HTML
    const dateValues = {
        day: {
            num: today.date(),
            name: capitalize(today.format('dddd')),
        },
        month: {
            num: today.month(),
            name: capitalize(today.format('MMMM')),
            nameI: months[today.month()].toLocaleUpperCase(),
        },
        year: today.year(),
    }

    window.moment = moment;

  return (
    <div className='ui-datepicker'>
        <div className='ui-datepicker-material-header'>
            <div className='ui-datepicker-material-day'>{dateValues.day.name}</div>
            <div className='ui-datepicker-material-date'>
                <div className='ui-datepicker-material-day-num'>{dateValues.day.num}</div>
                <div className='ui-datepicker-material-month'>{dateValues.month.nameI}</div>
                <div className='ui-datepicker-material-year'>{dateValues.year}</div>
            </div>
        </div>
        <div className='ui-datepicker-header'>
            <div className='ui-datepicker-title'>
                <span className='ui-datepicker-month'>{dateValues.month.name}</span>&nbsp;<span className='ui-datepicker-year'>{dateValues.year}</span>
            </div>
        </div>
        <table className='ui-datepicker-calendar'>
            <colgroup>
                <col/>
                <col/>
                <col/>
                <col/>
                <col/>
                <col className='ui-datepicker-week-end'/>
                <col className='ui-datepicker-week-end'/>
            </colgroup>
            <thead>
                <tr>
                    <th scope='col' title='Понедельник'>Пн</th>
                    <th scope='col' title='Вторник'>Вт</th>
                    <th scope='col' title='Среда'>Ср</th>
                    <th scope='col' title='Четверг'>Чт</th>
                    <th scope='col' title='Пятница'>Пт</th>
                    <th scope='col' title='Суббота'>Сб</th>
                    <th scope='col' title='Воскресенье'>Вс</th>
                </tr>
            </thead>
            <tbody>
                {
                    allDays.map((data) => (
                        <tr key={data}>
                            {
                                data.map((dateItem) => (
                                    <td 
                                        key={dateItem.format('DDMMYYYY')}
                                        className={
                                            isCurrentDay(dateItem) 
                                                ? 'ui-datepicker-today' 
                                                : isSelectedMonth(dateItem, today) 
                                                    ? null
                                                    : 'ui-datepicker-other-month'
                                        }
                                    >
                                        {dateItem.format('D')}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
