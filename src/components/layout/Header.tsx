'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Destinations', href: '/destinations' },
  { 
    title: 'Experiences', 
    href: '/experiences',
    submenu: [
      { title: 'Wellness Retreats', href: '/experiences/wellness' },
      { title: 'Adventure Tours', href: '/experiences/adventure' },
      { title: 'Cultural Journeys', href: '/experiences/cultural' },
    ] 
  },
  { 
    title: 'Accommodations', 
    href: '/accommodations',
    submenu: [
      { title: 'Luxury Resorts', href: '/accommodations/resorts' },
      { title: 'Boutique Hotels', href: '/accommodations/boutique' },
      { title: 'Private Villas', href: '/accommodations/villas' },
    ]
  },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)

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
                onMouseEnter={() => link.submenu && setActiveSubmenu(index)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-dark' : 'text-white'
                  }`}
                >
                  {link.title}
                </Link>
                
                {/* Submenu */}
                {link.submenu && activeSubmenu === index && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <div className="py-2">
                      {link.submenu.map((sublink, subindex) => (
                        <Link 
                          key={subindex} 
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary"
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
                    
                    {/* Mobile Submenu */}
                    {link.submenu && (
                      <div className="pl-4 space-y-3">
                        {link.submenu.map((sublink, subindex) => (
                          <Link 
                            key={subindex} 
                            href={sublink.href}
                            className="block text-sm text-white/80 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sublink.title}
                          </Link>
                        ))}
                      </div>
                    )}
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