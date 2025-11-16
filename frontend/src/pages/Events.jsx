import React from 'react'
import { assets } from '../assets/assets';

const Events = () => {
    return (

        <div className="flex items-center mt-6 justify-center sm:p-6 font-kannada">
            <div className="w-full max-w-5xl bg-white shadow-2xl overflow-hidden">
                {/* Top decorative header */}
                <div className="bg-gradient-to-br from-red-600 via-red-800 to-red-600 text-white relative">
                    
                    
                    <div>
                    <img src={assets.flower} alt="" />

                    </div>

                    <div className='px-6 pb-6'>
                        <div className="flex items-center justify-between">

                        {/* kalika devi */}
                        <div className="flex flex-col items-center gap-4">
                            <div>
                                <h4 className="text-[10px] md:text-lg">|| ಶ್ರೀ ಕಾಳಿಕಾದೇವಿ ಪ್ರಸನ್ನ ||</h4>
                            </div>
                            <div className="w-18 h-18 sm:w-30 sm:h-30 bg-yellow-400 rounded-full flex items-center justify-center">
                                {/* left deity icon placeholder */}
                                <img src={assets.Kalika} alt="left" className="w-18 h-18 sm:w-30 sm:h-36 object-cover " />
                            </div>
                        </div>

                        {/* vishwakarma */}
                        <div className="flex flex-col text-center items-center gap-4">
                            <div>
                                <h4 className=" text-[10px] md:text-xl">|| ಓಂ ಶ್ರೀ ವಿರಾಟ ವಿಶ್ವಕರ್ಮ ಪರಬ್ರಹ್ಮಣೇ ನಮಃ ||</h4>
                            </div>
                            <div className=" bg-yellow-300 rounded-full px-4 md:px-6 py-2 shadow-md">
                                {/* center emblem placeholder */}
                                <img src={assets.lord} alt="emblem" className="w-15 md:w-35 h-full object-cover rounded-md" />
                            </div>
                        </div>

                        {/* Mouneshwara */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-right">
                                <h5 className="text-[10px] md:text-lg">|| ಶ್ರೀ ಗುರು ಮೌನೇಶ್ವರ ಪ್ರಸನ್ನ ||</h5>
                            </div>
                            <div className="w-17 h-17 sm:w-30 sm:h-30 bg-yellow-400 rounded-full flex items-center justify-center">
                                {/* right deity icon placeholder */}
                                <img src={assets.Mouneshwara} alt="right" className="w-18 h-18 sm:w-26 sm:h-38 object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Main Kannada Title - large */}
                    <div className="mt-6 text-center">
                        <h1 className="text-xl md:text-5xl font-bold text-white drop-shadow-sm">ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ಜಾತ್ರಾ ಮಹೋತ್ಸವ</h1>
                        <p className="mt-2 text-sm md:text-xl text-yellow-50">ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ದೇವಸ್ಥಾನ ಸಮಿತಿ (ರಿ), ಲಕ್ಷ್ಮೀನಗರ, ಬನಹಟ್ಟಿ</p>
                        <p className="text-sm md:text-xl mt-1">ಬನಹಟ್ಟಿ - 587 311</p>
                    </div>
                    </div>
                </div>

                {/* Middle content block */}
                <div className="px-8 py-6">
                    <div className="mt-4 text-center">
                        <span className="text-red-700 font-semibold bg-red-50 border sm:text-3xl border-red-200 rounded-lg  px-4 py-2 ">ಆದರದ ಆಮಂತ್ರಣ</span>
                    </div>

                    <div className="mt-6 text-center">
                        <h2 className="text-sm md:text-xl font-semibold bg-gradient-to-br from-red-600 via-red-800 to-red-600 text-white py-1 sm:py-2 px-1 rounded-3xl">ಪ್ರತಿ ವರ್ಷದಂತೆ ಈ ವರ್ಷವು ಮಾರ್ಗಶೀರ್ಷ ಶು. ದಶಮಿ <span className='font-bold text-yellow-200'>ದಿನಾಂಕ:30-11-2025</span> ರವಿವಾರ</h2>
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800">ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ದೇವರ ಮಹೋತ್ಸವವು</h2>
                        <p className="mt-1 font-semibold text-md md:text-2xl text-red-700">ಒಳ್ಳೆಯ ವಿಜೃಂಭಣೆಯಿಂದ ಜರಗುವುದು</p>
                    </div>

                    <div className="mt-6 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h3 className="font-bold text-red-800">ಕಾರ್ಯಕ್ರಮಗಳು</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li className='border-b border-red-600'>ಮುಂಜಾನೆ 7 ಗಂಟೆಗೆ ಶ್ರೀ ವಿರಾಟ ವಿಶ್ವಕರ್ಮ ದೇವರ ಮೂರ್ತಿಯ ರುದ್ರಾಭಿಷೇಕ ಹಾಗೂ ಅಲಂಕಾರ ಪೂಜೆ ವೇದಮೂರ್ತಿ ಶ್ರೀ ಶೇಖರ ಆಚಾರ್ಯ ರಬಕವಿ ಹಾಗೂ ದೇವಸ್ಥಾನದ ಆರ್ಚಕರ ಪೌರೋಹಿತ್ಯದಲ್ಲಿ ಜರುಗುವುದು.</li>
                                <li>ಮುಂಜಾನೆ 8 ಗಂಟೆಗೆ ಧ್ವಜಾರೋಹಣ</li>
                                <li className='border-b border-red-600'>ಮುಂಜಾನೆ 8.30 ಗಂಟೆಗೆ ಮಹಾ ಮಂಗಳಾರತಿ ಮುಂಜಾನೆ 9 ಗಂಟೆಯಿಂದ 12 ಗಂಟೆವರೆಗೆ ಪಲ್ಲಕ್ಕಿ ಉತ್ಸವವು ಪುರವಂತರಿಂದ ಮತ್ತು ಶ್ರೀ ಗಾಯತ್ರಿ ಮಹಿಳಾ ಮಂಡಳ ಇವರಿಂದ ಆರತಿ ಹಾಗೂ ಕುಂಭ ಮೆರವಣಿಗೆ ನಂತರ ದೇವಸ್ಥಾನದಲ್ಲಿ ಉಡಿ ತುಂಬುವ ಕಾರ್ಯಕ್ರಮ ಜರುಗುವುದು.</li>
                                <li>ಮಧ್ಯಾಹ್ನ 1.30 ಗಂಟೆಯಿಂದ ಅನ್ನಸಂತರ್ಪಣೆ.</li>
                                <li className='border-b border-red-600'>ಸಾಯಂಕಾಲ ಕಾರ್ತಿಕೋತ್ಸವ ನಡೆಯಲಿದೆ.</li>
                            </ul>
                        </div>

                    </div>
                    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-red-600 rounded">
                        <p className="text-lg text-red-700 font-semibold">ಸಕಲ ಸದ್ಭಕ್ತರು ಈ ಮಹೋತ್ಸವದಲ್ಲಿ ಭಾಗವಹಿಸಿ ತನು, ಮನ, ಧನದಿಂದ ಸೇವೆ ಸಲ್ಲಿಸಿ ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ಪ್ರಭುವಿನ ಕೃಪೆಗೆ ಪಾತ್ರರಾಗಬೇಕಾಗಿ ವಿನಂತಿ.</p>
                    </div>
                </div>

                {/* Footer strip */}
                <div className="bg-gradient-to-br from-red-600 via-red-800 to-red-600 text-yellow-50 px-6 py-4 flex items-center justify-between">
                    <div>
                        <p className="text-lg md:text-3xl font-bold text-yellow-300 mb-1">ಸರ್ವರಿಗೂ ಆದರದ ಸ್ವಾಗತ</p>
                        <p className="text-sm md:text-lg font-semibold">ಸ್ಥಳ: ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ದೇವಸ್ಥಾನ, ಲಕ್ಷ್ಮೀನಗರ, ಬನಹಟ್ಟಿ</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm md:text-lg font-semibold">ಚೇರಮನ್ನರು, ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ದೇವಸ್ಥಾನ ಸಮಿತಿ (ರಿ), ಬನಹಟ್ಟಿ</p>
                        <p className="text-sm md:text-lg font-semibold">ಯುವಕ ಮಂಡಳ ಹಾಗೂ ಗಾಯತ್ರಿ ಮಹಿಳಾ ಮಂಡಳ, ಬನಹಟ್ಟಿ</p>
                        <p className="text-sm md:text-lg font-semibold">ಮೊ: 9880784218</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events




