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
    )
}