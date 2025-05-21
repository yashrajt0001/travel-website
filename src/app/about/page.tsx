"use client";

import React from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import ParallaxImage from '@/components/ui/ParallaxImage';

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <ParallaxImage
          src="/images/about-hero.jpg"
          alt="About Antarabodh"
          speed={0.15}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-4">
              About <span className="text-[var(--secondary)]">Antarabodh</span>
            </h1>
            <div className="w-24 h-1 bg-[var(--secondary)] mx-auto" />
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] font-bold mb-8 text-center">
              From Hustle to Heart: The Journey Behind Antarabodh
            </h2>
            
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-12">
              <ParallaxImage
                src="/images/founder.jpg"
                alt="Founder of Antarabodh"
                speed={0.1}
                direction="up"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-dark/80">
              <p>
                I&apos;m an actor, trained at FTII — someone who has always chased truth through performance. But
                somewhere along the way, life pulled me into a different direction. I found myself working at an
                edtech company as an IT counsellor — a world far from art, yet strangely fulfilling. I hustled
                without pause, worked through weekends, missed moments — and still, I gave it everything.
              </p>
              
              <p>
                And I realized something profound: If I can pour myself into something that isn&apos;t my calling,
                imagine what I can do when I follow what truly moves me.
              </p>
              
              <p>
                That clarity led me to create Antarabodh — a space where art, cinema, and exploration meet. A
                space where we travel not just across landscapes, but into stories, souls, and silence. Where
                we create meaningful work that reflects peace, honesty, trust, and human connection.
              </p>
              
              <p>
                Through travelling with artists, living with local communities, and immersing ourselves in culture,
                I want to bring back what the world needs more of — empathy, beauty, and deeper
                understanding. Antarabodh isn&apos;t just a retreat. It&apos;s a return — to yourself, to storytelling, to life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
