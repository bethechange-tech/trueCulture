"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
    const controls = useAnimation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        const navbar = document.getElementById("navbar");

        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar?.classList.add("bg-white", "shadow-lg");
                navbar?.classList.remove("bg-transparent");
            } else {
                navbar?.classList.add("bg-transparent");
                navbar?.classList.remove("bg-white", "shadow-lg");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header
                id="navbar"
                className="sticky top-0 z-50 flex items-center justify-between bg-transparent px-6 py-4 transition-all duration-300 ease-in-out"
            >
                {/* Logo Section */}
                <Link href="/" passHref>
                    <motion.div
                        className="flex items-center cursor-pointer"
                        animate={controls}
                        initial={{ y: -10, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 120, duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image
                            src="/images/Tru_Culture_gold_logo_XV.png"
                            alt="SingerX TNC"
                            width={40}
                            height={40}
                            className="mr-2"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden space-x-6 md:flex">
                    <Link href="/" className="text-gray-700 hover:underline">
                        Home
                    </Link>
                    <Link href="/music-catalogue" className="text-gray-700 hover:underline">
                        Music Catalogue
                    </Link>
                    <Link href="/sync" className="text-gray-700 hover:underline">
                        Sync
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:underline">
                        Contact Us
                    </Link>
                </nav>

                {/* CTA Button */}
                <button className="hidden md:inline-block rounded-full bg-pink-500 px-4 py-2 text-white">
                    Listen Now
                </button>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 flex-col items-center justify-center space-y-6 bg-white/90 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"
                    }`}
            >
                <Link href="/" className="text-xl text-gray-700 hover:underline">
                    Home
                </Link>
                <Link href="/music-catalogue" className="text-xl text-gray-700 hover:underline">
                    Music Catalogue
                </Link>
                <Link href="/sync" className="text-xl text-gray-700 hover:underline">
                    Sync
                </Link>
                <Link href="/contact" className="text-xl text-gray-700 hover:underline">
                    Contact Us
                </Link>
                <button className="rounded-lg bg-pink-500 px-6 py-2 text-xl text-white hover:bg-pink-600">
                    Listen Now
                </button>
            </div>
        </>
    );
};

export default Header;
