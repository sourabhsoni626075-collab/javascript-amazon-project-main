import { products } from '../data/products.js';
import { addToCart, calculateCartQuantity, cart, loadFromStorage } from '../data/cart.js';
import { formatCurrency, } from './utils/money.js';
import { renderCartItem } from './checkout/carts-summary.js';

let html = '';

products.forEach(({ id, name, image, rating: { stars, count }, priceCents }, products) => {
  html += `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image" src="${image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars" src="images/ratings/rating-${stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${count}
      </div>
    </div>

    <div class="product-price">
      $${formatCurrency(products.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart addedselector${id}"></div>

    <button class="add-to-cart-button button-primary add-to-cart-eventlistner" data-product-name='${name}' data-product-id='${id}' data-product-price='${priceCents}'>
      Add to Cart
    </button>
  </div>`;
});

document.querySelector('.js-html-insert').innerHTML = html;

document.querySelector('.cartSymbol').innerHTML = calculateCartQuantity();

let timerID = 0;

const butttonList = document.querySelectorAll('.add-to-cart-eventlistner');

butttonList.forEach((selectedButton) => {
  selectedButton.addEventListener('click', () => {
    loadFromStorage()
    const { productId, productName, productPrice } = selectedButton.dataset;
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantitySelected = Number(quantitySelector.value);
    const addedSymbol = document.querySelector(`.addedselector${productId}`);

    addToCart(productId, quantitySelected, productPrice);

    document.querySelector('.cartSymbol').innerHTML = calculateCartQuantity();

    addedSymbol.innerHTML = '<img src="images/icons/checkmark.png">  Added';

    console.log(cart)

    clearTimeout(productId);
    productId = setTimeout(() => {
      addedSymbol.innerHTML = '';
    }, 2000);


  });
});
