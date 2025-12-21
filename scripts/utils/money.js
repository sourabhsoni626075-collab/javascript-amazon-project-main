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
