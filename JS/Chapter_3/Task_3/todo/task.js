// Ключ данных для локального сохранения данных
const DATA_KEY = 'netologyTasks';

class HandlerTasks {
    /*
    Класс - обработчик задач
    */

    constructor(container) {
        // Объект формы для ввода задачи
        this.tasksFormControl = container.querySelector('.tasks__control');
        
        // Объект строки ввода задачи
        this.tasksInput = container.querySelector('.tasks__input');
        
        // Объект списка задач
        this.tasksList = container.querySelector('.tasks__list');

        // Список текущих задач
        this.tasks = [];
        this.readTasks();

        // Запуск обработчика событий
        this.registerEvents();
    }

    readTasks() {
        /*
        Метод чтения сохраненных задач
        */

        // Подключение к localStorage
        const data = window.localStorage;
        // data.removeItem(DATA_KEY);

        // Чтение сохраненных данных
        const res = data.getItem(DATA_KEY);

        // Обработка данных
        const activeTasks = res ? JSON.parse(res) : [];

        // Вывод списка сохраненных задач
        activeTasks.forEach(text => this.addTask(text));
    }

    saveTasks() {
        /*
        Метод записи сохраненных задач
        */

        // Подключение к localStorage
        const data = window.localStorage;

        // Удаление пустых значений
        const activeTasks = this.tasks.filter((value) => {
            return value;
        })

        // Сохранение массива задач в localStorage
        data.setItem(DATA_KEY, JSON.stringify(activeTasks));
    }

    registerEvents() {
        /*
        Метод обработчика событий на форме ввода
        */

        // Обработчик
        let handler = this;

        // Событие на подтверждение ввода новой задачи
        this.tasksFormControl.addEventListener('submit', function(event) {
            // Добавление задачи
            handler.addTask(handler.tasksInput.value);

            event.preventDefault();
        });
    }

    createTaskElement(text) {
        /*
        Метод создания html-элемента с текстом text
        */

        // Создание родительского div-элемента
        const taskElement = document.createElement('div');
        taskElement.className = 'task';       
        
        // Создание текста задачи 
        const taskTitle = `<div class="task__title">${text}</div>`

        // Создание кнопки удаления задачи 
        const taskRemove = '<a href="#" class="task__remove" title="Удалить задачу">&times;</a>';

        taskElement.insertAdjacentHTML('afterBegin', taskTitle);
        taskElement.insertAdjacentHTML('beforeEnd', taskRemove);
    
        return taskElement;
    }

    addTask(taskDescription) {
        /*
        Метод добавления задачи с текстом taskDescription, в общий список дел
        */

        // Проверка на не пустой текст задачи
        if (taskDescription.trim().length <= 0) {
            console.log('return');
            return;
        }

        // Создание html-элемента задачи
        const task = this.createTaskElement(taskDescription);

        // Добавление задачи в список задач
        this.tasksList.insertAdjacentElement('beforeEnd', task);  
        this.tasks.push(taskDescription);

        // Сохрание задач в localStorage
        this.saveTasks();

        // Индекс текущей задачи
        const index = this.tasks.length - 1;

        // Добавление обработчика для удаления задачи
        task.querySelector('.task__remove').addEventListener('click', () => {
            // Удаление задачи
            task.remove();
            delete this.tasks[index];
            
            // Сохрание задач в localStorage
            this.saveTasks();
        })

        // Очистка поля ввода задачи
        this.tasksInput.value = '';
    }
}

new HandlerTasks(document.getElementById('tasks'));