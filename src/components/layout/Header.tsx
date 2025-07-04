"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/" },
  {
    title: "Destinations",
    dropdownItems: [
      { title: "Meghalaya – The Abode of Clouds", href: "/destinations/meghalaya-2025" },
      { title: "Kerala – The Land of Backwaters", href: "/destinations/kerala-2025" },
      { title: "Rajasthan – Desert Palaces", href: "/destinations/rajasthan-2025" },
      { title: "Banaras – The City of Eternal Flame", href: "/destinations/banaras-2025" },
      { title: "Uttarakhand – Sacred Peaks & Forests", href: "/destinations/uttarakhand-2025" },
      { title: "Spiti – The Cold Desert", href: "/destinations/spiti-2025" },
    ],
  },
  { title: "Experiences", href: "/experiences" },
  { title: "About Us", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export default function Header({
  staticStyle = false,
}: {
  staticStyle?: boolean;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    if (!staticStyle) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // If staticStyle is true, always set isScrolled to true
      setIsScrolled(true);
    }
  }, [staticStyle]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (title: string) => {
    if (activeMobileDropdown === title) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(title);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-2 md:px-6 lg:px-16 ${
        staticStyle || isScrolled
        ? "bg-white py-5 shadow-sm" // Increased from py-5 to py-7
        : "bg-transparent py-7" // Increased from py-7 to py-10
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="relative h-16 w-46 md:h-18 md:w-50"> {/* Further increased logo size */}
              <Image 
                src="/images/logo.png" 
                alt="Travel Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[var(--secondary)] ${
                      staticStyle || isScrolled
                        ? "text-[var(--dark)]"
                        : "text-[var(--light)]"
                    }`}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <div
                    className={`text-sm font-medium transition-colors hover:text-[var(--secondary)] cursor-pointer flex items-center ${
                      staticStyle || isScrolled
                        ? "text-[var(--dark)]"
                        : "text-[var(--light)]"
                    }`}
                  >
                    {link.title}
                    <FiChevronDown className="ml-1 h-3 w-3" />
                  </div>
                )}

                {/* Invisible bridge to prevent gap */}
                {link.dropdownItems && (
                  <div className="absolute top-full left-0 w-full h-4" />
                )}

                {/* Dropdown Menu */}
                {link.dropdownItems && activeDropdown === link.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+1rem)] left-0 w-72 bg-white rounded-xl shadow-lg py-3 z-50 border border-gray-100"
                  >
                    <div className="absolute top-0 left-6 -translate-y-2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"></div>
                    {link.dropdownItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                          key={idx}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-dark hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] transition-colors relative group"
                        >
                          <span className="relative z-10">{item.title}</span>
                          <motion.div
                            className="absolute inset-0 bg-[var(--primary)]/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                            initial={false}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Book Now Button */}
          <Link
            href="/contact"
            className={`hidden md:block px-7 py-4 rounded-full text-base font-medium transition-all ${
              staticStyle || isScrolled
                ? "bg-[var(--secondary)] text-[var(--light)] hover:bg-[var(--secondary-dark)]"
                : "bg-[var(--light)]/20 backdrop-blur-sm text-[var(--light)] hover:bg-[var(--light)]/30"
            }`}
          >
            Book Your Journey
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <FiMenu className={`w-7 h-7 ${staticStyle || isScrolled ? "text-[var(--dark)]" : "text-white"}`} />
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col min-h-screen">
              {/* Mobile menu header */}
              <div className="flex justify-between items-center mb-6">
                <Link
                  href="/"
                  className="relative z-10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative h-14 w-44"> {/* Increased size */}
                    <Image 
                      src="/images/logo.png" 
                      alt="Travel Logo" 
                      fill 
                      className="object-contain" 
                      priority
                    />
                  </div>
                </Link>
                <button
                  className="p-2 text-[var(--dark)]"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <FiX className="w-7 h-7" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 flex flex-col">
                {navLinks.map((link, index) => (
                  <div key={index} className="border-b border-gray-100 py-5">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="block text-xl font-medium text-[var(--dark)] hover:text-[var(--primary)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(link.title)}
                          className="flex w-full justify-between items-center text-xl font-medium text-[var(--dark)] hover:text-[var(--primary)]"
                        >
                          {link.title}
                          <motion.div
                            animate={{ rotate: activeMobileDropdown === link.title ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>
                        
                        {/* Mobile Dropdown Menu */}
                        <AnimatePresence>
                          {activeMobileDropdown === link.title && link.dropdownItems && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-gray-50 mt-2 rounded-md"
                            >
                              <div className="py-2">
                                {link.dropdownItems.map((item, idx) => (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className="block px-5 py-3.5 text-base text-[var(--dark)]/80 hover:text-[var(--primary)] hover:bg-gray-100"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Book Now Button */}
              <div className="mt-8 mb-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-5 bg-[var(--secondary)] text-white rounded-full shadow-md hover:bg-[var(--secondary-dark)] text-lg"
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
  );
}