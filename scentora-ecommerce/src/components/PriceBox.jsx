
import './PriceBox.css';

export default function PriceBox({ value, onChange, placeholder }) {

    return (
        <div className="price-box">
            <span>$</span>
            <input 
                type="number"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                min="50"
                max="500"
                className="price-input"
                inputMode="numeric"
                pattern="[0-9]*"
            />
        </div>
    )
}