import { cart } from '../data/cart.js'
import { products } from '../data/products.js';
console.log(cart)

let cartSummaryHTML = '';

paymentSummery()

cart.forEach(({ CID, quantity }) => {
  products.forEach(({ id, name, image, priceCents }) => {
    if (CID === id) {
      cartSummaryHTML += `<div class="cart-item-container">
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
             $${(priceCents / 100).toFixed(2)}
         </div>
         <div class="product-quantity">
             <span>
             Quantity: <span class="quantity-label">${quantity}</span>
             </span>
             <span class="update-quantity-link link-primary">
             Update
             </span>
             <span class="delete-quantity-link link-primary">
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
      console.log(id, name, image, priceCents)

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


document.querySelector('.order-summary').
  innerHTML = cartSummaryHTML