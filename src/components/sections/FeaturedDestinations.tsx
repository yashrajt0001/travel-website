"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import ParallaxImage from '@/components/ui/ParallaxImage';

const destinations = [
  {
    id: 1,
    name: "Meghalaya",
    location: "The Abode of Clouds",
    description:
      "Verdant hills draped in mist, living root bridges woven by time, and rains that sing on tin rooftops—Meghalaya is poetry in motion. The Khasi and Garo traditions echo in every drumbeat, every woven pattern, every smile.",
    image:
      "/images/meghalaya/4b1c2c0a9a5fac5f51982e358c731ece.jpg",
    link: "/destinations/meghalaya-2025",
  },
  {
    id: 2,
    name: "Kerala",
    location: "The Land of Backwaters and Beyond",
    description:
      "A gentle dance of sea and spice, Kathakali eyes and Theyyam flames, Kerala is a sanctuary of balance—between body, spirit, and earth. From its lush backwaters to soulful temple chants, every experience here is soaked in story.",
    image: "/images/kerala/5ba3b0c48122c4216a23f05a257a4bba.jpg",
    link: "/destinations/kerala-2025",
  },
  {
    id: 3,
    name: "Rajasthan",
    location: "Desert Palaces and Infinite Skies",
    description:
      "A land of golden sands, mirror-worked textiles, and music that rises like incense. Rajasthan's opulence is matched only by its grit. Forts rise like poems from the earth, and each village tells a tale in color and dust.",
    image:
      "/images/rajasthan/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg",
    link: "/destinations/rajasthan-2025",
  },
  {
    id: 4,
    name: "Banaras (Varanasi)",
    location: "The City of Eternal Flame",
    description:
      "Where the sacred and the mundane flow side by side, Banaras is a river of time. Ghats soaked in devotion, ancient chants, burning lamps, and the constant presence of the Ganga—this city is a living canvas of faith and transformation.",
    image: "/images/banaras/07ee68942057c4bb7bc6e690ff697b2f.jpg",
    link: "/destinations/banaras-2025",
  },
  {
    id: 5,
    name: "Uttarakhand",
    location: "Land of Sacred Peaks and Silent Forests",
    description:
      "Home to holy rivers and Himalayan stillness, Uttarakhand is a space of spiritual ascent and grounding presence. Villages perched on cliffs, temple bells echoing through pine forests, and paths that whisper to the sky.",
    image: "/images/uttarakhand/471430b468f840c3b500bbe9aee44eac.jpg",
    link: "/destinations/uttarakhand-2025",
  },
  {
    id: 6,
    name: "Spiti",
    location: "The Cold Desert of Light and Silence",
    description:
      "Raw, vast, and humbling—Spiti is a monastery of the soul. Stupas stand still against cobalt skies, and prayer flags carry your breath across the mountains. Art here emerges not from noise but from stillness.",
    image: "/images/spiti/3cd0025246c28b974c10897ceffaa1fc.jpg",
    link: "/destinations/spiti-2025",
  },
];

export default function FeaturedDestinations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[var(--primary-light)]/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-[var(--primary)] text-3xl md:text-4xl font-serif text-dark mb-3">
            Destination Edition <span className="text-[var(--secondary)]">2025-2026</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Embark on artistic journeys through India&apos;s most evocative landscapes. Each destination 
            is a canvas for your creativity, waiting to inspire your next masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md h-[400px] transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Decorative corner element - artistic touch */}
              <div className="absolute top-0 right-0 w-24 h-24 z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[var(--secondary)] opacity-70">
                  <path d="M0,0 L100,0 L100,100 Q70,70 0,0 Z" />
                </svg>
              </div>
              
              {/* Gradient overlay with brand colors */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[var(--primary-dark)]/40 to-transparent z-10 transition-all duration-500 opacity-70 group-hover:opacity-95"></div>
              
              {/* Use ParallaxImage component for subtle in-card parallax */}
              <ParallaxImage
                src={destination.image}
                alt={destination.name}
                speed={0.1} // Subtle parallax effect
                direction="up"
                className="absolute inset-0"
              />
              
              {/* Decorative line element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div
                  className={`transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="flex items-center text-white mb-2">
                    <FiMapPin className="mr-1" />
                    <span className="text-sm font-medium">{destination.location}</span>
                  </div>
                  <p className="text-white mb-4 font-medium">
                    {destination.description}
                  </p>
                </div>

                <h3 className="text-2xl font-serif text-white mb-2 font-bold">
                  {destination.name}
                </h3>

                <Link
                  href={destination.link}
                  className={`inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition-all duration-300 text-sm font-medium ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Discover {destination.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Explore All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}