export let cart = JSON.parse(localStorage.getItem('cart'))
if (!cart) {
    cart = []
}
export function addToCart(productId, cartSymbol, quantitySelected) {
    let value = 0;
    cart.forEach((product) => {               /* cart.forEach(({ Id, quantity }) => { */
        if (productId === product.ID) {              /* if (productId === Id) { */
            console.log(quantitySelected)
            product.quantity += quantitySelected;        /* quantity = quantitySelected; The issue is here */
            value += 1;
            cartSymbol = quantitySelected;  /* The variable quantity inside the callback is a new, local variable that holds a      
                                                copy  of the value of the original object's quantity property. */
        }
        console.log(productId)
        console.log(product.ID)
    });
    if (value === 0) {
        cart.push({
            quantity: quantitySelected,
            ID: productId
        });
        cartSymbol = quantitySelected;
    }
    saveToLocalStorage()
    return cartSymbol;

}
export function removeFromcart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (!(cartItem.ID === productId)) {
            newCart.push(cartItem)
        }
    })
    cart = newCart
    saveToLocalStorage()
    console.log(cart)
}
function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}
