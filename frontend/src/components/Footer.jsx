import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {

  const QuickLinks = [
    {
      Name:"Home",
      Link:'/'
    },
    {
      Name:"About",
      Link:'/about'
    },
    {
      Name:"Photos",
      Link:'/photos'
    },
    {
      Name:"Event",
      Link:'/events'
    },
  ]

  return (
    <footer className="bg-white/30 mt-10 sm:mt-2 font-outfit">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className='font-semibold text-yellow-800 text-2xl font-kannada text-center sm:text-left'>
              ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ದೇವಸ್ಥಾನ, ಲಕ್ಷ್ಮೀ ನಗರ, ಬನಹಟ್ಟಿ.
            </p>
            <p className="mt-4 text-center text-gray-700 lg:text-left lg:text-lg">
                    Dedicated to Lord Vishwakarma – the divine architect of the universe.
            </p>
            <p className="mt-2 text-center text-yellow-700 lg:text-left lg:text-lg">
                   Designed & Developed by Mohan Badiger
            </p>
            <a target='_blank' href='https://mohanbadiger.vercel.app' className="mt-2 text-center text-blue-900 lg:text-left lg:text-md flex justify-center lg:justify-start items-center gap-1">
                   Click here to reachout <svg width="18px" height="18px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#1565C0" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="#1e00b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </a>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {[ 'Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble' ].map((name, i) => (
                <a
                  key={i}
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{name}</span>
                  {/* You can keep the SVG icons here as-is, unchanged */}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-700"> Quick Links </strong>
              <ul className="mt-6 space-y-1">
                {QuickLinks.map((item, i) => (
                  <Link to={item.Link} key={i}>
                    <p className="text-gray-700 transition hover:text-gray-700/75">{item.Name}</p>
                  </Link>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-700"> About </strong>
              <ul className="mt-6 space-y-1 opacity-50">
                {['About','History', 'Our Team'].map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-700"> Social Media </strong>
              <ul className="mt-6 space-y-1 opacity-50">
                {['Whatsapp','Instagram', 'Twitter', 'Facebook'].map((item, i) => (
                  <li key={i}>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-md text-gray-700">
            ©2025 Vishwakarma Temple Banahatti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
