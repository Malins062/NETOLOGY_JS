import TasksListWidget from '../widgets/taskslist/taskslist';

const tasksList = [
  {
    title: 'Что запланировано сделать',
    items: ['Доделать домашнее задание',
      'Завершить HTML верстку',
      'Написать тесты',
    ],
  },
  {
    title: 'Задания в процессе',
    items: ['Работа над виджетом TasksList',
      'Кнопка ДОБАВИТЬ',
    ],
  },
  {
    title: 'Сделано',
    items: ['Описание README.md',
      'Список пакетов - package.json',
      'Общая HTML-разметка страницы',
      'Файл запуска приложения JS',
    ],
  },
  {
    title: 'Запланировано на далекое будущее',
    items: ['Стать чемпионом',
    ],
  },
];

const widgetTasksList = new TasksListWidget(document.querySelector('#widget-container'), tasksList);
widgetTasksList.bindToDOM();
