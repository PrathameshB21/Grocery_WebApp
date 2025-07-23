import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col mt-10 h-80 items-center justify-center gap-10'>
        <div className='flex flex-col items-center '>
            <h2 className=' text-center text-xl md:text-3xl font-semibold text-zinc-600'>Never Miss a Deal!</h2>
            <p className='text-center text-sm md:text-md text-zinc-500'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
        </div>
        <div className=''>
            <form className="flex items-center justify-between max-w-2xl md:w-145 w-full md:h-13 h-12">
                <input
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dark transition-all cursor-pointer rounded-md rounded-l-none">
                    Subscribe
                </button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter