import SyncPlacements from "./SyncPlacements";
import Image from "next/image";

export default function SyncLicensingPage() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">

            {/* Sync Licensing Section */}
            <section className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-16">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-10 gap-10">
                    {/* Left Text Section */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-5xl font-bold tracking-tight mb-4 leading-snug lg:leading-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                            What is Sync Licensing?
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Synchronization (or sync) is the process of combining music with moving images such as film, television, advertising, trailers, and video games. Sync has seen huge growth in the music industry recently.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {`Our tracks have been used in various productions, including the popular Netflix film "`}<span className="font-semibold text-purple-500">Supacell</span>{`." Whether it's a dramatic moment or an upbeat scene, sync licensing helps bring emotions to life on the screen.`}
                        </p>
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="1000">
                        <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
                            <Image
                                src="https://via.placeholder.com/600x400"
                                alt="Sync Licensing"
                                width={600}
                                height={400}
                                layout="responsive"
                                className="rounded-xl object-cover"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-30 transition-opacity duration-500"></div>

                            {/* Play Button for Video (optional for more engagement) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                                <button className="p-4 rounded-full bg-white text-blue-500 hover:bg-purple-500 hover:text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-7.197-4.132A1 1 0 006 7.868v8.264a1 1 0 001.555.832l7.197-4.132a1 1 0 000-1.664z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 2: Recent Sync Placements */}
            <SyncPlacements />

            {/* Section 3: Catalogue Licensing */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto text-center px-4 lg:px-10">
                    <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                        License the TruCulture Publishing Catalogue
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        TruCulture Publishing offers a unique roster of music available for sync in film, television, advertising, and games. If you’re interested in licensing our tracks or bespoke compositions, contact us.
                    </p>
                    <a
                        href="#"
                        className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-8 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:from-gray-900 hover:to-black focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Search Our Disco Library
                    </a>
                </div>
            </section>

            {/* Section 4: Sync Licensing Video */}
            <section className="mb-16">
                <div className="container mx-auto px-4 lg:px-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-gray-900">
                        Get your music into film, TV, games, and adverts
                    </h3>
                    <div className="relative mb-4 mx-auto" style={{ maxWidth: '90%', height: 0, paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
                            src="https://www.youtube.com/embed/1kcLo91Qkcc"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                        />
                    </div>
                </div>
            </section>

            {/* Section 5: Brand Logos */}
            <section className="bg-white py-16">
                <div className="container mx-auto text-center px-4 lg:px-10">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8" data-aos="fade-up">
                        Get Your Music Placed
                    </h2>

                    {/* Logos */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8" data-aos="fade-up" data-aos-delay="100">
                        {['Lionsgate', 'Sony Pictures', 'CBS'].map((brand) => (
                            <div
                                key={brand}
                                className="group relative w-44 h-16 mx-auto transform transition-transform duration-300 hover:scale-110"
                            >
                                {/* Logo Image */}
                                <Image
                                    src={`https://via.placeholder.com/200x50`}
                                    alt={brand}
                                    width={200}
                                    height={50}
                                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        We work with top music supervisors globally, including those from Netflix, VICE, Universal Pictures, and more.
                    </p>
                </div>
            </section>

        </div>
    );
}
