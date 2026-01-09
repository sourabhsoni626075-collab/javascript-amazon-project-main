import { renderCartItem } from "../../scripts/checkout/carts-summary.js";
import { loadFromStorage } from "../../data/cart.js";

describe('test suits: renderCartItem', () => {
    it('displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `
         <div class="js-items-quantity"></div>
        <div class = "js-order-summary"></div>
        <div class="payment-summary js-payment-summary"></div>`

        const productId1 = '0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524'
        const productId2 = '8c9c52b5-5a19-4bcb-a5d1-158a74287c53'

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                ID: productId1,
                productPrice: "2250",
                quantity: 6,
                deliveryID: '1'
            }
                ,
            {
                ID: productId2,
                productPrice: "3499",
                quantity: 5,
                deliveryID: '2'
            }]);
        })
        loadFromStorage();
        renderCartItem();
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);
        expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 6')
        expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 5')

    })
    it('removes a product', () => {
        document.querySelector('.js-test-container').innerHTML = `
         <div class="js-items-quantity"></div>
        <div class = "js-order-summary"></div>
        <div class="payment-summary js-payment-summary"></div>`

        const productId1 = '0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524'
        const productId2 = '8c9c52b5-5a19-4bcb-a5d1-158a74287c53'

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                ID: productId1,
                productPrice: "2250",
                quantity: 6,
                deliveryID: '1'
            }
                ,
            {
                ID: productId2,
                productPrice: "3499",
                quantity: 5,
                deliveryID: '2'
            }]);
        })
        loadFromStorage();
        renderCartItem();
    })
    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    })
});