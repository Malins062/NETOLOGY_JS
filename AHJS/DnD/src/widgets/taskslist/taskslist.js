import './taskslist.css';
import { v4 as uuidv4 } from 'uuid';
import Storage from './storage';

/*
class TasksListWidget

  Параметры конструктора:
    parentEl - контейнер
    tasksList - первоначальный список задач = [
      {
        title: "Наименование списка 1",
        items: ['Задание 1', 'Задание 2', ...]
      },

      {
        title: "Наименование списка 2",
        items: ['Задание 1', 'Задание 2', ...]
      },

      ...
    ]
    isUseStorage - использовать/не использовать локальное хранилище (по умолчанию использовать)
*/

const STYLE_DRAGGING = 'dragging';
const STYLE_DROP = 'drop';
const DATA_KEY = 'taskslist';

export default class TasksListWidget {
  constructor(parentEl, tasksList, isUseStorage = true) {
    this.parentEl = parentEl;
    this.isUseStorage = isUseStorage;
    this.shiftX = 0;
    this.shiftY = 0;

    this.storage = new Storage();
    if (isUseStorage) {
      this.tasksList = this.storage.readItem(DATA_KEY);
      if (!this.tasksList) {
        this.tasksList = tasksList;
      }
      this.storage.writeItem(DATA_KEY, this.tasksList);
    } else {
      this.tasksList = tasksList;
    }

    // Добавление уникальных номеров для каждого списка
    // eslint-disable-next-line no-param-reassign
    this.tasksList.forEach((list) => { list.id = uuidv4(); });
  }

  static itemHTML(itemText) {
    const id = uuidv4();
    const html = `
        <li class="tasks__item list-group-item mb-2" draggable="true" data-id="${id}">
          ${itemText}
          <div class="item__close hidden" title="Удалить задачу">&#10005;</div>
        </li>`;
    return {
      innerHTML: html,
      id,
    };
  }

  static itemsHTML(items) {
    let html = '';
    items.forEach((taskText) => {
      html += this.itemHTML(taskText).innerHTML;
    });
    return html;
  }

  static tasksListHTML(tasksList) {
    return `
      <div class="col-md-4 h-100 py-2">        
        <div class="tasks__card card" data-id="${tasksList.id}">
            <div class="tasks__header card-header p-2">
                <h5 class="tasks__title mb-0">${tasksList.title}</h5>
            </div>

            <div class="tasks__body card-body h-100 p-2" data-mdb-perfect-scrollbar="true">
                <ul class="tasks__list list-group">
                    ${TasksListWidget.itemsHTML(tasksList.items)}
                </ul>
            </div>

            <div class="tasks__footer card-footer text-start p-2">
                <div class="item__add">&#10009; Добавить новую карточку</div>
                <div class="item__card hidden">
                  <form class="form-outline mb-2">
                    <textarea class="new__item__text form-control mb-2" type="submit"
                      placeholder="Введите текст карточки"></textarea>
                    <button class="new__item__add btn btn-success btn-sm" title="Добавить новую задачу">
                      Добавить
                    </button>
                    <button class="new__item__close btn btn-transparent btn-sm" title="Закрыть окно добавления">
                      &#10005;
                    </button>
                  </form>
                </div>
            </div>
        </div>
      </div>
    `;
  }

  static idSelector(id) {
    return `[data-id="${id}"]`;
  }

  static get showCardSelector() {
    return '.item__add';
  }

  static get itemSelector() {
    return '.tasks__item';
  }

  static get itemClass() {
    return 'tasks__item';
  }

  static get listItemsSelector() {
    return '.tasks__list';
  }

  static get listItemsClass() {
    return 'tasks__list';
  }

  static get delItemSelector() {
    return '.item__close';
  }

  static get delItemClass() {
    return 'item__close';
  }

  static get cardSelector() {
    return '.tasks__card';
  }

  static get cardTitleSelector() {
    return '.tasks__title';
  }

  static get closeCardSelector() {
    return '.new__item__close';
  }

  static get addCardSelector() {
    return '.new__item__add';
  }

  static get cardDivSelector() {
    return '.item__card';
  }

  static get textNewItemSelector() {
    return '.new__item__text';
  }

  static highlightTarget(target, style, isHighLight = false) {
    setTimeout(() => {
      if (isHighLight) {
        target.classList.add(style);
      } else {
        target.classList.remove(style);
      }
    }, 0);
  }

  // Разметка HTML и отслеживание событий
  bindToDOM() {
    // Отрисовка HTML
    this.parentEl.innerHTML = '';
    this.tasksList.forEach((tasksList) => {
      this.parentEl.innerHTML += TasksListWidget.tasksListHTML(tasksList);
    });

    // Добавление отслеживания событий на каждый список
    this.tasksList.forEach((list) => this.initEvents(list.id));
  }

  saveItems() {
    if (!this.isUseStorage) {
      return;
    }

    const tasksCards = this.parentEl.querySelectorAll(TasksListWidget.cardSelector);
    this.tasksList = [];

    tasksCards.forEach((card) => {
      const list = {};
      const tasksListItems = card.querySelector(TasksListWidget.listItemsSelector);
      const title = card.querySelector(TasksListWidget.cardTitleSelector);
      const items = tasksListItems.querySelectorAll(TasksListWidget.itemSelector);

      list.title = title.innerText;
      list.items = [];
      items.forEach((item) => list.items.push(item.innerHTML));

      this.tasksList.push(list);
    });

    // console.log(this.tasksList);
    this.storage.writeItem(DATA_KEY, this.tasksList);
  }

  initEvents(id) {
    const tasksCard = this.parentEl.querySelector(TasksListWidget.idSelector(id));
    const tasksListItems = tasksCard.querySelector(TasksListWidget.listItemsSelector);

    // Отработка событий на добавлении новой карточки-задачи
    const showCardItem = tasksCard.querySelector(TasksListWidget.showCardSelector);
    const addNewItem = tasksCard.querySelector(TasksListWidget.addCardSelector);
    const closeCardItem = tasksCard.querySelector(TasksListWidget.closeCardSelector);

    showCardItem.addEventListener('click', (evt) => this.onClickShowCard(evt, tasksCard));
    addNewItem.addEventListener('click', (evt) => this.onClickAddCard(evt, tasksCard, tasksListItems));
    closeCardItem.addEventListener('click', (evt) => this.onClickCloseCard(evt, tasksCard));

    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    tasksListItems.addEventListener('dragenter', this.onDragEnter);
    tasksListItems.addEventListener('dragleave', this.onDragLeave);
    tasksListItems.addEventListener('drop', this.onDrop);
    tasksListItems.addEventListener('dragover', this.onDragOver);

    this.initItemsEvents(tasksListItems);
  }

  initItemsEvents(ul) {
    // Отработка событий на каждой задаче из списка
    const items = ul.querySelectorAll(TasksListWidget.itemSelector);
    items.forEach((item) => this.initItemEvents(item));
  }

  initItemEvents(item) {
    // Событие удаления задачи
    const closeButton = item.querySelector(TasksListWidget.delItemSelector);
    closeButton.addEventListener('click', () => {
      item.remove();
      this.saveItems();
    });

    // Событие входа в зону наведения курсора на задачу
    item.addEventListener('mouseover', (evt) => {
      evt.preventDefault();
      if (closeButton.classList.contains('hidden')) {
        closeButton.classList.remove('hidden');
      }
    });

    // Событие выхода из зоны наведения курсора на задачу
    item.addEventListener('mouseout', (evt) => {
      evt.preventDefault();
      const delButtons = document.querySelectorAll(TasksListWidget.delItemSelector);
      delButtons.forEach((delButton) => {
        if (delButton && !delButton.classList.contains('hidden')) {
          delButton.classList.add('hidden');
        }
      });
    });

    this.onDrag = this.onDrag.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    item.addEventListener('dragstart', this.onDragStart);
    item.addEventListener('dragend', this.onDragEnd);
  }

  // Начало перетаскивания объекта
  // eslint-disable-next-line
  onDragStart(evt) {
    // console.log('onDragStart');
    TasksListWidget.highlightTarget(evt.currentTarget, STYLE_DRAGGING, true);
    this.onDrag(evt);
  }

