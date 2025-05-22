"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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

  return (
    <header
      className={`fixed px-10 md:px-20 top-0 left-0 w-full z-50 transition-all duration-300 ${
        staticStyle
          ? "bg-white py-1 shadow-sm"
          : isScrolled
          ? "bg-white backdrop-blur-md shadow-sm" // Changed to bg-white for consistent mobile behavior
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <div className="relative h-26 w-26"> {/* Increased from h-10 w-32 to h-12 w-40 */}
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
                      staticStyle
                        ? "text-[var(--dark)]"
                        : isScrolled
                        ? "text-[var(--dark)]"
                        : "text-[var(--light)]"
                    }`}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <div
                    className={`text-sm font-medium transition-colors hover:text-[var(--secondary)] ${
                      staticStyle
                        ? "text-[var(--dark)]"
                        : isScrolled
                        ? "text-[var(--dark)]"
                        : "text-[var(--light)]"
                    }`}
                  >
                    {link.title}
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
            href="/book"
            className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              staticStyle || isScrolled
                ? "bg-[var(--secondary)] text-[var(--light)] hover:bg-[var(--secondary-dark)]"
                : "bg-[var(--light)]/20 backdrop-blur-sm text-[var(--light)] hover:bg-[var(--light)]/30"
            }`}
          >
            Book Your Journey
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <FiMenu className={`w-6 h-6 ${isScrolled ? "text-[var(--dark)]" : "text-white"}`} />
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
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="container bg-white mx-auto px-4 h-full flex flex-col">
              <div className="flex justify-between bg-white items-center py-4">
                {/* Mobile Logo - Also replace with image */}
                <Link
                  href="/"
                  className="relative z-10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative h-10 w-36"> {/* Increased from h-8 w-28 to h-10 w-36 */}
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
                  className="p-2 rounded-md text-[var(--dark)]"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center space-y-8 py-8">
                {navLinks.map((link, index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-xl font-medium text-[var(--dark)] hover:text-[var(--primary)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() =>
                            setMobileDropdownOpen(!mobileDropdownOpen)
                          }
                          className="text-xl font-medium text-[var(--dark)] hover:text-[var(--primary)] flex items-center"
                        >
                          {link.title}
                          <motion.svg
                            animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </button>
                        {/* Mobile Dropdown Menu */}
                        <AnimatePresence>
                          {mobileDropdownOpen && link.dropdownItems && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <motion.div
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                exit={{ y: -10 }}
                                className="mt-4 ml-4 space-y-4"
                              >
                                {link.dropdownItems.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    <Link
                                      href={item.href}
                                      className="block text-[var(--dark)]/80 hover:text-[var(--primary)]"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {item.title}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="py-6">
                <Link
                  href="/book"
                  className="block w-full text-center px-6 py-3 bg-[var(--secondary)] text-white rounded-full shadow-md hover:bg-[var(--secondary-dark)]"
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
