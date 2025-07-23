import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import '../App.css';

export default function Navbar() {
    return (
        <nav>
            <Link to={"/shop"}>Buy Perfumes </Link>
            <Link to={"/about"}>About Us </Link>
            <Link to={"/"}>Scentora </Link>
            <Link to={"/cart"}>Cart</Link>
    <>
        <nav className="navbar">
            <div className="desktopMenu desktopLinks">
                <Link to="/shop" className="link">Buy Perfumes</Link>
                <Link to="/shop" className="link">Exclusive</Link>
                <Link to="/shop" className="link">Men</Link>
                <Link to="/shop" className="link">Women</Link>
            </div>

            <div className="logo">
                <Link to="/">
                    <img className="logo-image"src="/images/ScentO.png" alt="Scentora Logo" />
                </Link>
            </div>

            <div className="desktopMenu">
                <Link to="/about" className="link">About</Link>
                <a href="#contact" className="link">Contact</a>
                <Link to="/cart" className="link">
                    <button onClick={toggleCart} className="cartIconDesktop">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </Link>
                <i className="fas fa-user userIcon"></i>
            </div>


            <div className="navbarMobileActions">
                <button onClick={toggleCart} className="cartIconMobile">
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>

                <button onClick={toggleSidebar} className="hamburger">
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </button>
            </div>

        </nav>

        <div className={`mobileSidebar ${isOpen ? "sidebarOpen" : ''}`}>
            <i className={`fas fa-user userIcon`}></i>
            <Link to="/shop" className="link" onClick={toggleSidebar}>Buy Perfumes</Link>
            <Link to="/shop" className="link" onClick={toggleSidebar}>Exclusive</Link>
            <Link to="/shop" className="link" onClick={toggleSidebar}>Men</Link>
            <Link to="/shop" className="link" onClick={toggleSidebar}>Women</Link>
            <Link to="/shop" className="link" onClick={toggleSidebar}>Scent of the Month</Link>
            <Link to="/about" className="link" onClick={toggleSidebar}>About</Link>
            <a href="#contact" className="link" onClick={toggleSidebar}>Contact</a>
        </div>

        <div className={`cartSidebar ${cartOpen ? "cartOpen" : ''}`}>
            <div>
                <div className="cartSidebarHeader">
                    <h3><i className="fas fa-shopping-bag"></i> CART</h3>
                    <button onClick={toggleCart} className="cartSidebarCloseBtn">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="cartSidebarItems">
                    <p className="cartSidebarEmptyText">Your cart is empty</p>

                    <button className="startShoppingBtn" onClick={() => { toggleCart(); navigate('/shop'); }}>
                        START SHOPPING
                    </button>                    
                </div>   
                
            </div>


        </div>
    </>
    )
}