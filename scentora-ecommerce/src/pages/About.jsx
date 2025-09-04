import './About.css';
import Breadcrumb from '../components/Breadcrumb';
import AboutInfo from '../components/AboutInfo';
import '../components/PerfumeofTheWeek.css';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../assets/about/about-img.jpg';
import storyImg from '../assets/about/our-story.jpg';
import Button from '../components/Button';



export default function About() {
    const navigate = useNavigate(); 
    const values = [
        {
            icon: "/images/diamond.png",
            title: "Elegance",
            description:
            "We believe elegance isn’t just a look—it’s a feeling. Our fragrances are crafted to bring a touch of sophistication to your everyday moments.",
        },
        {
            icon: "/images/authenticity.png",
            title: "Authenticity",
            description:
            "We celebrate individuality and honesty. We’re committed to delivering genuine fragrances—no fakes, no imitations, just the scents you love.",
        },
        {
            icon: "/images/confidence.png",
            title: "Confidence",
            description:
            "Our fragrances are more than scents — they’re statements. Designed to empower, inspire, and spark bold self-expression with every wear.",
        },
    ];

    return (
        <>
            <h1>About Us</h1>
        </>
    )
}