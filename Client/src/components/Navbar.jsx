import React, { useState } from 'react'
import { assets } from '../assets/greencart_assets/assets.js'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/Context.jsx'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { user, setUser, navigate, isUserloggedIn, setIsUserLoggedIn, showUserLogin, setShowUserLogin } = useAppContext()

  const logoutHandler = async () => {
    await setUser(false);
    await setIsUserLoggedIn(false);
    await setShowUserLogin(false);
    await navigate('/')
  }
  const loginPopHandler = async () => {
    if (showUserLogin !== true) {
      return await setShowUserLogin(true)
    } else {
      return await setShowUserLogin(false)
    }
  }
  return (
    <>

      <nav className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-24 py-4 border-b border-emerald-500 bg-[#f4ffec] relative transition-all">

        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-9 flex " src={assets.LOGO} alt="dummyLogoColored" />
        </NavLink>



        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/sellerLogin" className='bg-amber-300 px-2 ml-2 rounded-full text-emerald-900'>Admin</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AllProducts">Products</NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
            <img className='cursor-pointer' src={assets.search_icon} alt="searchIcon" />
          </div>

          <NavLink to="/Cart">
            <div className="relative cursor-pointer">
              <img className='h-6 w-6' src={assets.cart_icon} alt="" />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-green-600 w-[18px] h-[18px] rounded-full">3</button>
            </div>
          </NavLink>

          {isUserloggedIn ? (<div className='relative group'>
            <img className='h-8 w-8 ' src={assets.profile_icon} alt="" />
            <ul className=' hidden group-hover:block absolute bg-gray-100 px-5 py-2 w-30 top-8  rounded-xl text-sm text-left z-40'>
              <li onClick={() => logoutHandler()} className='hover:bg-gray-50 w-full rounded-sm cursor-pointer '>Logout</li>
              <li onClick={() => navigate('/orders')} className='hover:bg-gray-50 w-full rounded-sm cursor-pointer '>My Orders</li>
            </ul>
          </div>) : (<button onClick={loginPopHandler} className="cursor-pointer px-8 py-2 bg-emerald-500 hover:bg-emerald-600 transition text-white rounded-full" >
            Login
          </button>)}
        </div>


        <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
          {/* Menu Icon SVG */}
          <img className='' src={assets.menu_icon} alt="MenuIcon" />
        </button>


        {/* Mobile Menu */}


        <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full border-emerald-500  bg-[#f4ffec] shadow-xs py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>


          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/AllProducts" onClick={() => setOpen(false)}>Products</NavLink>
          {isUserloggedIn ? <NavLink to="/orders" onClick={() => setOpen(false)}>Orders</NavLink> : " "}
          {isUserloggedIn ? (<button onClick={() => logoutHandler()} className="cursor-pointer px-8 py-2 bg-emerald-500 hover:bg-emerald-600 transition text-white rounded-full">
            Logout
          </button>) : (<button onClick={() => { setIsUserLoggedIn(true) }} className="cursor-pointer px-8 py-2 bg-emerald-500 hover:bg-emerald-600 transition text-white rounded-full">
            Login
          </button>)}
        </div>


      </nav>
    </>
  )
}

export default Navbar