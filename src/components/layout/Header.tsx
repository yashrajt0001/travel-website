'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Destinations', href: '/destinations' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <h1 className={`text-2xl md:text-3xl font-serif font-bold ${isScrolled ? 'text-dark' : 'text-white'}`}>Travel</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <Link 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-dark' : 'text-white'
                  }`}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Book Now Button */}
          <Link 
            href="/book"
            className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              isScrolled 
                ? 'bg-primary text-black hover:bg-primary/90 border-black/20 border-solid border bg-black/10 hover:bg-black/30' 
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            Book Your Journey
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu className={`w-6 h-6 ${isScrolled ? 'text-dark' : 'text-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/90 z-50 lg:hidden"
          >
            <div className="container mx-auto px-4 h-full flex flex-col">
              <div className="flex justify-between items-center py-4">
                <Link href="/" className="relative z-10" onClick={() => setMobileMenuOpen(false)}>
                  <h1 className="text-2xl font-serif text-white">Travel</h1>
                </Link>
                <button 
                  className="p-2 rounded-md text-white" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex-1 flex flex-col justify-center space-y-8 py-8">
                {navLinks.map((link, index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <Link 
                      href={link.href}
                      className="text-xl font-medium text-white hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    
                  </div>
                ))}
              </nav>
              
              <div className="py-6">
                <Link
                  href="/book"
                  className="block w-full text-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Your Journey
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 