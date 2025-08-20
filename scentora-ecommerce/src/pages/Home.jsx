
import './Home.css';
import Hero from '../components/Hero';
import PerfumeofTheWeek from '../components/PerfumeofTheWeek';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';

export default function Home() {

    const categories = [
        { image: '/images/male-cat.jpg', title: 'Men' },
        { image: '/images/female-cat.jpg', title: 'Women' },
        { image: '/images/unisex-cat.jpg', title: 'Unisex' },
    ]

    return (
        <>
            <Hero />
            <PerfumeofTheWeek />
            <SectionWrapper className="categories">
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
        </>
    )
}