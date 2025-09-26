
import './Home.css';
import Hero from '../components/Hero';
import PerfumeofTheWeek from '../components/PerfumeofTheWeek';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ProductCard from '../components/ProductCard.jsx';
import perfumes from '../perfumes.js'; 
import { useContext } from 'react';
import Cta from '../components/Cta.jsx';
import { CartContext } from '../context/CartContext.jsx';


export default function Home() {
    const {addToCart} = useContext(CartContext)

    const categories = [
        { image: '/images/male-cat.jpg', title: 'Men' },
        { image: '/images/female-cat.jpg', title: 'Women' },
        { image: '/images/unisex-cat.jpg', title: 'Unisex' },
    ]

    const whyshopItems = [
        {
            id: 1,
            title: "Trustpilot Reviews",
            description: (
                <>
                Rated 4.4 / 5 by 1,460+ <span className='highlight'>satisfied customers.</span>
                </>
            ),
            icon: "/images/five.png",
        },
        {
            id: 2,
            title: "100% Authentic Products",
            description: (
                <>
                Sourced only from <span className='highlight'>authorized suppliers.</span>
                </>
            ),
            icon: "/images/authentic.png",
        },
        {
            id: 3,
            title: "Free & Fast Shipping",
            description: (
                <>
                Enjoy quick, reliable delivery at <span className='highlight'>no cost.</span>
                </>
            ),
            icon: "/images/express-delivery.png",
        },
        {
            id: 4,
            title: "Secure Shopping Experience",
            description: (
                <>
                Your information is <span className='highlight'>safe and protected.</span>
                </>
            ),
            icon: "/images/security.png",
        },
    ];


    const bestsellers = perfumes.filter(perfume => perfume.tags.includes('best-selling'));

    return (
        <>
            <Hero />

            <PerfumeofTheWeek />
            
            <SectionWrapper>
                <SectionTitle subtitle="New perfumes" title="Shop by category" />
                <div className="categories-grid">
                    {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        image={category.image}
                        title={category.title}
                    />
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper variant="whyshop"> 
                <SectionTitle subtitle="why shop with" title="scentora" />
                <div className="whyshop-grid">
                    {whyshopItems.map((item) => (
                    <div key={item.id} className="whyshop-card">
                        <div className="whyshop-icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        
                        <div className="whyshop-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </SectionWrapper>


            <SectionWrapper>
                <SectionTitle subtitle="Check out our" title="best sellers" />
                <div className="categories-grid">
                {bestsellers.map((perfume) => (
                    <ProductCard  
                    perfume={perfume}
                    key={perfume.id}
                    onAddToCart={addToCart}
                    />
                ))}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <SectionTitle subtitle="what our customers say" title="testimonials" />
                <TestimonialCarousel />
            </SectionWrapper>

            <Cta />
        </>

    )
}