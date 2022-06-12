//  Каталог товаров
const goods = {
    1: {
        id: 1,
        name: 'Брюки',
        description: 'Брюки мужские',
        sizes: [23, 24, ],
        price: 1520,
        available: true,
    },
    2: {
        id: 2,
        name: 'Брюки',
        description: 'Брюки женские',
        sizes: [3, 6, 7, 8, ],
        price: 2520,
        available: true,
    },
    3: {
        id: 3,
        name: 'Ботинки',
        description: 'Ботинки мужские, кожанные',
        sizes: [41, 42, 44, 48, ],
        price: 5320,
        available: true,
    },
    4: {
        id: 4,
        name: 'Туфли',
        description: 'Туфли женские, замшавые',
        sizes: [33, 36, 37, ],
        price: 2700,
        available: true,
    },
    5: {
        id: 5,
        name: 'Костюм спортивный Adidas',
        description: 'Костюм спортивный, мужской',
        sizes: [33, 44, ],
        price: 5500,
        available: true,
    },
};

// Индексная сетка товаров
const goodsIndex = [goods[0], goods[1], goods[2], goods[3], goods[4], ];

// Корзина потребителя
const basket = [
    {
        good: 5,
        amount: 1
    },
    {
        good: 4,
        amount: 1
    },
];

basket.delPosition = function(id, cnt=0) {
    /*
    Метод удаления товара с индетификатором - id, из корзину в количестве - cnt
    */

    // Поиск товара
    const _position = this.searchPosition(id);

    if (_position[1] === -1) {

        // Возврат ошибки, о том, что товар в корзине не найден
        return {good: undefined, amount: 0};
    } else {

        if (_position[0].amount - cnt <= 0 || cnt === 0){

            // Удаление товара
            this.splice(_position[1], 1);
        } else {

            // Удаление количества товара, из уже существующего в корзине
            _position[0].amount -= cnt;
        }

        // Вывод удаленного/обновленного товара
        return _position[0];
    }
};


basket.addPosition = function(id, cnt) {
    /*
     Метод добавления товара с индетификатором - id, в корзину в количестве - cnt
    */
    
    // Поиск товара
    const _position = this.searchPosition(id);
    _position[0].amount += cnt;
    _position[0].good = id;

    if (_position[1] === -1) {

        // Добавление нового товара в корзину
        this.push(_position[0])
    } else {
        
        // Прибавление количества товара, уже существующего в корзине
        this[_position[1]] = _position[0];
    }

    // Вывод добавленного товара
    return _position[0];
};

basket.clearPositions = function() {
    /*
    Метод полной очистки корзины
    */

    this.length = 0;
    return this.length;
};

basket.searchPosition = function(id) {
    /*
    Метод поиска товара с индетификатором - id, в корзине и возврата его значений и индекса
    */

    // Поиск товара
    const _position = this.find(g => g.good === id);
    if (_position != undefined) {
        
        // Поиск индекса товара
        const _index = this.findIndex(g => g.good === id);
        
        // Возврат информации о товаре и его индекса
        return [_position, _index];
    
    } else {

        // Товар не найден
        return [{good: undefined, amount: 0}, -1];
    }
};

basket.totalCalc = function(){
    /*
    Метод подсчета общего количества товаров, находящихся в корзине и их суммы.
    Выходные параметры:
        totalAmount - общее количество товаров;
        totalSumm - общеая сумма стоимости всех товаров.

    */

    // Подсчет количества товаров
    const amount = this.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);

    // Подсчет общей стоимости товаров
    let cost = 0;    
    for (let i = 0; i < this.length; i++) {
        cost += goods[this[i].good].price * this[i].amount 
    }

    return {
        totalAmount: amount,
        totalSumm: cost
    }
}

//  Проверка поиска товаров с разными идентификаторами
console.log(basket.searchPosition(4));
console.log(basket.searchPosition(111));

//  Проверка очистки корзины
console.log(basket.clearPositions());

// Проверка добавления товаров в корзину или увеличения их количества
console.log(basket.addPosition(4, 5));
console.log(basket.addPosition(4, 3));
console.log(basket.addPosition(1, 1));
console.log(basket.addPosition(3, 2));
console.log(basket.addPosition(5, 2));

// Проверка удалений товаров или уменьшение количества из корзины
console.log(basket.delPosition(4, 5));
console.log(basket.delPosition(5));
console.log(basket.delPosition(15));

// Подсчет количества товаров в корзине, и их стоимости
console.log('Корзина:');
console.log(basket.totalCalc());
