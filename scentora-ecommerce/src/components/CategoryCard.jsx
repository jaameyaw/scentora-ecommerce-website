
import './CategoryCard.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const CategoryCard = ({ image, title }) => {
    const navigate = useNavigate();

    return (
        <div className="category-card">
            <img src={image} alt={title} className="category-image" />
            <div className="category-info">
                <h3 className="category-title">{title}</h3>
                <Button className='ButtonOne mt' onClick={() => navigate(`/shop/${title.toLowerCase()}`)}>
                    {`Shop all ${title}`}
                </Button>
            </div>
        </div>
    );
}

export default CategoryCard;