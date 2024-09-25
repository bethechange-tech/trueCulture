"use client"; // Add this to make the component a Client Component

import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser, FaMusic, FaLink, FaCommentDots } from 'react-icons/fa';

// Define a type with a string index signature to handle dynamic form keys
type FormDataType = {
    [key: string]: string;
};

const Page = () => {
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        email: '',
        phone: '',
        artistName: '',
        soundcloud: '',
        spotify: '',
        youtube: '',
        website: '',
        publishingRights: '',
        musicMasters: '',
        comment: '',
    });

    const [errors, setErrors] = useState<FormDataType>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const formErrors: FormDataType = {};

        // Name validation
        if (!formData.name) {
            formErrors.name = 'Full Name is required.';
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            formErrors.email = 'A valid email is required.';
        }
        // Soundcloud validation
        if (!formData.soundcloud) {
            formErrors.soundcloud = 'Soundcloud link is required.';
        }
        // Artist name validation
        if (!formData.artistName) {
            formErrors.artistName = 'Artist Name is required.';
        }
        // Publishing rights validation
        if (!formData.publishingRights) {
            formErrors.publishingRights = 'Publishing Rights information is required.';
        }
        // Comment validation
        if (!formData.comment) {
            formErrors.comment = 'Comment is required.';
        }

        return formErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // No errors, submit form (API call or form processing logic)
            alert('Form submitted successfully!');
            console.log('Form Data:', formData);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                artistName: '',
                soundcloud: '',
                spotify: '',
                youtube: '',
                website: '',
                publishingRights: '',
                musicMasters: '',
                comment: '',
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 min-h-screen flex items-center justify-center p-4 sm:p-8">
            <div className="bg-white text-blue-900 p-6 sm:p-10 rounded-3xl shadow-2xl w-full max-w-5xl transition duration-500 ease-in-out hover:shadow-3xl transform hover:scale-105">
                <div className="md:flex justify-between items-center gap-12">
                    {/* Left Section */}
                    <div className="mb-10 md:mb-0 md:w-1/2">
                        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse">
                            Get a Quote 🎶
                        </h2>
                        <p className="mb-8 text-sm sm:text-lg font-light">
                            {`Fill in the form and our team will get back to you within 24 hours. We can't wait to hear about your amazing projects!`}
                        </p>
                    </div>

                    {/* Right Section (Form) */}
                    <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 text-blue-900 rounded-3xl p-6 sm:p-10 shadow-xl w-full max-w-md md:w-1/2">
                        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
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
                                <div key={field.id} className="flex items-center mb-4 sm:mb-6">
                                    {field.icon}
                                    <div className="w-full">
                                        <label htmlFor={field.id} className="block text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            id={field.id}
                                            value={formData[field.id]} // Corrected value access
                                            onChange={handleInputChange}
                                            className={`w-full p-3 sm:p-4 border border-blue-300 rounded-xl focus:ring-4 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out shadow-sm ${errors[field.id] ? 'border-red-500' : ''
                                                }`}
                                            required={field.required}
                                        />
                                        {errors[field.id] && <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>}
                                    </div>
                                </div>
                            ))}

                            <div className="flex items-center mb-4 sm:mb-6">
                                <FaCommentDots className="mr-3 text-blue-600" />
                                <div className="w-full">
                                    <label htmlFor="comment" className="block text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                                        Comment *
                                    </label>
                                    <textarea
                                        id="comment"
                                        value={formData.comment} // Corrected value access
                                        onChange={handleInputChange}
                                        className={`w-full p-3 sm:p-4 border border-blue-300 rounded-xl focus:ring-4 focus:ring-blue-400 focus:outline-none transition-all duration-300 ease-in-out shadow-sm ${errors.comment ? 'border-red-500' : ''
                                            }`}
                                        rows={4}
                                        required
                                    />
                                    {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold py-3 sm:py-4 rounded-xl hover:from-pink-500 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 focus:outline-none"
                            >
                                Send Message 💌
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
