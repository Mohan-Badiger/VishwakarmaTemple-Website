import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section
                className="flex flex-col relative items-center pb-22 text-center p-1.5 text-sm text-white max-md:px-2 bg-cover bg-center"
                style={{ backgroundImage: `url(${assets.pto1})` }}>
                {" "}
                <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l rounded-sm"></div>
                <h1 className="font-cinzel text-[40px]/[52px] md:text-6xl/[65px] mt-32 p-1.5 max-w-4xl z-50">
                    Vishwakarma Temple Banahatti
                </h1>
                <p className="text-base mt-2 max-w-xl z-50 font-outfit">
                    Flexible tools, thoughtful design and the freedom to build your way.
                    No limitations, no compromises.
                </p>
                <p className="text-base mt-3 md:mt-7 max-w-xl z-50 font-outfit">
                    Secure your spot early and unlock our limited-time founding rate.
                </p>
                <div className="flex mt-8 gap-6 justify-center md:justify-start z-50">
                    <Link
                        to="/events"
                        className="font-primary sm:text-[16px] text-sm font-outfit bg-white px-3 py-2 sm:px-5 text-yellow-800 sm:py-3"
                    >
                        Invitation
                    </Link>
                    <a
                        href="#contact"
                        className="font-primary sm:text-[16px] text-sm font-outfit border border-white text-white px-3 py-2 sm:px-5 sm:py-3"
                    >
                        Get In Touch
                    </a>
                </div>
            </section>
        </>
    );
};

export default Hero;
