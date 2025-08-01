
import FilterModal from '../components/FilterModal';
import { Link, useParams} from 'react-router-dom';
import './Shop.css';
import perfumes from '../perfumes'; 




export default function Shop() {
    const { category } = useParams();
    const [showFilter, setShowFilter] = useState(false);
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
    }, [filters, category]);

    const handleApplyFilters = () => {    
        setFilters({ ...filters });
    };

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
            <FilterModal
            isOpen={showFilter}
            onClose={() => setShowFilter(false)}
            filters={filters}
            setFilters={setFilters}
            onApply={handleApplyFilters}
            />


    )

