import React from 'react'
import { assets, categories } from '../assets/greencart_assets/assets'
import { useAppContext } from '../context/Context.jsx'

const Categories = () => {
    const { navigate } = useAppContext();
    return (
        <div className='mt-10 items-center justify-center mb-10 '>
            <p className='text-3xl font-semibold mb-10'>Categories</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-6 xl:grid-cols-7 gap-12'>

                {categories.map((category, index) => (
                    <div key={index} className='group flex flex-col bg-[#ddf9c8]  items-center justify-center rounded-md cursor-pointer'
                        onClick={() => {
                            navigate(`/AllProducts/${category.path.toLocaleLowerCase()}`)
                            scrollTo(0, 0)
                        }}
                    >
                        <img src={category.image} alt="" className='py-1 px-5 gap-2 hover:scale-110' />
                        <p className='text-center text-sm pb-3'>{category.text}</p>
                    </div>
                ))}


            </div>


        </div>
    )
}

export default Categories