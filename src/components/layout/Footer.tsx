"use client";

import Link from "next/link";
import Image from "next/image";
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
    <footer className="bg-[var(--primary-dark)] text-[var(--light)]/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column - Replace text with logo image */}
          <div className="space-y-4">
            <div className="relative h-10 w-32">
              <Image
                src="/images/logo.png"
                alt="Travel Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <p className="text-[var(--light)]/80 max-w-xs">
              Experience the journey of a lifetime with our curated luxury
              travel experiences, tailored to rejuvenate your mind, body, and
              soul.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/share/1Bmj9GuZGh/?mibextid=wwXIfr"
                className="text-[var(--light)] hover:text-[var(--secondary)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--light)] hover:text-[var(--secondary)] transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/antarabodh?igsh=bWxiajVpcHljdGts&utm_source=qr"
                className="text-[var(--light)] hover:text-[var(--secondary)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--light)] hover:text-[var(--secondary)] transition-colors"
              >
                <FaPinterestP className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--light)] hover:text-[var(--secondary)] transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium border-b text-white border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
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

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg text-white font-medium border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <div className="flex items-start space-x-3">
              <FiMapPin className="w-5 h-5 text-primary mt-1" />
              <p className="text-light/80">
                S. no. 81/1/1, Road no. b2, Dighi, Pune, Maharashtra 411015
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <FiPhone className="w-5 h-5 text-primary mt-1" />
              <a
                href="tel:+916361420321"
                className="text-light/80 hover:text-primary"
              >
                +91 6361 420 321
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <FiMail className="w-5 h-5 text-primary mt-1" />
              <a
                href="mailto:antarabodh@gmail.com"
                className="text-light/80 hover:text-primary"
              >
                antarabodh@gmail.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white border-b border-white/20 pb-2">
              Newsletter
            </h3>
            <p className="">
              Subscribe to receive updates on our latest offers and travel
              inspirations.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-l-md focus:outline-none focus:border-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary text-white rounded-r-md hover:bg-secondary-dark transition-colors"
              >
                <FiSend className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
