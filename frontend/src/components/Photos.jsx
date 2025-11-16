// Photos.jsx
import React, { useState, useEffect } from "react";

const photosData = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/7564397/pexels-photo-7564397.jpeg",
        alt: "Temple gopuram glowing at sunset",
        category: "Temple",
        layout: "tall",
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/10696471/pexels-photo-10696471.jpeg",
        alt: "Devotees lighting lamps during evening aarti",
        category: "Festivals",
        layout: "wide",
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/4619402/pexels-photo-4619402.jpeg",
        alt: "Temple interior filled with warm diya lights",
        category: "Temple",
        layout: "normal",
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/17277017/pexels-photo-17277017/free-photo-of-hindu-priest-performing-ritual-in-temple.jpeg",
        alt: "Priest performing sacred rituals in the sanctum",
        category: "Devotees",
        layout: "tall",
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/6003582/pexels-photo-6003582.jpeg",
        alt: "Festival crowd with divine lights and decorations",
        category: "Festivals",
        layout: "normal",
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/10696471/pexels-photo-10696471.jpeg",
        alt: "Devotees lighting lamps during evening aarti",
        category: "Festivals",
        layout: "wide",
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/4619402/pexels-photo-4619402.jpeg",
        alt: "Temple interior filled with warm diya lights",
        category: "Temple",
        layout: "normal",
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/17277017/pexels-photo-17277017/free-photo-of-hindu-priest-performing-ritual-in-temple.jpeg",
        alt: "Priest performing sacred rituals in the sanctum",
        category: "Devotees",
        layout: "tall",
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/6003582/pexels-photo-6003582.jpeg",
        alt: "Festival crowd with divine lights and decorations",
        category: "Festivals",
        layout: "normal",
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/17277017/pexels-photo-17277017/free-photo-of-hindu-priest-performing-ritual-in-temple.jpeg",
        alt: "Priest performing sacred rituals in the sanctum",
        category: "Devotees",
        layout: "tall",
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/10696471/pexels-photo-10696471.jpeg",
        alt: "Devotees lighting lamps during evening aarti",
        category: "Festivals",
        layout: "wide",
    },
];

const categories = ["All", "Temple", "Festivals", "Devotees", "Nature"];

const Photos = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activePhoto, setActivePhoto] = useState(null);

    const filteredPhotos =
        activeCategory === "All"
            ? photosData
            : photosData.filter((p) => p.category === activeCategory);

    // Close on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setActivePhoto(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="w-full py-16 md:py-24 font-outfit">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <p className="text-xs md:text-xl uppercase tracking-[0.3em] text-yellow-500/90 mb-3 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                            Photo Gallery
                        </p>
                        <h2 className="text-3xl md:text-5xl text-slate-800 tracking-tight">
                            Moments from the{" "}
                            <span className="bg-gradient-to-r from-yellow-400 via-orange-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                                Temple Premises
                            </span>
                        </h2>
                        <p className="mt-3 text-sm md:text-[15px] text-slate-800/80 max-w-xl">
                            Browse a curated collection of divine moments, festival highlights,
                            and peaceful temple views captured by devotees and photographers.
                        </p>
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`
                    text-xs md:text-sm px-3.5 py-1.5 transition-all
                    border backdrop-blur
                    ${isActive
                                            ? "bg-yellow-400 text-slate-950 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                                            : "text-slate-900 border-slate-900/70 hover:border-yellow-400/60 hover:text-yellow-100"
                                        }
                  `}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Gallery Grid – masonry-ish, no gaps */}
                <div
                    className="
             grid gap-4 sm:gap-5
            grid-cols-2 md:grid-cols-3
            auto-rows-[160px] sm:auto-rows-[190px] md:auto-rows-[220px]
          "
                >
                    {filteredPhotos.map((photo) => {
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
                                className={`
                  group relative overflow-hidden
                  ${layoutClass}
                  bg-slate-800/90
                   hover:ring-yellow-400/70
                  transition-all duration-300
                `}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Gradient overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Bottom info */}
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-center justify-between">
                                    <div className="text-left">
                                        <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/90">
                                            {photo.category}
                                        </p>
                                        <p className="mt-1 text-[13px] sm:text-sm font-medium text-slate-50 line-clamp-2">
                                            {photo.alt}
                                        </p>
                                    </div>
                                    {/* "View" icon */}
                                    <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-200/90 bg-black/40 px-2 py-1 rounded-full border border-white/10 backdrop-blur">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                                        <span>View</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {activePhoto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm px-3"
                    onClick={() => setActivePhoto(null)}
                >
                    {/* Close on background click */}
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setActivePhoto(null)}
                            className="absolute -top-10 right-0 text-slate-200 text-sm bg-white/10 px-3 py-1.5 border border-white/20 hover:bg-white/20 transition"
                        >
                            ✕ Close
                        </button>

                        {/* Image */}
                        <div className="aspect-video rounded-2xl overflow-hidden bg-black/60 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
                            <img
                                src={activePhoto.src}
                                alt={activePhoto.alt}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Caption */}
                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400/90">
                                    {activePhoto.category}
                                </p>
                                <p className="mt-1 text-sm sm:text-base text-slate-100">
                                    {activePhoto.alt}
                                </p>
                            </div>
                            <p className="text-[11px] text-slate-400">
                                Tip: Press{" "}
                                <span className="px-1 rounded bg-slate-800/80">Esc</span> to
                                close
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Photos;
