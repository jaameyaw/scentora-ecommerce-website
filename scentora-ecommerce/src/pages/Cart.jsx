import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartContent from '../components/CartContent';
import Breadcrumb from '../components/Breadcrumb';
import './Cart.css';

const Cart = () => {
    const { cartCount} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <section className="cart">
            <Breadcrumb links={[
                
                {to: "/", label: "Home" },
                {to: "/cart", label: "Cart" }
            ]}/>
 
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