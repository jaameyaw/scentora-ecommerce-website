import { Link } from "react-router-dom"

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