import * as React from 'react';
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-tuna-900/40 via-tuna-800/30 to-tuna-900/40"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-72 h-72 bg-tuna-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-tuna-500/8 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-tuna-50 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Built for brands that don't just want to look good —{" "}
            <span className="bg-gradient-to-r from-tuna-400 to-tuna-200 bg-clip-text text-transparent">
              but win.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-tuna-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Brand Identity & Web Design engineered for business outcomes, clarity, and the next generation of interfaces.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-tuna-600 to-tuna-700 rounded-full text-tuna-50 font-semibold text-base hover:from-tuna-500 hover:to-tuna-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start your build
            </motion.button>

            <motion.button
              className="px-6 py-3 glass rounded-full text-tuna-50 font-semibold text-base border border-tuna-600/30 hover:bg-tuna-600/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Process
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center items-center space-x-8 text-tuna-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-xl font-bold text-tuna-50">50+</div>
              <div className="text-xs">Projects Delivered</div>
            </div>
            <div className="w-px h-8 bg-tuna-600/30"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-tuna-50">25+</div>
              <div className="text-xs">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-tuna-600/30"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-tuna-50">5+</div>
              <div className="text-xs">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}