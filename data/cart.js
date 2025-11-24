export const cart = [

]
export function addToCart(productName, productId, cartSymbol, quantitySelected) {
    let value = 0;
    cart.forEach(({ Id, quantity }) => {
        if (productId === Id) {
            quantity += quantitySelected;
            value += 1;
            cartSymbol = quantitySelected;
        }
    });
    if (value === 0) {
        cart.push({
            name: productName,
            quantity: quantitySelected,
            Id: productId
        });
        cartSymbol = quantitySelected;
    }
    console.log(cartSymbol)
    return cartSymbol;
}