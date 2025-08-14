import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider ({children}) {

    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((cartProduct) =>
                cartProduct.id === product.id
            );

            if (existingProduct) {
                return prevCart.map((cartProduct) =>
                    cartProduct.id === product.id
                    ? {...cartProduct, quantity: cartProduct.quantity + quantity} 
                    : cartProduct   
                ); 
            } else {
                return [...prevCart, { ...product, quantity }]; 
            }
        })
    }


    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((cartProduct) => cartProduct.id !== id));
    }

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) =>
        prevCart.map((cartProduct) =>
            cartProduct.id === id ? { ...cartProduct, quantity } : cartProduct)
        )
    }

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);


    const value = { cart, cartCount, setCart, addToCart, removeFromCart, updateQuantity }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}