'use client'

import * as React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react'

const services = [
	{
		id: 1,
		icon: '🎨',
		name: 'Branding',
		description: 'From zero to branded in 4 weeks',
		priceLabel: 'FIXED PRICE',
		basePrice: 3999,
		price: '$3,999',
		fastDeliveryPrice: '$5,999',
		included: [
			'4-week brand sprint',
			'Project manager and brand designer',
			'Complete brand book (type, color, imagery)',
			'Primary logo + secondary + favicon design',
			'All logo assets in SVG, PNG formats',
			'Brand style guide',
			'2 rounds of refinements included',
		],
		steps: [
			{
				label: 'Brand Strategy',
				description: 'Logo, Typography, Colors',
				price: 999,
				options: ['Logo Design', 'Typography System', 'Color Palette'],
			},
			{
				label: 'Visual Identity',
				description: 'Brand Guidelines, Applications',
				price: 1500,
				options: ['Brand Guidelines', 'Logo Applications', 'Visual Style'],
			},
			{
				label: 'Brand Assets',
				description: 'Business Cards, Letterhead',
				price: 800,
				options: ['Business Cards', 'Letterhead', 'Email Signature'],
			},
			{
				label: 'Brand Extensions',
				description: 'Social Media, Packaging',
				price: 700,
				options: ['Social Media Kit', 'Packaging Design', 'Merchandise'],
			},
		],
		buttonText: 'Get started',
		accent: 'bg-tuna-600',
		borderColor: 'border-tuna-600/20',
		priceColor: 'text-tuna-300',
		hasStepper: true,
	},
	{
		id: 2,
		icon: '🚀',
		name: 'UI/UX Design',
		description: 'Ship faster with impactful UI/UX support',
		priceLabel: 'STARTING AT',
		basePrice: 4999,
		price: '$4,999',
		fastDeliveryPrice: '$7,499',
		included: [
			'Founder-led & dedicated designer',
			'Developer ready mockups & design system',
			'Daily collaboration',
			'Tailored UX strategy',
			'Communication via Slack',
			'Start with a paid trial, risk-free',
			'No contracts or commitments',
		],
		steps: [
			{
				label: 'Research',
				description: 'User Research, Wireframes',
				price: 1200,
				screens: 3,
				options: ['User Interviews', 'Wireframes', 'User Journey'],
			},
			{
				label: 'Design',
				description: 'UI Design, Prototyping',
				price: 2000,
				screens: 8,
				options: ['High-fidelity Designs', 'Interactive Prototype', 'Design System'],
			},
			{
				label: 'Testing',
				description: 'Usability Testing, Iterations',
				price: 900,
				screens: 5,
				options: ['Usability Testing', 'A/B Testing', 'User Feedback'],
			},
			{
				label: 'Handoff',
				description: 'Design System, Developer Assets',
				price: 899,
				screens: 2,
				options: ['Design System', 'Developer Handoff', 'Asset Export'],
			},
		],
		buttonText: 'Get started',
		accent: 'bg-tuna-600',
		borderColor: 'border-tuna-600/20',
		priceColor: 'text-tuna-300',
		hasStepper: true,
	},
	{
		id: 3,
		icon: '⚡',
		name: 'Design & Development',
		description: 'Design it, build it, launch it',
		priceLabel: 'STARTING AT',
		basePrice: 7999,
		price: '$7,999',
		fastDeliveryPrice: '$11,999',
		included: [
			'Founder-led & dedicated designer',
			'Clearly defined scope & SOW document',
			'Flexible payments: split or monthly',
			'Available as design-only or full build',
			'Workshop + strategy call',
			'Branding discount included',
			'Typical delivery 6-12 weeks',
		],
		buttonText: 'Get started',
		accent: 'bg-tuna-600',
		borderColor: 'border-tuna-600/20',
		priceColor: 'text-tuna-300',
		hasStepper: false,
	},
]

