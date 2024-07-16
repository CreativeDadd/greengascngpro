
import React from 'react'
import { Link } from'react-router-dom'
import Hero from './Hero'
import AboutUs from './AboutUs'
import ProductPage from './ProductPage'
import ProjectGallery from './ProjectGallery'
import Career from './Career'
import Testimonials from './Testimonnials'
import FAQAccordion from './FAQAccordion'
// import ContactForm from './ContactForm'
const HomePage = () => {
  return (
    <div>
        <Hero  />
        <ProductPage  />
        <AboutUs  />
        <ProjectGallery  />
        <Career  />
        <Testimonials  />
        <FAQAccordion />

        {/* <ContactForm  /> */}
        
    </div>
  )
}

export default HomePage