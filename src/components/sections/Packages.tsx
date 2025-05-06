"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const packages = [
  {
    id: 1,
    name: "Essential Retreat",
    price: 1499,
    duration: "7 days",
    description: "Perfect introduction to wellness travel",
    features: [
      "Daily yoga sessions",
      "Meditation workshops",
      "Healthy meal plan",
      "3 Spa treatments",
      "Accommodation",
    ],
  },
  {
    id: 2,
    name: "Premium Journey",
    price: 2499,
    duration: "10 days",
    description: "Our most popular wellness package",
    features: [
      "Daily yoga & meditation",
      "Personal wellness coach",
      "Premium meal plan",
      "5 Spa treatments",
      "Luxury accommodation",
      "Airport transfers",
    ],
  },
  {
    id: 3,
    name: "Ultimate Transform",
    price: 3499,
    duration: "14 days",
    description: "Complete mind-body transformation",
    features: [
      "Personalized program",
      "Private yoga sessions",
      "Nutrition consultation",
      "Daily spa treatments",
      "Suite accommodation",
      "Private transfers",
      "Wellness welcome kit",
    ],
  },
];

export default function Packages() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-dark mb-3">
            Choose Your Journey
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Select the perfect wellness package for your transformative journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              onHoverStart={() => setHoveredId(pkg.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-2">
                  {pkg.name}
                </h3>
                <p className="text-dark/60 mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-serif text-dark">
                    ${pkg.price}
                  </span>
                  <span className="text-dark/60">/ {pkg.duration}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-dark/80">
                      <FiCheck className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/book?package=${pkg.id}`}
                  className={`block w-full py-3 text-center rounded-full font-medium transition-all duration-300 ${
                    hoveredId === pkg.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Select Package
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
