import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from './components/Loading';
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
import SectionWrapper from './components/SectionWrapper';
import Checkout from './components/Checkout';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {
const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const handleload = () => {
      setTimeout(()=> {setLoading(false)}, 800)
    }

    window.addEventListener("load", handleload)

    return () => {
      window.removeEventListener("load", handleload)
    }
  }
  ,[])

  return (
    <>
      <Loader loading={loading}/>

      {!loading &&   
        <Router>
          <ScrollToTop />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop  />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:slug" element={<ProductDetails  />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

          <CartSideBar>
            <CartContent variant='sidebar' showSummary = {false}/>
          </CartSideBar>

          <SectionWrapper variant="newsletter">
              <Newsletter />   
          </SectionWrapper>
          <SectionWrapper variant="footer">
              <Footer />
          </SectionWrapper>
        </Router>}
    </>

  ) 
}

export default App
