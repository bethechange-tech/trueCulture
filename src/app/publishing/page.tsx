import Image from "next/image";
import BlueHeart from '../../images/gradient_blue_heart.png'

export default function MusicPublishingPage() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">

            {/* Enhanced Section 1: Introduction */}
            <section className="bg-white py-16 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 to-pink-100 opacity-20 animate-pulse"></div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-8 relative z-10">
                    {/* Text Section */}
                    <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-snug lg:leading-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            What is Music Publishing?
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Music publishing is a complex part of the music industry and can be confusing for songwriters. TruCulture Publishing is here to make music publishing simple and accessible.
                        </p>
                        <a href="#learn-more" className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                            Learn More
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 relative" data-aos="fade-left" data-aos-duration="1000">
                        <div className="relative group">
                            <Image
                                width={400}
                                height={400}
                                src={BlueHeart}
                                alt="Music Publishing"
                                className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
                            />
                            {/* Image Overlay for hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Exposure for Your Songs */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-8 relative z-10">
                    <div className="md:w-1/2 relative" data-aos="fade-right" data-aos-duration="1000">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-lg opacity-30 transform scale-110"></div>
                        <Image
                            src="https://via.placeholder.com/400x400"
                            width={400}
                            height={400}
                            alt="Get Exposure"
                            className="relative rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                        />
                    </div>

                    <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left" data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="text-4xl font-bold tracking-tight mb-4 leading-snug text-gray-900">
                            Get exposure for your songs
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Having music publishing representation by TruCulture Publishing means you have an ally pitching your songs to sync opportunities worldwide.
                        </p>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform transition-transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300"
                        >
                            Contact Us For More Information
                        </a>
                    </div>
                </div>
            </section>


            {/* Section 2: Three Key Areas */}
            {/* <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 text-center" data-aos="fade-up" data-aos-duration="1000">
                        TruCulture looks after your song in three key areas:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-pink-100 to-pink-50">
                            <div className="bg-gradient-to-tr from-pink-400 to-pink-600 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                                <i className="fas fa-music text-white text-3xl"></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-pink-500 transition-colors duration-300">Song Administration</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                We ensure your songs are properly registered with collection societies worldwide.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-purple-100 to-purple-50">
                            <div className="bg-gradient-to-tr from-purple-400 to-purple-600 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                                <i className="fas fa-money-bill-wave text-white text-3xl"></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-500 transition-colors duration-300">Royalty Collection</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                Collect your performance and mechanical royalties from across the globe.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-blue-100 to-blue-50">
                            <div className="bg-gradient-to-tr from-blue-400 to-blue-600 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                                <i className="fas fa-file-alt text-white text-3xl"></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-500 transition-colors duration-300">Creative Licensing</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                License your music for use in TV, films, advertisements, and games.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 text-center" data-aos="fade-up" data-aos-duration="1000">
                        TruCulture looks after your song in three key areas:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-pink-100 to-pink-50">
                            <div className="bg-gradient-to-tr from-pink-400 to-pink-600 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                                <i className="fas fa-music text-white text-3xl"></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-pink-500 transition-colors duration-300">Song Administration</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                We ensure your songs are properly registered with collection societies worldwide.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-purple-100 to-purple-50">
                            <div className="bg-gradient-to-tr from-purple-400 to-purple-600 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                                <i className="fas fa-money-bill-wave text-white text-3xl"></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-500 transition-colors duration-300">Royalty Collection</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                Collect your performance and mechanical royalties from across the globe.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-blue-100 to-blue-50">
                            <div className="bg-gradient-to-tr from-blue-400 to-blue-600 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                                <i className="fas fa-file-alt text-white text-3xl"></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-500 transition-colors duration-300">Creative Licensing</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                License your music for use in TV, films, advertisements, and games.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Section: Revenue & Collection */}
            <section className="bg-gradient-to-br from-red-500 to-pink-600 text-white py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Left Column: Revenue Generation Information */}
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h3 className="text-3xl font-extrabold mb-6">
                                {`Your song is generating revenue whenever it's:`}
                            </h3>
                            <ul className="list-disc list-inside text-lg space-y-3">
                                <li>Played on Radio</li>
                                <li>Performed Live</li>
                                <li>Reproduced on CD</li>
                                <li>Streamed on Digital Services (Spotify, Apple Music, etc.)</li>
                                <li>Placed in Film, TV, or Video Games</li>
                            </ul>
                            <a
                                href="#"
                                className="mt-8 inline-block bg-white text-red-500 font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-offset-2"
                            >
                                More on Revenue Streams
                            </a>
                        </div>

                        {/* Right Column: Collection Information */}
                        <div className="bg-white p-8 rounded-lg shadow-lg text-gray-900" data-aos="fade-left" data-aos-duration="1000">
                            <h3 className="text-2xl font-bold mb-6">Not sure how to collect these?</h3>
                            <p className="text-lg text-gray-600">
                                TruCulture Publishing liaises with collection societies worldwide to ensure that your songs are registered and your royalties are collected.
                            </p>
                            <p className="mt-4 text-sm text-gray-500">
                                This leaves you to concentrate on what you do best: writing great music.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
