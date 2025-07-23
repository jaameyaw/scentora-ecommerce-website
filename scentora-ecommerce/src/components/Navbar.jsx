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
        </nav>
    )
}