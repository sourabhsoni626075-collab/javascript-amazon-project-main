import { cart, removeFromcart, calculateCartQuantity, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { paymentSummery } from './Payment-summary.js';
import { formatCurrency, ordersValue } from './utils/money.js';


let cartSummaryHTML = '';
renderCartItem()

function renderCartItem() {
  cartSummaryHTML += `<div class="js-payment-summary">${paymentSummery()} </div>`;


  cart.forEach(({ ID, quantity }) => {
    products.forEach(({ id, name, image, priceCents }) => {
      if (ID === id) {
        cartSummaryHTML += `<div class="cart-item-container js-cart-item-container${id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image" src="${image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${name}
            </div>
            <div class="product-price">
              $${formatCurrency(priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label js-quantity-label${ID}">${quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id='${ID}' data-state="off">
                Update
              </span>
               <span class="input-generator${ID}"></span>
              <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id='${ID}'>
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input type="radio" checked class="delivery-option-input" name="delivery-option-${ID}">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" class="delivery-option-input" name="delivery-option-${ID}">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" class="delivery-option-input" name="delivery-option-${ID}">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      }
    });
  });
  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
  document.querySelector('.js-items-quantity').innerHTML = `${calculateCartQuantity()} items`
  dltBtnEventListner()
  updtBtnEventListner()
}

function dltBtnEventListner() {
  document.querySelectorAll('.js-delete-quantity-link').forEach((dltButton) => {
    dltButton.addEventListener('click', () => {
      const productId = dltButton.dataset.productId;
      removeFromcart(productId);
      document.querySelector(`.js-cart-item-container${productId}`).remove();
      document.querySelector('.js-payment-summary').innerHTML = paymentSummery()
      ordersValue()


    });
  });
}
function updtBtnEventListner() {
  const updateButton = document.querySelectorAll('.js-update-quantity-link')
  updateButton.forEach((updtButton) => {
    const productId = updtButton.dataset.productId;
    const btn = updtButton.dataset;

    updtButton.addEventListener('click', () => {
      const inputElement = document.querySelector(`.input-generator${productId}`)
      if (btn.state === 'off') {
        inputElement.innerHTML = `<input class="quantity-input js-quantity-input${productId}" 
        type="number" >`
        updtButton.innerHTML = 'Save';
        btn.state = 'on'
      }
      else {
        updtButton.innerHTML = 'Update';
        savebtnEventListner(productId)
        btn.state = 'off'
        inputElement.innerHTML = ''


      }
    })
  })
}
function savebtnEventListner(productId) {
  const input = document.querySelector(`.js-quantity-input${productId}`)
  const value = Number(input.value);
  addToCart(productId, value)

}

