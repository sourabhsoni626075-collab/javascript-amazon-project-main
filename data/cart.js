export const cart = [
    {
        quantity: 2,
        CID: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    },
    {
        quantity: 1,
        CID: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    }
]
export function addToCart(productName, productId, cartSymbol, quantitySelected, productPrice) {
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
            quantity: quantitySelected,
            Id: productId
        });
        cartSymbol = quantitySelected;
    }
    console.log(cartSymbol)
    return cartSymbol;
}