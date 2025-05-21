"use client";

import React from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import ParallaxImage from '@/components/ui/ParallaxImage';

const experiences = [
  {
    id: "art-retreats",
    title: "Art Retreats",
    description: "Immerse yourself in the creative process through guided art workshops in stunning natural settings. Learn new techniques, experiment with different mediums, and create meaningful art inspired by local landscapes and traditions.",
    image: "/images/art-retreat.jpg",
  },
  {
    id: "filmmaking",
    title: "Filmmaking & Acting",
    description: "Create short films and cinematic scenes in breathtaking locations. Work with professional directors, cinematographers, and fellow actors to build your portfolio while exploring beautiful destinations.",
    image: "/images/filmmaking.jpg",
  },
  {
    id: "writing",
    title: "Creative Writing",
    description: "Find your voice through travel writing, poetry, and storytelling workshops. Capture the essence of each destination through words, guided by experienced mentors.",
    image: "/images/writing.jpg",
  },
  {
    id: "photography",
    title: "Photography Journeys",
    description: "Develop your visual eye and technical skills through photography excursions. Capture stunning landscapes, authentic cultural moments, and compelling portraits.",
    image: "/images/photography.jpg",
  },
  {
    id: "mindfulness",
    title: "Mindfulness & Creativity",
    description: "Combine meditation, yoga, and creative expression. Learn how presence and mindfulness can enhance your artistic process and lead to more authentic work.",
    image: "/images/mindfulness.jpg",
  },
  {
    id: "cultural",
    title: "Cultural Immersion",
    description: "Connect with local artists, craftspeople, and communities. Learn traditional art forms and incorporate these influences into your own creative practice.",
    image: "/images/cultural.jpg",
  },
];

export default function ExperiencesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <ParallaxImage
          src="/images/experiences-hero.jpg"
          alt="Creative Experiences"
          speed={0.2}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6">
              Creative Experiences
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Transform your journey into art, stories, and meaningful creations
            </p>
            <div className="w-24 h-1 bg-[var(--secondary)] mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] font-bold mb-6">
              Our Creative Offerings
            </h2>
            <p className="text-lg text-dark/80">
              Each experience is carefully crafted to inspire creativity, foster connection, 
              and create meaningful art while exploring beautiful destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light rounded-xl overflow-hidden shadow-sm group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <ParallaxImage
                    src={exp.image}
                    alt={exp.title}
                    speed={0.1}
                    direction={index % 2 === 0 ? "up" : "down"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[var(--primary)] font-bold mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-dark/80 mb-6">
                    {exp.description}
                  </p>
                  <Link
                    href={`/experiences/${exp.id}`}
                    className="inline-flex items-center text-[var(--secondary)] hover:text-[var(--secondary-dark)] transition-colors"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] font-bold mb-6">
              Ready to Create Something Meaningful?
            </h2>
            <p className="text-lg text-dark/80 mb-8">
              Join us for a transformative journey where travel meets creativity. 
              Discover new landscapes, cultures, and artistic expressions.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-3 bg-[var(--secondary)] text-white rounded-full hover:bg-[var(--secondary-dark)] transition-colors text-lg font-medium"
            >
              Book Your Creative Journey
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
