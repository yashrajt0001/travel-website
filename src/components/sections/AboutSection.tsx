"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ParallaxImage from '@/components/ui/ParallaxImage';

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
          {/* Image Column - Make sure ParallaxImage works properly */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] rounded-lg overflow-hidden"
            style={{ position: 'relative' }}
          >
            <ParallaxImage
              src="/images/istockphoto-517188688-1024x1024.jpg"
              alt="Tranquil luxury retreat"
              speed={0.15}
              direction="up"
            />
          </motion.div>

          {/* Content Column */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-[var(--primary)] font-extrabold text-3xl md:text-4xl font-serif text-dark mb-2">
                Welcome to <span className="text-[var(--secondary)]">Antarabodh</span>
              </h2>
              <div className="w-20 h-1 bg mb-6"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-dark/80"
            >
              Antarabodh is a travel and art retreat program designed for seekers, dreamers, and creators.
              We believe that art is not just something we make—but something we live. Through slow,
              intentional travel and deep creative practices, Antarabodh invites you to reconnect with yourself,
              nature, and community. Each retreat is a passage—into new landscapes, cultures, and the quiet
              depths of your own imagination.
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
                  To create immersive, soul-nourishing experiences that blend travel, artistic expression, and
                  inner exploration—helping people reconnect with their creative essence and live more
                  meaningful, artful lives.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-primary font-serif text-xl mb-2">
                  Our Vision
                </h3>
                <p className="text-dark/80">
                  To build a global community where art and travel become tools for transformation, healing, and
                  human connection—awakening a deeper sense of purpose, wonder, and belonging in all who
                  journey with us.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
