
import "./Hero.css";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Button from "./Button";


export default function Hero() {

    const navigate = useNavigate();
    return (                          
        <section className="hero">
            <div className="hero-overlay">
                <h1>Refreshing &
                    <span className="break-mobile"> Clean Spring </span>
                    <span className="break-desktop">Scents are Here!</span>
                </h1>
                <p>Discover your future scent with Scentora.</p> 
                <Button
                className="button button-gold"
                onClick={() => navigate('/shop')}
                > Shop Now </Button>
            </div>
        </section>
    )

}
