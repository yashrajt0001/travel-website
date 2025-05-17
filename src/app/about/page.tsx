"use client";

// Replace framer-motion imports with our wrapper
import { motion, useInView } from "@/lib/motion";
import Image from "next/image";
import { useRef } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutPage() {
  return (
    <MainLayout staticStyle>
      <HeroAbout />
      <OurStory />
      <OurValues />
      <OurTeam />
      <JoinUs />
    </MainLayout>
  );
}

function HeroAbout() {
  return (
    <section className="relative h-[60vh] min-h-[500px] bg-primary/90 overflow-hidden mt-15 pt-20">
      <Image
        src="/images/about.jpg"
        alt=" Travel Team"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-dark z-10 px-4 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-6 font-extrabold text-[var(--secondary)]">About Travel</h1>
          <div className="h-1 w-24 bg-[var(--secondary)] mx-auto mb-6"></div>
          <p className="font-semibold text-xl max-w-2xl mx-auto">
            Crafting transformative journeys for the mindful traveler since 2010
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-2 font-extrabold text-[var(--primary)]">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-relaxed text-dark/80"
            >
              Travel was born from a passion for both wellness and exploration.
              Founded by Emma Laurent in 2010 after her transformative journey
              through Southeast Asia, our company began as a small boutique
              agency specializing in yoga retreats in Bali.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg leading-relaxed text-dark/80"
            >
              Within five years, we expanded our offerings to include mindful
              journeys across five continents, always with our core philosophy:
              travel should nourish not just the desire for adventure, but the
              deeper needs of mind, body, and spirit.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg leading-relaxed text-dark/80"
            >
              Today, Travel is recognized as an industry leader in luxury
              wellness travel, having curated experiences for over 10,000
              travelers seeking authentic connection, personal growth, and
              rejuvenation through thoughtful exploration of our world&apos;s most
              serene destinations.
            </motion.p>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp"
              alt="Our journey began in Southeast Asia"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function OurValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const valueCards = [
    {
      title: "Mindful Travel",
      description:
        "We believe in creating experiences that foster presence and appreciation for the moment, connecting travelers deeply with their surroundings.",
      icon: "🧘‍♀️",
    },
    {
      title: "Sustainability",
      description:
        "Every journey we design considers its impact on local communities and environments, ensuring we preserve the beauty we share.",
      icon: "🌱",
    },
    {
      title: "Authentic Luxury",
      description:
        "True luxury comes from exceptional experiences, personalized service, and moments that transform—not just thread counts and amenities.",
      icon: "✨",
    },
    {
      title: "Cultural Respect",
      description:
        "We approach each destination with reverence for local traditions, fostering meaningful exchanges that enrich both travelers and communities.",
      icon: "🤝",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-3 font-extrabold text-[var(--primary)]">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-dark/80">
            These principles guide every experience we create and every decision
            we make
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-light p-8 rounded-lg shadow-sm border border-[var(--primary)] hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-serif text-[var(--primary)] mb-3 font-bold">
                {card.title}
              </h3>
              <p className="text-dark/80">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teamMembers = [
    {
      name: "Emma Laurent",
      role: "Founder & CEO",
      bio: "Former corporate executive who found healing through travel, Emma combines business acumen with a passion for wellness.",
      image: "/images/images.jpeg",
    },
    {
      name: "David Chen",
      role: "Experience Director",
      bio: "With 15 years in luxury hospitality across Asia and Europe, David creates unforgettable moments that define our journeys.",
      image: "/images/images (1).jpeg",
    },
    {
      name: "Priya Sharma",
      role: "Wellness Curator",
      bio: "Certified yoga instructor and wellness coach who designs our mindfulness and rejuvenation programs worldwide.",
      image: "/images/images.jpeg",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-light/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-3 font-extrabold text-[var(--primary)]">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-dark/80">
            Passionate travel enthusiasts dedicated to creating your perfect
            journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[var(--primary)] font-bold">
                  {member.name}
                </h3>
                <p className="text-[var(--secondary)] font-medium mb-3">{member.role}</p>
                <p className="text-dark/80">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-primary/90 text-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif mb-6 font-extrabold text-[var(--secondary)]"
          >
            Join Our Growing Team
          </motion.h2>
          
          <div className="w-24 h-1 bg-[var(--secondary)] mx-auto mb-6"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-8 font-semibold"
          >
            Passionate about travel and wellness? We&apos;re always looking for
            talented individuals to join our mission of creating transformative
            travel experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--secondary-dark)] transition-colors"
            >
              View Open Positions
              <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
