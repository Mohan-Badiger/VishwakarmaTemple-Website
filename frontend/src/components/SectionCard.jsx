import React from 'react'
import { Link } from 'react-router-dom';


const SectionCard = ({ image, name, info, link, reverse }) => {

    return (
        <section className=" py-10 mt-10 px-6 md:px-20">
            <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 ${reverse ? "md:flex-row-reverse" : ""}`}>
                <div className={`${reverse?"md:items-end md:text-right":""}`}>
                    <h2 className="text-3xl md:text-5xl font-cinzel text-yellow-800 mb-4 leading-tight">
                        {name}
                    </h2>
                    <p className="text-lg font-outfit text-gray-800 mb-6">
                        {info}
                    </p>

                    {/* <Link to={link}>
                        <p type="button" className="px-6 py-3 active:scale-95 transition bg-yellow-500/15 border border-yellow-500 text-yellow-600 text-sm md:text-base font-medium">Read More</p>
                    </Link> */}

                    <a
                            href="#about"
                            className="inline-block px-6 py-3 active:scale-95 transition bg-yellow-500/15 border border-yellow-500 text-yellow-600 text-sm md:text-base "
                        >
                            Read More
                        </a>
                </div>

                 <div className="flex justify-center md:justify-end">
                    <img
                        src={image}
                        alt={name}
                        className="w-7xl"
                    />
                </div>

            </div>
        </section>
    )
}

export default SectionCard