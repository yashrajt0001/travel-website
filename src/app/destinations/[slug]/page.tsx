"use client";

import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import BookingModal from "@/components/modals/BookingModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiStar, FiCalendar } from "react-icons/fi";
import { use } from "react";

// Expand destination data
const destinations = {
  "meghalaya-2025": {
    title: "Meghalaya Edition 2025",
    description:
      "Experience the magical living root bridges and crystal-clear waters of Meghalaya.",
    longDescription:
      "Embark on a journey to the mystical land of clouds where ancient living root bridges weave through lush rainforests and pristine waterfalls cascade into emerald pools. Meghalaya, meaning 'abode of clouds', offers an unparalleled blend of natural wonders and cultural heritage.",
    image:
      "/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp",
    gallery: [
      "/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp",
      "/images/images.jpeg",
      "/images/images (1).jpeg",
      "/images/istockphoto-517188688-1024x1024.jpg",
    ],
    highlights: [
      "Trek to Double Decker Living Root Bridge",
      "Visit the cleanest village in Asia - Mawlynnong",
      "Explore crystal clear waters of Dawki",
      "Experience local Khasi culture",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shillong",
        activities: [
          "Airport pickup",
          "Welcome dinner",
          "Cultural orientation",
        ],
      },
      {
        day: 2,
        title: "Living Root Bridges",
        activities: [
          "Trek to Double Decker Bridge",
          "Local village visit",
          "Traditional lunch",
        ],
      },
      // ...existing itinerary days...
    ],
    travelTips: [
      "Best time to visit: October to May",
      "Carry rain gear as weather can be unpredictable",
      "Comfortable trekking shoes are essential",
      "Respect local customs and dress modestly",
    ],
    packages: [
      {
        id: "travel",
        name: "Travel",
        price: 24999,
        features: [
          "4 Nights Stay",
          "Local Transportation",
          "Guided Tours",
          "Basic Photography Tips",
        ],
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 29999,
        features: [
          "All Travel Package Features",
          "Art Workshops",
          "Art Supplies",
          "Creative Sessions",
        ],
      },
      {
        id: "travel-art-create",
        name: "Travel x Art x Create",
        price: 34999,
        features: [
          "All Travel x Art Features",
          "Content Creation Workshop",
          "Personal Branding Session",
          "Professional Photoshoot",
        ],
      },
    ],
  },
  // Add other destinations similarly
};

export default function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const destination =
    destinations[resolvedParams.slug as keyof typeof destinations];

  if (!destination) return <div>Destination not found</div>;

  return (
    <MainLayout>
      {/* Enhanced Hero Section with Parallax */}
      <motion.section
        className="relative h-[80vh] min-h-[600px]"
        style={{ opacity: headerOpacity }}
      >
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-center text-white"
        >
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              {destination.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              {destination.longDescription}
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide">
            {[
              "Overview",
              "Highlights",
              "Itinerary",
              "Packages",
              "Gallery",
              "Tips",
            ].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section.toLowerCase())}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                  activeSection === section.toLowerCase()
                    ? "bg-primary text-white"
                    : "hover:bg-primary/10"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Trip Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-dark">Trip Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-light rounded-lg">
                  <FiCalendar className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-medium">5 Days</p>
                  </div>
                </div>
                {/* Add more trip details cards */}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-dark">Highlights</h2>
              <div className="grid gap-4">
                {destination.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-light rounded-lg"
                  >
                    <FiStar className="w-5 h-5 text-primary mt-1" />
                    <p>{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-dark mb-12 text-center">
            Destination Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Choose Your Package
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-white p-8 rounded-lg shadow-md ${
                  selectedPackage === pkg.id ? "ring-2 ring-primary" : ""
                }`}
              >
                <h3 className="text-2xl font-serif text-primary mb-4">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold mb-6">₹{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-2 rounded ${
                    selectedPackage === pkg.id
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>

          {selectedPackage && (
            <div className="mt-12 text-center space-x-4">
              <button
                onClick={() => setShowEnquiryModal(true)}
                className="px-8 py-3 bg-primary/10 text-primary rounded hover:bg-primary/20"
              >
                Make Enquiry
              </button>
              <button
                onClick={() => setShowBookingModal(true)}
                className="px-8 py-3 bg-primary text-white rounded hover:bg-primary/90"
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        packageDetails={destination.packages.find(
          (p) => p.id === selectedPackage
        )}
      />

      {showEnquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowEnquiryModal(false)}
          />
          <div className="relative bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
            {/* Render EnquirySection as modal content */}
          </div>
        </div>
      )}
    </MainLayout>
  );
}
