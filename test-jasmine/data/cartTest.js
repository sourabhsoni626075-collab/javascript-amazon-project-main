import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suits: addToCart', () => {
    it('adds an new product to cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        })
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1adcda678c6', 2, '20');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].ID).toEqual('e43638ce-6aa0-4b85-b27f-e1adcda678c6')
        expect(cart[0].quantity).toEqual(2)
    })
    it('to check existing product into Cart', () => {

        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                ID: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
                productPrice: "2250",
                quantity: 6,
                deliveryID: '1'
            }]);
        })
        loadFromStorage();

        addToCart('0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524', 2, '20');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].ID).toEqual('0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524')
        expect(cart[0].quantity).toEqual(8)

    })
})