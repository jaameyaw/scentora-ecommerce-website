
import { useParams } from "react-router-dom";
import perfumes from "../perfumes";

import './ProductDetails.css';

export default function ProductDetails() {
    const { slug } = useParams()
       const product = perfumes.find(p => p.slug === slug);

    if (!product) {
        return <p>Product not found</p>;
    }


    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <h1>{product.name}</h1>
                <div className="price">
                    {product.salePrice ? (
                        <>
                            <span className="old-price">${product.price.toFixed(2)}</span>
                            <span className="new-price">${product.salePrice.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="new-price">${product.price.toFixed(2)}</span>
                    )}
                    
                </div>
            <p>{product.category}</p>
            {/* Add more info here */}
        </div>
    )
}