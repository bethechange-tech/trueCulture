"use client";
import React, { useState } from "react";

interface CustomSelectProps {
    options: string[];
    label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full lg:w-64">
            <button
                type="button"
                onClick={toggleDropdown}
                className="block w-full px-4 py-3 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
            >
                {selectedOption || label}
                <span
                    className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                >
                    <svg
                        className="h-5 w-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-all duration-200"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
