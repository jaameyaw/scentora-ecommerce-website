import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import SideBarWrapper from './SideBarWrapper';
import '../App.css';
import Button from './Button';



const CartSideBar = ({isOpen, onClose, children}) => {
    const { cart, cartCount, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>
            {cart.length === 0 ? (
                <SideBarWrapper 
                    isOpen={isOpen} 
                    onClose={onClose} 
                    position="right" 
                    variant='cart'
                    className="cartsidebarHeader" 
                    headerContent= {`Your Cart (${cartCount} items)`}
                >
                
                <div className="emptyCartSidebar">     
                    <p className='emp'>Your cart is currently empty.</p>
                    <Button className='ButtonTwo width ' onClick={() => {
                        onClose();
                        navigate('/shop');
                    }}>
                        Return to Shop
                    </Button>  
                </div>

                </SideBarWrapper>   
            ) : (   
                <SideBarWrapper 
                    isOpen={isOpen} 
                    onClose={onClose} 
                    position="right" 
                    variant='cart'
                    className="cartsidebarHeader" 
                    headerContent= {`Your Cart (${cartCount} items)`}
                >
                
                <div className="sidebarContent">
                    {children} 
                </div>
    

                <div className="sidebarSummary">
                    <div className="summary-row">             
                        <span>SubTotal</span>
                        <span className='cart-summary-value' >${cartTotal.toFixed(2)}</span>
                    </div>

                    <Button className='ButtonTwo width'>
                        Proceed to Checkout    
                    </Button>

                    <Button className='ButtonOne width' onClick={() => {
                        onClose();
                        navigate('/cart');
                    }}>
                        view cart   
                    </Button>
                </div>

                </SideBarWrapper>   
            )}
        </>
    )
}

export default CartSideBar;