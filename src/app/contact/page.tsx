import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaMusic, FaLink, FaCommentDots } from 'react-icons/fa';

const Page = () => {
    return (
        <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 min-h-screen flex items-center justify-center p-8">
            <div className="bg-white text-blue-900 p-10 rounded-3xl shadow-2xl w-full max-w-5xl transition duration-500 ease-in-out hover:shadow-3xl transform hover:scale-105">
                <div className="md:flex justify-between items-center gap-12">
                    {/* Left Section */}
                    <div className="mb-10 md:mb-0 md:w-1/2">
                        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse">
                            Get a Quote 🎶
                        </h2>
                        <p className="mb-8 text-lg font-light">
                            {`Fill in the form and our team will get back to you within 24 hours. We can't wait to hear about your amazing projects!`}
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center mb-4">
                                <FaEnvelope className="h-6 w-6 text-purple-500 mr-4 animate-pulse" />
                                <a href="mailto:info@truculture.com" className="text-purple-700 hover:underline font-semibold transition-all duration-200 ease-in-out">
                                    info@truculture.com
                                </a>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaPhoneAlt className="h-6 w-6 text-purple-500 mr-4 animate-pulse" />
                                <p className="text-purple-700 font-semibold">+0123 4567 8910</p>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="h-6 w-6 text-purple-500 mr-4 animate-pulse" />
                                <p className="text-purple-700 font-semibold">102 Street 2/14 Don</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Section (Form) */}
                    <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 text-blue-900 rounded-3xl p-10 shadow-xl w-full max-w-md md:w-1/2">
                        <form className="space-y-8">
                            {[
                                {
                                    label: 'Full Name *',
                                    id: 'name',
                                    icon: <FaUser className="mr-3 text-blue-600" />,
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    label: 'E-mail *',
                                    id: 'email',
                                    icon: <FaEnvelope className="mr-3 text-blue-600" />,
                                    type: 'email',
                                    required: true,
                                },
                                {
                                    label: 'Phone',
                                    id: 'phone',
                                    icon: <FaPhoneAlt className="mr-3 text-blue-600" />,
                                    type: 'tel',
                                    required: false,
                                },
                                {
                                    label: 'Artist Name *',
                                    id: 'artistName',
                                    icon: <FaMusic className="mr-3 text-blue-600" />,
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    label: 'Soundcloud Link *',
                                    id: 'soundcloud',
                                    icon: <FaLink className="mr-3 text-blue-600" />,
                                    type: 'url',
                                    required: true,
                                },
                                {
                                    label: 'Spotify Link',
                                    id: 'spotify',
                                    icon: <FaLink className="mr-3 text-blue-600" />,
                                    type: 'url',
                                    required: false,
                                },
                                {
                                    label: 'YouTube Link',
                                    id: 'youtube',
                                    icon: <FaLink className="mr-3 text-blue-600" />,
                                    type: 'url',
                                    required: false,
                                },
                                {
                                    label: 'Your Website URL',
                                    id: 'website',
                                    icon: <FaLink className="mr-3 text-blue-600" />,
                                    type: 'url',
                                    required: false,
                                },
                                {
                                    label: 'Who owns Publishing Rights? *',
                                    id: 'publishingRights',
                                    icon: <FaUser className="mr-3 text-blue-600" />,
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    label: 'Music Masters - Who owns the rights?',
                                    id: 'musicMasters',
                                    icon: <FaUser className="mr-3 text-blue-600" />,
                                    type: 'text',
                                    required: false,
                                },
                            ].map((field) => (
                                <div key={field.id} className="flex items-center mb-6">
                                    {field.icon}
                                    <div className="w-full">
                                        <label htmlFor={field.id} className="block text-sm font-semibold mb-2">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            className="w-full p-4 border border-blue-300 rounded-xl focus:ring-4 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out shadow-sm"
                                            required={field.required}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center mb-6">
                                <FaCommentDots className="mr-3 text-blue-600" />
                                <div className="w-full">
                                    <label htmlFor="comment" className="block text-sm font-semibold mb-2">
                                        Comment *
                                    </label>
                                    <textarea
                                        id="comment"
                                        className="w-full p-4 border border-blue-300 rounded-xl focus:ring-4 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out shadow-sm"
                                        rows={4}
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold py-4 rounded-xl hover:from-pink-500 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 focus:outline-none"
                            >
                                Send Message 💌
                            </button>
                        </form>
                    </div>
                </div>
                {/* Social Icons */}
                <div className="flex justify-start mt-10 space-x-6">
                    <a href="#" className="text-purple-700 hover:text-purple-900 transition duration-200 transform hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.91 9.91 0 01-2.828.775 4.958 4.958 0 002.165-2.725 9.918 9.918 0 01-3.127 1.194 4.924 4.924 0 00-8.39 4.482 13.97 13.97 0 01-10.152-5.145 4.822 4.822 0 00-.666 2.475 4.92 4.92 0 002.188 4.1 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.95 4.894a4.93 4.93 0 01-2.224.085 4.928 4.928 0 004.604 3.416 9.876 9.876 0 01-6.102 2.105c-.395 0-.787-.023-1.175-.068a13.956 13.956 0 007.548 2.212c9.05 0 13.998-7.496 13.998-13.987 0-.213-.005-.425-.014-.637a9.936 9.936 0 002.459-2.549z" />
                        </svg>
                    </a>
                    <a href="#" className="text-purple-700 hover:text-purple-900 transition duration-200 transform hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.969.24 2.438.407a4.937 4.937 0 011.742 1.007 4.937 4.937 0 011.007 1.742c.167.469.352 1.268.407 2.438.058 1.267.07 1.647.07 4.851 0 3.204-.012 3.584-.07 4.851-.055 1.17-.24 1.969-.407 2.438a4.937 4.937 0 01-1.007 1.742 4.937 4.937 0 01-1.742 1.007c-.469.167-1.268.352-2.438.407-1.267.058-1.647.07-4.851.07-3.204 0-3.584-.012-4.851-.07-1.17-.055-1.969-.24-2.438-.407a4.937 4.937 0 01-1.742-1.007 4.937 4.937 0 01-1.007-1.742c-.167-.469-.352-1.268-.407-2.438-.058-1.267-.07-1.647-.07-4.851 0-3.204.012-3.584.07-4.851.055-1.17.24-1.969.407-2.438a4.937 4.937 0 011.007-1.742 4.937 4.937 0 011.742-1.007c.469-.167 1.268-.352 2.438-.407 1.267-.058 1.647-.07 4.851-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.284.06-2.17.276-2.92.593a6.954 6.954 0 00-2.526 1.659 6.952 6.952 0 00-1.659 2.526c-.317.75-.534 1.636-.593 2.92-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.06 1.284.276 2.17.593 2.92a6.954 6.954 0 001.659 2.526 6.952 6.952 0 002.526 1.659c.75.317 1.636.534 2.92.593 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.284-.06 2.17-.276 2.92-.593a6.954 6.954 0 002.526-1.659 6.952 6.952 0 001.659-2.526c.317-.75.534-1.636.593-2.92.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.06-1.284-.276-2.17-.593-2.92a6.954 6.954 0 00-1.659-2.526 6.952 6.952 0 00-2.526-1.659c-.75-.317-1.636-.534-2.92-.593-1.28-.059-1.69-.072-4.947-.072z" />
                        </svg>
                    </a>
                    <a href="#" className="text-purple-700 hover:text-purple-900 transition duration-200 transform hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 11.05v1.9c0 .714-.04 1.384-.117 2.005-.078.621-.198 1.2-.36 1.74-.163.54-.374 1.046-.635 1.52-.261.474-.574.91-.937 1.31-.363.4-.783.748-1.26 1.045-.476.297-.998.527-1.567.69-.568.162-1.174.243-1.817.243H7.24c-.642 0-1.249-.081-1.817-.243-.568-.163-1.09-.393-1.567-.69-.476-.297-.897-.645-1.26-1.045-.363-.4-.676-.836-.937-1.31-.261-.474-.472-.98-.635-1.52-.163-.54-.283-1.119-.36-1.74-.078-.621-.117-1.291-.117-2.005v-1.9c0-.714.04-1.384.117-2.005.078-.621.198-1.2.36-1.74.163-.54.374-1.046.635-1.52.261-.474.574-.91.937-1.31.363-.4.783-.748 1.26-1.045.476-.297.998-.527 1.567-.69.568-.162 1.174-.243 1.817-.243h8.52c.642 0 1.249.081 1.817.243.568.163 1.09.393 1.567.69.476.297.897.645 1.26 1.045.363.4.676.836.937 1.31.261.474.472.98.635 1.52.163.54.283 1.119.36 1.74.078.621.117 1.291.117 2.005z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page;
