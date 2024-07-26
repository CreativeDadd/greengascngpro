
import React from 'react'
import { Link } from'react-router-dom'
import Hero from './Hero'
import AboutUs from './AboutUs'
import ProductPage from './ProductPage'
// import ProjectGallery from './ProjectGallery'
import Testimonials from './Testimonnials'
import FAQAccordion from './FAQAccordion'
import ContactForm from './ContactForm'
import Career from './Career'
const HomePage = () => {
  return (
    <>   
     <div className='pt-10'>
        <Hero  />
        <ProductPage  />
        <AboutUs  />
        {/* <ProjectGallery  /> */}
        <Career  />
        <Testimonials  />
        <FAQAccordion />
        <ContactForm  />   
    </div>
    </>

  )
}

export default HomePage