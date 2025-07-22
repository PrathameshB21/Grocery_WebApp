import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import ProductCard from '../components/ProductCard'
import { dummyAddress, dummyProducts } from '../assets/greencart_assets/assets'
import BttomBanner from '../components/BttomBanner'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  
  
  
  return (
    <div>
        
      <MainBanner />
      <Categories />
      <BestSeller/>
      <BttomBanner/>
      <NewsLetter/>
     

    </div>
  )
}

export default Home