"use client";
import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      once: true, // Whether animation should happen only once
    });

    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".move-parallax");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parallaxElements.forEach((element: Record<string, any>) => {
        const speed = 0.2;
        const offset = window.scrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <title>TruCulture Enhanced</title>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat px-4 animate-fade-in">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[6s] ease-out transform scale-110"
          style={{ pointerEvents: "none" }}
        >
          <source src="/tv-production.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 z-10"></div>

        {/* Content */}
        <div className="container relative z-20 max-w-3xl mx-auto text-white px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-wide animate-fade-in-up">
            The Soundtrack for Television.
          </h1>
          <p className="mb-6 text-base md:text-lg lg:text-xl leading-relaxed animate-fade-in-up delay-500">
            {`TruCulture provides exceptional music tailored for TV, featuring handpicked tracks from a global roster of unique artists and composers. Our sound has already enhanced popular productions, including the Netflix original film "`}<span className="text-purple-400 font-semibold">Supacell</span>{`." Whether it's drama, comedy, reality TV, or documentaries—bring your television vision to life with our curated music.`}
          </p>
          <a
            href="#"
            className="relative inline-block bg-purple-500 text-white py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-full text-sm md:text-base lg:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600 shadow-xl animate-bounce-in group overflow-hidden"
          >
            <span className="absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
            <span className="relative z-10">Find Your Perfect Track</span>
          </a>
        </div>

        {/* Random lines and decorative elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute w-4/5 md:w-3/5 lg:w-2/5 h-1 bg-indigo-500 transform rotate-6 top-1/4 left-0 opacity-30 animate-slide-in-left transition-all duration-1000 ease-in-out hover:opacity-50"></div>
          <div className="absolute w-2/3 md:w-1/3 lg:w-1/4 h-1 bg-purple-500 transform -rotate-6 bottom-10 right-0 opacity-30 animate-slide-in-right transition-all duration-1000 ease-in-out hover:opacity-50"></div>
          {/* Glowing Circle */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-2xl top-16 left-16 transform animate-pulse-slow"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-25 blur-2xl bottom-16 right-16 transform animate-pulse-slow delay-1000"></div>
        </div>
      </section>



      {/* Video Section */}
      <motion.section
        className="relative z-30 -mt-20 overflow-hidden py-16"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
        ref={ref}
      >
        <div className="container mx-auto text-center max-w-7xl px-4 relative">
          {/* Enhanced Background Glow Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl top-20 left-0 animate-pulse-slow"></div>
            <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-25 blur-3xl bottom-10 right-10 animate-pulse-slow delay-1000"></div>
          </div>

          {/* Video Container */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in-up group">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 z-20 border-4 border-transparent rounded-lg group-hover:border-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-indigo-500 transition-all duration-700"></div>

            {/* Subtle Overlay for the Video */}
            <div className="absolute inset-0 bg-black opacity-20 z-10 rounded-lg pointer-events-none"></div>

            <motion.iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/e1Oh5J3ODiI?autoplay=1&mute=0"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full z-20 rounded-lg"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.6 },
                },
              }}
            ></motion.iframe>
          </div>
        </div>

        {/* Random lines and animated accents */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute w-4/5 md:w-1/3 h-1 bg-indigo-500 transform rotate-3 top-1/2 left-0 opacity-30 animate-slide-in-left transition-all duration-1000 ease-in-out hover:opacity-50"></div>
          <div className="absolute w-1/3 md:w-1/4 h-1 bg-purple-500 transform -rotate-6 bottom-5 right-5 opacity-30 animate-slide-in-right transition-all duration-1000 ease-in-out hover:opacity-50"></div>
        </div>
      </motion.section>

      {/* Sign-Up Section with Enhanced UX and Typography */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 py-16">
        {/* Decorative Background Animations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="move-parallax absolute right-0 top-0 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl"></div>
          <div className="move-parallax absolute bottom-10 left-10 h-48 w-48 animate-bounce rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-10 blur-2xl"></div>
        </div>

        <div className="container mx-auto flex flex-col items-center justify-between px-10 lg:flex-row">
          {/* Sign Up Info */}
          <div className="text-white lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-right">
            <h2 className="mb-4 text-5xl font-extrabold leading-tight tracking-wide text-center lg:text-left">
              Sell Music in 100+ Countries
            </h2>
            <ul className="mb-8 list-disc space-y-4 pl-5 text-lg text-blue-100">
              <li className="font-medium transition-transform duration-200 hover:scale-105 hover:text-white">
                No annual fees or per-release fees.
              </li>
              <li className="font-medium transition-transform duration-200 hover:scale-105 hover:text-white">
                Keep 100% of your royalties.
              </li>
              <li className="font-medium transition-transform duration-200 hover:scale-105 hover:text-white">
                Get your music in top stores like iTunes, Apple Music, Tidal, Amazon, and more.
              </li>
            </ul>
          </div>

          {/* Sign Up Form with Micro-Interactions and Real-Time Validation */}
          <div
            className="hover-scale relative rounded-lg bg-white p-10 shadow-lg transition-all hover:shadow-2xl lg:w-1/2 w-full max-w-lg"
            data-aos="fade-left"
          >
            <h3 className="mb-6 text-3xl font-bold text-gray-800 text-center lg:text-left">Get Started Now</h3>
            <form id="email-list-form" aria-live="polite">
              {/* Name Field */}
              <div className="relative mb-6">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name (optional)"
                  aria-label="Name"
                  className="focus-ring w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 pl-12 text-lg transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-blue-300"
                />
                <svg
                  className="absolute left-3 top-3 h-6 w-6 text-gray-400 transition-transform duration-300 hover:scale-110 group-focus:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5zm0 6v-6l-9-5 9-5 9 5v6z"
                  />
                </svg>
              </div>

              {/* Email Field with Validation and Animation */}
              <div className="group relative mb-6">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  className="focus-ring w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 pl-12 text-lg transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-blue-300"
                  required
                />
                <svg
                  className="absolute left-3 top-3 h-6 w-6 text-gray-400 transition-transform duration-300 group-hover:scale-110 group-focus:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12v4m0 4h-4a4 4 0 01-8 0H4v-4H2V8h2V5.5A3.5 3.5 0 017.5 2H16a4 4 0 014 4v8z"
                  />
                </svg>
                <span id="email-error" className="mt-2 hidden text-sm text-red-500">
                  Please enter a valid email address.
                </span>
              </div>

              {/* Submit Button with Ripple Effect */}
              <button
                type="submit"
                className="relative hover-scale w-full rounded-lg bg-blue-600 px-4 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with Moiré Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16">
        {/* Decorative Moiré Background Animations */}
        <div className="pointer-events-none absolute inset-0">
          {/* Moiré Effect */}
          <div className="absolute inset-0 w-full h-full bg-[url('/moire-pattern.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

          {/* Decorative Animated Elements */}
          <div className="absolute right-0 top-0 h-96 w-96 animate-pulse rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-0 h-72 w-72 animate-bounce rounded-full bg-purple-300 opacity-5 blur-2xl"></div>
        </div>

        <div className="container relative mx-auto text-center px-6 lg:px-10">
          {/* Section Title with Subtle Animation */}
          <h3 className="mb-12 text-4xl font-extrabold tracking-wider text-gray-800" data-aos="fade-up">
            What Artists Are Saying About TruCulture!
          </h3>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 lg:px-16 scrollbar-hide">
              {[
                {
                  quote: "“So thankful I stumbled upon TruCulture... It makes releasing my music a much more consistent process!”",
                  name: "- Mark Stokes, Artist",
                },
                {
                  quote: "“TruCulture helped me get my music in front of people I never thought I'd reach. Fantastic support and opportunities!”",
                  name: "- Alexa Roberts, Musician",
                },
                {
                  quote: "“A game-changer for independent artists. Easy to use and provides global reach that I wouldn't have managed alone.”",
                  name: "- James Lee, Singer-Songwriter",
                },
                {
                  quote: "“I’ve never had such an easy time distributing my music to so many platforms. TruCulture truly lives up to its promise!”",
                  name: "- Sarah Thompson, Indie Artist",
                },
                {
                  quote: "“Working with TruCulture allowed me to fully focus on my music. Their platform takes care of everything else seamlessly.”",
                  name: "- Michael Rivera, Music Producer",
                },
                {
                  quote: "“TruCulture’s customer service is unmatched. They truly care about the artists and help guide us in the right direction.”",
                  name: "- Nina Patel, Vocalist",
                },
                {
                  quote: "“The royalty transparency I get with TruCulture is amazing. I always know what I'm earning and where my music is being played.”",
                  name: "- Sam Brooks, Hip-Hop Artist",
                },
                {
                  quote: "“As an independent artist, I was always struggling with distribution. TruCulture made it so simple and efficient!”",
                  name: "- Emma Johnson, Pop Singer",
                },
                {
                  quote: "“I love that TruCulture lets me keep all my royalties. It's hard enough to make money as an indie artist, but TruCulture makes it worthwhile.”",
                  name: "- Robert Young, Jazz Musician",
                },
                {
                  quote: "“The global reach I got with TruCulture is beyond my expectations. I now have listeners from countries I had never even dreamed of.”",
                  name: "- Yuki Tanaka, Electronic Music Producer",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full lg:min-w-[33%] snap-center transform rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <svg
                    className="mx-auto mb-4 h-10 w-10 text-blue-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3m0 0h3m-3 0V9m0 3v3m5-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <blockquote className="text-xl italic leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay={100}>
                    {testimonial.quote}
                  </blockquote>
                  <p className="mt-6 text-lg font-bold text-blue-600" data-aos="fade-up" data-aos-delay={200}>
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 mt-8">
              {Array.from({ length: 10 }).map((_, index) => (
                <button
                  key={index}
                  className={`h-4 w-4 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
