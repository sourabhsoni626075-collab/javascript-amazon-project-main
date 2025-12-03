import { cart } from '../data/cart.js'
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';


let cartSummaryHTML = '';
let deleteButtonValue = 0;

paymentSummery()

cart.forEach(({ CID, quantity }) => {
  products.forEach(({ id, name, image, priceCents }) => {
    if (CID === id) {
      cartSummaryHTML += `<div class="cart-item-container
      js-cart-item-container${deleteButtonValue}">
      <div class="delivery-date">
         Delivery date: Tuesday, June 21
     </div>
 
     <div class="cart-item-details-grid">
         <img class="product-image"
         src="${image}">
 
         <div class="cart-item-details">
         <div class="product-name">
             ${name}
         </div>
         <div class="product-price">
             $${formatCurrency(priceCents)}
         </div>
         <div class="product-quantity">
             <span>
             Quantity: <span class="quantity-label js-quantity-label${id}">${quantity}</span>
             </span>
             <span class="update-quantity-link link-primary js-update-button"data-cart-index='${deleteButtonValue}'>
             Update
             </span>
             <span class="delete-quantity-link link-primary js-delete-button" data-cart-index='${deleteButtonValue}'>
             Delete
             </span>
         </div>
         </div>
 
         <div class="delivery-options">
         <div class="delivery-options-title">
             Choose a delivery option:
         </div>
         <div class="delivery-option">
             <input type="radio" checked
             class="delivery-option-input"
             name="delivery-option-${CID}">
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
             <input type="radio"
             class="delivery-option-input"
             name="delivery-option-${CID}">
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
             <input type="radio"
             class="delivery-option-input"
             name="delivery-option-${CID}">
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
     </div>`

      deleteButtonValue += 1

    }
  })
})

function paymentSummery() {
  cartSummaryHTML += `      <div class="payment-summary">
        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (3):</div>
          <div class="payment-summary-money">$42.75</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$4.99</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$47.74</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$4.77</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$52.51</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>
      </div>`}

document.querySelector('.js-order-summary').
  innerHTML = cartSummaryHTML

deleteButtonWorking()
function deleteButtonWorking() {
  const quantityDeleteButton = document.querySelectorAll('.js-delete-button');
  quantityDeleteButton.forEach((buttton) => {
    let index = Number(buttton.dataset.cartIndex)

    buttton.addEventListener('click', () => {
      const id = cart[index].CID
      let ammount = cart[index]
      console.log(id)
      if (!(ammount.quantity === 0)) {
        ammount.quantity = ammount.quantity - 1
      }
      document.querySelector(`.js-quantity-label${id}`).innerHTML = ammount.quantity;
    })

  })
}
updateButtonWorking()
function updateButtonWorking() {
  const updateButtons = document.querySelectorAll('.js-update-button')
  updateButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let index = Number(button.dataset.cartIndex)
      let ammount = cart[index].quantity
      if (ammount === 0) {
        document.querySelector(`.js-cart-item-container${index}`).remove();
      }

    })
  })
}