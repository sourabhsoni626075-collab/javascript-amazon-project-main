
let html = '';

products.forEach(
  (products) => {
    html += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(products.priceCents).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${products.id}">
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary add-to-cart-eventlistner" data-product-name='${products.name}' data-product-id='${products.id}'>
            Add to Cart
          </button>
        </div>`
  }
)
document.querySelector('.js-html-insert').
  innerHTML = html;


let cartSymbol = 0;

const butttonList = document.querySelectorAll('.add-to-cart-eventlistner')
butttonList.forEach((selectedButton) => {
  selectedButton.addEventListener('click', () => {
    const productId = selectedButton.dataset.productId
    const productname = selectedButton.dataset.productName

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
    const quantitySelected = Number(quantitySelector.value)
    let value = 0;
    cart.forEach((cartItem) => {
      if (productId === cartItem.Id) {
        cartItem.quantity += quantitySelected
        value += 1
        cartSymbol += quantitySelected
      }
    })
    if (value === 0) {
      cart.push(
        {
          name: productname,
          quantity: quantitySelected,
          Id: productId
        }
      )
      cartSymbol += quantitySelected
    } document.querySelector('.cartSymbol').innerHTML = cartSymbol;
    console.log(cart);
  }
  )
}
)

