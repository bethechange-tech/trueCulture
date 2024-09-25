import Image from 'next/image';
import React from 'react';
import CustomSelect from '../../components/CustomSelect'

const page = () => {
    return (
        <>
            <title>Enhanced Roster Page with Filters</title>

            {/* Header Section */}
            <header className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-500">
                        Delve Into Our Roster
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        We represent a handpicked, unique roster of artists and composers
                        producing fresh and exciting tracks for a global audience.
                    </p>
                </div>
            </header>

            {/* Filter Section */}
            <section className="mt-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <h2 className="text-3xl font-semibold text-gray-800">Artists</h2>

                        {/* Custom Select Filters */}
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 w-full lg:w-auto">
                            {/* Genre Filter */}
                            <CustomSelect
                                label="Filter by Genre"
                                options={["Jazz", "Hip Hop", "Pop", "Afrobeats", "Lo-fi"]}
                            />

                            {/* Country Filter */}
                            <CustomSelect
                                label="Filter by Country"
                                options={["USA", "India", "Nigeria", "UK", "Canada"]}
                            />
                        </div>
                    </div>
                    <hr className="mt-10 border-gray-300" />
                </div>
            </section>

            {/* Artists Section */}
            <section className="mt-16 pb-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {["Abhimanyu-Pragya", "Agat", "Ajimovoix", "Amrit Ramnath"].map((artist, index) => (
                            <div
                                key={artist}
                                className="group relative rounded-lg overflow-hidden bg-white shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                            >
                                <Image
                                    height={400}
                                    width={400}
                                    src={`https://via.placeholder.com/400x400?text=${artist}`}
                                    alt={artist}
                                    className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="p-6 z-10 relative">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-500 transition-colors">
                                        {artist}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {/* Sample genre descriptions */}
                                        {index === 0 && "Indian Pop, Indie Pop, Chillhop, LoFi, Easy Listening"}
                                        {index === 1 && "Hip Hop, Trip-Hop, Synth Pop"}
                                        {index === 2 && "Afro Street, Afropop, Afropiano"}
                                        {index === 3 && "Singer-Songwriter, Pop, Folk Pop, Indian Pop"}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {index % 2 === 0 ? "India" : "USA"}
                                    </p>
                                    {/* Interactive Buttons */}
                                    <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="text-sm font-semibold text-gray-600 hover:text-purple-500 transition">
                                            View Profile
                                        </button>
                                        <div className="flex space-x-4">
                                            <button className="text-gray-500 hover:text-red-500 transition">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </button>
                                            <button className="text-gray-500 hover:text-blue-500 transition">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M12 12v6m0-6l-2-2m2 2l2-2"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
