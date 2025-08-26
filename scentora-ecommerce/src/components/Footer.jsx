import { Link } from 'react-router-dom';
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

