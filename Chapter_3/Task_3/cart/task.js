class Product {
    /*
    Класс для хранения данных о товаре со свойствами:
        id - код товара;
        name - наименование;
        img - фото товара;
    */
    
    constructor (id, title, image) {
        this.id = id;
        this.title = title;
        this.image = image;
    }
}

class BasketProduct extends Product {
    /*
    BasketProduct - класс дочерний от Product, для хранения данных о продукте в корзине с дополнительным свойством:
        quantity - количество товара в корзине.
    */

    constructor (id, title, image, quantity) {
        super(id, title, image);
        this.quantity = quantity;
    }
}

class Basket {
    /*
    Basket - класс для хранения данных о корзине продуктов со свойствами:
        products - массив объектов класса BasketProduct для хранения данных о продуктах в корзине

        add(product, amount) - добавляет продукт в корзину, если продукт уже есть увеличивает количество
        remove(product, amount) - уменьшает количество продуктов в корзине, 
                                  если количество становится равным нулю, продукт удаляется,
                                  продукт также удаляется, если параметр amount=0 или не задан
        clear() - очищает содержимое корзины
    */

    constructor () {
        this.products = []
        console.log('Корзина - ', this.products);
    }

    add (product, amount) {
        const _index = this.products.findIndex(value => value.id === product.id)
        if (_index >= 0) {
            // Добавление количества, уже существующего, продукта в корзине
            this.products[_index].quantity += amount;
        } else {
            // Добавление нового продукта в корзину
            const newBasketProduct = new BasketProduct(product.id, product.title, product.image, amount);
            this.products.push(newBasketProduct);
        }
        console.log('Корзина - ', this.products);
    }

    remove (product, amount=0) {
        const _index = this.products.findIndex(value => value.id === product.id)
        if (_index >= 0) {
            if (this.products[_index].quantity - amount <= 0 || amount === 0){
                // Удаление проудкта из корзины
                this.products.splice(_index, 1);
            } else {
                // Изменение количества продукта в корзине
                this.products[_index].quantity -= amount;
            }
        } else {
            console.log(`Функция Basket.remove: не найден продукт с id = ${product.id}`)
        }
        console.log('Корзина - ', this.products);
    }

    clear () {
        this.products.length = 0;
    }
}

class ListProduct extends Product {
    /*
    ListProduct - класс дочерний от Product, для хранения данных о продуктах в списке-кэше с дополнительным свойством:
        quantity - количество продуктов;
        quantityMax - максимальное количество продуктов, которое можно одновременно добавить в корзину (по умолчанию=10).
    */

    constructor (id, title, image, quantity, quantityMax=10) {
        super(id, title, image);
        this.quantity = quantity;
        this.quantityMax = quantityMax;
    }
}

class ProductsList {
    /*
    ProductsList - класс для хранения каталога товаров со свойствами:
        #products - массив экземпляров объектов класса Product (приватное поле)

        registerEvents() - обработчик событий
        add(product) - добавление товара в каталог
    */
    
    #products;

    constructor (container) {
        // Кэш - начальный список продуктов
        this.#products = [];

        this.container = container;

        // Корзина
        this.basket = new Basket();

        // Список продуктов
        this.products = Array.from(this.container.querySelectorAll('.product'));

        // Заполнение текущего кэш-списка продуктов
        this.products.forEach(element => {
            const id = element.dataset.id;
            const title = element.querySelector('.product__title').textContent.trim();
            const image = element.querySelector('.product__image').src;
            const quantity = element.querySelector('.product__quantity-value').textContent.trim();
            const newProduct = new ListProduct(id, title, image, quantity);
            this.add(newProduct);    
        });   

        console.log('Список продуктов: ', this.#products);

        // Обработчик событий
        this.registerEvents();    
    }

    add (product) {
        /*
        Метод добавление товара в общий список товаров:
            product - товар (класс product)
        */

        this.#products.push(product);
    }

    registerEvents () {
        const products = this.container;

        this.#products.forEach((item) => {
            const product = this.container.querySelector(`.product[data-id="${item.id}"]`);
            console.log(product)

            const quantityInc = product.querySelector('.product__quantity-control_inc');
            const quantityDec = product.querySelector('.product__quantity-control_dec');
            const quantityValue = product.querySelector('.product__quantity-value');
            const productAdd = product.querySelector('.product__add');

            quantityDec.addEventListener('click', () => {
                if (--item.quantity < 1) {
                    item.quantity = 1;
                }

                console.log('Список продуктов: ', this.#products);

                quantityValue.textContent = item.quantity;
            });

            quantityInc.addEventListener('click', () => {
                if (++item.quantity > item.quantityMax) {
                    item.quantity = item.quantityMax;
                }

                console.log('Список продуктов: ', this.#products);

                quantityValue.textContent = item.quantity;
            });

            productAdd.addEventListener('click', () => {
                this.basket.add({id: item.id, title: item.title, image: item.image}, item.quantity);
            });
        })
    }
}

new ProductsList(document.querySelector('.products'));