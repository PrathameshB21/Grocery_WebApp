import React from 'react'
import { assets, features } from '../assets/greencart_assets/assets'
const BttomBanner = () => {
    return (
    <div className='relative mt-24'>
        <img src={assets.bottom_banner_image} alt="banner" className=' w-full hidden md:block' />
        <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden' />
        <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center '>
            <div>
                <h1 className='text-2xl md:text-3xl font-semibold text-primary-dark mb-6'>Why we are the best !</h1>
                {features.map((feature,index)=>(
                    <div key={index} className='flex items-center gap-4 mt-10 md:mt-1 mr-10'>
                        <img src={feature.icon} alt="icon" className='md:w-11 w-9'/>
                       
                        <div >
                             <h3 className='text-lg md:text-xl font-semibold text-zinc-600'>{feature.title}</h3>
                             <p className='text-xs md:text-sm text-zinc-500'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>)
}

export default BttomBanner