  // Окончание перетаскивания объекта
  // eslint-disable-next-line
  onDragEnd(evt) {
    // console.log('onDragEnd');
    TasksListWidget.highlightTarget(evt.currentTarget, STYLE_DRAGGING);
  }

  // Перетаскивание объекта
  // eslint-disable-next-line
  onDrag(evt) {
    // console.log('onDrag: ', evt.currentTarget.outerHTML, evt.currentTarget.dataset.id);
    evt.dataTransfer.setData('text/html', evt.currentTarget.outerHTML);
    evt.dataTransfer.setData('text/plain', evt.currentTarget.dataset.id);
  }

  // Объект перетащен
  // eslint-disable-next-line
  onDrop(evt) {
    const tasksCard = evt.currentTarget.closest(TasksListWidget.cardSelector);
    TasksListWidget.highlightTarget(tasksCard, STYLE_DROP);

    document.querySelectorAll(TasksListWidget.listItemsSelector).forEach((column) => column.classList.remove('drop'));
    document.querySelector(TasksListWidget.idSelector(evt.dataTransfer.getData('text/plain'))).remove();

    const element = document.elementFromPoint(evt.clientX, evt.clientY);
    if (!element.classList.contains(TasksListWidget.itemClass)) {
      // eslint-disable-next-line no-param-reassign
      evt.currentTarget.innerHTML += evt.dataTransfer.getData('text/html');
    } else {
      element.insertAdjacentHTML('beforebegin', evt.dataTransfer.getData('text/html'));
    }

    this.saveItems();
    this.initItemsEvents(evt.currentTarget);
  }

  // eslint-disable-next-line
  onDragOver(evt) {
    evt.preventDefault();
  }

  // Вход объекта в зону где может быть сброшен
  // eslint-disable-next-line
  onDragEnter(evt) {
    // console.log('onDragEnter', this.dragEnterTarget, evt.currentTarget, evt.target);
    const tasksCard = evt.target.closest(TasksListWidget.cardSelector);
    TasksListWidget.highlightTarget(tasksCard, STYLE_DROP, true);
    // console.log('highlight enter', tasksCard.className);
  }

  // Выход объекта из зоны где может быть сброшен
  // eslint-disable-next-line
  onDragLeave(evt) {
    // console.log('onDragLeave', this.dragEnterTarget, evt.currentTarget, evt.target);
    const tasksCard = evt.target.closest(TasksListWidget.cardSelector);
    TasksListWidget.highlightTarget(tasksCard, STYLE_DROP);
  }

  // Добавление новой задачи
  onClickAddCard(evt, card, ul) {
    evt.preventDefault();
    const cardItem = card.querySelector(TasksListWidget.cardDivSelector);
    const textItem = cardItem.querySelector(TasksListWidget.textNewItemSelector);
    if (textItem.value.trim().length > 0) {
      // eslint-disable-next-line no-param-reassign
      ul.innerHTML += TasksListWidget.itemHTML([textItem.value]).innerHTML;

      this.saveItems();
      this.initItemsEvents(ul);
    }
    textItem.value = '';
    this.onClickCloseCard(evt, card);
  }

  // Показать карточку добавления новой задачи
  // eslint-disable-next-line
  onClickShowCard(evt, card) {
    evt.preventDefault();
    const cardItem = card.querySelector(TasksListWidget.cardDivSelector);
    if (cardItem && cardItem.classList.contains('hidden')) {
      cardItem.classList.remove('hidden');
    }
    evt.target.classList.add('hidden');
  }

  // Закрыть карточку добавления новой задачи
  // eslint-disable-next-line
  onClickCloseCard(evt, card) {
    evt.preventDefault();
    const cardItem = card.querySelector(TasksListWidget.cardDivSelector);
    const showCard = card.querySelector(TasksListWidget.showCardSelector);
    if (showCard && showCard.classList.contains('hidden')) {
      showCard.classList.remove('hidden');
    }
    cardItem.classList.add('hidden');
  }
}
