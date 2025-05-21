"use client"
 
import MainLayout from "@/components/layout/MainLayout";
import JobListing from "@/components/sections/JobListing";
import { Metadata } from "next";
// Replace framer-motion import with our wrapper
import { motion } from "@/lib/motion";
import Link from "next/link";
import Image from "next/image";
import ParallaxImage from '@/components/ui/ParallaxImage';

// export const metadata: Metadata = {
//   title: "Careers | Travel",
//   description:
//     "Join our team at Travel and help create transformative travel experiences for our clients.",
// };

// Job data - in a real application, this would likely come from a CMS or database
const jobListings = [
  {
    id: 1,
    title: "Travel Experience Designer",
    department: "Product Development",
    location: "Remote / New York",
    type: "Full-time",
    description: `
      <p>We are looking for a creative Travel Experience Designer who can create unique, transformative travel experiences that align with our wellness-focused brand.</p>
      
      <h4>Responsibilities:</h4>
      <ul>
        <li>Research and identify emerging travel destinations with wellness potential</li>
        <li>Design comprehensive travel itineraries that incorporate wellness elements</li>
        <li>Build and maintain relationships with local service providers and wellness experts</li>
        <li>Work with marketing to create compelling descriptions of travel experiences</li>
        <li>Stay current with wellness travel trends and incorporate them into our offerings</li>
      </ul>
      
      <h4>Requirements:</h4>
      <ul>
        <li>3+ years experience in travel planning, hospitality, or related field</li>
        <li>Strong understanding of wellness practices and trends</li>
        <li>Excellent research and creative thinking skills</li>
        <li>Outstanding written and verbal communication abilities</li>
        <li>Prior experience in luxury travel is a plus</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Destination Wellness Coordinator",
    department: "Operations",
    location: "Various Locations",
    type: "Full-time",
    description: `
      <p>Join our team as a Destination Wellness Coordinator to oversee the seamless delivery of our wellness travel experiences at various locations worldwide.</p>
      
      <h4>Responsibilities:</h4>
      <ul>
        <li>Coordinate with local providers to ensure quality of wellness services</li>
        <li>Serve as the on-site representative for select client trips</li>
        <li>Troubleshoot issues that arise during travel experiences</li>
        <li>Collect feedback and suggest improvements to our programs</li>
        <li>Ensure all wellness activities meet our brand standards</li>
      </ul>
      
      <h4>Requirements:</h4>
      <ul>
        <li>2+ years experience in hospitality, event coordination, or wellness industry</li>
        <li>Ability to travel internationally 40-50% of the time</li>
        <li>Excellent problem-solving and interpersonal skills</li>
        <li>Organized and detail-oriented</li>
        <li>Experience in customer service in luxury market preferred</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: `
      <p>We're seeking a Digital Marketing Specialist who can help share our wellness travel experiences with the world through compelling digital campaigns.</p>
      
      <h4>Responsibilities:</h4>
      <ul>
        <li>Develop and implement digital marketing strategies across multiple channels</li>
        <li>Create engaging content for our website, blog, and social media platforms</li>
        <li>Manage email marketing campaigns to nurture leads and engage customers</li>
        <li>Analyze campaign performance and optimize based on data</li>
        <li>Collaborate with the product team to highlight new travel experiences</li>
      </ul>
      
      <h4>Requirements:</h4>
      <ul>
        <li>3+ years experience in digital marketing</li>
        <li>Proficiency with social media platforms, email marketing tools, and SEO</li>
        <li>Strong copywriting and content creation skills</li>
        <li>Basic image and video editing abilities</li>
        <li>Experience marketing luxury products or services preferred</li>
        <li>Understanding of the wellness industry a plus</li>
      </ul>
    `,
  },
];

