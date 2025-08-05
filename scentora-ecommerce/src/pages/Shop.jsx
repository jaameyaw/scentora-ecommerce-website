
import FilterModal from '../components/FilterModal';
import { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import './Shop.css';
import perfumes from '../perfumes'; 




export default function Shop() {
    const { category } = useParams();
    const [showFilter, setShowFilter] = useState(false);
    const [originalPerfumes, setOriginalPerfumes] = useState([]);
    const [filters, setFilters] = useState({
        price: [50, 500],
        category: category || '',
        tag: '',
    });

    const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);

   
    // If category changes from URL, update filters.category
    useEffect(() => {
        setFilters(prev => ({
        ...prev,
        category: category || ''
        }));
    }, [category]);

    // Apply filtering logic
    useEffect(() => {
        const result = perfumes.filter((perfume) => {
        const inPriceRange = perfume.price >= filters.price[0] && perfume.price <= filters.price[1];
        const matchesCategory = (filters.category || category)
            ? perfume.category === (filters.category || category)
            : true;
        const matchesTag = filters.tag ? perfume.tags.includes(filters.tag) : true;
        return inPriceRange && matchesCategory && matchesTag;
        });

        setFilteredPerfumes(result);
        setOriginalPerfumes(result);
    }, [filters, category]);

    const handleApplyFilters = () => {    
        setFilters({ ...filters });
    };

    const handleSorting = (e) => {
        const value = e.target.value;
        let sortedPerfumes;

        if (value === 'low-to-high') {
            sortedPerfumes = [...filteredPerfumes].sort((a, b) => a.price - b.price);
        } else if (value === 'high-to-low') {
            sortedPerfumes = [...filteredPerfumes].sort((a, b) => b.price - a.price);
        } else if (value === 'default') {
            sortedPerfumes = originalPerfumes;
        }

        setFilteredPerfumes(sortedPerfumes);
    } 

    const isFilterActive = () => {
        const defaultFilters = {
            price: [50, 500],
            category: '',
            tag: '',
        }

        return (
        filters.price[0] !== defaultFilters.price[0] ||
        filters.price[1] !== defaultFilters.price[1] ||
        filters.category !== defaultFilters.category ||
        filters.tag !== defaultFilters.tag
        );

    }

    return (
        <section className="shop">
            <div className="shop-header">
                <p className="breadrumb">
                    <Link to="/">Home</Link> / 
                    <Link to="/shop">Shop</Link> 
                    {category && ` / ${category.charAt(0).toUpperCase() + category.slice(1)}`}
                </p>

                <h1 className="shop-title">SHOP</h1>
            </div>

            <div className="shop-controls">
                <button className="filter-button" onClick={() => setShowFilter(true)}>
                    <i class="fa-solid fa-sliders"></i><span className="filter-text">Filter Products</span>
                </button>
                <select className='sort-select' onChange={handleSorting}>
                    <option value="default">Default sorting</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>

            {isFilterActive() && 
            <div>
                <Button className="clearButton" label="Clear All" onClick={handleClear}/>    
            </div>}
            
            <FilterModal
            isOpen={showFilter}
            onClose={() => setShowFilter(false)}
            filters={filters}
            setFilters={setFilters}
            onApply={handleApplyFilters}
            />


            <div className="product-grid">
            {filteredPerfumes.length > 0 ? (
                filteredPerfumes.map((perfume, id) => (
                    <div className="product-card" key={id}>
                        {perfume.salePrice && <span className="sale-badge">Sale!</span>}
                        <img src={perfume.image} alt={perfume.name} />
                        <p className="product-category">{perfume.category}</p>
                        <h3 className="product-name">{perfume.name}</h3>
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
                ))
            ) : (
                <p className="no-products">No products found</p>
            )}
            </div>
        </section>
    )

};