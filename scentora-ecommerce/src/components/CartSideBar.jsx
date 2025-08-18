import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SideBarWrapper from './SideBarWrapper';
import './CartContent.css';
import './CartSideBar.css';



const CartSideBar = ({isOpen, onClose, children}) => {
    const { cartCount } = useContext(CartContext);

    return (
        <>
            <SideBarWrapper 
                isOpen={isOpen} 
                onClose={onClose} 
                position="right" 
                variant='cart'
                className="cartsidebarHeader" 
                headerContent= {`Your Cart (${cartCount} items)`}
            >
            
            {children}    

            </SideBarWrapper>   
        
        </>
    )
}

export default CartSideBar;