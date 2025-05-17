'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { HiExternalLink } from "react-icons/hi";

const slides = [
  {
    id: 1,
    title: 'Experience Tranquility',
    subtitle: 'Immerse yourself in luxury wellness retreats around the world',
    cta: {
      text: 'Discover Journeys',
      link: '/experiences',
    },
  },
  {
    id: 2,
    title: 'Discover Paradise',
    subtitle: 'Explore breathtaking destinations that nurture mind, body, and soul',
    cta: {
      text: 'View Destinations',
      link: '/destinations',
    },
  },
  {
    id: 3,
    title: 'Luxurious Retreats',
    subtitle: 'Indulge in premium accommodations designed for ultimate relaxation',
    cta: {
      text: 'Browse Accommodations',
      link: '/accommodations',
    },
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

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
        {/* Text content - Upper left corner */}
        <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="font-extrabold text-[var(--secondary)] text-4xl md:text-6xl font-serif mb-4 tracking-wide">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
                {slides[current].subtitle}
              </p>
              <Link
                href={slides[current].cta.link}
                className=" flex items-center text-white pr-8 py-3 bg-primary rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              > 
                {slides[current].cta.text} <HiExternalLink className='ml-2 h-5 w-5 my-auto'/>
              </Link>
            </motion.div>
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