"use client";

import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import BookingModal from "@/components/modals/BookingModal";
import { motion, useScroll, useTransform } from "@/lib/motion";
import { FiStar, FiMapPin, FiSun, FiUsers, FiCheckCircle, FiAward, FiCamera } from "react-icons/fi";
import { use } from "react";
import ParallaxImage from '@/components/ui/ParallaxImage';

// Expand destination data
const destinations = {  "meghalaya-2025": {
    title: "Meghalaya – The Abode of Clouds",
    description:
      "Verdant hills draped in mist, living root bridges woven by time, and rains that sing on tin rooftops—Meghalaya is poetry in motion. The Khasi and Garo traditions echo in every drumbeat, every woven pattern, every smile.",
    longDescription:
      "Embark on a journey to the mystical land of clouds where ancient living root bridges weave through lush rainforests and pristine waterfalls cascade into emerald pools. Meghalaya, meaning 'abode of clouds', offers an unparalleled blend of natural wonders and cultural heritage.",
    image:
      "/images/meghalaya/4b1c2c0a9a5fac5f51982e358c731ece.jpg",
    gallery: [
      "/images/meghalaya/4b1c2c0a9a5fac5f51982e358c731ece.jpg",
      "/images/meghalaya/54d8090c91eda559233a471b71ae487c.jpg",
      "/images/meghalaya/60547e89e40dadb7e242640d3a29af32.jpg",
      "/images/meghalaya/659e5e9dca63df5f86511ef615e6d21f.jpg",
      "/images/meghalaya/9b4832c29ef18ad9c168652a88874450.jpg",
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
        name: "Travel - Offbeat Adventure",
        price: 19999,
        features: [
          "6 Nights/7 Days Stay",
          "Triple Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Bungee Jumping & Water Activities",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 21999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 21999,
        features: [
          "6 Nights/7 Days Stay (From June 21)",
          "Double Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Black Clay Pottery Activity",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
        variants: [
          {
            name: "Standard Art Package",
            price: 26999,
            features: ["Black clay pottery", "Water color painting on valleys"]
          },
          {
            name: "Premium Art Package",
            price: 39999,
            features: ["Black clay pottery", "Water color painting", "Local folk music/dance jamming"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art-create",
        name: "Travel x Art x Create",
        price: null,
        features: [
          "Be part of a short film",
          "Direction by Indian Filmmakers",
          "Screenplay writing with the crew",
          "Adventure + Art & culture exploration",
          "Screen Acting workshops",
        ],
        color: "#4a6a32",
        icon: "✨",
        popular: false,
        comingSoon: true,
        note: "Coming Soon - Prices will be decided soon"
      },
    ],
    goodFor: "Perfect for adventure-seekers, art-lovers, and anyone looking for slow and experiential travel",
    weather: {
      condition: "Condition Mostly cloudy with frequent rains",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },  "kerala-2025": {
    title: "Kerala – The Land of Backwaters and Beyond",
    description:
      "A gentle dance of sea and spice, Kathakali eyes and Theyyam flames, Kerala is a sanctuary of balance—between body, spirit, and earth. From its lush backwaters to soulful temple chants, every experience here is soaked in story. A place where you can write by the sea, paint with coconut palms, and awaken to Ayurveda.",
    longDescription:
      "Embark on a journey to Kerala's serene backwaters, lush hill stations, and pristine beaches. Experience traditional Ayurvedic therapies, vibrant cultural performances, and exquisite cuisine in this tropical paradise known as God's Own Country.",
    image:
      "/images/kerala/5ba3b0c48122c4216a23f05a257a4bba.jpg",
    gallery: [
      "/images/kerala/5ba3b0c48122c4216a23f05a257a4bba.jpg",
      "/images/kerala/6712a3f5e453ff65cfacd7a54640087a.jpg",
      "/images/kerala/783959285c1ace76beb9e625a1caec71.jpg",
      "/images/kerala/98ea2870588487b12a57a23241c8e401.jpg",
      "/images/kerala/c1dacbefe167f0153954ca19518b2ff2.jpg",      "/images/kerala/c33dcef339669f11621bdc111c4c2471.jpg",
      "/images/kerala/ed92ed483f79a7dff7bd8314a433fa4d.jpg",
    ],
    highlights: [
      "Cruise through serene backwaters on traditional houseboats",
      "Experience authentic Ayurvedic wellness treatments",
      "Explore lush tea plantations and spice gardens",
      "Witness traditional Kathakali performances",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
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
    ],    packages: [
      {
        id: "travel",
        name: "Travel - Offbeat Adventure",
        price: 19999,
        features: [
          "6 Nights/7 Days Stay",
          "Triple Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Bungee Jumping & Water Activities",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 21999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 21999,
        features: [
          "6 Nights/7 Days Stay (From June 21)",
          "Double Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Black Clay Pottery Activity",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
        variants: [
          {
            name: "Standard Art Package",
            price: 26999,
            features: ["Black clay pottery", "Water color painting on valleys"]
          },
          {
            name: "Premium Art Package",
            price: 39999,
            features: ["Black clay pottery", "Water color painting", "Local folk music/dance jamming"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art-create",
        name: "Travel x Art x Create",
        price: null,
        features: [
          "Be part of a short film",
          "Direction by Indian Filmmakers",
          "Screenplay writing with the crew",
          "Adventure + Art & culture exploration",
          "Screen Acting workshops",
        ],
        color: "#4a6a32",
        icon: "✨",
        popular: false,
        comingSoon: true,
        note: "Coming Soon - Prices will be decided soon"
      },
    ],
    goodFor: "Ideal for wellness enthusiasts, nature lovers, and those interested in ancient cultural traditions",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },  "rajasthan-2025": {
    title: "Rajasthan – Desert Palaces and Infinite Skies",
    description:
      "A land of golden sands, mirror-worked textiles, and music that rises like incense. Rajasthan's opulence is matched only by its grit. Forts rise like poems from the earth, and each village tells a tale in color and dust. A place to create bold art, dance with shadows, and taste the silence between folk songs.",
    longDescription:
      "Embark on a journey to the land of kings where majestic forts and opulent palaces tell tales of valor and grandeur. Experience the vibrant culture, colorful festivals, and warm hospitality of Rajasthan, India's royal state known for its rich heritage and stunning desert landscapes.",
    image:
      "/images/rajasthan/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg",
    gallery: [
      "/images/rajasthan/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg",
      "/images/rajasthan/aa5d9273ec5f92954c510d75f4f1b19f.jpg",
      "/images/rajasthan/bca4461e3ba381d8a6a79cd0caf68c1b.jpg",
      "/images/rajasthan/d9605ef6f50afb3f9674591fb204a6d8.jpg",
      "/images/rajasthan/f5ef5e9c73978bb1cd8c9b645f4da9ee.jpg",
    ],
    highlights: [
      "Explore majestic palaces and imposing forts",
      "Experience authentic desert safari on camelback",
      "Witness vibrant folk music and dance performances",
      "Shop for traditional handicrafts and textiles",
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
    ],    packages: [
      {
        id: "travel",
        name: "Travel - Offbeat Adventure",
        price: 19999,
        features: [
          "6 Nights/7 Days Stay",
          "Triple Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Desert Safari & Camel Ride",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 21999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 21999,
        features: [
          "6 Nights/7 Days Stay (From June 21)",
          "Double Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Traditional Block Printing Workshop",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
        variants: [
          {
            name: "Standard Art Package",
            price: 26999,
            features: ["Block printing", "Miniature painting workshop"]
          },
          {
            name: "Premium Art Package",
            price: 39999,
            features: ["Block printing", "Miniature painting", "Traditional folk performance participation"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art-create",
        name: "Travel x Art x Create",
        price: null,
        features: [
          "Be part of a short film",
          "Direction by Indian Filmmakers",
          "Screenplay writing with the crew",
          "Desert & Palace exploration",
          "Screen Acting workshops",
        ],
        color: "#4a6a32",
        icon: "✨",
        popular: false,
        comingSoon: true,
        note: "Coming Soon - Prices will be decided soon"
      },
    ],
    goodFor: "Perfect for history buffs, photographers, and art collectors interested in vibrant culture",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },  "banaras-2025": {
    title: "Banaras – The City of Eternal Flame",
    description:
      "Where the sacred and the mundane flow side by side, Banaras is a river of time. Ghats soaked in devotion, ancient chants, burning lamps, and the constant presence of the Ganga—this city is a living canvas of faith and transformation. A place to write soulfully, sketch timeless rituals, and surrender to creative flow.",
    longDescription:
      "Embark on a spiritual journey to one of the world's oldest continuously inhabited cities, where ancient traditions and rituals come alive along the sacred Ganges River. Experience the profound spiritual energy, vibrant cultural traditions, and timeless architectural wonders that make Banaras a transformative destination.",
    image:
      "/images/banaras/07ee68942057c4bb7bc6e690ff697b2f.jpg",
    gallery: [
      "/images/banaras/07ee68942057c4bb7bc6e690ff697b2f.jpg",
      "/images/banaras/10c00e8b510aa6931e5e19b8c941f6dc.jpg",
      "/images/banaras/658b0ea74731627591b2701ff0db836d.jpg",
      "/images/banaras/8ef37e650b6f7712500cd6ea22201073.jpg",
      "/images/banaras/e9022f3d6eabb1bdd05789c20dffd693.jpg",
      "/images/banaras/fdaa75f0854b00753f0bd8a722676836.jpg",
    ],
    highlights: [
      "Experience the sacred Ganga Aarti ceremony",
      "Explore ancient temples and spiritual sites",
      "Navigate the narrow lanes of the old city",
      "Witness life and death rituals along the ghats",
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
    ],    packages: [
      {
        id: "travel",
        name: "Travel - Offbeat Adventure",
        price: 19999,
        features: [
          "6 Nights/7 Days Stay",
          "Triple Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Boat Ride on Ganges",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 21999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 21999,
        features: [
          "6 Nights/7 Days Stay (From June 21)",
          "Double Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Traditional Silk Painting Workshop",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
        variants: [
          {
            name: "Standard Art Package",
            price: 26999,
            features: ["Silk painting", "Ghats sketching workshop"]
          },
          {
            name: "Premium Art Package",
            price: 39999,
            features: ["Silk painting", "Ghats sketching", "Classical music appreciation session"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art-create",
        name: "Travel x Art x Create",
        price: null,
        features: [
          "Be part of a short film",
          "Direction by Indian Filmmakers",
          "Screenplay writing with the crew",
          "Spiritual & Cultural exploration",
          "Screen Acting workshops",
        ],
        color: "#4a6a32",
        icon: "✨",
        popular: false,
        comingSoon: true,
        note: "Coming Soon - Prices will be decided soon"
      },
    ],
    goodFor: "Ideal for spiritual seekers, artists, writers, and photographers drawn to ancient rituals",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },  "uttarakhand-2025": {
    title: "Uttarakhand – Land of Sacred Peaks and Silent Forests",
    description:
      "Home to holy rivers and Himalayan stillness, Uttarakhand is a space of spiritual ascent and grounding presence. Villages perched on cliffs, temple bells echoing through pine forests, and paths that whisper to the sky. A place to meditate, journal, and create in quiet communion with nature.",
    longDescription:
      "Journey to the 'Land of Gods' nestled in the Himalayan foothills, where pristine rivers flow through ancient forests and sacred pilgrimage sites dot the landscape. Discover Uttarakhand's breathtaking alpine meadows, snow-capped peaks, and tranquil villages that offer the perfect backdrop for spiritual reflection and nature connection.",
    image:
      "/images/uttarakhand/471430b468f840c3b500bbe9aee44eac.jpg",
    gallery: [
      "/images/uttarakhand/471430b468f840c3b500bbe9aee44eac.jpg",
      "/images/uttarakhand/4d241178f1111fcf5a99da47daea34d6.jpg",
      "/images/uttarakhand/765f34b887c25c39d478c1604c0ee7d9.jpg",
      "/images/uttarakhand/902421facbfa1b97fd0adeffc61f69c7.jpg",
      "/images/uttarakhand/bb51e78e1130cdda3b4a9ba633f44595.jpg",
      "/images/uttarakhand/c75b8556a2c68fca8cc1ed9ae6a916d3.jpg",
    ],
    highlights: [
      "Trek through breathtaking Himalayan trails",
      "Visit ancient temples and sacred pilgrimage sites",
      "Experience yoga and meditation in its birthplace",
      "Connect with traditional mountain communities",
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
    ],    packages: [
      {
        id: "travel",
        name: "Travel - Offbeat Adventure",
        price: 19999,
        features: [
          "6 Nights/7 Days Stay",
          "Triple Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Himalayan Trekking Experience",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 21999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 21999,
        features: [
          "6 Nights/7 Days Stay (From June 21)",
          "Double Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Mountain Landscape Painting",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
        variants: [
          {
            name: "Standard Art Package",
            price: 26999,
            features: ["Mountain landscape painting", "Nature journaling workshop"]
          },
          {
            name: "Premium Art Package",
            price: 39999,
            features: ["Mountain landscape painting", "Nature journaling", "Traditional craft learning session"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art-create",
        name: "Travel x Art x Create",
        price: null,
        features: [
          "Be part of a short film",
          "Direction by Indian Filmmakers",
          "Screenplay writing with the crew",
          "Mountain & Temple exploration",
          "Screen Acting workshops",
        ],
        color: "#4a6a32",
        icon: "✨",
        popular: false,
        comingSoon: true,
        note: "Coming Soon - Prices will be decided soon"
      },
    ],
    goodFor: "Perfect for nature enthusiasts, spiritual travelers, and adventure seekers in the Himalayas",
    weather: {
      condition: "Mostly cloudy with occasional rain",
      temp: "18-24°C",
      humidity: "80-90%"
    }
  },  "spiti-2025": {
    title: "Spiti – The Cold Desert of Light and Silence",
    description:
      "Raw, vast, and humbling—Spiti is a monastery of the soul. Stupas stand still against cobalt skies, and prayer flags carry your breath across the mountains. Art here emerges not from noise but from stillness. A place to draw with the wind, paint with shadows, and find meaning in the stark and sacred.",
    longDescription:
      "Venture into the remote trans-Himalayan region of Spiti Valley, a high-altitude desert landscape that feels like another world. With its ancient Buddhist monasteries perched on rocky outcrops, stark lunar landscapes, and traditional villages frozen in time, Spiti offers an unparalleled experience of solitude and spiritual connection.",
    image:
      "/images/spiti/3cd0025246c28b974c10897ceffaa1fc.jpg",
    gallery: [
      "/images/spiti/3cd0025246c28b974c10897ceffaa1fc.jpg",
      "/images/spiti/5c92cd358434f927dea3049e17c8cabf.jpg",
      "/images/spiti/b838262df4b429e35c4a4ea9d6dc866b.jpg",
      "/images/spiti/de6ebe27c4f747d4d3197448b846d3be.jpg",
      "/images/spiti/istockphoto-517188688-1024x1024.jpg",
    ],
    highlights: [
      "Visit ancient Buddhist monasteries",
      "Experience star-gazing in pristine night skies",
      "Connect with traditional Spitian culture",
      "Photograph stark lunar landscapes and high-altitude lakes",
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
    ],    packages: [
      {
        id: "travel",
        name: "Travel - Offbeat Adventure",
        price: 19999,
        features: [
          "6 Nights/7 Days Stay",
          "Triple Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Buddhist Monastery Visits",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 21999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 21999,
        features: [
          "6 Nights/7 Days Stay (From June 21)",
          "Double Occupancy in Homestays",
          "All Transfers & Breakfast",
          "Thangka Painting Workshop",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#5e7e3e",
        icon: "🎨",
        popular: true,
        variants: [
          {
            name: "Standard Art Package",
            price: 26999,
            features: ["Thangka painting basics", "Landscape photography workshop"]
          },
          {
            name: "Premium Art Package",
            price: 39999,
            features: ["Thangka painting", "Landscape photography", "Meditation and mindfulness sessions"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art-create",
        name: "Travel x Art x Create",
        price: null,
        features: [
          "Be part of a short film",
          "Direction by Indian Filmmakers",
          "Screenplay writing with the crew",
          "High Altitude Desert exploration",
          "Screen Acting workshops",
        ],
        color: "#4a6a32",
        icon: "✨",
        popular: false,
        comingSoon: true,
        note: "Coming Soon - Prices will be decided soon"
      },
    ],
    goodFor: "Ideal for adventurous souls, photographers, and mindful travelers seeking solitude",
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
              <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)]">Trip Overview</h2>
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
                <div className="bg-[var(--primary-extraLight)] p-4 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <FiCamera className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="font-medium">Photography</p>
                    <p className="text-sm text-gray-600">Perfect for photographers</p>
                  </div>
                </div>
                <div className="bg-[var(--primary-extraLight)] p-4 rounded-lg flex items-center gap-3">
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
                    className="flex items-start space-x-3 p-4 bg-[var(--primary-extraLight)] rounded-lg border-l-4 border-[var(--secondary)]"
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
      </section>      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[var(--primary-extraLight)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-extrabold text-[var(--primary)] mb-3">Destination Gallery</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark/80">
              Explore stunning visuals of this magical destination
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Display the gallery without the first image (which is used as hero) */}            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
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
                      <h4 className="font-medium text-[var(--primary)]">Package Options:</h4>
                      {pkg.variants.map((variant, idx) => (
                        <div key={idx} className="bg-[var(--primary-extraLight)]/50 p-3 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{variant.name}</span>
                            <span className="text-[var(--primary)] font-semibold">₹{variant.price}</span>
                          </div>
                          {variant.features && (
                            <ul className="text-sm text-dark/70">
                              {variant.features.map((feat: string, fidx: number) => (
                                <li key={fidx} className="flex items-start">
                                  <FiCheckCircle className="w-3.5 h-3.5 text-[var(--secondary)] mr-2 mt-0.5" />
                                  {feat}
                                </li>
                              ))}
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
                    {selectedPackage === pkg.id ? "Selected" : pkg.comingSoon ? "Coming Soon" : "Select Package"}
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
      <section className="py-20 bg-[var(--primary-extraLight)]">
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
                  &quot;The Meghalaya trip was absolutely breathtaking! The living root bridges were unlike anything I&apos;ve ever seen. Our guide was knowledgeable, and the entire experience was well-organized. I&apos;ll definitely book another trip with you all!&quot;
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
          (p) => p.id === selectedPackage && typeof p.price === "number"
        ) as { id: string; name: string; price: number; features: string[] } | undefined}
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
