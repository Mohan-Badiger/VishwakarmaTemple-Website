import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <>
            {/* <div className=' h-[650px] sm:h-[600px] relative'>
             
                <div className={`grid grid-cols-1 md:grid-cols-2 min-h-[550px] items-center gap-6 sm:gap-0 bg-cover h-full bg-center bg-gradient-to-b from-orange-700 to-orange-800 md:bg-gradient-to-r md:from-orange-700 md:to-orange-900`}>
                    <div className='w-full sm:ml-10 mt-10 md:mt-0'>
                        <h1 className='text-4xl md:text-6xl text-white font-cinzel capitalize font-medium text-center md:text-left'>Vishwakarma temple <br /> banahatti</h1>
                        <div className='flex mt-4 gap-6 justify-center md:justify-start'>
                            <button className='font-primary sm:text-md font-outfit bg-white px-3 py-2 sm:px-5 text-yellow-800 sm:py-3'>Explore More</button>
                            <button className='font-primary sm:text-md font-outfit border border-white text-white px-3 py-2 sm:px-5 sm:py-3'>Get In Touch</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        
                        <img src={assets.lord} alt="An image of Lord Vishwakarma" className='w-[270px] md:w-[400px] sm:w-[350px]' />
                    </div>
                </div>
            </div>  */}
 
            <section className="flex flex-col relative items-center pb-42 text-center p-1.5 text-sm text-white max-md:px-2 bg-[url('https://wallpapers.com/images/hd/hindu-temple-pictures-slcis876qvccbrq1.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l rounded-sm"></div>

                <h1 className="font-cinzel text-[40px]/[52px] md:text-6xl/[65px] mt-32 p-1.5 max-w-4xl z-50">
                    Vishwakarma Temple Banahatti
                </h1>
                <p className="text-base mt-2 max-w-xl z-50 font-outfit">Flexible tools, thoughtful design and the freedom to build your way. No limitations, no compromises.</p>
                <p className="text-base mt-3 md:mt-7 max-w-xl z-50 font-outfit">
                    Secure your spot early and unlock our limited-time founding rate.
                </p>

                <div className='flex mt-8 gap-6 justify-center md:justify-start z-50'>
                    <Link to='/events' className='font-primary sm:text-[16px] text-sm font-outfit bg-white px-3 py-2 sm:px-5 text-yellow-800 sm:py-3'>Invitation</Link>
                    <a href='#contact' className='font-primary sm:text-[16px] text-sm font-outfit border border-white text-white px-3 py-2 sm:px-5 sm:py-3'>Get In Touch</a>
                </div>
            </section> 
        </>
    )
}

export default Hero