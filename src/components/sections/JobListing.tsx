"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiMapPin,
  FiBriefcase,
  FiFolder,
} from "react-icons/fi";

interface JobProps {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
  };
}

export default function JobListing({ job }: JobProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Job Header - Always visible */}
      <div
        className="p-6 cursor-pointer flex flex-wrap md:flex-nowrap justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="text-xl font-medium text-dark">{job.title}</h3>
          <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2">
            <div className="flex items-center text-dark/60 text-sm">
              <FiFolder className="mr-1" />
              {job.department}
            </div>
            <div className="flex items-center text-dark/60 text-sm">
              <FiMapPin className="mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-dark/60 text-sm">
              <FiBriefcase className="mr-1" />
              {job.type}
            </div>
          </div>
        </div>

        <button
          className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <span className="mr-2">Close</span>
              <FiChevronUp />
            </>
          ) : (
            <>
              <span className="mr-2">View Details</span>
              <FiChevronDown />
            </>
          )}
        </button>
      </div>

      {/* Job Details - Only visible when expanded */}
      {isExpanded && (
        <div className="p-6 pt-0 border-t border-gray-100">
          <div
            className="prose max-w-none text-dark/80"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>
      )}
    </div>
  );
}
