import { products } from '../data/products.js';
import { addToCart } from '../data/cart.js';
import { formatCurrency } from './utils/money.js';


let html = '';
products.forEach(({ id, name, image, rating: { stars, count }, priceCents }) => {
  html += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(priceCents)}
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

          <div class="added-to-cart addedselector${id}">
              
          </div> 
          
          <button class="add-to-cart-button button-primary add-to-cart-eventlistner" data-product-name='${name}' data-product-id='${id}' data-product-price='${(priceCents / 100).toFixed(2)}'>
            Add to Cart
          </button>
        </div>`
});

document.querySelector('.js-html-insert').innerHTML = html;

let cartSymbol = 0;
let timerID = 0;

const butttonList = document.querySelectorAll('.add-to-cart-eventlistner');

butttonList.forEach((selectedButton) => {
  selectedButton.addEventListener('click', () => {
    const { productId, productName, productPrice } = selectedButton.dataset;
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantitySelected = Number(quantitySelector.value);
    const addedSymbol = document.querySelector(`.addedselector${productId}`);

    cartSymbol += addToCart(productName, productId, cartSymbol, quantitySelected, productPrice)

    document.querySelector('.cartSymbol').innerHTML = cartSymbol;
    addedSymbol.innerHTML = '<img src="images/icons/checkmark.png">  Added';
    clearTimeout(timerID)
    timerID = setTimeout(() => {
      addedSymbol.innerHTML = "";
    }, 2000);


    console.log(productName)

  });
});
