import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartContent from '../components/CartContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './Cart.css';

const Cart = () => {
    const { cartCount} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <section className="cart">
            <Breadcrumbs aria-label="breadcrumb" separator="›" >
                <Link href="/" underline="hover" color='inherit'>Home</Link>
                <Link href="/cart" underline='hover' color='inherit'>Cart</Link>
            </Breadcrumbs>
 
            <div className="cart-container">
                <div className="cart-header">
                    <div className="img-wrapper">
                        <img src="/images/shopping-bag.png" />
                    </div>
                    <h1>Your Cart ({cartCount} items)</h1>
                </div>

                <CartContent variant='page' showSummary={true} onNavigate={navigate} />

            </div>

        </section>
    )
}

export default Cart;