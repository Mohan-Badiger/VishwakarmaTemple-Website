import React, { useState } from 'react'

const SubHero = () => {

    const images = [
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
    ];

    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <>
            <div className="flex flex-col items-center space-y-4 mt-5 mb-15">
                {/* Main Image */}
                <div className="w-full max-w-7xl">
                    <img
                        src={mainImage}
                        alt="Main"
                        className="w-full rounded-lg transition-all duration-300"
                    />
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 max-w-3xl gap-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumb ${index + 1}`}
                            onClick={() => setMainImage(img)}
                            className="rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 border-2 border-transparent hover:border-yellow-600"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SubHero