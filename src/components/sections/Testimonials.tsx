"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Aanya Sharma",
    location: "Mumbai, India",
    quote:
      "My journey to Meghalaya was absolutely magical! The living root bridges and crystal-clear waters of Dawki left me speechless. The Travel team arranged everything perfectly, and our local guide shared fascinating stories that brought the Khasi culture to life.",
    image: "/images/people/person1.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Vikram Mehta",
    location: "Bangalore, India",
    quote:
      "The Spiti Valley adventure was beyond my expectations. Staying in traditional homestays and visiting ancient monasteries gave me a deep appreciation for the Buddhist culture. The night sky there was unlike anything I've seen - truly a photographer's paradise!",
    image: "/images/people/person2.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Patel",
    location: "Delhi, India",
    quote:
      "Kerala's backwaters offered the perfect balance of relaxation and cultural immersion. The houseboat experience was unforgettable, and the Ayurvedic treatments rejuvenated both my body and spirit. I'm already planning my next trip with Travel!",
    image: "/images/people/person3.jpeg",
    rating: 5,
  },
  {
    id: 4,
    name: "Arjun Reddy",
    location: "Hyderabad, India",
    quote:
      "Exploring Rajasthan's magnificent forts and experiencing the vibrant desert culture was a dream come true. The Travel x Art package allowed me to learn traditional block printing from local artisans, adding a creative dimension to my travel experience.",
    image: "/images/people/person4.jpeg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("/images/istockphoto-517188688-1024x1024.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-[var(--primary)] text-3xl md:text-4xl font-serif text-dark mb-3">
            Guest Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Hear from our guests about their transformative experiences with
            Travel.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="text-center mb-6">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-dark">
                  {testimonials[current].name}
                </h3>
                <p className="text-dark/60 text-sm">
                  {testimonials[current].location}
                </p>

                {/* Stars */}
                <div className="flex justify-center mt-2 space-x-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-[var(--secondary)]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="italic text-lg text-center text-dark/80 mb-6">
                &quot;{testimonials[current].quote}&quot;
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-primary scale-100"
                    : "bg-primary/30 scale-75 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
