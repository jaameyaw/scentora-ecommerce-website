import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '../components/Button';
import './Cart.css';

const Cart = () => {
    const { cart, cartCount, cartTotal, removeFromCart, updateQuantity } = useContext(CartContext);
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

                <div className="card-product-container">
                    <div className="cart-products"> 
                        <div className="cart-layout">
                            <div className="cart-item-heading">
                                <h3>Products</h3>
                            </div>
                            {cart.length === 0 ? (
                                <div className="cart-empty">
                                    <p className> Your cart is currently empty.</p>
                                    <Button className='ButtonTwo' onClick={() => navigate('/shop')}>
                                        Return to Shop
                                    </Button>
                                </div>

                            ): (
                                cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <button className="close-icon" onClick={() => removeFromCart(item.id)}>
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                        <div className='item-image-wrapper'>
                                            <img src={item.image} alt={item.name} className="cart-item-img" />
                                        </div>
                                        <div className="cart-item-details">
                                            <h3>{item.name}</h3>

                                            <div className="cart-quantity-wrapper">
                                                <h4>Quantity</h4>
                                                <div className="quantity-selector">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-price">
                                                <div>
                                                    {item.salePrice ? (
                                                        <>
                                                            <span className="cart-new-price">${item.salePrice.toFixed(2)}</span><br />
                                                            <span className="cart-old-price">${item.price.toFixed(2)}</span>
                                                        </>

                                                    ) : (
                                                        <span className="cart-new-price">${item.price.toFixed(2)}</span>
                                                    )}

                                                </div>

                                            <p className="wishlist">Add To Wishlist ♡</p>
                                        </div>

                                    </div>

                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cart;