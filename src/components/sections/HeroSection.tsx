'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { HiExternalLink } from "react-icons/hi";

const slides = [
  {
    id: 1,
    title: 'Travel',
    subtitle: 'Explore new landscapes, culture and stories - and turn them into your memories and experiences.',
    cta: {
      text: 'Discover Journeys',
      link: '/experiences',
    },
  },
  {
    id: 2,
    title: 'Art',
    subtitle: 'Make art that inspires the world. From sun-drenched coastlines to quiet mountain villages, our curated retreats ignite your creativity.',
    cta: {
      text: 'View Destinations',
      link: '/destinations',
    },
  },
  {
    id: 3,
    title: 'Create',
    subtitle: 'Not just a trip - A Creative Awakening: for Explorers, Artists, Seekers & Dreamers. Whether you are a painter, writer, photographer or simply curious, our retreats are made for everyone.',
    cta: {
      text: 'Browse Experiences',
      link: '/accommodations',
    },
  },
]

// Star SVG component for the heading
const StarIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-2 md:mx-4"
  >
    <path
      d="M12 2
         C12.3 3.2, 13.5 6.5, 13.8 7.5
         C13.9 7.9, 14.3 8.2, 14.7 8.2
         H21
         C21.4 8.2, 21.7 8.6, 21.4 9
         L16.5 13
         C16.1 13.3, 16 13.8, 16.1 14.2
         L17.8 20.5
         C17.9 20.9, 17.4 21.2, 17.1 21
         L12 17.8
         C11.7 17.6, 11.3 17.6, 11 17.8
         L5.9 21
         C5.6 21.2, 5.1 20.9, 5.2 20.5
         L6.9 14.2
         C7 13.8, 6.9 13.3, 6.5 13
         L1.6 9
         C1.3 8.6, 1.6 8.2, 2 8.2
         H8.3
         C8.7 8.2, 9.1 7.9, 9.2 7.5
         C9.5 6.5, 10.7 3.2, 11 2
         C11.1 1.6, 11.9 1.6, 12 2
         Z"
      fill="white"
      stroke="white"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default function HeroSection() {
  const [current, setCurrent] = useState(-1) // Start with -1 for the special slide
  const timerRef = useRef<NodeJS.Timeout>(null)

  // Function to start/reset the timer
  const resetTimer = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    
    // Set a new timer
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? -1 : prev + 1))
    }, 4000) // 4 seconds
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? -1 : prev + 1))
    resetTimer() // Reset timer when manually changing slides
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === -1 ? slides.length - 1 : prev - 1))
    resetTimer() // Reset timer when manually changing slides
  }

  useEffect(() => {
    // Initialize timer when component mounts
    resetTimer()
    
    // Clean up on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          {/* <source src="/videoplayback.mp4" type="video/mp4" /> */}
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between z-10">
        {/* Text content */}
        <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-40 relative">
          <AnimatePresence mode="wait">
            {current === -1 ? (
              <motion.div
                key="special-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
                style={{ top: '35vh' }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-1">
                  <span className="text-[var(--primary)]">Travel</span> <StarIcon /> 
                  <span className="text-[var(--secondary)]">Art</span> <StarIcon /> 
                  <span className="text-[var(--primary)]">Create</span>
                </h1>
              </motion.div>
            ) : (
              <motion.div
                key={`regular-content-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl px-8 md:px-18"
              >
                <h1 className="font-extrabold font-serif mb-4 tracking-wide text-4xl md:text-6xl">
                  {slides[current].id === 1 && <span className="text-[var(--primary)]">Travel</span>}
                  {slides[current].id === 2 && <span className="text-[var(--secondary)]">Art</span>}
                  {slides[current].id === 3 && <span className="text-[var(--primary)]">Create</span>}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
                  {slides[current].subtitle}
                </p>
                <Link
                  href={slides[current].cta.link}
                  className="flex items-center text-white pr-8 py-3 bg-primary rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
                > 
                  {slides[current].cta.text} <HiExternalLink className='ml-2 h-5 w-5 my-auto'/>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation and indicators - Center bottom */}
        <div className="container mx-auto px-4 md:px-6 pb-16 md:pb-20">
          {/* Navigation Controls */}
          <div className="flex justify-center gap-8 mb-8">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-3">
            {/* Special slide indicator */}
            <button
              onClick={() => setCurrent(-1)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                current === -1
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label="Go to main slide"
            />
            {/* Regular slides indicators */}
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === current
                    ? 'bg-white w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}