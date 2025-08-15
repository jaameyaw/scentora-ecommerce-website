import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './Cart.css';

const Cart = () => {
    const { cart, cartCount, cartTotal, removeFromCart, updateQuantity } = useContext(CartContext);

export default function Cart() {
    return (
        <>
            <h1>Cart</h1>
        </>
    )
}