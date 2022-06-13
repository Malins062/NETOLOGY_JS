class Goods {
    /*
    Класс для хранения данных о товаре со свойствами:
        id            код товара
        name          наименование
        description   описание
        sizes         массив возможных размеров
        price         цена товара
        available     булево значение, признак доступности товара для продажи (true - доступен, false - недоступен)

        set available() изменение признака доступности товара для продажи 
    */
    
    constructor (id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    /**
     * @param {boolean} value
     */
    set available (value) {
        this.available = value
    }
}

class GoodList {
    /*
    GoodsList - класс для хранения каталога товаров со свойствами:
        #goods       массив экземпляров объектов класса Good (приватное поле)
        filter       регулярное выражение используемое для фильтрации товаров по полю name
        sortPrice    булево значение, признак включения сортировки по полю Price
        sortDir      булево значение, признак направления сортировки по полю Price (true - по возрастанию, false - по убыванию)

        get list()     возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price
        add()          добавление товара в каталог
        remove(id)     удаление товара из каталога по его id
    */

    constructor (filter, sortPrice, sortDir) {
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
}