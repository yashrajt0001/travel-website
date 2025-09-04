"use client";

import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import BookingModal from "@/components/modals/BookingModal";
import { motion, useScroll, useTransform } from "@/lib/motion";
import {
  FiStar,
  FiMapPin,
  FiSun,
  FiUsers,
  FiCheckCircle,
  FiAward,
  FiCamera,
} from "react-icons/fi";
import { use } from "react";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { destinations } from "@/lib/destinations";
import Link from "next/link";

export default function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const destination =
    destinations[resolvedParams.slug as keyof typeof destinations];

  if (!destination) return <div>Destination not found</div>;

  return (
    <MainLayout>
      {/* Enhanced Hero Section with Parallax - Fixed for Mobile */}
      <motion.section
        className="relative h-[100vh] min-h-[600px]  md:mt-0" // Added top margin for mobile to prevent header overlap
        style={{ opacity: headerOpacity }}
      >
        <ParallaxImage
          src={destination.image}
          alt={destination.title}
          speed={0.2}
          direction="down"
        />
        {/* Darker, more opaque gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-center text-white z-20 px-4" // Added padding for mobile
        >
          <div className="max-w-4xl">
            <div className="flex justify-center items-center gap-2 mb-3">
              <FiMapPin className="text-[var(--secondary)]" />
              <span className="text-lg text-white/90">India</span>
            </div>
            {/* Enhanced text with text shadow for better readability - adjusted for mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-extrabold mb-4 md:mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {destination.title}
            </h1>
            <div className="w-16 md:w-24 h-1 bg-[var(--secondary)] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              {destination.description}
            </p>
          </div>
        </motion.div>
      </motion.section>
      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Trip Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)]">
                Trip Overview
              </h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>

              {/* Good For Card */}
              <div className="bg-[var(--primary-extraLight)] p-6 rounded-lg shadow-sm border border-[var(--primary)]/10 mb-6">
                <h3 className="font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                  <FiUsers className="text-[var(--secondary)]" />
                  Good For
                </h3>
                <p className="text-dark/80">{destination.goodFor}</p>
              </div>

              {/* Weather Info Card */}
              <div className="bg-[var(--primary-extraLight)] p-6 rounded-lg shadow-sm border border-[var(--primary)]/10">
                <h3 className="font-bold text-[var(--primary)] mb-3 flex items-center gap-2">
                  <FiSun className="text-[var(--secondary)]" />
                  Weather & Climate
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Condition</span>
                    <span className="font-medium">
                      {destination.weather.condition}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Temperature</span>
                    <span className="font-medium">
                      {destination.weather.temp}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Humidity</span>
                    <span className="font-medium">
                      {destination.weather.humidity}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.longDescription}
              </p>

              {/* Trip Extras */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-[var(--primary-extraLight)] p-4 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <FiCamera className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="font-medium">Photography</p>
                    <p className="text-sm text-gray-600">
                      Perfect for photographers
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--primary-extraLight)] p-4 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <FiAward className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="font-medium">Experienced Guides</p>
                    <p className="text-sm text-gray-600">
                      Expert local leaders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)]">
                Highlights
              </h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <div className="grid gap-4">
                {destination.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-[var(--primary-extraLight)] rounded-lg border-l-4 border-[var(--secondary)]"
                  >
                    <FiCheckCircle className="w-5 h-5 text-[var(--secondary)] mt-1" />
                    <p>{highlight}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--secondary-dark)] transition-colors"
                >
                  View Available Packages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>{" "}
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[var(--primary-extraLight)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)] mb-3">
              Destination Gallery
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark/80">
              Explore stunning visuals of this magical destination
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Display the gallery without the first image (which is used as hero) */}{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
              {destination.gallery.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-lg overflow-hidden group w-full max-w-[300px]"
                >
                  <ParallaxImage
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    speed={0.1}
                    direction={index % 2 === 0 ? "up" : "down"}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                      View Image
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[var(--primary)] mb-3">
              Choose Your Package
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark/80">
              Select the perfect travel experience tailored to your interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {destination.packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg ${
                  selectedPackage === pkg.id
                    ? "ring-2 ring-[var(--secondary)]"
                    : ""
                } relative`}
              >
                {/* Package Color Bar */}
                <div
                  className="h-2"
                  style={{ backgroundColor: pkg.color }}
                ></div>

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-[var(--secondary)] text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                {/* Content */}
                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{pkg.icon}</div>
                    <h3 className="text-2xl font-serif text-[var(--primary)] font-bold">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    {pkg.price ? (
                      <>
                        <span className="text-4xl font-serif text-dark font-bold">
                          ₹{pkg.price}
                        </span>
                        <span className="text-dark/60">/ person</span>
                      </>
                    ) : (
                      <span className="text-2xl font-serif text-dark/70 font-bold">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 mb-6"></div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-dark/80">
                        <FiCheckCircle className="w-5 h-5 text-[var(--secondary)] mr-3 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Variants if available */}
                  {pkg.variants && pkg.variants.length > 0 && (
                    <div className="mt-4 mb-6 space-y-4">
                      <h4 className="font-medium text-[var(--primary)]">
                        Package Options:
                      </h4>
                      {pkg.variants.map((variant, idx) => (
                        <div
                          key={idx}
                          className="bg-[var(--primary-extraLight)]/50 p-3 rounded-lg"
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{variant.name}</span>
                            <span className="text-[var(--primary)] font-semibold">
                              ₹{variant.price}
                            </span>
                          </div>
                          {variant.features && (
                            <ul className="text-sm text-dark/70">
                              {variant.features.map(
                                (feat: string, fidx: number) => (
                                  <li key={fidx} className="flex items-start">
                                    <FiCheckCircle className="w-3.5 h-3.5 text-[var(--secondary)] mr-2 mt-0.5" />
                                    {feat}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Note */}
                  {pkg.note && (
                    <div className="text-sm text-dark/70 italic mb-6">
                      Note: {pkg.note}
                    </div>
                  )}

                  {/* Button */}
                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      selectedPackage === pkg.id
                        ? "bg-[var(--secondary)] text-white"
                        : "bg-[var(--primary-extraLight)] text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/5"
                    }`}
                    disabled={pkg.comingSoon}
                  >
                    {selectedPackage === pkg.id
                      ? "Selected"
                      : pkg.comingSoon
                      ? "Coming Soon"
                      : "Select Package"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedPackage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-center space-y-6"
            >
              <div className="p-6 bg-[var(--primary-extraLight)] inline-block rounded-lg">
                <h3 className="mb-2 text-[var(--primary)] font-bold">
                  Package Selected:
                </h3>
                <p className="text-lg font-medium">
                  {
                    destination.packages.find((p) => p.id === selectedPackage)
                      ?.name
                  }{" "}
                  - ₹
                  {
                    destination.packages.find((p) => p.id === selectedPackage)
                      ?.price
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button
                    // onClick={() => setShowEnquiryModal(true)}
                    className="px-8 py-3 bg-white text-[var(--primary)] rounded-full border border-[var(--primary)] hover:bg-[var(--primary)]/5"
                  >
                    Make Enquiry
                  </button>
                </Link>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="px-8 py-3 bg-[var(--secondary)] text-white rounded-full hover:bg-[var(--secondary-dark)]"
                >
                  Book Now
                </button>

                {/* Show Itinerary button only for Meghalaya */}
                {destination.title === "Meghalaya – The Abode of Clouds" && (
                  <a
                    href="/pdfs/meghalaya-itinerary.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-[var(--secondary)] text-white rounded-full hover:bg-[var(--secondary-dark)] hover:cursor-pointer inline-block text-center"
                  >
                    Itinerary
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-[var(--primary-extraLight)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)] mb-3">
              Traveler Reviews
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/images.jpeg"
                  alt="Reviewer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">Sara Thompson</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        className="text-[var(--secondary)] fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-dark/80 italic">
                  &quot;The Meghalaya trip was absolutely breathtaking! The
                  living root bridges were unlike anything I&apos;ve ever seen.
                  Our guide was knowledgeable, and the entire experience was
                  well-organized. I&apos;ll definitely book another trip with
                  you all!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary/90 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 font-extrabold text-[var(--secondary)]">
              Secure Your Spot Today
            </h2>
            <div className="w-24 h-1 bg-[var(--secondary)] mx-auto mb-6"></div>
            <p className="text-lg mb-8 font-semibold">
              Limited spots available for this exclusive journey to Meghalaya.
              Book now to avoid disappointment!
            </p>
            <button
              onClick={() => {
                setSelectedPackage("travel-art");
                setShowBookingModal(true);
              }}
              className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--secondary-dark)] transition-colors"
            >
              Book Your Journey Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
      {/* Modals */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        packageDetails={(() => {
          const pkg = destination.packages.find(
            (p) => p.id === selectedPackage && typeof p.price === "number"
          );
          return pkg
            ? {
                id: pkg.id,
                name: pkg.name,
                price: pkg.price as number,
                features: pkg.features,
                destination: destination.title,
              }
            : undefined;
        })()}
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
