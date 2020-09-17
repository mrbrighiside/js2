class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.allProducts = [];
    this.fullCartPrice = 0

    this.#fetchGoods();
    this.#render();
    this.summaryAllCart()
  }

  #fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }

  summaryAllCart() {
    for (let product of this.allProducts) {
      this.fullCartPrice += product.price
    }
    console.log(this.fullCartPrice)
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }
  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const list = new ProductList();

class Cart {
  #goods
  constructor(container) {
  }
  renderCart(){}
  summaryAllProducts(){}
}

class cartItem {
  #goods
  constructor(product) {
  }
  pushProductsToCart(){}
}