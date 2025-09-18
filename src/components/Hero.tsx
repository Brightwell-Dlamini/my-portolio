// Enhanced Hero.tsx with premium design
'use client';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  Code,
  Palette,
  Cpu,
  Sparkles,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Premium background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-28 -left-28 w-[32rem] h-[32rem] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-700/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwSDB2NjBtNjAtNjB2NjBtLTYwLTIwdjYwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 border border-blue-200/50 dark:border-blue-800/30 shadow-sm">
            <Code size={14} className="mr-2" />
            <span>Full-Stack Developer</span>
            <motion.div
              className="ml-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            >
              <Sparkles
                size={14}
                className="text-yellow-500"
                fill="currentColor"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Bridging
          </span>
          <motion.span
            className="block mt-2 bg-gradient-to-r from-purple-700 via-blue-700 to-gray-900 dark:from-purple-400 dark:via-blue-400 dark:to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The Gap
          </motion.span>
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/30"
            whileHover={{ y: -2, scale: 1.02 }}
          >
            <Palette className="text-blue-600 dark:text-blue-400" />
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Design
            </span>
          </motion.div>

          <span className="font-semibold text-gray-500 dark:text-gray-400">
            &
          </span>

          <motion.div
            className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/30"
            whileHover={{ y: -2, scale: 1.02 }}
          >
            <Cpu className="text-purple-600 dark:text-purple-400" />
            <span className="font-medium text-purple-600 dark:text-purple-400">
              Code
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          I&apos;m{' '}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-semibold">
            Brightwell Dlamini
          </strong>
          , a passionate software developer crafting exceptional digital
          experiences that users{' '}
          <span className="text-blue-600 dark:text-blue-400">love</span> and
          developers{' '}
          <span className="text-purple-600 dark:text-purple-400">admire</span>.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <motion.button
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => scrollToSection('projects')}
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden flex items-center"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <ArrowRight size={18} className="ml-2" />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
              animate={{ x: isHovered ? 0 : -100 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
              initial={false}
              animate={{ x: isHovered ? 100 : 0 }}
            />
          </motion.button>

          <motion.button
            onHoverStart={() => setIsContactHovered(true)}
            onHoverEnd={() => setIsContactHovered(false)}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600/5 dark:hover:bg-blue-400/5 transition-all duration-300 flex items-center group relative overflow-hidden"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center">
              Contact Me
              <motion.div
                animate={{ x: isContactHovered ? 5 : 0 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <Mail size={18} className="ml-2" />
              </motion.div>
            </span>
            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          aria-label="Scroll to about section"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-sm mb-2 font-medium group-hover:scale-105 transition-transform">
            Discover More
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown
              size={24}
              className="group-hover:text-blue-600 dark:group-hover:text-blue-400"
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
