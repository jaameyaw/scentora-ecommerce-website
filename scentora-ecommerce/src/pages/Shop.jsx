
import { Link, useParams} from 'react-router-dom';
import './Shop.css';
import perfumes from '../perfumes'; 



export default function Shop() {
    const { category } = useParams();
    const displayedPerfumes = category ? perfumes.filter(perfume => perfume.category === category) : perfumes;
    return (
        <section className="shop">
            <div className="shop-header">
                <p className="breadrumb">
                    <Link to="/">Home</Link> / 
                    <Link to="/shop">Shop</Link> 
                    {category && <> / <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span></>}
                </p>

                <h1 className="shop-title">SHOP</h1>
            </div>

            <div className="shop-controls">
                <p className="filter-label">☰ Filter Products</p>
                <select className='short-select'>
                    <option>Default sorting</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>

    )

