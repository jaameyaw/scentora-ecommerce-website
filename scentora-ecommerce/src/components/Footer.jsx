import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {

    const quickLinks = [
        { to: '/', label: 'Home' },
        { to: '/shop', label: 'Shop' },
        { to: '/about', label: 'About' },
        { to: '/cart', label: 'Cart' },
    ];

    const collections = [
        { to: '/shop/men', label:  `Men's` },
        { to: '/shop/women', label: `Women's` },
        { to: '/shop/unisex', label: 'Unisex' },
        { to: '/shop', label: 'Best Sellers' },
    ];


    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">

                    <div className="footer-info">
                        <Link to="/" className='logo-link'><h3>Scentora</h3></Link>
                        <p>Welcome to Scentora, the ultimate destination for luxury and artisanal fragrances.</p>
                    </div>
                    
                    <div className="footer-socials">
                        <a href="" target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram"></i></a>
                        <a href="" target='_blank' rel='noopener noreferrer'><i className="fab fa-tiktok"></i></a>
                        <a href="" target='_blank' rel='noopener noreferrer'><i className="fab fa-pinterest-p"></i></a>
                        <a href="" target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>



                <div className="footer-link-section">
                    <h4 className='footer-heading'>Quick links</h4>
                    <ul className="footer-links">
                        {quickLinks.map((link, index) => (
                            <Link key={index} to={link.to} className='footer-link'>{link.label}</Link>
                        ))}
                    </ul>
                </div>

                <div className="footer-link-section">
                    <h4 className='footer-heading'>Collections</h4>
                    <ul className="footer-links">
                        {collections.map((link, index) => (
                            <Link key={index} to={link.to} className='footer-link'>{link.label}</Link>
                        ))}
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className='footer-heading'>Contact us</h4>
                    <p>Need help? We're always here for you and ready to help</p>

                    <div className="contact-item">
                        <span><i className="fa fa-envelope footer-icon"></i><a href="mailto:johnson11ameyaw@gmail.com" rel='noopener noreferrer'>scentorafragrance@gmail.com</a></span>
                        <span><i className="fa fa-phone footer-icon"></i><a href="tel:+233242142297" rel='noopener noreferrer'>0242142297</a></span>
                        <span><i className="fa fa-map-marker-alt footer-icon"></i>KNUST, Kumasi, Ghana</span>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Scentora. All rights reserved. | Made with <i className="fa-solid fa-heart"></i>  by 
                <a href="https://github.com/jaameyaw" target="_blank" rel='noopener noreferrer'> Johnson Ameyaw.</a></p>
            </div>
        </div>

    );
}

