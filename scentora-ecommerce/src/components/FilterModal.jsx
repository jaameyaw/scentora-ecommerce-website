import './FilterModal.css';
import Button from './Button';
import Slider from '@mui/material/Slider';
import PriceBox from './PriceBox';


export default function FilterModal({ isOpen, onClose, filters, setFilters, onApply }) {
    const handleClear = () => {
        setFilters({
            price: [50, 500],
            category: '',
            tag: '',
        });

        onApply();
    }

    const handleView = () => {
        onApply();
        onClose();
    };

    const handlePriceChange = (event, newValue) => {
        if (Array.isArray(newValue)) {
            setFilters((prev) => ({ ...prev, price: newValue }));
        }
    };


    return (
        <>
            <div className={`filterOverlay ${isOpen ? 'visible' : ''}`} onClick={onClose}></div>
            <div className={`filterSidebar ${isOpen ? 'open' : ''}`}>

                <div className="filterSiderbarHeader">
                    <h2>Filter</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="filterSiderContent">
                    <div className="filterSection">
                        <h3>By Price</h3>
                        <Slider
                            value={filters.price}
                            onChange={handlePriceChange}
                            valueLabelDisplay="off"
                            min={50}
                            max={500}
                            step={5}
                            sx={{
                                color: '#1C1C1C',
                                '& .MuiSlider-thumb': {
                                width: 17,  
                                height: 17,
                                },
                            }}
                        />

                        <div className="price-input-group">
                            <PriceBox 
                                value={filters.price[0]}
                                placeholder="50"
                            />
                            <span className="to-text">to</span>

                            <PriceBox
                                value={filters.price[1]}
                                placeholder="500"
                            />
                        </div>

                    </div>

                    <div className="filterSection">
                        <h3>Filter by Category</h3>
                        {['men', 'women', 'unisex'].map((cat) => (
                            <label key={cat}>
                                <input
                                    type="radio"
                                    name="category"
                                    checked={filters.category === cat}
                                    onChange={() => setFilters((prev) => ({ ...prev, category: cat }))}
                                />
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </label>
                        ))}
                    </div>

                    <div className="filterSection">
                        <h3>Filter by Tag</h3>
                        {['exclusive', 'best-selling'].map((tag) => (
                            <label key={tag}>
                                <input
                                    type="radio"
                                    name="tag"
                                    checked={filters.tag === tag}
                                    onChange={() => setFilters((prev) => ({ ...prev, tag }))}
                                />
                                {tag.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                            </label>
                        ))}
                    </div>

                    <div className="filterButtons">
                        <Button className="clear-button" onClick={handleClear} label="Clear All" />
                        <Button className="apply-button" onClick={handleView} label="View" />
                    </div>
                </div>

            </div>
        </>
    )
}
