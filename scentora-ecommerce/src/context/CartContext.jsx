import { createContext, useState, useEffect} from "react";

export const CartContext = createContext(null);

export function CartProvider ({children}) {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen((prev) => !prev);
   


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

        openCart();
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

    const clearCart = () => {
        setCart([]);
    }

    // calculating the total in terms of quantity
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    // calculating the total in terms of item
    
    const cartTotal = cart.reduce((total, item) => {
        const priceToUse = item.salePrice ?? item.price;
        return total + (priceToUse * item.quantity)
    }, 0)
    


    const value = { cart, cartCount, cartTotal, isCartOpen, setCart, addToCart, removeFromCart, updateQuantity, clearCart, openCart,
        closeCart, toggleCart}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}