'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
	{
		id: 1,
		title: 'Sign Up Flow',
		category: 'Interface Design',
		description:
			'Liquid interface with micro-interactions and seamless user experience.',
		image: '/designs/signup 1.jpg',
		tags: ['UI/UX', 'Motion', 'Conversion'],
	},
	{
		id: 2,
		title: 'Glass Footer',
		category: 'Component Design',
		description:
			'Modern glassmorphism footer with dynamic content sections.',
		image: '/designs/footer 2.jpg',
		tags: ['Glassmorphism', 'Components', 'Modern'],
	},
	{
		id: 3,
		title: 'Glassmorphism Dashboard',
		category: 'Dashboard Interface',
		description:
			'Clean, modern dashboard with glassmorphism design principles.',
		image: '/designs/glassmorphism 3.jpg',
		tags: ['Dashboard', 'Glass', 'Analytics'],
	},
	{
		id: 4,
		title: 'Analytics Dashboard',
		category: 'Data Visualization',
		description:
			'Comprehensive dashboard with advanced analytics and reporting features.',
		image: '/designs/dashboard.jpg',
		tags: ['Analytics', 'Dashboard', 'Data'],
	},
	{
		id: 5,
		title: 'Momentum Calendar',
		category: 'Productivity App',
		description:
			'Minimalist calendar interface focused on productivity and time management.',
		image: '/designs/momentum-calendar.jpg',
		tags: ['Calendar', 'Productivity', 'UI'],
	},
	{
		id: 6,
		title: 'Momentum Logo',
		category: 'Brand Identity',
		description:
			'Clean and modern logo design for productivity platform.',
		image: '/designs/momentum-logo.jpg',
		tags: ['Logo', 'Branding', 'Identity'],
	},
	{
		id: 7,
		title: 'Pricing Strategy',
		category: 'Landing Page',
		description:
			'Conversion-optimized pricing section with clear value propositions.',
		image: '/designs/pricing-plan.jpg',
		tags: ['Pricing', 'Conversion', 'Landing'],
	},
	{
		id: 8,
		title: 'Quoinin Wordmark',
		category: 'Brand Identity',
		description:
			'Sophisticated wordmark design for fintech startup.',
		image: '/designs/quoinin-wordmark.jpg',
		tags: ['Wordmark', 'Fintech', 'Branding'],
	},
	{
		id: 9,
		title: 'Confirmation',
		category: 'UI Feedback',
		description:
			'Confirmation screen for successful user actions.',
		image: '/designs/confirmation.jpg',
		tags: ['UI', 'Feedback', 'Success'],
	},
	{
		id: 10,
		title: 'ITK',
		category: 'Brand/Logo',
		description:
			'Logo or branding for ITK project.',
		image: '/designs/itk.jpg',
		tags: ['Logo', 'Branding', 'ITK'],
	},
]

export default function Work() {
	const scrollRef = useRef(null)

	return (
		<section
			id="work"
			className="relative py-24 overflow-hidden"
			style={{ overflowY: 'hidden', height: 'auto' }}
		>
			{/* Background Elements */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-bl from-tuna-900/30 via-tuna-800/20 to-tuna-900/30"
				animate={{
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			{/* Floating Elements */}
			<motion.div
				className="absolute top-1/2 right-1/4 w-80 h-80 bg-tuna-500/5 rounded-full blur-3xl"
				animate={{
					x: [0, -60, 0],
					y: [0, 80, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 22,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className="relative w-full overflow-y-hidden">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16 max-w-7xl mx-auto px-6 lg:px-8"
				>
					<motion.h2
						className="text-3xl md:text-4xl lg:text-5xl font-bold text-tuna-50 mb-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Recent Snippets
					</motion.h2>
					<motion.p
						className="text-lg text-tuna-300 max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						Selected Visuals from Ongoing Builds
					</motion.p>
				</motion.div>

				<div
					ref={scrollRef}
					className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 hide-scrollbar"
					style={{
						clipPath: 'none',
						overflowY: 'hidden',
						overscrollBehaviorY: 'none',
						touchAction: 'pan-x',
					}}
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className={`snap-start shrink-0 group cursor-pointer ${
								index === 0 ? 'ml-24' : ''
							}`}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							{/* Project Image - Fixed height, dynamic width, more rounded */}
							<div className="relative h-[400px] rounded-3xl overflow-hidden mb-4">
								<motion.img
									src={project.image}
									alt={project.title}
									className="h-full w-auto object-cover"
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.4 }}
								/>
							</div>

							{/* Caption - Always visible */}
							<div className="text-center">
								<h3 className="text-lg font-semibold text-tuna-50 mb-1">
									{project.title}
								</h3>
								<p className="text-tuna-400 text-sm">
									{project.category}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}