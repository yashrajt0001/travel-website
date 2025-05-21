'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ParallaxImage from '@/components/ui/ParallaxImage'

const experiences = [
  {
    id: 'locations',
    title: 'Act in Beautiful, Real Locations',
    description: 'Perform in short films, cinematic scenes, and immersive exercises set against breathtaking backdrops — from mountains to temples to coastlines.',
    image: '/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp',
  },
  {
    id: 'films',
    title: 'Create Short Films & Showreels',
    description: 'Work with filmmakers and mentors to co-create powerful short films and performance reels, perfect for YouTube, portfolios, and auditions.',
    image: '/images/images.jpeg',
  },
  {
    id: 'presence',
    title: 'Build Your On-Camera Presence',
    description: 'Explore character, emotion, and authenticity through daily screen acting workshops, movement, voice, and improvisation.',
    image: '/images/istockphoto-517188688-1024x1024.jpg',
  },
  {
    id: 'collaborate',
    title: 'Collaborate Like a Creative Family',
    description: 'Actors, filmmakers, writers, and editors come together to ideate, shoot, and edit in real time — nurturing trust, vision, and experimentation.',
    image: '/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp',
  },
  {
    id: 'portfolio',
    title: 'Take Home a Professional Body of Work',
    description: 'Leave with finished short films, performance videos, and behind-the-scenes footage — tangible proof of your craft and growth.',
    image: '/images/images (1).jpeg',
  },
]

export default function WellnessExperiences() {
  const [activeExperience, setActiveExperience] = useState('locations')

  const getCurrentExperience = () => {
    return experiences.find(exp => exp.id === activeExperience)
  }

  return (
    <section className="py-20 bg-light relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'url("/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} 
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-[var(--primary)] text-3xl md:text-4xl font-serif text-dark mb-3">What Will You Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Well curated packages to help you Create Soulful Art while immersing yourself in beautiful locations and collaborative environments.
          </p>
        </div>

        {/* Experience Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              className={`px-6 py-3 font-extrabold text-[var(--primary)] rounded-full text-sm transition-colors ${
                activeExperience === exp.id
                  ? 'bg-primary text-white bg-[var(--secondary)]'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
              onClick={() => setActiveExperience(exp.id)}
            >
              {exp.title}
            </button>
          ))}
        </div>

        {/* Experience Content */}
        <motion.div 
          key={activeExperience}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image with parallax effect */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
            <ParallaxImage
              src={getCurrentExperience()?.image || ''}
              alt={getCurrentExperience()?.title || ''}
              speed={0.2}
              direction="down"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-serif text-dark font-extrabold text-[var(--primary)]">{getCurrentExperience()?.title}</h3>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-lg leading-relaxed text-dark/80">
              {getCurrentExperience()?.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}