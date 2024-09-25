"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import AlbertFlores from '../images/albert_flores.png'
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { ImageWithLoading } from "@/components/ImageWithLoading";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle manual navigation through the dots
  const handleNavigationClick = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const testimonials = [
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
  ];

  const slideCount = testimonials.length;

  // Auto-scrolling feature
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [slideCount]);


  useEffect(() => {
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
      <motion.section
        className="bg-gradient-to-r from-purple-800 to-red-500 py-16 sm:py-24 text-white"
        initial="hidden"
        animate="visible"
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        <div className="container mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-5xl">
            Get your music in top stores like iTunes, Apple Music, Tidal, Amazon, and more.
          </h1>

          {/* Subheading */}
          <p className="mb-6 text-sm sm:text-base lg:text-xl">
            Experience the soulful melodies and heartfelt lyrics of Albert Flores, where every note tells a story.
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link href={"/music-catalogue"}>
              <button className="rounded-full bg-pink-500 px-6 py-3 text-sm sm:text-base text-white transition-transform duration-300 transform hover:scale-105 hover:bg-pink-600">
                Listen Our Music
              </button>
            </Link>

            <Link href={"/music-catalogue"}>
              <button className="rounded-full bg-white px-6 py-3 text-sm sm:text-base text-black transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200">
                Listen on Spotify
              </button>
            </Link>
          </div>

          {/* Optimized Image */}
          <div className="relative mt-8 h-40 w-40 sm:h-64 sm:w-64">
            <Image
              src={AlbertFlores}// Assuming the image is placed in the public/images folder
              alt="Albert Flores"
              layout="intrinsic"
              width={400}
              height={400}
              objectFit="contain"
              className="transition-transform duration-500 transform hover:scale-110"
            />
          </div>
        </div>
      </motion.section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Latest Releases</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Album Title 1", image: "https://via.placeholder.com/400x400?text=Album+Title+1" },
              { title: "Album Title 2", image: "https://via.placeholder.com/400x400?text=Album+Title+2" },
              { title: "Album Title 3", image: "https://via.placeholder.com/400x400?text=Album+Title+3" },
            ].map((album, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <ImageWithLoading src={album.image} alt={album.title} />
                <p className="text-gray-800 font-semibold">{album.title}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 rounded-full bg-pink-500 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-pink-600">
            View All Albums
          </button>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
              <span className="text-xl font-bold">16 Aug</span>
              <span>Feat. Leslie Alexander</span>
              <span className="text-gray-500">Shiloh, Hawaii</span>
              <button className="rounded-full bg-pink-500 px-4 py-2 text-white">
                RSVP
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4">
              <span className="text-xl font-bold">17 Aug</span>
              <span>Feat. Annette Black</span>
              <span className="text-gray-500">Shiloh, Hawaii</span>
              <button className="rounded-full bg-pink-500 px-4 py-2 text-white">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-24 text-center text-white">
        <div className="container mx-auto">
          <h2 className="mb-4 text-5xl font-bold">
            Passionate Artist Crafting Soulful Music
          </h2>
          <p className="mb-8 text-lg">
            Connecting hearts through powerful melodies and meaningful lyrics.
          </p>
          <span className="text-6xl">🎸</span>
        </div>
      </section>
      <section className="bg-blue-900 py-24 text-white">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="mb-4 text-5xl font-bold">Request a Show In Your Area</h2>
          <p className="mb-8 text-lg">No events near you? Request a show now!</p>
          <button className="rounded-full bg-pink-500 px-4 py-2 text-white">
            Request a Show
          </button>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16">
        {/* Decorative Background Elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 w-full h-full bg-[url('/moire-pattern.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-96 w-96 animate-pulse rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-0 h-72 w-72 animate-bounce rounded-full bg-purple-300 opacity-5 blur-2xl"></div>
        </div>

        <div className="container relative mx-auto text-center px-6 lg:px-10">
          <h3 className="mb-12 text-4xl font-extrabold tracking-wider text-gray-800" data-aos="fade-up">
            What Artists Are Saying About TruCulture!
          </h3>

          <div className="relative">
            {/* Testimonial Slides */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 lg:px-16 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`min-w-full lg:min-w-[33%] snap-center transform rounded-lg bg-white p-8 shadow-lg transition-all duration-300 ${currentSlide === index ? 'scale-105' : ''
                    }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h3m0 0h3m-3 0V9m0 3v3m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <blockquote className="text-xl italic leading-relaxed text-gray-600">
                    {testimonial.quote}
                  </blockquote>
                  <p className="mt-6 text-lg font-bold text-blue-600">
                    {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-4 w-4 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                  onClick={() => handleNavigationClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
