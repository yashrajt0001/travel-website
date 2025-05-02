"use client";

import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    // Here you would typically handle the newsletter subscription
    setEmail("");
    alert("Thanks for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-primary/95 text-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif">Travel</h2>
            <p className="text-black/80 max-w-xs">
              Experience the journey of a lifetime with our curated luxury
              travel experiences, tailored to rejuvenate your mind, body, and
              soul.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-black hover:text-secondary transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-secondary transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-secondary transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-secondary transition-colors"
              >
                <FaPinterestP className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-secondary transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-black/80">
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-secondary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="hover:text-secondary transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodations"
                  className="hover:text-secondary transition-colors"
                >
                  Accommodations
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-secondary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-secondary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-black/80">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Serene Avenue, Paradise City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@travel.com"
                  className="hover:text-secondary transition-colors"
                >
                  info@travel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium border-b border-white/20 pb-2">
              Newsletter
            </h3>
            <p className="text-black/80">
              Subscribe to receive updates on our latest offers and travel
              inspirations.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-black rounded-l-md focus:outline-none focus:border-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary text-black rounded-r-md hover:bg-secondary/90 transition-colors"
              >
                <FiSend className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-black/60 text-sm">
          <p>© {new Date().getFullYear()} Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
