import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>

      <nav className={`w-full py-4 flex items-center justify-between z-50`}>

        <NavLink to='/' className='text-2xl text-yellow-800 sm:text-2xl md:text-3xl font-outfit'>VISHWAKARMA<span className='text-red-500'>.</span></NavLink>

        <ul className={`gap-6 lg:gap-8 px-5 py-3 mt-1 text-yellow-800 hidden md:flex sm:text-[18px] font-outfit`}>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/about'>
            <p>About</p>
          </NavLink>
          <NavLink to='/photos'>
            <p>Photos</p>
          </NavLink>
          <NavLink to='/events'>
              <p>Events</p>
          </NavLink>
        </ul>

        <button className='block md:hidden ml-3' onClick={openMenu}>
          <img src={assets.menuicon} className='w-6' alt="" />
        </button>


        {/*----------------- Mobile Menu------------- */}

        <ul ref={sideMenuRef} className='flex md:hidden font-outfit flex-col gap-4 fixed -right-64 top-0 bottom-0 w-64 h-screen z-100 bg-rose-50 transition duration-500'>

          <div className='absolute left-6 top-6 flex gap-5' onClick={closeMenu}>
            <img src={assets.closeicon} alt="" className='w-5 h-5 mt-1 cursor-pointer' />
            <p className='text-lg'>Back</p>
          </div>

          <div className='py-20'>
            <NavLink to='/' className='flex items-center h-12 text-lg border-b border-t px-10'><p onClick={closeMenu} >Home</p></NavLink>
            <NavLink to='/about' className='flex items-center h-12 text-lg border-b px-10'><p onClick={closeMenu} >About</p></NavLink>
            <NavLink to='/photos' className='flex items-center h-12 text-lg border-b px-10'><p onClick={closeMenu} >Photos</p></NavLink>
            <NavLink to='/events' className='flex items-center h-12 text-lg border-b px-10'><p onClick={closeMenu}>Events</p></NavLink>
          </div>
        </ul>

      </nav>
    </>
  )
}

export default Navbar



