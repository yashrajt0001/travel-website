"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { title: "Home", href: "/" },
  {
    title: "Destinations",
    href: "/destinations",
    dropdownItems: [
      { title: "Meghalaya Edition 2025", href: "/destinations/meghalaya-2025" },
      { title: "Spiti Edition 2025", href: "/destinations/spiti-2025" },
      { title: "Rajasthan Edition 2025", href: "/destinations/rajasthan-2025" },
    ],
  },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)] backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <h1
              className={`text-2xl md:text-3xl font-serif font-bold ${
                isScrolled ? "text-[var(--dark)]" : "text-[var(--light)]"
              }`}
            >
              <span className="text-[var(--secondary)]">Travel</span>
              <span className="text-[var(--primary)]">Hub</span>
            </h1>
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
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--secondary)] ${
                    isScrolled ? "text-[var(--dark)]" : "text-[var(--light)]"
                  }`}
                >
                  {link.title}
                </Link>

                {/* Invisible bridge to prevent gap */}
                {link.dropdownItems && (
                  <div className="absolute top-full left-0 w-full h-4" />
                )}

                {/* Dropdown Menu */}
                {link.dropdownItems && activeDropdown === link.title && (
                  <div className="absolute top-[calc(100%+1rem)] left-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    {link.dropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-dark hover:bg-primary/10 transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
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
          >
            <FiMenu
              className={`w-6 h-6 ${isScrolled ? "text-dark" : "text-white"}`}
            />
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
            className="fixed inset-0 bg-primary-dark/95 z-50 lg:hidden"
          >
            <div className="container mx-auto px-4 h-full flex flex-col">
              <div className="flex justify-between items-center py-4">
                <Link
                  href="/"
                  className="relative z-10"
                  onClick={() => setMobileMenuOpen(false)}
                >
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
  );
}
