import './PerfumeofTheWeek.css';
import perfumeImg from '../assets/products/ysl-libre-perfume.jpg';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button  from './Button';


export default function PerfumeofTheWeek() {
    const navigate = useNavigate();
    return (
        <section className="perfumeWeek">
            <div className="featuredWrapper">
                <div className="perfumeText">
                    <h3>Featured Perfume of the Week</h3>
                    <h4 className="perfumeTitle">YSL Libre Eau de Parfum</h4>
                    <p className="perfumeDescripton">
                        A bold and sensual fragrance that embodies freedom and femininity. With notes of lavender, orange blossom, and vanilla, it creates a captivating scent that lingers throughout the day.
                    </p>                
                    <Button
                    className="Button"
                    onClick={() => navigate('/shop')}
                    label="Buy Now"
                    />

                </div>

                <div className="perfumeImgWrapper">
                    <img src={perfumeImg} alt="YSL Libre Eau de Parfum" />
                </div>
    
            </div>
        </section>
    );
}