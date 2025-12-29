
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        ID: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
        productPrice: "2250",
        quantity: 6,
        deliveryID: '1'
    }];
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
            productPrice: price,
            deliveryID: '1'

        });
    }

    saveToLocalStorage();
    console.log(cart);
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
}

export function saveToLocalStorage() {
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


