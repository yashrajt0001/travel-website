"use client";

import { useState } from "react";
// Replace framer-motion imports with our wrapper
import { motion, AnimatePresence } from "@/lib/motion";
import { FiChevronDown, FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";

// Make properties optional to avoid TypeScript errors with missing fields
interface JobListingProps {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    // Add optional fields that might be used elsewhere
    image?: string;
    salary?: string;
  };
}

export default function JobListing({ job }: JobListingProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-lg border border-[var(--primary)]/20 shadow-sm hover:shadow-md transition-shadow">
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "rgba(132, 170, 103, 0.05)" : "transparent" }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden rounded-lg"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full p-6 text-left"
        >
          <div className="flex-1">
            <h3 className="text-xl font-serif font-bold text-[var(--primary)] mb-2 md:mb-0">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-4 mt-2 md:mt-1 text-sm">
              <div className="flex items-center text-gray-600">
                <FiBriefcase className="mr-1" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiMapPin className="mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiClock className="mr-1" />
                <span>{job.type}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              isOpen ? "bg-[var(--secondary)] text-white" : "bg-primary/10 text-primary"
            }`}>
              {isOpen ? "Hide Details" : "View Details"}
              <FiChevronDown
                className={`ml-1 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gray-100"
            >
              <div 
                className="px-6 py-6 max-w-none text-dark/80"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
              <div className="px-6 pb-6 flex justify-end">
                <a 
                  href={`mailto:careers@travel.com?subject=Application for ${job.title} Position`}
                  className="inline-flex items-center px-6 py-2 bg-[var(--secondary)] text-white rounded-full hover:bg-[var(--secondary-dark)] transition-colors"
                >
                  Apply for this position
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
