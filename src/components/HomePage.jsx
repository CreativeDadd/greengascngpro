
import React from 'react'
import { Link } from'react-router-dom'
import Hero from './Hero'
import AboutUs from './AboutUs'
import ProductPage from './ProductPage'
import ProjectGallery from './ProjectGallery'
const HomePage = () => {
  return (
    <div>
        <Hero  />
        <ProductPage  />
        <AboutUs  />
        <ProjectGallery  />

    </div>
  )
}

export default HomePage