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
        <Route path="/shop/:category" element={<Shop  />} />
    <>
      <Loader loading={loading}/>

      <CartSideBar>
        <CartContent variant='sidebar' showSummary = {false}/>
      </CartSideBar>

      <SectionWrapper variant="newsletter">
          <Newsletter />   
      </SectionWrapper>
      <SectionWrapper variant="footer">
          <Footer />
      </SectionWrapper>
    </Router>
  ) 
}

export default App
