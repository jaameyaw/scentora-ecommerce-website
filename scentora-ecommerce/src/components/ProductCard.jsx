import './ProductCard.css';
import { useNavigate } from 'react-router-dom';


export default function ({perfume, onAddToCart}) {
    const navigate = useNavigate();
    return (
        <div className="product-card" key={perfume.id}>
            {perfume.salePrice && <span className="sale-badge">Sale!</span>}
            <button 
            className="cart-button" 
            onClick={(e) => {
                e.stopPropagation();
                onAddToCart(perfume, 1);
            }}
            >
            <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <div className="product-info" onClick={() => navigate(`/product/${perfume.slug}`)}>
                <img src={perfume.image} alt={perfume.name} />
                <p className="product-category">{perfume.category}</p>
                <h3 className="product-name">{perfume.name}</h3>
                <div className="product-rating">
                    {Array(5)
                        .fill()
                        .map((_, i) => (
                        <i key={i} className="fa-regular fa-star star-icon"></i>
                    ))}
                </div>

                <div className="price">
                    {perfume.salePrice ? (
                        <>
                            <span className="old-price">${perfume.price.toFixed(2)}</span>
                            <span className="new-price">${perfume.salePrice.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="new-price">${perfume.price.toFixed(2)}</span>
                    )}
                    
                </div>
            </div>


        </div>
    )
}