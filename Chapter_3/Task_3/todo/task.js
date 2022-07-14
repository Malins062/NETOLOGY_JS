class Task {
    constructor(descriptionTask, listForTask) {
        this.description = descriptionTask;
        this.listForTask = listForTask;
        createTask();
    }

    createTask() {
        const taskElement = document.createElement('div');
        const taskTitleElement = document.createElement('div');
        
        taskElement.className = '';
        hintElement.textContent = elementForHint.title;

        // Добавление название класса для div
        hintElement.className = 'tooltip';

        // Создание html-элемента подсказки
        // this.listForTask.insertAdjacentElement('afterEnd', hintElement);  
    }
}