export default function CareersPage() {
  return (
    <MainLayout staticStyle>
      <div className="bg-light">
        {/* Hero Section */}
        <div className="relative bg-primary/90 text-white py-20 mt-15 pt-20">
          <div className="absolute inset-0 opacity-20 z-0">
            <ParallaxImage
              src="/images/istockphoto-517188688-1024x1024.jpg"
              alt="Team working"
              speed={0.1}
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-6 font-extrabold text-[var(--secondary)]">
                Join Our Team
              </h1>
              <div className="h-1 w-24 bg-[var(--secondary)] mx-auto mb-6"></div>
              <p className="text-xl font-semibold text-black">
                Help us create transformative travel experiences that rejuvenate
                mind, body, and spirit.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] mb-4 font-extrabold">
                Why Work With Us
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-dark/80">
                Join a passionate team dedicated to transforming lives through
                travel and wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-light p-6 rounded-lg text-center border border-[var(--primary)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-[var(--primary)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--primary)] mb-2">Global Impact</h3>
                <p className="text-dark/70">
                  Make a difference in people&apos;s lives by creating
                  transformative travel experiences around the world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-light p-6 rounded-lg text-center border border-[var(--primary)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-[var(--primary)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--primary)] mb-2">Employee Wellness</h3>
                <p className="text-dark/70">
                  We practice what we preach with employee wellness programs,
                  flexible work options, and travel perks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-light p-6 rounded-lg text-center border border-[var(--primary)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-[var(--primary)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--primary)] mb-2">
                  Growth & Development
                </h3>
                <p className="text-dark/70">
                  Continuous learning opportunities and a supportive environment
                  that encourages professional growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team Culture Image Section */}
        <div className="py-16 bg-light/50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg mx-auto max-w-5xl">
              <ParallaxImage 
                src="/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp"
                alt="Our team culture"
                speed={0.15}
                direction="up"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">Our Team Culture</h3>
                  <p className="max-w-lg">We believe in supporting each other, celebrating diversity, and bringing passion to everything we do. When you join our team, you become part of a global family dedicated to creating meaningful travel experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] mb-4 font-extrabold">
                Open Positions
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-dark/80">
                Explore our current openings and find your place in our growing
                team.
              </p>
            </div>

            {/* Job Listings */}
            <div className="max-w-4xl mx-auto">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <JobListing job={job} />
                </motion.div>
              ))}

              {/* Application Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-16 bg-light p-8 rounded-lg shadow-md border border-[var(--primary)]/20"
              >
                <h3 className="text-2xl font-serif text-[var(--primary)] mb-6 text-center font-bold">
                  How to Apply
                </h3>

                <div className="space-y-6">
                  <p className="text-dark/80">
                    Interested in joining our team? We&apos;d love to hear from
                    you! Please review our open positions above and get in touch
                    using one of the methods below:
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[var(--primary)]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[var(--primary)]">
                        Email Us
                      </h4>
                      <p className="text-dark/70">
                        Send your resume and cover letter to{" "}
                        <a
                          href="mailto:careers@travel.com"
                          className="text-[var(--secondary)] hover:underline"
                        >
                          careers@travel.com
                        </a>{" "}
                        with the job title in the subject line.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[var(--primary)]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[var(--primary)]">Call Us</h4>
                      <p className="text-dark/70">
                        For questions about a specific position, call our HR
                        department at{" "}
                        <a
                          href="tel:+18001234567"
                          className="text-[var(--secondary)] hover:underline"
                        >
                          +1 (800) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-primary/90 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 font-extrabold text-[var(--secondary)]">
                Ready to Begin Your Journey With Us?
              </h2>
              <div className="w-24 h-1 bg-[var(--secondary)] mx-auto mb-6"></div>
              <p className="text-lg mb-8 font-semibold">
                Whether you&apos;re an experienced travel professional or just starting your career, 
                we&apos;d love to hear from you if you share our passion for transformative travel experiences.
              </p>
              <Link 
                href="mailto:careers@travel.com" 
                className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--secondary-dark)] transition-colors"
              >
                Apply Today
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
