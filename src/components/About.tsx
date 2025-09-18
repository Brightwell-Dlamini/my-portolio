// Enhanced About.tsx with proper dark mode
'use client';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Coffee } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Code2 },
    { label: 'Years Coding', value: '3+', icon: Cpu },
    { label: 'Technologies Mastered', value: '20+', icon: Database },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            From a Challenge to an{' '}
            <span className="text-blue-600 dark:text-blue-400">Obsession</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey into the world of code began with curiosity and evolved
            into a passion for creating digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-2 h-12 w-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I first encountered computer science as the &apos;most
                difficult&apos; combination my university offered. Intrigued by
                the challenge, I dove in headfirst—having never even used a
                computer before.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-2 h-12 w-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                What started as a pursuit of grades quickly transformed into a
                passion for problem-solving. I realized the keyboard wasn&apos;t
                just a tool; it was a gateway to building solutions for
                real-world problems.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-2 h-12 w-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, I&apos;m obsessed with leveling up my skills to become a
                world-class developer. I thrive on building applications that
                are not only technically sound and scalable but also provide an
                intuitive and engaging experience for the user. I&apos;m not
                just writing code; I&apos;m building bridges.
              </p>
            </div>
          </motion.div>

          {/* Skills/Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-3 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <IconComponent
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-center">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          className="mt-20 text-center p-8 md:p-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Current Focus
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Leveling up my skills in system design, advanced React patterns, and
            building scalable full-stack applications with modern technologies
            like Next.js, TypeScript, and GraphQL.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
