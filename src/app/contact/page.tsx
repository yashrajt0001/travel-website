"use client";

import MainLayout from "@/components/layout/MainLayout";
import { FiMapPin, FiPhone, FiMail, FiClock, FiMessageSquare, FiUsers, FiGlobe } from "react-icons/fi";
import EnquirySection from "@/components/sections/EnquirySection";
import { motion } from "@/lib/motion";
import ParallaxImage from '@/components/ui/ParallaxImage';

export default function ContactPage() {
  return (
    <MainLayout staticStyle>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-primary/90 overflow-hidden mt-15 pt-20">
        <div className="absolute inset-0 opacity-20 z-0">
          <ParallaxImage
            src="/images/istockphoto-517188688-1024x1024.jpg"
            alt="Contact us background"
            speed={0.15}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-dark z-10 px-4"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-6 font-extrabold text-[var(--secondary)]">Contact Us</h1>
            <div className="h-1 w-24 bg-[var(--secondary)] mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto font-semibold">
              Get in touch with our travel experts to start planning your next
              wellness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[var(--primary-extraLight)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-3 font-extrabold text-[var(--primary)]">
              Reach Out To Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark/80">
              Our team is ready to assist you with any questions or bookings for your wellness travel journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[var(--primary)]/20 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiMapPin className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2 font-bold">
                Visit Us
              </h3>
              <p className="text-dark/80">
                Terminal 1, Rajiv Gandhi MIDC road, above Croma,
                <br />
                Phase 1, Hinjawadi, Pune, Maharashtra
                <br />
                411057, India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[var(--primary)]/20 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiPhone className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2 font-bold">
                Call Us
              </h3>
              <p className="text-dark/80">
                <a
                  href="tel:+916361420321"
                  className="hover:text-[var(--secondary)]"
                >
                  +91 6361 420 321
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[var(--primary)]/20 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiMail className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2 font-bold">
                Email Us
              </h3>
              <p className="text-dark/80">
                <a
                  href="mailto:antarabodh@gmail.com"
                  className="hover:text-[var(--secondary)]"
                >
                  antarabodh@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[var(--primary)]/20 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiClock className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2 font-bold">
                Office Hours
              </h3>
              <p className="text-dark/80">
                Monday - Sunday
                <br />
                11:00 AM - 8:00 PM IST
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-[var(--primary-extraLight)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)] text-center mb-8">Find Us</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
            <div className="aspect-[16/9] w-full bg-white rounded-lg overflow-hidden shadow-lg border border-[var(--primary)]/20">
              <iframe
                src="https://www.google.com/maps?q=Croma%20Hinjawadi%20Phase%201%2C%20Rajiv%20Gandhi%20MIDC%20road%2C%20Pune%2C%20Maharashtra%20411057&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Team Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)]">Our Travel Team</h2>
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <p className="text-dark/80 text-lg">
                Our experienced team of travel specialists is dedicated to creating the perfect wellness journey for you. With extensive knowledge of destinations worldwide and a passion for transformative travel, we&apos;re here to turn your travel dreams into reality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[var(--secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiUsers className="text-[var(--secondary)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Personalized Service</h3>
                    <p className="text-sm text-dark/70">Tailored travel experiences designed just for you</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[var(--secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiGlobe className="text-[var(--secondary)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">Global Expertise</h3>
                    <p className="text-sm text-dark/70">Intimate knowledge of wellness destinations worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[var(--secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMessageSquare className="text-[var(--secondary)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark">24/7 Support</h3>
                    <p className="text-sm text-dark/70">Always available to assist throughout your journey</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <ParallaxImage
                src="/images/images.jpeg"
                alt="Our travel experts"
                speed={0.2}
                direction="up"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-medium">Travel Specialists</h3>
                <p className="text-white/80 text-sm">Our team is ready to craft your perfect wellness journey</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquirySection
        title="Send us a Message"
        description="Have questions about our wellness travel experiences? Fill out the form below and our travel experts will get back to you shortly."
      />
    </MainLayout>
  );
}
