'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
	{
		question: 'Is Studio a full agency or just one person?',
		answer:
			'This is a boutique design studio focused on delivering high-quality brand identity and web design. I work with a select network of specialists when projects require additional expertise, ensuring you get the right talent for your specific needs while maintaining the personal touch and direct communication.',
	},
	{
		question: 'How long does a project take?',
		answer:
			'Project timelines vary based on scope and complexity. Brand identity projects typically take 2-4 weeks, web design and development projects range from 4-8 weeks, and comprehensive brand + web builds can take 6-12 weeks. I\'ll provide a detailed timeline during our initial consultation.',
	},
	{
		question: 'What makes CLNGR Studio different from other agencies?',
		answer:
			'CLNGR Studio is built for outcomes, not just aesthetics. We focus on clarity, conversion, and future-proof design systems, not just pretty pixels.',
	},
]

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className="relative py-24 overflow-hidden">
			{/* Background Elements */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-tr from-tuna-900/20 via-tuna-800/10 to-tuna-900/20"
				animate={{
					opacity: [0.1, 0.3, 0.1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className="relative max-w-4xl mx-auto px-6 lg:px-8">
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
						Frequently Asked Questions
					</motion.h2>
					<motion.p
						className="text-lg text-tuna-300 max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						Strategic brand identities and future-proof web interfaces — built to
					 convert, scale, and stand out.
					</motion.p>
				</motion.div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="glass rounded-2xl border border-tuna-600/20 overflow-hidden"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<button
								className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-tuna-600/50 rounded-2xl"
								onClick={() => toggleFAQ(index)}
							>
								<div className="flex items-center justify-between">
									<h3 className="text-base font-semibold text-tuna-50 pr-4">
										{faq.question}
									</h3>
									<motion.div
										animate={{ rotate: openIndex === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className="flex-shrink-0"
									>
										<svg
											className="w-5 h-5 text-tuna-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</motion.div>
								</div>
							</button>

							<motion.div
								initial={false}
								animate={{
									height: openIndex === index ? 'auto' : 0,
									opacity: openIndex === index ? 1 : 0,
								}}
								transition={{ duration: 0.3 }}
								className="overflow-hidden"
							>
								<div className="px-6 pb-6">
									<p className="text-tuna-300 leading-relaxed text-sm">
										{faq.answer}
									</p>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Contact CTA */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<motion.p
						className="text-tuna-300 mb-6 text-base"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 1 }}
					>
						Ready to start your build? Let's discuss your project.
					</motion.p>

					<motion.button
						className="px-6 py-3 bg-gradient-to-r from-tuna-600 to-tuna-700 rounded-full text-tuna-50 font-semibold hover:from-tuna-500 hover:to-tuna-600 transition-all duration-300 text-sm"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 1.2 }}
					>
						Start your build
					</motion.button>
				</motion.div>
			</div>
		</section>
	)
}