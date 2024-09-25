"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TruCulture from "../../images/rsz_logo-hero.png";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const Client = () => {
    const controls = useAnimation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track mobile menu visibility

    useEffect(() => {
        const navbar = document.getElementById("navbar");

        // Scroll-based background change for navbar
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

        // Cleanup event listener
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
            <nav
                id="navbar"
                className="sticky top-0 z-50 flex items-center justify-between bg-transparent px-10 py-6 transition-all duration-300 ease-in-out"
            >
                {/* Logo with Hover Effect */}
                <Link href="/" passHref>
                    <motion.div
                        className="flex items-center cursor-pointer"
                        animate={controls}
                        initial={{ y: -10, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 120, duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image
                            src={TruCulture}
                            alt="TruCulture Logo"
                            width={60}
                            height={60}
                            className="mr-2 rounded-full"
                        />
                    </motion.div>
                </Link>

                {/* Navigation Links and CTA for Desktop */}
                <div className="hidden space-x-6 md:flex">
                    <a
                        href="/"
                        className="text-blue-600 transition-all hover:text-blue-700 hover:underline hover:underline-offset-4"
                    >
                        Home
                    </a>
                    <a
                        href="/music-catalogue"
                        className="text-blue-600 transition-all hover:text-blue-700 hover:underline hover:underline-offset-4"
                    >
                        Music Catalogue
                    </a>
                    <a
                        href="/sync"
                        className="text-blue-600 transition-all hover:text-blue-700 hover:underline hover:underline-offset-4"
                    >
                        Sync
                    </a>
                    <a
                        href="/contact"
                        className="text-blue-600 transition-all hover:text-blue-700 hover:underline hover:underline-offset-4"
                    >
                        Contact
                    </a>
                    <a
                        href="#"
                        className="hover-scale rounded-lg bg-blue-600 px-6 py-2 text-white transition-all hover:bg-blue-700"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="flex items-center md:hidden">
                    <button
                        id="nav-toggle"
                        className="text-blue-600 focus:outline-none"
                        onClick={toggleMenu}
                    >
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
            </nav>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-40 flex-col items-center justify-center space-y-6 bg-white/90 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"
                    }`}
            >
                <a
                    href="/"
                    className="text-xl text-blue-600 transition-all hover:text-blue-700"
                >
                    Home
                </a>
                <a
                    href="/music-catalogue"
                    className="text-xl text-blue-600 transition-all hover:text-blue-700"
                >
                    Music Catalogue
                </a>
                <a
                    href="/sync"
                    className="text-xl text-blue-600 transition-all hover:text-blue-700"
                >
                    Sync
                </a>
                <a
                    href="/contact"
                    className="text-xl text-blue-600 transition-all hover:text-blue-700"
                >
                    Contact
                </a>
                <a
                    href="#"
                    className="rounded-lg bg-blue-600 px-6 py-2 text-xl text-white transition-all hover:bg-blue-700"
                >
                    Sign Up
                </a>
            </div>
        </>
    );
};

export default Client;
