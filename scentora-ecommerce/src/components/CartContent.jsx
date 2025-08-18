import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from '../components/Button';
import './CartContent.css';

const CartContent = ({variant, onNavigate, showSummary}) => {
    const { cart, cartTotal, removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <div className={`cart-product-container ${variant}`}>
            <div className="cart-products"> 
                <div className= {`cart-layout`}>
                    <div className="cart-item-heading">
                        <h3>Products</h3>
                    </div>
                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <p className> Your cart is currently empty.</p>
                            <Button className='ButtonTwo' onClick={() => onNavigate('/shop')}>
                                Return to Shop
                            </Button>
                        </div>

                    ): (
                        cart.map((item) => (
                            <div key={item.id} className={`cart-item ${variant}`}>
                                <button className="close-icon" onClick={() => removeFromCart(item.id)}>
                                    <i class="fa-regular fa-trash-can"></i>
                                </button>
                                <div className={`item-image-wrapper`}>
                                    <img src={item.image} alt={item.name} className={`cart-item-img`} />
                                </div>
                                <div className={`cart-wrapper`}>
                                    <div className={`cart-item-details`}>
                                        <h3>{item.name}</h3>

                                        <div className={`cart-quantity-wrapper`}>
                                            <h4>Quantity</h4>
                                            <div className={`quantity-selector`}>
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`cart-price`}>
                                        <div>
                                            {item.salePrice ? (
                                                <>
                                                    <span className="cart-new-price">${item.salePrice.toFixed(2)}</span>
                                                    <span className="cart-old-price">${item.price.toFixed(2)}</span>
                                                </>

                                            ) : (
                                                <span className="cart-new-price">${item.price.toFixed(2)}</span>
                                            )}

                                        </div>

                                        <p className="wishlist">Add To Wishlist ♡</p>

                                            <p className="wishlist">Add To Wishlist ♡</p>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    )}
                </div>

            {showSummary &&
                <div className="cart-summary">
                    <h3>Cart Summary</h3>

                    <div className="summary-row">
                        <span>SubTotal</span>
                        <span className='cart-summary-value' >${cartTotal.toFixed(2)}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span className='cart-summary-value'>FREE</span>
                    </div>

                    <div className="summary-row">
                        <span>SubTotal</span>
                        <span className='cart-summary-value'>${cartTotal.toFixed(2)}</span>
                    </div>

                    <Button className="ButtonOne width">Checkout</Button>
                </div>
            }
            </div>
        </div>
    )
}

export default CartContent;
