import './FilterSideBar.css';
import SideBarWrapper from './SideBarWrapper';
import Button from './Button';
import Slider from '@mui/material/Slider';
import PriceBox from './PriceBox';


export default function FilterSideBar({ isOpen, onClose, filters, setFilters, onApply, onClear }) {

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
            <SideBarWrapper  
            isOpen={isOpen} 
            onClose={onClose}
            position="left" 
            className="filterSiderbarHeader" 
            headerContent='Filter'
            >

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
                        <Button className="button button-gold width" onClick={onClear}> Clear All </Button>
                        <Button className="button button-black width" onClick={handleView}> View </Button>
                    </div>
                </div>
            </SideBarWrapper>
        </>
    )
}
