"use client";

import MainLayout from "@/components/layout/MainLayout";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import EnquirySection from "@/components/sections/EnquirySection";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <MainLayout staticStyle>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-[var(--primary)] overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white z-10 px-4"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
            <div className="h-1 w-24 bg-[var(--secondary)] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Get in touch with our travel experts to start planning your next
              wellness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiMapPin className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2">
                Visit Us
              </h3>
              <p className="text-dark/80">
                123 Wellness Way
                <br />
                Paradise City, 10001
                <br />
                United States
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiPhone className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2">
                Call Us
              </h3>
              <p className="text-dark/80">
                <a
                  href="tel:+18001234567"
                  className="hover:text-[var(--secondary)]"
                >
                  +1 (800) 123-4567
                </a>
                <br />
                <a
                  href="tel:+18009876543"
                  className="hover:text-[var(--secondary)]"
                >
                  +1 (800) 987-6543
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiMail className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2">
                Email Us
              </h3>
              <p className="text-dark/80">
                <a
                  href="mailto:info@travel.com"
                  className="hover:text-[var(--secondary)]"
                >
                  info@travel.com
                </a>
                <br />
                <a
                  href="mailto:support@travel.com"
                  className="hover:text-[var(--secondary)]"
                >
                  support@travel.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4">
                <FiClock className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-serif text-[var(--primary)] mb-2">
                Office Hours
              </h3>
              <p className="text-dark/80">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM EST
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] w-full bg-light rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548435542!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644132035859!5m2!1sen!2s"
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

      {/* Enquiry Form Section */}
      <EnquirySection
        title="Send us a Message"
        description="Have questions about our wellness travel experiences? Fill out the form below and our travel experts will get back to you shortly."
      />
    </MainLayout>
  );
}
