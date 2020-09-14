const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = ({title}, {price}, img = 'img/exampleImg.jpg' ) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${img}" alt="">
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((product) => {
        return renderProduct(product, product);
    }).join(' ');
    console.log(productList);
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
// TASK 3. When map convert array to string automatically join with comma,
// here I used join() with space separator

// TASK 2. sorry, I think I didn't understand second Task ;*(