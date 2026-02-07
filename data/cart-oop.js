function Cart(localStorageKey) {
    const cart = {
        cartItems: [],
  

        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

            if (!(this.cartItems)) {
                this.cartItems = [/* {
            ID: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
            productPrice: "2250",
            quantity: 6,
            deliveryID: '1'
        } */];
            }

        }
        ,
        addToCart(productId, quantitySelected, price) {
            let value = 0;

            this.cartItems.forEach((product) => {
                if (productId === product.ID) {
                    product.quantity += quantitySelected;
                    value += 1;

                }

            });

            if (value === 0) {
                this.cartItems.push({
                    quantity: quantitySelected,
                    ID: productId,
                    productPrice: price,
                    deliveryID: '1'

                });
            }

            this.saveToLocalStorage();
        }
        ,
        changeInCart(productId, quantitySelected) {
            this.cartItems.forEach((product) => {
                if (productId === product.ID) {
                    if ((product.quantity + quantitySelected) > 0) {
                        product.quantity += quantitySelected;
                    }
                    else {
                        product.quantity = 1;
                    }
                }
            });

            saveToLocalStorage();
        }
        ,
        removeFromcart(productId) {
            const newCart = [];

            this.cartItems.forEach((cartItem) => {
                if (!(cartItem.ID === productId)) {
                    newCart.push(cartItem);
                }
            });

            this.cartItems = newCart;
            saveToLocalStorage();
        }
        ,
        saveToLocalStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        }
        ,
        calculateCartQuantity() {
            let calculateCartQuantity = 0;

            this.cartItems.forEach((item) => {
                calculateCartQuantity += item.quantity;
            });

            return calculateCartQuantity;
        },
        totalItemPrice() {
            let totalItemPrice = 0;

            this.cartItems.forEach((item) => {
                totalItemPrice += item.price;
            });

            return totalItemPrice;
        }
    };

    return cart
}


const cart = Cart('cart-oop');
const bussnessCart = Cart('cart-bussness');

cart.loadFromStorage()

cart.addToCart('5968897c-4d27-4872-89f6-5bcb052746d7', 5, 4885
)
cart.addToCart('aad29d11-ea98-41ee-9285-b916638cac4a', 5, 4885
)
console.log(cart.cartItems)

bussnessCart.loadFromStorage()

bussnessCart.addToCart('e4f64a65-1377-42bc-89a5-e572d19252e2', 5, 4885
)
bussnessCart.addToCart('4f4fbcc2-4e72-45cc-935c-9e13d79cc57f', 5, 4885
)
console.log(bussnessCart.cartItems)









