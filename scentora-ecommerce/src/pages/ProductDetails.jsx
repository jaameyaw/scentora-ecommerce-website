
import { useParams } from "react-router-dom";
import perfumes from "../perfumes";
import './ProductDetails.css';
import Button  from '../components/Button';
import { useState } from "react";


export default function ProductDetails() {
    const [count, setCount] = useState(1);

    const { slug } = useParams()
       const product = perfumes.find(p => p.slug === slug);

    if (!product) {
        return <p>Product not found</p>;
    }

    const incrementQty = () => {setCount(prev => prev + 1) }
    const decrementQty = () => {setCount(  (prev  => prev > 1? prev - 1: 1) ) }



    return (
        <section className="product-details-section">
            <div className="product-details">
                <div className="main-image">
                    {product.salePrice && <span className="sale-badge">Sale!</span>}
                    <img src={product.image} alt={product.name} />
                </div>
            
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="perfume-category">Perfume for {product.category}</p>

                    <div className="price product-price">
                        {product.salePrice ? (
                            <>
                                <span className="old-price">${product.price.toFixed(2)}</span>
                                <span className="new-price">${product.salePrice.toFixed(2)}</span>
                            </>
                        ) : (
                            <span className="new-price">${product.price.toFixed(2)}</span>
                        )}
                        <span className="free-shipping"> + Free Shipping</span>

                        <p className="description">{product.description}</p>
                    </div>


                    <div className="quantity">
                        <h3>Quantity: {count}</h3>
                        <div className="quantity-selector">
                            <button onClick={decrementQty}>-</button>
                            <div className="number">{count}</div>
                            <button onClick={incrementQty}>+</button>
                        </div>

                    </div>

                    <div className="product-buttons">
                        <Button className="ButtonOne">add to cart</Button>
                        <Button className="ButtonTwo">buy now</Button>
                        <Button className="button-icon">
                            <i class="fa-regular fa-heart"></i>
                        </Button>
                    </div>

                    <ul className="guarantees">
                        <li>✔ No-Risk Money Back Guarantee!</li>
                        <li>✔ No Hassle Refunds</li>
                        <li>✔ Secure Payments</li>
                    </ul>
                </div>
                

                
            </div>
        </section>

    )
}