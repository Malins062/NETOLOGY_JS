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
        goodId: 5,
        amount: 1
    },
    {
        goodId: 4,
        amount: 1
    },
];


console.time();
console.log(d(process.argv[2]));
console.timeEnd();
