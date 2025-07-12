// Expand destination data
export const destinations = {  
  "meghalaya-2025": {
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
          // "Bungee Jumping & Water Activities",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 24999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 24999,
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
            price: 36999,
            features: ["Black clay pottery", "Water color painting on valleys"]
          },
          {
            name: "Premium Art Package",
            price: 49999,
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
          // "Bungee Jumping & Water Activities",
          "All Entry Tickets & Parking Fees",
        ],
        color: "#618940",
        icon: "📷",
        popular: false,
        variants: [
          {
            name: "Double Occupancy",
            price: 24999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 24999,
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
            price: 36999,
            features: ["Black clay pottery", "Water color painting on valleys"]
          },
          {
            name: "Premium Art Package",
            price: 49999,
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
            price: 24999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 24999,
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
            price: 36999,
            features: ["Block printing", "Miniature painting workshop"]
          },
          {
            name: "Premium Art Package",
            price: 49999,
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
            price: 24999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 24999,
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
            price: 36999,
            features: ["Silk painting", "Ghats sketching workshop"]
          },
          {
            name: "Premium Art Package",
            price: 49999,
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
            price: 24999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 24999,
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
            price: 36999,
            features: ["Mountain landscape painting", "Nature journaling workshop"]
          },
          {
            name: "Premium Art Package",
            price: 49999,
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
            price: 24999,
            features: ["All standard inclusions with double occupancy instead of triple"]
          }
        ],
        note: "For hotels/resorts, prices vary depending on the days and package chosen"
      },
      {
        id: "travel-art",
        name: "Travel x Art",
        price: 24999,
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
            price: 36999,
            features: ["Thangka painting basics", "Landscape photography workshop"]
          },
          {
            name: "Premium Art Package",
            price: 49999,
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