export default function Services() {
	const [serviceStates, setServiceStates] = useState<{ [key: number]: {
		fastDelivery: boolean;
		currentStep: number;
		selectedOptions: string[][];
	} }> (() => {
		const initialStates: {[key: number]: {
			fastDelivery: boolean;
			currentStep: number;
			selectedOptions: string[][];
		}} = {};
		services.forEach(service => {
			initialStates[service.id] = {
				fastDelivery: false,
				currentStep: service.hasStepper ? 0 : -1,
				selectedOptions: service.hasStepper && service.steps ? service.steps.map(() => []) : []
			};
		});
		return initialStates;
	});

	const updateServiceState = (serviceId: number, updates: Partial<{
		fastDelivery: boolean;
		currentStep: number;
		selectedOptions: string[][];
	}>) => {
		setServiceStates((prev: {[key: number]: {
			fastDelivery: boolean;
			currentStep: number;
			selectedOptions: string[][];
		}}) => ({
			...prev,
			[serviceId]: { ...prev[serviceId], ...updates }
		}));
	};

	const calculatePrice = (service: any, state: any) => {
		if (!state) return service.price

		let totalPrice = service.basePrice

		if (service.hasStepper && service.steps && state.currentStep >= 0) {
			// Berechne Preis basierend auf ausgewählten Steps
			totalPrice = service.steps
				.slice(0, state.currentStep + 1)
				.reduce((sum: number, step: any) => sum + step.price, 0)
		}

		if (state.fastDelivery) {
			totalPrice = Math.floor(totalPrice * 1.5) // 50% Aufschlag für Fast Delivery
		}

		return `$${totalPrice.toLocaleString()}`
	}

	const getTotalScreens = (service: any, state: any) => {
		if (!service.hasStepper || !service.steps || !state || state.currentStep < 0) return 0
		return service.steps
			.slice(0, state.currentStep + 1)
			.reduce((sum: number, step: any) => sum + (step.screens || 0), 0)
	}
	return (
		<section id="services" className="relative py-24 overflow-hidden">
			{/* Background Elements */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-tuna-900/30 via-tuna-800/20 to-tuna-900/30"
				animate={{
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 12,
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
						Services
					</motion.h2>
					<motion.p
						className="text-lg text-tuna-300 max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						Choose the perfect package to transform your brand and accelerate your growth.
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const state = serviceStates[service.id] || {
							fastDelivery: false,
							currentStep: service.hasStepper ? 0 : -1,
							selectedOptions: []
						}
						const currentPrice = calculatePrice(service, state)
						const totalScreens = getTotalScreens(service, state)

						return (
							<motion.div
								key={service.id}
								className="relative group"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
							>
								<div className={`bg-tuna-900/80 backdrop-blur-xl rounded-3xl p-6 ${service.borderColor} border-2 h-full flex flex-col relative overflow-hidden shadow-2xl`}>
									{/* Service Icon & Header */}
									<div className="flex items-center mb-4">
										<div className="text-2xl mr-3">{service.icon}</div>
										<div>
											<h3 className="text-lg font-bold text-tuna-50 mb-0.5">
												{service.hasStepper && service.steps && state.currentStep >= 0
													? `${service.name} - ${service.steps[state.currentStep].label}`
													: service.name
												}
											</h3>
										</div>
									</div>

									{/* Fast Delivery Toggle */}
									<div className="mb-4">
										<div className="flex items-center justify-between p-3 bg-tuna-800/50 backdrop-blur-sm rounded-xl border border-tuna-600/20">
											<div>
												<span className="text-tuna-200 font-medium text-xs">Fast Delivery</span>
												<p className="text-tuna-400 text-xs">Under 1 week (+50%)</p>
											</div>
											<button
												onClick={() => updateServiceState(service.id, { fastDelivery: !state.fastDelivery })}
												className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
													state.fastDelivery ? 'bg-tuna-500' : 'bg-tuna-600'
												}`}
											>
												<div
													className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
														state.fastDelivery ? 'translate-x-5' : 'translate-x-0.5'
													}`}
												/>
											</button>
										</div>
									</div>

									{/* Stepper für UX/UI Design und Branding */}
									{service.hasStepper && service.steps && (
										<div className="mb-4">
											{/* Simple Draggable Stepper */}
											<div className="relative">
												{/* Simple Slider */}
												<div
													className="relative h-5 cursor-pointer"
													onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
														const rect = e.currentTarget.getBoundingClientRect()
														const updateStep = (clientX: number) => {
															const x = clientX - rect.left
															const percentage = Math.max(0, Math.min(1, x / rect.width))
															const newStep = Math.round(percentage * (service.steps.length - 1))
															updateServiceState(service.id, { currentStep: newStep })
														}

														updateStep(e.clientX)

														const handleMouseMove = (e: MouseEvent) => updateStep(e.clientX)
														const handleMouseUp = () => {
															document.removeEventListener('mousemove', handleMouseMove)
															document.removeEventListener('mouseup', handleMouseUp)
														}

														document.addEventListener('mousemove', handleMouseMove)
														document.addEventListener('mouseup', handleMouseUp)
													}}
												>
													{/* Track */}
													<div className="absolute top-1/2 left-0 right-0 h-1 bg-tuna-700/50 rounded-full transform -translate-y-1/2" />

													{/* Progress */}
													<div
														className="absolute top-1/2 left-0 h-1 bg-tuna-400 rounded-full transform -translate-y-1/2 transition-all duration-200"
														style={{
															width: `${(state.currentStep / (service.steps.length - 1)) * 100}%`
														}}
													/>

													{/* Step Dots */}
													{service.steps.map((_, stepIndex) => (
														<div
															key={stepIndex}
															className={`absolute top-1/2 w-2 h-2 rounded-full transform -translate-y-1/2 -translate-x-1/2 transition-colors duration-200 ${
																state.currentStep >= stepIndex ? 'bg-tuna-300' : 'bg-tuna-600'
															}`}
															style={{
																left: `${(stepIndex / (service.steps.length - 1)) * 100}%`
															}}
														/>
													))}

													{/* Handle */}
													<div
														className="absolute top-1/2 w-3 h-3 bg-white rounded-full border border-tuna-400 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-200 hover:scale-110"
														style={{
															left: `${(state.currentStep / (service.steps.length - 1)) * 100}%`
														}}
													/>
												</div>

												{/* Step Info mit Total Screens */}
												<div className="flex justify-between items-center text-xs text-tuna-400 mt-1">
													<span>Basic</span>
													<div className="flex items-center space-x-2">
														{service.name === "UI/UX Design" && totalScreens > 0 && (
															<span className="text-tuna-200 font-bold">{totalScreens} Screens</span>
														)}
													</div>
													<span>Complete</span>
												</div>
											</div>
										</div>
									)}

									{/* Pricing */}
									<div className="mb-4">
										<div className="text-xs font-semibold text-tuna-400 tracking-wider mb-1">
											{service.priceLabel}
										</div>
										<div className={`text-2xl font-bold ${service.priceColor} mb-2 transition-all duration-300`}>
											{currentPrice}
										</div>
										{state.fastDelivery && (
											<div className="text-xs text-tuna-400">
												Original: {service.price} • Fast Delivery: +50%
											</div>
										)}
									</div>

									{/* Included Features */}
									<div className="flex-1 mb-4">
										<div className="grid grid-cols-2 gap-2">
											{service.hasStepper && service.steps && state.currentStep >= 0 ? (
												// Zeige aktuelle Step-Optionen als Häkchen-Liste in 2 Spalten
												service.steps
													.slice(0, state.currentStep + 1)
													.flatMap(step => step.options || [])
													.map((option, itemIndex) => (
														<motion.div
															key={`${state.currentStep}-${itemIndex}`}
															className="flex items-start text-tuna-300 text-xs leading-relaxed"
															initial={{ opacity: 0, x: -20 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
														>
															<svg
																className="w-3 h-3 text-tuna-400 mr-2 flex-shrink-0 mt-0.5"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M5 13l4 4L19 7"
																/>
															</svg>
															<span>{option}</span>
														</motion.div>
													))
											) : (
												// Fallback: Zeige normale included Features in 2 Spalten
												service.included.map((item, itemIndex) => (
													<motion.div
														key={itemIndex}
														className="flex items-start text-tuna-300 text-xs leading-relaxed"
														initial={{ opacity: 0, x: -20 }}
														whileInView={{ opacity: 1, x: 0 }}
														viewport={{ once: true }}
														transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
													>
														<svg
															className="w-3 h-3 text-tuna-400 mr-2 flex-shrink-0 mt-0.5"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
														<span>{item}</span>
													</motion.div>
												))
											)}
										</div>
									</div>

									{/* CTA Button */}
									<motion.button
										className={`w-full py-3 ${service.accent} rounded-xl text-tuna-50 font-semibold text-base hover:opacity-90 transition-all duration-300 shadow-lg`}
										whileTap={{ scale: 0.98 }}
									>
										{service.buttonText}
									</motion.button>

									{/* Ultra-modern gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl pointer-events-none" />

									{/* Subtle glow effect */}
									<div className={`absolute -inset-1 ${service.accent} opacity-10 rounded-3xl blur-lg -z-10`} />
								</div>
							</motion.div>
						)
					})}
				</div>

				{/* Bottom CTA */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<motion.p
						className="text-tuna-300 mb-8 text-base"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 1 }}
					>
						Need a custom solution? Let's discuss your unique requirements.
					</motion.p>

					<motion.button
						className="px-6 py-3 bg-tuna-800/50 backdrop-blur-sm rounded-xl text-tuna-50 font-semibold border border-tuna-600/30 hover:bg-tuna-700/50 transition-all duration-300"
						whileTap={{ scale: 0.98 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 1.2 }}
					>
						Schedule a Consultation
					</motion.button>
				</motion.div>
			</div>
		</section>
	)
}
