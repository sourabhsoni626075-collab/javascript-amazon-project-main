export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [];
}

export function addToCart(productId, quantitySelected, price) {
    let value = 0;

    cart.forEach((product) => {
        if (productId === product.ID) {
            product.quantity += quantitySelected;
            value += 1;

        }
    });

    if (value === 0) {
        cart.push({
            quantity: quantitySelected,
            ID: productId,
            productPrice: price
        });
    }

    saveToLocalStorage();
}

export function removeFromcart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (!(cartItem.ID === productId)) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToLocalStorage();
    document.querySelector('.js-items-quantity').innerHTML = `${calculateCartQuantity()} items`
    document.querySelector('.payment-summary-row').innerHTML = `Items (${calculateCartQuantity()}):`
}

function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function calculateCartQuantity() {
    let calculateCartQuantity = 0;

    cart.forEach((item) => {
        calculateCartQuantity += item.quantity;
    });

    return calculateCartQuantity;
}

export function totalItemPrice() {
    let totalItemPrice = 0;

    cart.forEach((item) => {
        totalItemPrice += item.price;
    });

    return totalItemPrice;
}