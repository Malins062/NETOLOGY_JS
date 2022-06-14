class Good {
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

    set setAvailable (value) {
        this.available = value
    }
}

class GoodsList {
    /*
    GoodsList - класс для хранения каталога товаров со свойствами:
        #goods       массив экземпляров объектов класса Good (приватное поле)
        filter       регулярное выражение используемое для фильтрации товаров по полю name
        sortPrice    булево значение, признак включения сортировки по полю Price
        sortDir      булево значение, признак направления сортировки по полю Price (true - по возрастанию, false - по убыванию)

        get list()     возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price
        get listParams()     возвращает текущие параметры
        
        add()          добавление товара в каталог
        remove(id)     удаление товара из каталога по его id
    */
    
    // #goods = [];
    #goods;

    constructor (filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        // Фильтрация
        const resultList = this.#goods.filter((value) => this.filter.test(value.name))

        // Сортировка
        if (this.sortPrice) {
            if (this.sortDir) {
                return resultList.sort((prev, next) => (prev.price - next.price));
            }  else {
                return resultList.sort((prev, next) => (next.price - prev.price));
            }
            // return this.#goods.filter((value) => this.filter.test(value.name))
                            //   .sort((prev, next) => (prev.price <= next.price) ? 1 : -1);
        } else {

            return resultList;
        }
    }

    get listParams() {
        return `Параметры каталога: фильтр - ${this.filter}, сортировака по цене - ${this.sortPrice ? "да" : "нет"} (по ${this.sortDir ? "возрастанию" : "убыванию"})`
    }

    add (good) {
        this.#goods.push(good);
    }

    remove (id) {
        const _index = this.#goods.findIndex(value => value.id === id)
        if (_index != undefined) {
            this.#goods.splice(_index, 1);
        }
        return _index;
    }
}

class BasketGood extends Good {
    /*
    BasketGood - класс дочерний от Good, для хранения данных о товаре в корзине с дополнительным свойством:
        amount      количество товара в корзине
    */

    constructor (id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}

class Basket {
    /*
    Basket - класс для хранения данных о корзине товаров со свойствами:
        goods       массив объектов класса BasketGood для хранения данных о товарах в корзине

        get totalAmount()  возвращает общую стоимость товаров в корзине
        get totalSum()     возвращает общее количество товаров в корзине

        add(good, amount)    Добавляет товар в корзину, если товар уже есть увеличивает количество
        remove(good, amount) Уменьшает количество товара в корзине, если количество становится равным нулю, товар удаляется
        clear()              Очищает содержимое корзины
        removeUnavailable()  Удаляет из корзины товары, имеющие признак available === false (использовать filter())
    */

    constructor () {
        this.goods = []
    }

    get totalAmount () {

    }

    get totalSum () {

    }

    add (good, amount) {
        const _index = this.goods.findIndex(value => value.id === good.id)
        if (_index >= 0) {
            this.goods[_index].amount += amount;
        } else {
            const newBasketGood = new BasketGood(values(good), amount);
            this.goods.push(newBasketGood);
        }
    }

    clear () {
        this.goods = [];
    }

}

// Создание экземпляров товаров
const good_1 = new Good(1, 'Брюки', 'Брюки мужские', [23, 24, ], 1520, true)
const good_2 = new Good(2, 'Брюки', 'Брюки женские', [3, 4, 5, 6, ], 2500, true)
const good_3 = new Good(3, 'Ботинки', 'Ботинки мужские, кожанные', [41, 42, 44, 48, ], 5370, true)
const good_4 = new Good(4, 'Туфли', 'Туфли женские, замшавые', [33, 36, 37, ], 3700, true)
const good_5 = new Good(5, 'Костюм Adidas', 'Костюм спортивный, мужской', [34, 42, ], 10200, true)

good_2.setAvailable = false;

// Создание экземпляра GoodsList
const catalog = new GoodsList(/Брюки/i, true, false);

// Добавление товаров в список
catalog.add(good_1);
catalog.add(good_2);
catalog.add(good_3);
catalog.add(good_4);
catalog.add(good_5);

// Вывод каталога товаров с разными параметрами сортировки и фильтра
console.log(catalog.listParams);
console.log(catalog.list, '\n');

catalog.filter = /и/i;
catalog.sortPrice = false;
console.log(catalog.listParams);
console.log(catalog.list, '\n');

catalog.sortPrice = true;
catalog.sortDir = true;
console.log(catalog.listParams);
console.log(catalog.list, '\n');

// Удаление некоторых товаров из списка
catalog.remove(1);
catalog.remove(3);

// Создание корзины
basket = new Basket();

basket.add(good_1, 1);
basket.add(good_1, 2);

