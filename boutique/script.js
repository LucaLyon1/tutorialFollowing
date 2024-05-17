const products = [
    {
        name: 'Sony Playstation 5',
        url: 'images/playstation_5.png',
        type: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung Galaxy',
        url: 'images/samsung_galaxy.png',
        type: 'smartphones',
        price: 399.99,
    },
    {
        name: 'Cannon EOS Camera',
        url: 'images/cannon_eos_camera.png',
        type: 'cameras',
        price: 749.99,
    },
    {
        name: 'Sony A7 Camera',
        url: 'images/sony_a7_camera.png',
        type: 'cameras',
        price: 1999.99,
    },
    {
        name: 'LG TV',
        url: 'images/lg_tv.png',
        type: 'televisions',
        price: 799.99,
    },
    {
        name: 'Nintendo Switch',
        url: 'images/nintendo_switch.png',
        type: 'games',
        price: 299.99,
    },
    {
        name: 'Xbox Series X',
        url: 'images/xbox_series_x.png',
        type: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung TV',
        url: 'images/samsung_tv.png',
        type: 'televisions',
        price: 1099.99,
    },
    {
        name: 'Google Pixel',
        url: 'images/google_pixel.png',
        type: 'smartphones',
        price: 499.99,
    },
    {
        name: 'Sony ZV1F Camera',
        url: 'images/sony_zv1f_camera.png',
        type: 'cameras',
        price: 799.99,
    },
    {
        name: 'Toshiba TV',
        url: 'images/toshiba_tv.png',
        type: 'televisions',
        price: 499.99,
    },
    {
        name: 'iPhone 14',
        url: 'images/iphone_14.png',
        type: 'smartphones',
        price: 999.99,
    },
];

let container = document.getElementById('products');
let search = document.getElementById('search');
let filters = document.getElementById('filters');
let checkEls = document.querySelectorAll('.check');
let productEls = [];

search.addEventListener('input', filterProducts);
filters.addEventListener('change', filterProducts)

products.forEach((product) => {
    const productEl = createProductElement(product);
    productEls.push(productEl);
    container.appendChild(productEl);
})

function createProductElement(product) {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
    <div class="upperCard">
        <img src="${product.url}" alt="${product.name}" class="productImage" />
        <button class="addCart">Ajouter au panier</button>
    </div>
    <div class="loverCard">
        <p>${product.name}</p>
        <strong>${product.price.toLocaleString()}$</strong>
    </div>
    `
    div.querySelector('.addCart').addEventListener('click', addToCart);
    return div;
}

function addToCart() {
    alert('hello world')
}


function filterProducts() {
    let filter = search.value.trim().toLowerCase();
    let checkedTypes = Array.from(checkEls).filter((el) => el.checked).map((el) => el.id);
    productEls.forEach((productEl, index) => {
        const product = products[index];
        const match = product.name.toLowerCase().trim().includes(filter);
        const isChecked = checkedTypes.length == 0 || checkedTypes.includes(product.type);
        if (match && isChecked) {
            productEl.className = 'product'
        } else {
            productEl.className = 'product hidden';
        }
    })
}
