'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CtaSection() {
  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/images/images (1).jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Begin Your Wellness Journey Today
          </h2>
          
          <p className="text-lg md:text-xl font-semibold text-black/70 mb-8 max-w-2xl mx-auto">
            Transform your mind, body, and spirit with our expertly curated wellness retreats. 
            Let us guide you on a path to rejuvenation and self-discovery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-3 bg-black/60 text-white font-medium rounded-full hover:bg-black/90 transition-colors"
            >
              Book Your Journey
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border border-black/30 text-black font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-10 flex items-center justify-center">
            <div className="px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full flex items-center">
              <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm">Special offers available for early bookings</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 