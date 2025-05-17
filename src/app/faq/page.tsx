"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FiChevronDown } from "react-icons/fi";
import EnquirySection from "@/components/sections/EnquirySection";

const faqs = [
  {
    question: "What makes Travel different from other travel companies?",
    answer:
      "We specialize in mindful, transformative travel experiences that combine luxury with wellness. Our carefully curated journeys focus on personal growth, cultural immersion, and rejuvenation, setting us apart from traditional tourism.",
  },
  {
    question: "How far in advance should I book my journey?",
    answer:
      "We recommend booking at least 3-6 months in advance for most destinations. Popular retreats and peak season dates may require 6-12 months advance booking to ensure availability.",
  },
  {
    question: "Are your trips suitable for solo travelers?",
    answer:
      "Absolutely! Many of our guests are solo travelers. We create a welcoming environment and offer both private journeys and small group experiences where you can connect with like-minded travelers.",
  },
  {
    question: "What is included in the trip price?",
    answer:
      "Our packages typically include accommodation, planned activities, most meals, local transportation, and expert guides. The exact inclusions vary by journey and are clearly listed in each trip's details.",
  },
  {
    question: "Do you cater to dietary requirements?",
    answer:
      "Yes, we accommodate various dietary requirements including vegetarian, vegan, gluten-free, and other specific needs. Please inform us during booking so we can make appropriate arrangements.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our standard policy allows full refunds up to 60 days before departure, 50% refund 30-59 days before departure, and no refund within 30 days. We recommend travel insurance for unexpected circumstances.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "While we don't provide insurance directly, we partner with reputable travel insurance providers and strongly recommend coverage for all journeys. We can assist in finding appropriate coverage for your trip.",
  },
  {
    question: "What size are your group trips?",
    answer:
      "Our group sizes typically range from 8-16 participants to ensure personal attention and intimate experiences. Some specialty retreats may have different size limits, which will be specified in the journey details.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <MainLayout staticStyle>
      {/* Hero Section */}
      <section className="bg-primary/90 mt-15 pt-20 pb-20 text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-extrabold text-[var(--secondary)] text-4xl md:text-5xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-semibold text-[var(--)] text-lg md:text-xl max-w-50%">
              Find answers to common questions about our transformative travel
              experiences
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-[var(--primary)] mb-4"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="flex justify-between items-center w-full p-6 text-left"
                  >
                    <span className="text-lg font-medium text-[var(--primary)]">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`w-5 h-5 text-[var(--primary)] transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-dark/80">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <EnquirySection
        title="Still Have Questions?"
        description="Can't find the answer you're looking for? Please reach
              out to our friendly team."
      />
    </MainLayout>
  );
}
