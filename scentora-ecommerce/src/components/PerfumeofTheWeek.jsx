import './PerfumeofTheWeek.css';
import perfumeImg from '../assets/products/ysl-perfume.jpg';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from './Button';


export default function PerfumeofTheWeek() {
    const navigate = useNavigate();
    return (
        <section className="perfumeWeek">
            <div className="glassTitleWrapper">
                <h2 className="sectionTitle">Featured Perfume of the Week</h2>
            </div>
            <div className="perfumeContainer">
                <div className="perfumeText">
                    <h3 className="perfumeTitle">YSL Libre Eau de Parfum</h3>
                    <p className="perfumeDesc">
                        Unleash your inner fire with YSL Libre — a fearless fusion of French lavender and Moroccan orange blossom,
                        wrapped in warm vanilla. This iconic scent celebrates freedom, femininity, and unapologetic confidence.
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