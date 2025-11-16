import React from 'react'
import { data } from '../assets/data.js'

const YouthCommittee = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto mt-20 mb-20">
                <h1 className="text-3xl sm:text-5xl text-yellow-900 font-medium text-center mx-auto font-cinzel">Youth Committee</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12">
                    {data.founders.map((founder, index) => (
                        <article key={index}>
                            <div className="flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
                                <img src={founder.image} alt={founder.name} className="w-52 h-64 object-cover" />
                                <h3 className="text-lg font-medium text-slate-700 mt-2">{founder.name}</h3>
                                <p className="text-sm text-yellow-800 ">{founder.about}</p>
                            </div>
                        </article>
                    ))
                    }
                </div>
            </section>
        </>
    )
}

export default YouthCommittee