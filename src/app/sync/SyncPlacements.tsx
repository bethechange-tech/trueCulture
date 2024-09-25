"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SyncPlacements() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null); // Typed ref for the scrollable div

    useEffect(() => {
        const container = containerRef.current as HTMLDivElement; // Explicitly cast as HTMLDivElement

        const handleScroll = () => {
            if (container) {
                const scrollWidth = container.scrollWidth - container.clientWidth;
                const scrollLeft = container.scrollLeft;
                const scrollPercentage = scrollLeft / scrollWidth;
                const totalCards = container.children.length;
                const currentIndex = Math.round(scrollPercentage * (totalCards - 1));
                setActiveIndex(currentIndex);
            }
        };

        container.addEventListener("scroll", handleScroll);

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCard = (index: number) => {
        const container = containerRef.current;
        if (container) {
            const cardWidth = container.children[index].clientWidth;
            const scrollLeft = index * (cardWidth + 24); // Adjust for space between cards (24px)
            container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
    };

    const handlePrevious = () => {
        if (activeIndex > 0) {
            scrollToCard(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex < 5) {
            scrollToCard(activeIndex + 1);
        }
    };

    return (
        <section className="bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center" data-aos="fade-up">
                    Our Recent Sync Placements
                </h2>

                <div className="relative">
                    {/* Carousel Container */}
                    <div
                        ref={containerRef}
                        className="scroll-container flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide space-x-6 transition-all ease-out duration-700"
                    >
                        {[
                            "Apple Sync",
                            "Zoom Sync",
                            "MX Player Sync",
                            "Neumatt Sync",
                            "Sony Entertainment Sync",
                            "Musical Range Sync",
                        ].map((title, index) => (
                            <div
                                key={title}
                                className="snap-start w-80 bg-white p-6 rounded-xl shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-500 hover:shadow-2xl group"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 100}`}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <Image
                                        src={`https://via.placeholder.com/400x400`}
                                        alt={title}
                                        width={400}
                                        height={400}
                                        className="rounded-lg w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-all duration-300">
                                    {title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                                    {`Description for ${title}.`}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4">
                        {[
                            "Apple Sync",
                            "Zoom Sync",
                            "MX Player Sync",
                            "Neumatt Sync",
                            "Sony Entertainment Sync",
                            "Musical Range Sync",
                        ].map((_, index) => (
                            <span
                                key={index}
                                className={`h-3 w-3 rounded-full transition-colors duration-300 ${activeIndex === index ? "bg-purple-600" : "bg-gray-400"
                                    }`}
                            ></span>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        aria-label="Previous"
                    >
                        <FaChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        aria-label="Next"
                    >
                        <FaChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
