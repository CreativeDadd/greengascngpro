import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars'; // Adjust the import path as necessary
import HomePage from './components/HomePage';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductPage from './components/ProductPage';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import GetStarted from './components/GetStarted';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';
import BlogPost1 from './pages/BlogPost1'
import BlogPost2 from './pages/BlogPost2'
import FAQAccordion from './components/FAQAccordion';
import DieselCngGenset from './pages/DieselCngGenset';
import PetrolCNGEngine from './pages/PetrolCNGEngine';
import Career from './components/Career';
// import PetrolCNGEngine from './pages/PetrolCNGEngine';


const App = () => {
  return (
    
      <div className="min-h-screen flex flex-col">
        <Navbars />
        <main className="flex-grow">
          <Routes>
            < Route path="/greengascngpro/" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/blog" element={<BlogSection />} />
          <Route path="/getstarted" element={<GetStarted />} />
           <Route path="/contact" element={<ContactForm />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/blogpost1" element={<BlogPost1 />} />
            <Route path="/blogpost2" element={<BlogPost2 />} />
            <Route path="/career" element={<career />} />
            <Route path="/faq" element={<FAQAccordion />} />
            <Route path="/pages/DieselCngGenset" element={<DieselCngGenset />} />
            <Route path="/products/PetrolCNGEngine" element={<PetrolCNGEngine />} />
            <Route path="/career" element={<Career />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
};

export default App;
