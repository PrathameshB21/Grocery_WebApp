import React, { useEffect, useState } from 'react'
import { assets, dummyProducts } from '../assets/greencart_assets/assets';
import { useAppContext } from '../context/Context';
const ProductCard = ({product}) => {
 const { currency, cartItems, SetCartItems, navigate, addToCart, removeFromCart, updateCart } = useAppContext()
    return product &&
        (
            <>
               
                <div className="border border-gray-500/20 rounded-md  md:px-1 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
                    <div className="group cursor-pointer flex items-center justify-center px-2">
                        <img className="group-hover:scale-105 transition max-w-26 md:max-w-30" src={product.image} alt={product.name} />
                    </div>
                    <div className="text-gray-500/60 text-sm">  
                        <p>{product.category}</p>
                        <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                        <div className="flex items-center gap-0.5">
                            {Array(5).fill('').map((_, i) => (
                                <img key={i} src={i < 4 ? assets.star_icon : assets.star_dull_icon} className='w-2 md:w-3' />
                            ))}

                            <p>(4)</p>
                        </div>
                        <div className="flex items-end justify-between mt-3">
                            <p className="md:text-2xl text-base font-medium text-primary">
                                {currency}{product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                            </p>
                            <div onClick={(e)=>{e.stopPropagation();}} className="text-primary">
                                {!cartItems[product._id] ? (
                                    <button onClick={()=>{addToCart(product._id)}} key={product._id}  className="flex items-center justify-center gap-1 bg-zinc-50 border border-primary-dark md:w-[80px] w-[64px] h-[34px] rounded text-primary font-medium cursor-pointer"  >
                                        <img src={assets.cart_icon} alt=""  />
                                        Add
                                    </button>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-zinc-100 rounded select-none cursor-pointer">
                                        <button onClick={() => removeFromCart(product._id)} className="cursor-pointer text-md px-2 h-full" >
                                            -
                                        </button>
                                        <span className="w-5 text-center">{cartItems[product._id]}</span>
                                        <button onClick={() => addToCart(product._id)} className="cursor-pointer text-md px-2 h-full" >
                                            +
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
}

export default ProductCard