'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CTA() {
  const [activeTab, setActiveTab] = useState('form')

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-tuna-900/40 via-tuna-800/30 to-tuna-900/40"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-64 h-64 bg-tuna-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-tuna-500/8 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-tuna-50 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start your build today.
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-tuna-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're launching your first product or evolving your brand — I help you clarify, design, and build what moves your business forward. Let's create a brand system and interface your customers actually trust.
          </motion.p>

          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass rounded-full p-1 border border-tuna-600/20">
              <button
                onClick={() => setActiveTab('form')}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'form'
                    ? 'bg-white/20 text-tuna-50 shadow-lg'
                    : 'text-tuna-300 hover:text-tuna-50'
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'booking'
                    ? 'bg-white/20 text-tuna-50 shadow-lg'
                    : 'text-tuna-300 hover:text-tuna-50'
                }`}
              >
                Book a Call
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            {activeTab === 'form' ? (
              // Contact Form
              <div className="glass rounded-2xl p-8 border border-tuna-600/20 text-left">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-left text-tuna-300 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-tuna-600/30 rounded-lg text-tuna-50 placeholder-tuna-400 focus:outline-none focus:border-tuna-500 transition-colors text-left"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-left text-tuna-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/5 border border-tuna-600/30 rounded-lg text-tuna-50 placeholder-tuna-400 focus:outline-none focus:border-tuna-500 transition-colors text-left"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-left text-tuna-300 text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-tuna-600/30 rounded-lg text-tuna-50 focus:outline-none focus:border-tuna-500 transition-colors appearance-none text-left">
                        <option value="" className="bg-tuna-900/95 text-tuna-50">Select project type</option>
                        <option value="branding" className="bg-tuna-900/95 text-tuna-50">Branding</option>
                        <option value="website" className="bg-tuna-900/95 text-tuna-50">Website Design</option>
                        <option value="development" className="bg-tuna-900/95 text-tuna-50">Development</option>
                        <option value="audit" className="bg-tuna-900/95 text-tuna-50">Design Audit</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-4 h-4 text-tuna-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-left text-tuna-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-tuna-600/30 rounded-lg text-tuna-50 placeholder-tuna-400 focus:outline-none focus:border-tuna-500 transition-colors resize-none text-left"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-tuna-600 to-tuna-700 rounded-lg text-tuna-50 font-semibold hover:from-tuna-500 hover:to-tuna-600 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            ) : (
              // Cal.com Booking
              <div className="glass rounded-2xl p-8 border border-tuna-600/20">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-tuna-50 mb-2">Book a 30-minute call</h3>
                  <p className="text-tuna-300 text-sm">
                    Let's discuss your project and explore how we can work together.
                  </p>
                </div>
                <iframe
                  src="https://cal.com/enesclngr/30min"
                  width="100%"
                  height="600"
                  className="rounded-lg"
                  frameBorder="0"
                />
              </div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="glass rounded-2xl p-6 border border-tuna-600/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-4">📧</div>
              <h3 className="text-base font-semibold text-tuna-50 mb-2">Email Us</h3>
              <p className="text-tuna-300 text-sm">hello@designagency.com</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 border border-tuna-600/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-4">💬</div>
              <h3 className="text-base font-semibold text-tuna-50 mb-2">Let's Chat</h3>
              <p className="text-tuna-300 text-sm">Book a free consultation</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 border border-tuna-600/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-base font-semibold text-tuna-50 mb-2">Quick Response</h3>
              <p className="text-tuna-300 text-sm">48-hour response time</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-24 pt-12 border-t border-tuna-600/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-tuna-500 to-tuna-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <span className="text-tuna-50 font-bold text-xl">Design Agency</span>
            </div>
            
            <div className="flex space-x-6 text-tuna-400">
              <a href="#" className="hover:text-tuna-50 transition-colors">Privacy</a>
              <a href="#" className="hover:text-tuna-50 transition-colors">Terms</a>
              <a href="#" className="hover:text-tuna-50 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-tuna-600/20 text-center text-tuna-400">
            <p>&copy; 2024 Design Agency. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}