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
        <section className="about-us">
            <div className="about ">
                <div className="about-header">
                    <Breadcrumb links={[
                        {to:"/", label: "Home"},
                        {to:"/About", label: "About"}
                    ]}/>
                </div>

                <div className="about-container">
                    <AboutInfo 
                        smallText="a few words" 
                        title="About Us"
                        description="Scentora is a modern fragrance brand dedicated to curating timeless scents that embody elegance, individuality, and confidence. Blending artistry with quality craftsmanship, we create perfumes that leave lasting impressions and celebrate the uniqueness of every wearer."
                        imgSrc={aboutImg}
                    />

                    <AboutInfo
                    smallText="how it all began" 
                    title="Our Story"
                    description="Born from a passion for fine fragrances, Scentora began with the mission to make luxury scents more personal and accessible. Every bottle reflects a story of artistry, culture, and authenticity—crafted not just to be worn, but to be experienced."
                    imgSrc={storyImg}
                    reverse
                    />
                </div>
            </div>


            <section className="core-values">
                <div className="core-container">
                    <h2 className="core-title">Best in business for a reason</h2>
                    <div className="values-container">
                        {values.map((val, index) => (
                        <div key={index} className="value-card">
                            <img src={val.icon} alt={val.title} className="icon" />
                            <h3>{val.title}</h3>
                            <p>{val.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Creator Section */}
            <section className="meet-creator">
                <div className="creator-container">
                    <div className="creator-text">
                        <span className="tag">just by the way...</span>
                        <h1>
                            I’m <span className="highlight">Johnson Ameyaw,</span>
                        </h1>
                        <p>
                            I develop user-centered interactive digital presence for businesses, NGOs, or any organization that wants its mission heard online. <br />
                            Scentora is one of my works. If you need online presence for your brand—or even want an online shop like this for your perfume business or any other business—text me, let’s discuss it.
                        </p>
                        <div className="creator-buttons">
                            <a href="https://wa.me/233242142297" target='_blank' rel="noopener noreferrer" className='button button-gold'>Dm let's talk</a>
                            <a href="https://www.linkedin.com/in/johnson-addo-ameyaw-026134283" rel="noopener noreferrer" target='_blank' className='button button-black'>Hire me</a>
                        </div>
                    </div>
                    <div className="creator-image">
                        <div className="blob">
                            <img src="/images/about-me.png" alt="Johnson Ameyaw" />
                        </div>
                    </div>
                </div>
            </section>

    )
}