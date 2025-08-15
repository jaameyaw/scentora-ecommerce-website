import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './Cart.css';

const Cart = () => {
    const { cart, cartCount, cartTotal, removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <section className="cart">
            <Breadcrumbs aria-label="breadcrumb" separator="›" >
                <Link href="/" underline="hover" color='inherit'>Home</Link>
                <Link href="/cart" underline='hover' color='inherit'>Cart</Link>
            </Breadcrumbs>
 
            <div className="cart-container">
                <div className="cart-header">
                    <img src="/images/shopping-bag.png" />
                    <h2>Your Cart ({cartCount} items)</h2>
                </div>

                <div className="card-product-container">
                    <div className="card-products">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ): (
                            cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <button className="close-icon" onClick={() => removeFromCart(item.id)}>
                                        <i class="fa-regular fa-trash-can"></i>
                                    </button>
                                    <img src={item.image} alt={item.name} className="cart-item-img" />
                                    <div className="cart-item-details">
                                        <h3>{item.name}</h3>

                                        <div className="cart-quantity-wrapper">
                                            <h4>Quantity</h4>
                                            <div className="cart-quantity">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
    )
}