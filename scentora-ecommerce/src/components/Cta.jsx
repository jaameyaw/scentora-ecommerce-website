import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "./cta.css";

const images = [
  { src: "/images/perfumesGallery/perfume1.jpg" },
  { src: "/images/perfumesGallery/perfume2.jpg" },
  { src: "/images/perfumesGallery/perfume3.jpg" },
  { src: "/images/perfumesGallery/perfume4.jpg" },
  { src: "/images/perfumesGallery/perfume5.jpg" },
  { src: "/images/perfumesGallery/perfume6.jpg" },
];

const Cta = () => {
    const navigate = useNavigate();
    return (
        <section className="cta-section">
            <h3>Explore our<span>Collections</span></h3>
            <Swiper
                modules={[FreeMode]}
                loop={true}
                freeMode={true}
                grabCursor={true}
                spaceBetween={15}
                slidesPerView={2}
                breakpoints={{
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="cta-swiper"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="cta-card"
                            onClick={() => navigate('/shop')}
                        >
                            <img src={item.src} alt={`Perfume ${index + 1}`} className="cta-image" loading="lazy"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Cta;

