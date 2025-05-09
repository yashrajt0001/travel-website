"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-20 bg-[var(--primary-light)]/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/istockphoto-517188688-1024x1024.jpg"
              alt="Tranquil luxury retreat"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content Column */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="font-extrabold text-[var(--primary)] text-3xl md:text-4xl font-serif text-dark mb-2">
                Welcome to Travel
              </h2>
              <div className="w-20 h-1 bg mb-6"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-dark/80"
            >
              Travel is a premier luxury travel company specializing in curated
              wellness retreats and transformative travel experiences. Founded
              with the belief that travel should nourish the mind, body, and
              spirit, we craft journeys that combine breathtaking destinations
              with rejuvenating experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-dark/80"
            >
              Our philosophy is centered around the harmony between nature,
              luxury, and well-being. Every destination we select and every
              experience we design is carefully chosen to provide our guests
              with a perfect balance of adventure, relaxation, cultural
              immersion, and personal growth.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-primary font-serif text-xl mb-2">
                  Our Mission
                </h3>
                <p className="text-dark/80">
                  To create transformative travel experiences that rejuvenate
                  the soul.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-primary font-serif text-xl mb-2">
                  Our Vision
                </h3>
                <p className="text-dark/80">
                  To be the leading provider of luxury wellness travel
                  worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
