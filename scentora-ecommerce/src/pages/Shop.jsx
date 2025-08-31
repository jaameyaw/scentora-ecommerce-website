
import FilterSideBar from '../components/FilterSideBar';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './Shop.css';
import perfumes from '../perfumes'; 
import Button from '../components/Button';
import Breadcrumb from '../components/Breadcrumb';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';



export default function Shop() {
    const {addToCart} = useContext(CartContext)
    const { category } = useParams();
    const [showFilter, setShowFilter] = useState(false);
    const [originalPerfumes, setOriginalPerfumes] = useState([]);
    const [filters, setFilters] = useState({
        price: [50, 500],
        category: category || '',
        tag: '',
    });
    const [filteredPerfumes, setFilteredPerfumes] = useState(perfumes);
    const navigate = useNavigate();
   
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

    const handleClear = () => {
        setFilters({
            price: [50, 500],
            category: '',
            tag: '',
        });

        navigate('/shop');
    }


    const links = [
        { to: "/", label: "Home" },
        { to: "/shop", label: "Shop" },
    ];

    if (category) {
        links.push({
        to: `/shop/${category}`,
        label: category.charAt(0).toUpperCase() + category.slice(1),
        });
    }

    return (
        <section className="shop">
            <div className="shop-header">
                <Breadcrumb links={links}/> 
                <h1 className="shop-title">
                    {category
                        ? `${category} `
                        : "Shop"
                    }
                </h1>
            </div>

            <div className="shop-controls">
                <button className="filter-button" onClick={() => setShowFilter(true)}>
                    <i className="fa-solid fa-sliders"></i><span className="filter-text">Filter Products</span>
                </button>
                <select className='sort-select' onChange={handleSorting}>
                    <option value="default">Default sorting</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>

            {isFilterActive() && 
            <div className=''>
                <Button className="button button-black button-clear" onClick={handleClear}>Clear All</Button>    
            </div>}
            
            <FilterSideBar
            isOpen={showFilter}
            onClose={() => setShowFilter(false)}
            filters={filters}
            setFilters={setFilters}
            onApply={handleApplyFilters}
            onClear={handleClear}
            />

            
            <div className="product-grid">
                {filteredPerfumes.length > 0 ? (
                    filteredPerfumes.map((perfume) => (
                        <ProductCard 
                        key={perfume.id}
                        perfume={perfume}
                        onAddToCart={addToCart}/>
                    ))
                ) : (
                    <p className="no-products">No products found</p>
                )}
            </div>
        </section>
    )

};