
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";


export default function Hero() {

    const navigate = useNavigate();
    return (                          
        <section className="hero">
            <div className="hero-overlay">
                <h1>Refreshing &<br />Clean Spring<br /><span>Scents are Here!</span></h1>
                <p>Luxury fragrances curated<br />for your uniqueness.</p> 
                <Button
                className="heroButton"
                onClick={() => navigate('/shop')}
                label="Shop Now"
                />
            </div>
        </section>
    )

}
