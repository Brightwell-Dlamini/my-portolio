// Enhanced Skills.tsx with consistent color scheme
'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import {
  Code,
  Palette,
  Database,
  Zap,
  Cloud,
  Smartphone,
  Globe,
} from 'lucide-react';

export default function Skills() {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
      color: 'from-green-500 to-emerald-500',
      darkColor: 'from-green-400 to-emerald-400',
    },
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 97 },
        { name: 'Framer Motion', level: 75 },
      ],
      color: 'from-purple-500 to-cyan-500',
      darkColor: 'from-blue-400 to-cyan-400',
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 70 },
        { name: 'Adobe XD', level: 50 },
        { name: 'User Research', level: 70 },
        { name: 'Prototyping', level: 85 },
        { name: 'Design Systems', level: 75 },
      ],
      color: 'from-purple-500 to-pink-500',
      darkColor: 'from-purple-400 to-pink-400',
    },

    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 60 },
        { name: 'Vercel', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'CI/CD', level: 80 },
        { name: 'Git', level: 90 },
      ],
      color: 'from-orange-500 to-red-500',
      darkColor: 'from-orange-400 to-red-400',
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 65 },
        { name: 'iOS Development', level: 60 },
        { name: 'Android Development', level: 65 },
        { name: 'PWA', level: 80 },
      ],
      color: 'from-indigo-500 to-blue-500',
      darkColor: 'from-indigo-400 to-blue-400',
    },
    {
      title: 'Performance & Optimization',
      icon: Zap,
      skills: [
        { name: 'Web Vitals', level: 80 },
        { name: 'Lighthouse', level: 60 },
        { name: 'Bundle Optimization', level: 75 },
        { name: 'Caching Strategies', level: 70 },
        { name: 'CDN', level: 65 },
      ],
      color: 'from-yellow-500 to-amber-500',
      darkColor: 'from-yellow-400 to-amber-400',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Technical{' '}
            <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;ve cultivated a diverse skill set that allows me to tackle
            projects from concept to deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${
                      theme === 'light' ? category.color : category.darkColor
                    } mr-4`}
                  >
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${
                            theme === 'light'
                              ? category.color
                              : category.darkColor
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: '-100px' }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Ready to bring your ideas to life?
          </h3>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          >
            Start a Project
            <Globe size={20} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
