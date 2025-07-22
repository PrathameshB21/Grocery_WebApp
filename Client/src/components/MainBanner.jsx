import React from 'react'
import { assets } from '../assets/greencart_assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <>
      <div className='relative mt-10'>
        <img src={assets.main_banner_bg} alt="Banner" className='hidden  md:block' />
        <img src={assets.main_banner_bg_sm} alt="Banner-Sm" className='block md:hidden' />
        <div className='absolute inset-0 flex flex-col items-center text-center md:items-start justify-end md:justify-center  pb-18 md:pb-0 px-8 xl:ml-22'>
          <h1 className='text-4xl  md:text-3xl lg:text-5xl font-bold text-slate-600 md:text-left max-w-84 lg:max-w-110 leading-tight lg:leading-15'>Freshness you can Trust,Savings you can will Love!</h1>
          <Link to={'/AllProducts'} className='bg-primary flex text-center  py-3 px-4 gap-2  rounded-full md:px-9 mt-4  hover:bg-primary-dark text-white'>Shop Now <img src={assets.white_arrow_icon} alt="Arrow" className='block md:hidden' /></Link>
        </div>
      </div>
    </>
  )
}

export default MainBanner 