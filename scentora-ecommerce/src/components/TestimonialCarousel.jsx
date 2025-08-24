import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialCarousel.css";

const testimonials = [

    {
        name: "Pedri Gonzalez",
        role: "Maestro Midfielder",
        text: "Scentora has completely transformed my fragrance experience—quality scents and fast delivery.",
        image: "/images/pedri.jpg",
        stars: 5,
    },
    {
        name: "Johnson Ameyaw",
        role: "Frontend Developer",
        text: "The scents are authentic and long-lasting. Shopping here has been such a great experience.",
        image: "/images/testimonial.jpg",
        stars: 4,
    },
    {

        name: "Aitana Bonmati",
        role: "Pyschologist",
        text: "Amazing service and elegant perfumes. Highly recommended to anyone looking for luxury fragrances.",
        image: "/images/aitana.jpg",
        stars: 5,
    },

    {
        name: "Lamine Yamal",
        role: "Professional Footballer",   
        text: "I love the variety of perfumes available. Each one has a unique scent that lasts all day.",
        image: "/images/lamine.jpg",
        stars: 4,
    },
];

const TestimonialCarousel = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={28}
            slidesPerView={3}
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {testimonials.map((item, key) => (
                <SwiperSlide key={key}>
                    <article className="testimonial-card">
                        <div className="testimonial-avatar-wrap">
                            <img className="testimonial-avatar" src={item.image} alt={item.name} />
                        </div>

                        <div className="quote-container">
                            <span className="testimonial-quote">“</span>
                        </div>

                        <header className="testimonial-head">
                            <h3 className="testimonial-name">{item.name}</h3>
                            <p className="testimonial-role">{item.role}</p>
                        </header>

                        <p className="testimonial-text">{item.text}</p>

                        <div className="testimonial-stars" aria-label={`${item.stars} star rating`}>
                            {"★".repeat(item.stars)}
                            {"☆".repeat(5 - item.stars)}
                        </div>
                    </article>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialCarousel;
