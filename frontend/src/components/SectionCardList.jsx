import React from 'react'
import SectionCard from './SectionCard';
import { assets } from '../assets/assets'

const SectionCardList = () => {

    const godsData = [
        {
            id: 1,
            name: "Lord Vishwakarma",
            image: assets.Lord2,
            info: "Lord Vishwakarma is the divine architect and engineer of the gods in Hindu mythology. Revered as the creator of celestial palaces, divine weapons, and flying chariots, he is the patron deity of all artisans, engineers, and craftsmen — symbolizing creativity, precision, and innovation.",
            link: "/ganesha"
        },
        {
            id: 2,
            name: "Maa Kalika Devi",
            image: assets.Kalika,
            info: "Kalika Devi, a fierce and powerful form of Goddess Durga, is worshipped for her strength, protection, and destruction of evil.She symbolizes divine feminine energy and transformation. Devotees seek her blessings for courage, justice, and spiritual growth.",
            link: "/shiva"
        },
        {
            id: 3,
            name: "Lord Mouneshwara",
            image: assets.Mouneshwara,
            info: "Lord Mouneshwara, also known as Thinthani Mouneshwarappa, is revered as a powerful guardian deity in Karnataka. He symbolizes silent strength, discipline, and protection, safeguarding devotees from negative forces. People visit the famous Thinthani Mouneshwara Temple seeking courage, peace, and prosperity. His blessings inspire harmony, righteousness, and inner confidence in daily life.",
            link: "/lakshmi"
        }
    ];

    return (
        <div className="max-w-full mx-auto py-8">
            {godsData.map((god, index) => (
                <SectionCard
                    key={god.id}
                    image={god.image}
                    name={god.name}
                    info={god.info}
                    link={god.link}
                    reverse={index % 2 === 1} // 1st false, 2nd true, 3rd false
                />
            ))}
        </div>
    )
}

export default SectionCardList