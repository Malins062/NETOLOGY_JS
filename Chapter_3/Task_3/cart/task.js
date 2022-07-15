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

class ListProduct extends Product {
    /*
    ListProduct - класс дочерний от Product, для хранения данных о продуктах в списке-кэше с дополнительным свойством:
        quantity - количество продуктов.
    */

    constructor (id, title, image, quantity) {
        super(id, title, image);
        this.quantity = quantity;
    }
}

class ProductsList {
    /*
    ProductsList - класс для хранения каталога товаров со свойствами:
        #goods       массив экземпляров объектов класса Good (приватное поле)
        filter       регулярное выражение используемое для фильтрации товаров по полю name
        sortPrice    булево значение, признак включения сортировки по полю Price
        sortDir      булево значение, признак направления сортировки по полю Price (true - по возрастанию, false - по убыванию)

        get list()     возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price
        get listParams()     возвращает текущие параметры
        
        add()          добавление товара в каталог
        remove(id)     удаление товара из каталога по его id
    */
    
    #products;

    constructor (container) {
        // Кэш - начальный список продуктов
        this.#products = [];

        // DOM-элемент список продуктов
        this.productsDOM = Array.from(container.querySelectorAll('.product'));

        // Заполнение текущего кэш-списка продуктов
        this.productsDOM.forEach(element => {
            const id = element.dataset.id;
            const title = element.querySelector('.product__title').textContent.trim();
            const image = element.querySelector('.product__image').src;
            const quantity = element.querySelector('.product__quantity-value').textContent.trim();
            const newProduct = new ListProduct(id, title, image, quantity);
            this.add(newProduct);    
        });   

        console.log(this.#products);    
    }

    add (product) {
        /*
        Метод добавление товара в общий список товаров:
            product - товар (класс product)
        */

        this.#products.push(product);
    }
}

new ProductsList(document.querySelector('.products'));