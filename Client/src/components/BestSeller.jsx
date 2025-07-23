import React, { useEffect } from 'react'
import { assets, dummyProducts } from '../assets/greencart_assets/assets.js'
import ProductCard from './ProductCard.jsx'
import { AppContextProvider, useAppContext } from '../context/Context.jsx'
import { useFetcher } from 'react-router-dom'
const BestSeller = () => {
  const { products } = useAppContext();




  return (
    <div className='mt-15 mb-15'>
      <p className='text-3xl font-semibold mb-10'>BestSeller</p>
      <div className='mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-5  sm:grid-cols-2 lg:grid-cols-3 lg:gap-5  xl:grid-cols-6 xl:gap-65  '>
        {products.filter((product) => product.inStock).slice(1, 6).map((product, index) => (

          <ProductCard  key={index} product={product} />
        ))}
      </div>

    </div>
  )
}

export default BestSeller








//manually created card
// {dummyProducts.map((product,index)=>(
//             <div key={index} className='bg-slate-50 border border-slate-300 rounded-2xl text-start justify-center px-5 cursor-pointer'>
//                 <img src={product.image} alt=""  className=' hover:scale-105'/>
//                 <p className='text-slate-400 text-sm'>{product.category}</p>
//                 <h2 className='text-xl font-semibold text-slate-700 pb-4'>{product.name}</h2>
//                 <div className='flex justify-between md:pb-4 '>
//                     <div className='flex items-center  gap-1 '>
//                         <p className='text-xl text-primary'>${product.offerPrice}</p>
//                         <p className='text-slate-600'>{product.price}</p>
//                     </div>
//                     <button className='bg-gray-200 flex gap-2 border-2 border-primary px-3 py-1 rounded-lg text-primary cursor-pointer md:gap-1'><img src={assets.cart_icon} alt="" />Add</button>
//                 </div>
//             </div>
//         ))}