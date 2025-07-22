import React from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Order from './pages/Order.jsx'
import Navbar from './components/Navbar.jsx'
import AllProducts from './pages/AllProducts.jsx'
import {ToastContainer,toast} from 'react-toastify'
import Footer from './components/Footer.jsx'

const App = () => {
  const isSeller = useLocation().pathname.includes('seller')
  return (
    <>

      
      {isSeller ? " " : <Navbar/>}
      <ToastContainer/>  
      <div className={`${isSeller ? " " : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/AllProducts' element={<AllProducts />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App