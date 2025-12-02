// Photos.jsx
import React, { useState, useEffect } from "react";
import {pto} from '../assets/photogallery/pto.js'

const photosData = [
    {
        id: 1,
        src: pto.pto1,
        layout: "tall",
    },
    {
        id: 2,
        src: pto.pto2,
        layout: "wide",
    },
    {
        id: 3,
        src: pto.pto3,
        layout: "normal",
    },
    {
        id: 4,
        src:pto.pto4,
        layout: "wide",
    },
    // {
    //     id: 5,
    //     src:pto.pto5,
    //     layout: "tall",
    // },
    {
        id: 1,
        src: pto.pto6,
        layout: "wide",
    },
    {
        id: 2,
        src: pto.pto7,
        layout: "wide",
    },
    {
        id: 3,
        src: pto.pto8,
        layout: "tall",
    },
    {
        id: 4,
        src:pto.pto9,
        layout: "wide",
    },
    {
        id: 5,
        src:pto.pto10,
        layout: "normal",
    },
    {
        id: 3,
        src: pto.pto12,
        layout: "wide",
    },
    {
        id: 4,
        src:pto.pto13,
        layout: "wide",
    },
    {
        id: 5,
        src:pto.pto14,
        layout: "tall",
    }
];

const Photos = () => {
    const [activePhoto, setActivePhoto] = useState(null);

    // Close modal on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setActivePhoto(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="w-full py-16 md:py-10 font-outfit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-10">
                    <p className="text-xs md:text-xl uppercase tracking-[0.3em] text-yellow-500/90 mb-3">
                        Photo Gallery
                    </p>
                    <h2 className="text-3xl md:text-5xl text-slate-800 tracking-tight">
                        Moments from the{" "}
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                            Temple Premises
                        </span>
                    </h2>
                    <p className="mt-3 text-sm md:text-[15px] text-slate-800/80 max-w-xl">
                        Browse a curated collection of divine moments, festival highlights,
                        and peaceful temple views captured by devotees and photographers.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div
                    className="
                        grid gap-4 sm:gap-5
                        grid-cols-2 md:grid-cols-3
                        auto-rows-[160px] sm:auto-rows-[190px] md:auto-rows-[220px]
                    "
                >
                    {photosData.map((photo) => {
                        const layoutClass =
                            photo.layout === "tall"
                                ? "row-span-2"
                                : photo.layout === "wide"
                                ? "md:col-span-1"
                                : "";

                        return (
                            <button
                                key={photo.id}
                                type="button"
                                onClick={() => setActivePhoto(photo)}
                                className={`group relative overflow-hidden ${layoutClass} bg-slate-800/90 transition-all`}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5">
                                    <p className="mt-1 text-[13px] sm:text-sm font-medium text-slate-50 line-clamp-2">
                                        {photo.alt}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {activePhoto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-3"
                    onClick={() => setActivePhoto(null)}
                >
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setActivePhoto(null)}
                            className="absolute -top-10 right-0 text-slate-200 text-sm bg-white/10 px-3 py-1.5 border"
                        >
                            ✕ Close
                        </button>

                        <div className="aspect-video rounded-2xl overflow-hidden bg-black/60">
                            <img
                                src={activePhoto.src}
                                alt={activePhoto.alt}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <p className="mt-4 text-sm sm:text-base text-slate-100">
                            {activePhoto.alt}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Photos;
