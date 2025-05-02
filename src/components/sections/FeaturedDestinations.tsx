"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

const destinations = [
  {
    id: 1,
    name: " Bali",
    location: "Ubud, Bali",
    description:
      "A tranquil sanctuary nestled in the lush forests of Ubud, offering yoga retreats and spa treatments.",
    image:
      "/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp",
    link: "/destinations/bali",
  },
  {
    id: 2,
    name: "Himalayan Retreat",
    location: "Rishikesh, India",
    description:
      "Immerse yourself in yoga and meditation in the birthplace of these ancient practices.",
    image: "/images/istockphoto-517188688-1024x1024.jpg",
    link: "/destinations/himalayas",
  },
  {
    id: 3,
    name: "Costa Rica Wellness",
    location: "Nosara, Costa Rica",
    description:
      "Connect with nature in this eco-friendly wellness resort surrounded by tropical rainforest.",
    image:
      "/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp",
    link: "/destinations/costa-rica",
  },
  {
    id: 4,
    name: "Mediterranean Escape",
    location: "Santorini, Greece",
    description:
      "Experience the healing properties of the Aegean Sea in this cliffside luxury retreat.",
    image: "/images/images.jpeg",
    link: "/destinations/santorini",
  },
  {
    id: 5,
    name: "Desert Oasis",
    location: "Sedona, Arizona",
    description:
      "Find spiritual renewal in the red rock landscapes known for their powerful energy vortexes.",
    image: "/images/istockphoto-517188688-1024x1024.jpg",
    link: "/destinations/sedona",
  },
  {
    id: 6,
    name: "Alpine Wellness",
    location: "Swiss Alps, Switzerland",
    description:
      "Rejuvenate in the pure mountain air with thermal spas and panoramic views.",
    image: "/images/images (1).jpeg",
    link: "/destinations/swiss-alps",
  },
];

export default function FeaturedDestinations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-dark mb-3">
            Featured Destinations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Discover our handpicked wellness destinations around the world, each
            offering unique experiences to nourish your mind, body, and soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md h-[400px]"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-dark/30 z-10"></div>
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div
                  className={`transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="flex items-center text-white/90 mb-2">
                    <FiMapPin className="mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <p className="text-white/90 mb-4">
                    {destination.description}
                  </p>
                </div>

                <h3 className="text-2xl font-serif text-white mb-2">
                  {destination.name}
                </h3>

                <Link
                  href={destination.link}
                  className={`inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-primary hover:border-primary transition-all duration-300 text-sm ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Explore Destination
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
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
