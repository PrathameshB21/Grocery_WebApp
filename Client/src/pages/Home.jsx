import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import ProductCard from '../components/ProductCard'
import { dummyAddress, dummyProducts } from '../assets/greencart_assets/assets'
import BttomBanner from '../components/BttomBanner'

const Home = () => {
  
  
  
  return (
    <div>
        
      <MainBanner />
      <Categories />
      <BestSeller/>
      <BttomBanner/>


    </div>
  )
}

export default Home