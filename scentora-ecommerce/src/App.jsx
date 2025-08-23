import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import CartSideBar from './components/CartSideBar';
import CartContent from './components/CartContent';

function App() {

  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);    
  const onClose = () => setCartOpen(false);
  return (
    
    <Router>
      <ScrollToTop />
      <Navbar  toggleCart={toggleCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:slug" element={<ProductDetails toggleCart={toggleCart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <CartSideBar isOpen={cartOpen} onClose={onClose}>
        <CartContent variant='sidebar' onClose={onClose} showSummary = {false}/>
      </CartSideBar>
    </Router>
  ) 
}

export default App
