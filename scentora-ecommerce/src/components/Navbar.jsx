import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";
import '../App.css';

export default function Navbar({toggleCart}) {
    const { cartCount } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

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
                <Link to="/contact" className="link">Contact</Link>
                <button onClick={toggleCart} className="cartIconDesktop">
                    <img src="/images/shopping-cart.png" alt='shopping bag' />
                    <span className="cart-count">{cartCount}</span>
                </button>
                <i className="fas fa-user userIcon"></i>
            </div>


            <div className="navbarMobileActions">
                <button onClick={toggleCart} className="cartIconMobile">
                    <img src="/images/shopping-cart.png" alt='shopping bag' />
                    <span className="cart-count">{cartCount}</span>
                </button>
                
                <button onClick={toggleMenu} className="hamburger">
                    <i className='fas fa-bars'></i>
                </button>

            </div>

        </nav>

        <div className={`mobileSidebar ${isOpen ? "sidebarOpen" : ''}`}>
            <button onClick={toggleMenu} className="closeSidebarBtn">
                <i className="fas fa-times "></i>
            </button>
            <i className={`fas fa-user userIcon`}></i>
            <Link to="/shop" className="link" onClick={toggleMenu}>Buy Perfumes</Link>
            <Link to="/shop/men" className="link" onClick={toggleMenu}>Men</Link>
            <Link to="/shop/women" className="link" onClick={toggleMenu}>Women</Link>
            <Link to="/shop/unisex" className="link" onClick={toggleMenu}>Unisex</Link>
            <Link to="/shop" className="link" onClick={toggleMenu}>Scent of the Month</Link>
            <Link to="/about" className="link" onClick={toggleMenu}>About</Link>
            <a href="#contact" className="link" onClick={toggleMenu}>Contact</a>
        </div>
    </>
    )
}