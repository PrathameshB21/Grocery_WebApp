import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col mt-10 h-80 items-center justify-center gap-10'>
        <div className='flex flex-col items-center '>
            <h2 className=' text-center text-xl md:text-3xl font-semibold text-zinc-600'>Never Miss a Deal!</h2>
            <p className='text-center text-sm md:text-md text-zinc-500'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
        </div>
        <div className=''>
            <form action="" className='flex flex-col inset-0 md:flex-row '>
                <input type="email" placeholder='Enter your email' name='email' className='outline-0 w-60 md:w-120 px-2 py-2 border border-zinc-600 rounded-sm ' />
            <button className='text-white bg-primary-dark px-1 py-2.5 md:px-5 md:py-2.5 rounded-sm cursor-pointer hover:bg-primary'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter