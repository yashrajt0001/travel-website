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
    image: "/images/experience/2769c93aafdac76c86fd60bb2eb7acd0.jpg",
  },
  {
    id: "filmmaking",
    title: "Filmmaking & Acting",
    description: "Create short films and cinematic scenes in breathtaking locations. Work with professional directors, cinematographers, and fellow actors to build your portfolio while exploring beautiful destinations.",
    image: "/images/experience/31e2a7ffafdb883d2e23d5966114dc90.jpg",
  },
  {
    id: "writing",
    title: "Creative Writing",
    description: "Find your voice through travel writing, poetry, and storytelling workshops. Capture the essence of each destination through words, guided by experienced mentors.",
    image: "/images/experience/279808440ab34a48d235603459201fe5.jpg",
  },
  {
    id: "photography",
    title: "Photography Journeys",
    description: "Develop your visual eye and technical skills through photography excursions. Capture stunning landscapes, authentic cultural moments, and compelling portraits.",
    image: "/images/experience/b4780d440fdf711201ef9c8c22b8c02a.jpg",
  },
  {
    id: "mindfulness",
    title: "Mindfulness & Creativity",
    description: "Combine meditation, yoga, and creative expression. Learn how presence and mindfulness can enhance your artistic process and lead to more authentic work.",
    image: "/images/experience/67ba7250410dab8cf89dd141aadff893.jpg",
  },
  {
    id: "cultural",
    title: "Cultural Immersion",
    description: "Connect with local artists, craftspeople, and communities. Learn traditional art forms and incorporate these influences into your own creative practice.",
    image: "/images/experience/e81af7557f1f54a7839a7536051ba13b.jpg",
  },
];

export default function ExperiencesPage() {
  return (
    <MainLayout>
      {/* Enhanced Hero Section with Parallax */}
      <motion.section
        className="relative h-[80vh] min-h-[600px]"
      >
        <ParallaxImage
          src="/images/experience/1dd49d42a79e1ddb6f998a12a8e321b8.jpg"
          alt="Creative Experiences"
          speed={0.2}
          direction="down"
        />
        {/* Darker, more opaque gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60 z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-center text-white z-20"
        >
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Creative Experiences
            </h1>
            <div className="w-24 h-1 bg-[var(--secondary)] mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              Transform your journey into art, stories, and meaningful creations
            </p>
          </div>
        </motion.div>
      </motion.section>

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
                className="bg-[var(--primary-extraLight)] rounded-xl overflow-hidden shadow-sm group"
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
              href="/contact"
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
