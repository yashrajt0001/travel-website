'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ParallaxImage from '@/components/ui/ParallaxImage'

const experiences = [
	{
		id: 'creative-awakening',
		title: '🧠 Creative Awakening',
		points: [
			'Rediscover your creativity without pressure or judgment',
			'Try new mediums like watercolor, journaling, ink, clay, or photography',
			'Experience "art as process," not perfection',
			'Be guided through prompts that awaken imagination and inner stories',
		],
		image: '/images/others/creative.jpg',
	},
	{
		id: 'nature-connection',
		title: '🌱 Deep Connection with Nature',
		points: [
			'Create in wild or rural settings: forests, riversides, mountains, or fields',
			'Use natural surroundings as inspiration (painting with leaves, nature mandalas, etc.)',
			'Practice slowing down — listening, noticing, breathing',
		],
		image: '/images/others/deep connection.jpg',
	},
	{
		id: 'cultural-immersion',
		title: '🌍 Cultural Immersion',
		points: [
			'Participate in local traditions, crafts, music, or cooking',
			'Meet and learn from artisans, storytellers, or community elders',
			"Stay in locally owned spaces that reflect the region's heritage",
		],
		image: '/images/others/cultural immersion.jpg',
	},
	{
		id: 'supportive-community',
		title: '💬 Supportive Community',
		points: [
			'Meet like-hearted travelers, creatives, seekers',
			'Share stories in circles or workshops',
			'Experience connection without social pressure',
		],
		image: '/images/others/supportive.jpg',
	},
	{
		id: 'slow-living',
		title: '🍲 Slow Living & Nourishment',
		points: [
			'Mindful meals prepared with local ingredients',
			'Long lunches, early sunsets, and digital detox',
			'Emphasis on rest, presence, and spaciousness ⸻',
		],
		image: '/images/others/slow living.jpg',
	},
	{
		id: 'exploration',
		title: '🗺 Exploration Without Rush',
		points: [
			'Guided excursions that are immersive, not touristy',
			'Explore with intention — walking, sketching, listening',
			'Often includes storytelling walks, local hikes, village visits',
		],
		image: '/images/others/exploration.jpg',
	},
	{
		id: 'soulful-art',
		title: '🎭 Create Soulful Art',
		points: [
			'Act in Beautiful, Real Locations',
			'Create Short Films & Showreels',
			'Build Your On-Camera Presence',
			'Collaborate Like a Creative Family',
			'Take Home a Professional Body of Work',
		],
		image: '/images/others/create soulful art.jpg',
	},
]

export default function WellnessExperiences() {
	const [activeExperience, setActiveExperience] = useState('creative-awakening')

	const getCurrentExperience = () => {
		return experiences.find((exp) => exp.id === activeExperience)
	}

	return (
		<section className="py-20 bg-[var(--primary-extraLight)] relative overflow-hidden">
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage:
						'url("/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="text-center mb-12">
					<h2 className="font-extrabold text-[var(--primary)] text-3xl md:text-4xl font-serif text-dark mb-3">
						What Will You Experience
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-lg text-dark/80 max-w-3xl mx-auto">
						Well curated packages to help you discover and nurture your creative
						self
					</p>
				</div>

				{/* Experience Navigation - Updated to a horizontal scrollable container for mobile */}
				<div className="flex flex-nowrap overflow-x-auto md:flex-wrap justify-start md:justify-center gap-4 mb-12 pb-4 scrollbar-hide">
					{experiences.map((exp) => (
						<button
							key={exp.id}
							className={`px-6 py-3 font-extrabold whitespace-nowrap text-[var(--primary)] rounded-full text-sm transition-colors ${
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
						<h3 className="text-3xl font-serif text-dark font-extrabold text-[var(--primary)]">
							{getCurrentExperience()?.title}
						</h3>
						<div className="w-16 h-1 bg-primary"></div>

						{/* Replace paragraph with bullet points */}
						<ul className="space-y-3">
							{getCurrentExperience()?.points.map((point, index) => (
								<li
									key={index}
									className="flex items-start gap-3 text-dark/80"
								>
									<span className="text-[var(--secondary)] font-bold text-xl leading-tight">
										•
									</span>
									<span className="text-lg leading-relaxed">{point}</span>
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			</div>
		</section>
	)
}