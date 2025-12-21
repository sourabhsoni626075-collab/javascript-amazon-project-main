import { cart } from '../../data/cart.js';

export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2)
}
export function ordersValue() {
    let value = 0;
    cart.forEach((array) => {
        value += array.quantity * array.productPrice
    })
    return value;

}
export function totalBeforeTax() {
    return 499 + ordersValue()
}
export function estimatedTax() {
    return totalBeforeTax() * 10 / 100
}
export function orderTotal() {
    return estimatedTax() + totalBeforeTax()
}
export function dynamicQuantityValue(productId) {

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        if (productId === product.ID) {
            return product.quantity

        }
    }

}
