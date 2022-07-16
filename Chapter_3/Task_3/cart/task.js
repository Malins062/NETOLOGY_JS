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
        basketProducts - массив объектов класса BasketProduct для хранения данных о продуктах в корзине

        readBasket() - считывание из куков сохраненной корзины и вывод
        saveBasket() - сохранение текущей корзины в куки

        add(product, amount) - добавляет продукт в корзину, если продукт уже есть увеличивает количество
        remove(product, amount) - уменьшает количество продуктов в корзине, 
                                  если количество становится равным нулю, продукт удаляется,
                                  продукт также удаляется, если параметр amount=0 или не задан
        create(basketProduct) - создает HTML элемент продукта в корзине
    */
   
    #basketProducts;

    constructor (container) {
        // Контейнер корзины
        this.container = container;

        // Контейнер списка продуктов в корзине
        this.cartProducts = this.container.querySelector('.cart__products');

        // Хранилище куков
        this.data = window.localStorage;

        // Кэш корзины
        this.#basketProducts = []

        // Чтение данных корзины из куков
        this.readBasket();
    }

    readBasket () {
        // data.removeItem(this.container.className);

        // Чтение сохраненных данных
        const res = this.data.getItem(this.cartProducts.className);

        // Обработка данных
        const activeProducts = res ? JSON.parse(res) : [];

        // Вывод списка сохраненных задач
        activeProducts.forEach(item => this.add({id: item.id, title: item.title, image: item.image}, item.quantity));
        // console.log('Считанная корзина: ', this.#basketProducts);
    }

    saveBasket () {
        // Сохранение массива задач в localStorage
        this.data.setItem(this.cartProducts.className, JSON.stringify(this.#basketProducts));
        // console.log('Сохраненная корзина: ', this.#basketProducts);
    }

    add (product, amount) {
        const _index = this.#basketProducts.findIndex(value => value.id === product.id)
        if (_index >= 0) {
            // Добавление количества, уже существующего, продукта в корзине
            this.#basketProducts[_index].quantity += amount;

            // HTML-элемент продукта в корзине
            const cartProduct = this.cartProducts.querySelector(`.cart__product[data-id="${product.id}"]`);
            
            // Изменение количества в HTML-эдемента корзины
            cartProduct.querySelector('.cart__product-count').textContent = this.#basketProducts[_index].quantity;
        } else {
            // Добавление нового продукта в корзину
            const newBasketProduct = new BasketProduct(product.id, product.title, product.image, amount);
            this.#basketProducts.push(newBasketProduct);

            // Создание html-элемента нового продукта в корзине
            const newProduct = this.create(newBasketProduct);

            // Добавление продукта в конец корзины
            this.cartProducts.insertAdjacentElement('beforeEnd', newProduct);  
            
            // Показывать корзину
            this.container.className = 'cart cart_active';
        }

        // Сохранение корзины
        this.saveBasket();
    }

    remove (product, amount=0) {
        // HTML-элемент продукта в корзине
        const cartProduct = this.container.querySelector(`.cart__product[data-id="${product.id}"]`);

        const _index = this.#basketProducts.findIndex(value => value.id === product.id)
        if (_index >= 0) {
            if (this.#basketProducts[_index].quantity - amount <= 0 || amount === 0){
                // Удаление продукта из корзины
                this.#basketProducts.splice(_index, 1);

                // Удаление продукта из корзины
                this.cartProducts.children[_index].remove();  
                
                // Скрытие корзины если все товары удалены
                if (this.#basketProducts.length <= 0) {
                    this.container.className = 'cart';
                }
            } else {
                // Изменение количества продукта в корзине
                this.#basketProducts[_index].quantity -= amount;

                // Изменение HTML-элемента
                cartProduct.querySelector('.cart__product-count').textContent = this.#basketProducts[_index].quantity;
            }

            // Сохранение корзины
            this.saveBasket();
        } else {
            console.log(`Функция Basket.remove: не найден продукт с id = ${product.id}`)
        }
    }

    create (basketProduct) {
        /*
        Метод создания html-элемента продукта
        */

        // Создание родительского div-элемента продукта
        const productElement = document.createElement('div');
        productElement.className = 'cart__product'; 
        productElement.dataset.id = basketProduct.id;      
        
        // Создание фотки продукта 
        const productImage = `<img class="cart__product-image" src="${basketProduct.image}">`;

        // Создание количества продукта в корзине 
        const productCount = `<div class="cart__product-count">${basketProduct.quantity}</div>`;

        productElement.insertAdjacentHTML('afterBegin', productImage);
        productElement.insertAdjacentHTML('beforeEnd', productCount);
    
        return productElement;
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
        this.basket = new Basket(document.querySelector('.cart'));

        // Список продуктов
        this.listProducts = Array.from(this.container.querySelectorAll('.product'));

        // Заполнение текущего кэш-списка продуктов
        this.listProducts.forEach(element => {
            const id = element.dataset.id;
            const title = element.querySelector('.product__title').textContent.trim();
            const image = element.querySelector('.product__image').src;
            const quantity = element.querySelector('.product__quantity-value').textContent.trim();
            const newProduct = new ListProduct(id, title, image, quantity);
            this.add(newProduct);    
        });   
        // console.log('Список продуктов: ', this.#products);

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
        const container = this.container;

        // Обработка событий на все доступные продукты в каталоге
        this.#products.forEach((item) => {
            // Экзмепляр продукта в каталоге
            const product = container.querySelector(`.product[data-id="${item.id}"]`);

            // Определение управляющих элементов для текущего продукта
            const quantityInc = product.querySelector('.product__quantity-control_inc');
            const quantityDec = product.querySelector('.product__quantity-control_dec');
            const quantityValue = product.querySelector('.product__quantity-value');
            const productAdd = product.querySelector('.product__add');
            const productRemove = product.querySelector('.product__remove');

            // Добавление количества продукта
            quantityDec.addEventListener('click', () => {
                if (--item.quantity < 1) {
                    item.quantity = 1;
                }

                quantityValue.textContent = item.quantity;
            });

            // Уменьшение количества продукта
            quantityInc.addEventListener('click', () => {
                if (++item.quantity > item.quantityMax) {
                    item.quantity = item.quantityMax;
                }

                quantityValue.textContent = item.quantity;
            });

            // Добавить в корзину
            productAdd.addEventListener('click', () => {
                this.basket.add({id: item.id, title: item.title, image: item.image}, Number(item.quantity));
            });

            // Удалить из корзины
            productRemove.addEventListener('click', () => {
                this.basket.remove({id: item.id, title: item.title, image: item.image}, Number(item.quantity));
            });
        })
    }
}

new ProductsList(document.querySelector('.products'));