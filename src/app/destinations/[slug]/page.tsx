"use client";

import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import BookingModal from "@/components/modals/BookingModal";
import { motion, useScroll, useTransform } from "@/lib/motion";
import { FiStar, FiMapPin, FiSun, FiUsers, FiCheckCircle, FiClock, FiAward, FiCamera } from "react-icons/fi";
import { use } from "react";
import ParallaxImage from '@/components/ui/ParallaxImage';

// Expand destination data
const destinations = {
  "meghalaya-2025": {
    title: "Meghalaya – The Abode of Clouds",
    description:
      "Verdant hills draped in mist, living root bridges woven by time, and rains that sing on tin rooftops—Meghalaya is poetry in motion. The Khasi and Garo traditions echo in every drumbeat, every woven pattern, every smile.",
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
        color: "#618940",
        icon: "📷",
        popular: false,
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
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
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
        color: "#4a6a32",
        icon: "✨",
        popular: false,
      },
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "8-12 people",
    difficulty: "Moderate",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },
  "kerala-2025": {
    title: "Kerala – The Land of Backwaters and Beyond",
    description:
      "A gentle dance of sea and spice, Kathakali eyes and Theyyam flames, Kerala is a sanctuary of balance—between body, spirit, and earth. From its lush backwaters to soulful temple chants, every experience here is soaked in story. A place where you can write by the sea, paint with coconut palms, and awaken to Ayurveda.",
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
        color: "#618940",
        icon: "📷",
        popular: false,
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
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
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
        color: "#4a6a32",
        icon: "✨",
        popular: false,
      },
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "8-12 people",
    difficulty: "Moderate",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },
  "rajasthan-2025": {
    title: "Rajasthan – Desert Palaces and Infinite Skies",
    description:
      "A land of golden sands, mirror-worked textiles, and music that rises like incense. Rajasthan’s opulence is matched only by its grit. Forts rise like poems from the earth, and each village tells a tale in color and dust. A place to create bold art, dance with shadows, and taste the silence between folk songs.",
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
        color: "#618940",
        icon: "📷",
        popular: false,
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
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
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
        color: "#4a6a32",
        icon: "✨",
        popular: false,
      },
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "8-12 people",
    difficulty: "Moderate",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },
  "banaras-2025": {
    title: "Banaras – The City of Eternal Flame",
    description:
      "Where the sacred and the mundane flow side by side, Banaras is a river of time. Ghats soaked in devotion, ancient chants, burning lamps, and the constant presence of the Ganga—this city is a living canvas of faith and transformation. A place to write soulfully, sketch timeless rituals, and surrender to creative flow.",
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
        color: "#618940",
        icon: "📷",
        popular: false,
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
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
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
        color: "#4a6a32",
        icon: "✨",
        popular: false,
      },
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "8-12 people",
    difficulty: "Moderate",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },
  "uttarakhand-2025": {
    title: "Uttarakhand – Land of Sacred Peaks and Silent Forests",
    description:
      "Home to holy rivers and Himalayan stillness, Uttarakhand is a space of spiritual ascent and grounding presence. Villages perched on cliffs, temple bells echoing through pine forests, and paths that whisper to the sky. A place to meditate, journal, and create in quiet communion with nature.",
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
        color: "#618940",
        icon: "📷",
        popular: false,
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
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
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
        color: "#4a6a32",
        icon: "✨",
        popular: false,
      },
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "8-12 people",
    difficulty: "Moderate",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },
  "spiti-2025": {
    title: "Spiti – The Cold Desert of Light and Silence",
    description:
      "Raw, vast, and humbling—Spiti is a monastery of the soul. Stupas stand still against cobalt skies, and prayer flags carry your breath across the mountains. Art here emerges not from noise but from stillness. A place to draw with the wind, paint with shadows, and find meaning in the stark and sacred.",
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
        color: "#618940",
        icon: "📷",
        popular: false,
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
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
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
        color: "#4a6a32",
        icon: "✨",
        popular: false,
      },
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "8-12 people",
    difficulty: "Moderate",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  }
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
          className="absolute inset-0 flex items-center justify-center text-center text-white z-20"
        >
          <div className="max-w-4xl px-4">
            <div className="flex justify-center items-center gap-2 mb-3">
              <FiMapPin className="text-[var(--secondary)]" />
              <span className="text-lg text-white/90">India</span>
            </div>
            {/* Enhanced text with text shadow for better readability */}
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {destination.title}
            </h1>
            <div className="w-24 h-1 bg-[var(--secondary)] mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              {destination.description}
            </p>
            
            {/* Trip Stats - Made more visible with increased contrast */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                <FiClock className="text-[var(--secondary)]" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                <FiUsers className="text-[var(--secondary)]" />
                <span>{destination.groupSize}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                <FiSun className="text-[var(--secondary)]" />
                <span>{destination.difficulty}</span>
              </div>
            </div>
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
              <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)]">Trip Overview</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              
              {/* Weather Info Card */}
              <div className="bg-light p-6 rounded-lg shadow-sm border border-[var(--primary)]/10">
                <h3 className="font-bold text-[var(--primary)] mb-3 flex items-center gap-2">
                  <FiSun className="text-[var(--secondary)]" /> 
                  Weather & Climate
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Condition</span>
                    <span className="font-medium">{destination.weather.condition}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Temperature</span>
                    <span className="font-medium">{destination.weather.temp}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Humidity</span>
                    <span className="font-medium">{destination.weather.humidity}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.longDescription}
              </p>
              
              {/* Trip Extras */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-light p-4 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <FiCamera className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="font-medium">Photography</p>
                    <p className="text-sm text-gray-600">Perfect for photographers</p>
                  </div>
                </div>
                <div className="bg-light p-4 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <FiAward className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="font-medium">Experienced Guides</p>
                    <p className="text-sm text-gray-600">Expert local leaders</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)]">Highlights</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <div className="grid gap-4">
                {destination.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-light rounded-lg border-l-4 border-[var(--secondary)]"
                  >
                    <FiCheckCircle className="w-5 h-5 text-[var(--secondary)] mt-1" />
                    <p>{highlight}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <a href="#packages" className="inline-flex items-center gap-2 bg-[var(--secondary)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--secondary-dark)] transition-colors">
                  View Available Packages
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)] mb-3">Destination Gallery</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark/80">
              Explore stunning visuals of this magical destination
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-lg overflow-hidden group"
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
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[var(--primary)] mb-3">Choose Your Package</h2>
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
                  selectedPackage === pkg.id ? "ring-2 ring-[var(--secondary)]" : ""
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
                    <span className="text-4xl font-serif text-dark font-bold">
                      ₹{pkg.price}
                    </span>
                    <span className="text-dark/60">/ person</span>
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

                  {/* Button */}
                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      selectedPackage === pkg.id
                      ? "bg-[var(--secondary)] text-white"
                      : "bg-light text-[var(--primary)] border border-[var(--primary)]/20 hover:bg-[var(--primary)]/5"
                    }`}
                  >
                    {selectedPackage === pkg.id ? "Selected" : "Select Package"}
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
              <div className="p-6 bg-light inline-block rounded-lg">
                <h3 className="mb-2 text-[var(--primary)] font-bold">Package Selected:</h3>
                <p className="text-lg font-medium">
                  {destination.packages.find(p => p.id === selectedPackage)?.name} - 
                  ₹{destination.packages.find(p => p.id === selectedPackage)?.price}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="px-8 py-3 bg-white text-[var(--primary)] rounded-full border border-[var(--primary)] hover:bg-[var(--primary)]/5"
                >
                  Make Enquiry
                </button>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="px-8 py-3 bg-[var(--secondary)] text-white rounded-full hover:bg-[var(--secondary-dark)]"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)] mb-3">Traveler Reviews</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/images.jpeg" alt="Reviewer" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">Sara Thompson</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <FiStar key={star} className="text-[var(--secondary)] fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-dark/80 italic">
                  "The Meghalaya trip was absolutely breathtaking! The living root bridges were unlike anything I've ever seen. Our guide was knowledgeable, and the entire experience was well-organized. I'll definitely book another trip with you all!"
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </motion.div>
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
