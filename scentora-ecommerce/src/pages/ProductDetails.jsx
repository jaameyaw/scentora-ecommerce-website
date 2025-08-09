
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
            <div className="main-image">
                {product.salePrice && <span className="sale-badge">Sale!</span>}
                <img src={product.image} alt={product.name} />
            </div>
           
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="product-category">Perfume for {product.category}</p>

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
                    <h3>Quantity: </h3>
                    <button>-</button>
                    <input type="number" value='1' readOnly />
                    <button>+</button>
                </div>

                <button className="add-to-cart">ADD TO CART</button>

                <div className="safe-checkout">
                    <p>Guaranteed Safe Checkout</p>
                    <div className="payment-icons">
                        <img src= {mastercard} alt="visaCard" />
                        <img src= {paypal} alt="paypal card" />
                        <img src= {discover} alt="discover card" />
                        <img src= {mtnMomo} alt="mtn momo" />
                        <img src= {americanExpress} alt="american express card" />
                    </div>
                </div>
        </div>
    )
}