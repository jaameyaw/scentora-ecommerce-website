import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import '../App.css';
import Modal from "./Modal";

export default function Navbar() {
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();

    const openModal = (type) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);
    return (
    <>
        <nav className="navbar">
            <div className="desktopMenu desktopLinks">
                <Link to="/shop" className="link">Buy Perfumes</Link>
                <Link to="/shop/men" className="link">Men</Link>
                <Link to="/shop/women" className="link">Women</Link>
                <Link to="/shop/unisex" className="link">Unisex</Link>
            </div>

            <div className="logo">
                <Link to="/">
                    <img className="logo-image"src="/images/ScentO.png" alt="Scentora Logo" />
                </Link>
            </div>

            <div className="desktopMenu">
                <Link to="/about" className="link">About</Link>
                <a href="#contact" className="link">Contact</a>
                <button onClick={() => openModal('cart')} >
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <i className="fas fa-user userIcon"></i>
            </div>


            <div className="navbarMobileActions">
                <button onClick={() => openModal('cart')}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>

                <button onClick={() => openModal('sidebar')} className="hamburger">
                    <i className='fas fa-bars'></i>
                </button>
            </div>

        </nav>


        <Modal
            isOpen={activeModal === 'sidebar'}
            onClose={closeModal}
            position="left"
        >
            <div className="modalSidebarContent">
                <i className={`fas fa-user userIcon`}></i>
                <Link to="/shop" className="link" onClick={closeModal}>Buy Perfumes</Link>
                <Link to="/shop" className="link" onClick={closeModal}>Exclusive</Link>
                <Link to="/shop" className="link" onClick={closeModal}>Men</Link>
                <Link to="/shop" className="link" onClick={closeModal}>Women</Link>
                <Link to="/shop" className="link" onClick={closeModal}>Scent of the Month</Link>
                <Link to="/about" className="link" onClick={closeModal}>About</Link>
                <a href="#contact" className="link" onClick={closeModal}>Contact</a>
            </div>
        
        </Modal>


        <Modal
            isOpen={activeModal === 'cart'}
            onClose={closeModal}
            position="right"
        >        
            <div className='cartSidebarContent'>
                <div>
                    <div className="cartSidebarHeader">
                        <h3><i className="fas fa-shopping-bag"></i> CART</h3>
                    </div>

                    <div className="cartSidebarItems">
                        <p className="cartSidebarEmptyText">Your cart is empty</p>

                        <button className="startShoppingBtn" onClick={() => { closeModal(); navigate('/shop'); }}>
                            START SHOPPING
                        </button>                    
                    </div>   
                </div>
            </div>
        </Modal>
    </>
    )
}