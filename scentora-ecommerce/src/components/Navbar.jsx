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
        </nav>
    )
}