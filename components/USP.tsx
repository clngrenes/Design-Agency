'use client'

import { motion } from 'framer-motion'

const features = [
	{
		icon: '/images/market-reality.svg',
		title: 'Market Reality',
		description:
			'There are over 1000 design studios out there. Most offer the same thing: pretty interfaces, vague promises, and recycled visuals. But pretty isn\'t enough anymore.',
	},
	{
		icon: '/images/future-focus.svg',
		title: 'Future Focus',
		description:
			'CLNGR Studio was built around one truth: Liquid Interfaces are the future. Flat design? Done. What wins now are dynamic systems — interfaces that move, adapt, and build trust through motion, micro-interactions, and clarity.',
	},
	{
		icon: '/images/strategic-gain.svg',
		title: 'Your Strategic Gain',
		description:
			'I\'m not selling pixels. I\'m building brand and product systems designed to convert — with clear ROI, accessibility, and code built for scale. Think of this as your brand\'s first performance engine.',
	},
]

export default function USP() {
	return (
		<section id="about" className="relative py-24 overflow-hidden">
			{/* Background Elements */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-tuna-900/20 via-tuna-800/10 to-tuna-900/20"
				animate={{
					opacity: [0.1, 0.3, 0.1],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<motion.h2
						className="text-3xl md:text-4xl lg:text-5xl font-bold text-tuna-50 mb-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Not Your Usual Design Agency
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

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className="relative group"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<motion.div
								className="glass rounded-2xl p-8 border border-tuna-600/20 h-full relative overflow-hidden"
								whileHover={{ y: -5, scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								{/* Feature Image */}
								<div className="mb-6">
									<div className="w-full aspect-video bg-gradient-to-br from-tuna-500/20 to-tuna-600/20 rounded-xl border border-tuna-600/30 overflow-hidden">
										<div className="w-full h-full bg-tuna-400/10 flex items-center justify-center">
											<div className="text-tuna-300/60 text-sm font-medium">
												16:9 Image Placeholder
											</div>
										</div>
									</div>
								</div>

								{/* Feature Content */}
								<h3 className="text-lg font-bold text-tuna-50 mb-4 leading-tight">
									{feature.title}
								</h3>
								<p className="text-tuna-300 leading-relaxed text-sm">
									{feature.description}
								</p>

								{/* Hover Effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-tuna-600/5 to-tuna-700/5 opacity-0 rounded-2xl"
									whileHover={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								/>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Bottom Stats - entfernt da nicht in den neuen Wireframes */}
			</div>
		</section>
	)
}