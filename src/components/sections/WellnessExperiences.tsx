'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    id: 'yoga',
    title: 'Yoga & Meditation',
    description: 'Connect with your inner self through traditional yoga practices and guided meditation sessions led by experienced practitioners.',
    image: '/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp',
  },
  {
    id: 'spa',
    title: 'Holistic Spa Treatments',
    description: 'Indulge in rejuvenating spa therapies inspired by ancient healing traditions from around the world.',
    image: '/images/images.jpeg',
  },
  {
    id: 'nutrition',
    title: 'Healthy Cuisine',
    description: 'Savor nutritious and delicious meals prepared with fresh, organic ingredients tailored to support your wellness journey.',
    image: '/images/istockphoto-517188688-1024x1024.jpg',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness Retreats',
    description: 'Learn techniques to cultivate presence and awareness in serene natural settings guided by mindfulness experts.',
    image: '/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp',
  },
  {
    id: 'adventure',
    title: 'Conscious Adventures',
    description: 'Engage in eco-friendly outdoor activities that connect you with nature while respecting the environment.',
    image: '/images/images (1).jpeg',
  },
]

export default function WellnessExperiences() {
  const [activeExperience, setActiveExperience] = useState('yoga')

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
          <h2 className="font-extrabold text-[var(--primary)] text-3xl md:text-4xl font-serif text-dark mb-3">Wellness Experiences</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Embark on a journey of self-discovery and rejuvenation with our curated wellness experiences 
            designed to nurture your mind, body, and spirit.
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
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src={getCurrentExperience()?.image || ''}
              alt={getCurrentExperience()?.title || ''}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-serif text-dark font-extrabold text-[var(--primary)]">{getCurrentExperience()?.title}</h3>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-lg leading-relaxed text-dark/80">
              {getCurrentExperience()?.description}
            </p>
            <ul className="space-y-3 text-dark/80">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                <span>Personalized programs tailored to your needs</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                <span>Expert practitioners with years of experience</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                <span>Authentic practices rooted in traditional wisdom</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                <span>Serene environments that enhance your experience</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 