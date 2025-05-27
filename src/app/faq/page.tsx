"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FiChevronDown } from "react-icons/fi";
import EnquirySection from "@/components/sections/EnquirySection";

const faqs = [
  {
    question: "What makes Our Travel & Art Retreat different from other travel companies?",
    answer:
      "We specialize in curating an intriguing blend of travel and art where we provide slow, mindful, experiential, transformative travel experiences that combine luxury with Artistic & Creative Immersion. Our carefully curated journeys focus on personal growth, cultural immersion, and rejuvenation, setting us apart from traditional tourism.",
  },
  {
    question: "What will you include in the retreat?",
    answer:
      "We have well curated adventurous activities based on location and cities like paragliding, bungee-jumping, cliff-jumping, canyoning, boating, kayaking, caving along with artistic workshops like watercolor painting, photography workshops, storytelling sessions, journaling and jamming with local folk artists, musician and dancers.",
  },
  {
    question: "How far in advance should I book my journey?",
    answer:
      "We recommend booking at least 7 days to 1 month in advance for most destinations. Popular retreats and peak season dates may require 2-3 months advance booking to ensure availability.",
  },
  {
    question: "Are your trips suitable for solo travelers or females?",
    answer:
      "Absolutely! Many of our guests are solo travelers. We create a welcoming and safe environment and offer both private journeys and small group experiences where you can connect with like-minded travelers. We are also coming up with quick chatbot integration for the guests to give us updates instantly in case of any emergency.",
  },
  {
    question: "What is included in the trip price?",
    answer:
      "Our packages typically include accommodation, planned activities, breakfast meals, local transportation, and expert local guides, trip captains. The exact inclusions vary by journey and are clearly listed in each trip's details.",
  },
  {
    question: "What is excluded in the trip price?",
    answer:
      "Flight tickets, lunch & dinner, any extra activities apart from the one mentioned in the itinerary and explained by Travel experts over the call or whatsapp. (Note: we might add these services soon.)",
  },
  {
    question: "What is your cancellation or refund policy?",
    answer:
      "Our standard policy allows full refunds up to 7 days from the date of booking and no refund after 7 days but we can carry forward the trip amount for the next trip with us. We don't provide travel insurance as of now. We will be adding it very soon but we have local guides and a trip captain in case of any help needed.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "We don't provide travel insurance as of now. We will be adding it very soon but we have local guides and a trip captain in case of any help needed.",
  },
  {
    question: "What size are your group trips?",
    answer:
      "Our group sizes typically range from 8-12 participants to ensure personal attention and intimate experiences. Some specialty retreats may have different size limits, which will be specified in the journey details.",
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
