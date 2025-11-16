import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
         <div className="w-full py-2.5 px-3 font-medium font-outfit text-sm text-white flex justify-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
            <p className='mt-1'>New Launched Website | Join Event </p>
            <Link to='/events' className="flex items-center gap-1 px-3 py-1 rounded-lg text-violet-600 bg-violet-50 hover:bg-slate-100 transition active:scale-95 ml-3">
                Join
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91797 7H11.0846" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 2.9165L11.0833 6.99984L7 11.0832" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
        </div>
    </>
  )
}

export default Banner