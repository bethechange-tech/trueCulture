import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-900 py-12 text-white">
            <div className="container mx-auto flex flex-col justify-between px-10 lg:flex-row lg:items-start">
                {/* Brand */}
                <div className="space-y-6 lg:w-1/3">
                    <div className="text-2xl font-extrabold text-white hover:text-blue-300 transition-colors duration-300">TruCulture</div>
                    <p className="text-gray-300 leading-relaxed">{`Release unlimited albums and songs on the world's most popular stores.`}</p>
                </div>

                {/* Navigation Links */}
                <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:w-1/3">
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-200">TruCulture</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-blue-300">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-blue-300">Features</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-blue-300">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-200">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-blue-300">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-blue-300">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 transition-colors duration-300 hover:text-blue-300">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex space-x-6 lg:mt-0 lg:w-1/3 lg:justify-end">
                    <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300" aria-label="Facebook">
                        <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300" aria-label="Twitter">
                        <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300" aria-label="Instagram">
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
                © 2023 TruCulture. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer