import React from 'react'
import { assets, footerLinks } from '../assets/greencart_assets/assets'
import {useAppContext } from '../context/Context'
const Footer = () => {
  const {navigate}=useAppContext()
  return (
    <div className='border-emerald-500 bg-[#f4ffec] flex flex-col py-12 px-8 md:px-16 lg:px-24 xl:px-32 gap-6'>
         <div className='flex flex-col   md:flex-row justify-between'>
      <div className='hover:cursor-pointer'>
        <img src={assets.LOGO} alt="logo" onClick={()=>{navigate('/')}} />
        <p className='max-w-88 text-gray-500 text-sm mt-5'>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
      </div>
      <div className='flex flex-wrap md:flex-row gap-5 mt-5 md:gap-15'>
        {footerLinks.map((footerlink, index) => (
          <div key={index} >
            <h3 className='text-lg font-semibold text-zinc-600'>{footerlink.title}</h3>
            <ul>
              {footerlink.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target='none' className='text-sm text-zinc-500 hover:underline transition'>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
     <div className='text-center border-t border-t-zinc-400 '>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © <a href="https://prebuiltui.com">PrebuiltUI</a> All Right Reserved.
            </p>
    </div>
    </div>
  )
}

export default Footer