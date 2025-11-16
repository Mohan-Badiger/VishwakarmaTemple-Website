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
                    Dedicated to Lord Vishwakarma – the divine architect of the universe. This temple serves as a spiritual home for all artisans, craftsmen, and devotees.
            </p>

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
