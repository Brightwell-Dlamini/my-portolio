// Enhanced Projects.tsx with proper dark mode
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ExternalLink,
  Github,
  X,
  ArrowRight,
  Calendar,
  Code,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  completionDate: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'TradeZella Clone',
    description: 'Professional trading journal & analytics platform.',
    longDescription:
      'A full-stack application for traders to track, analyze, and backtest their trading performance. Features include advanced data visualization, trade importing from brokers, performance analytics, and advanced filtering capabilities. Built with a focus on responsive design and real-time data updates.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Chart.js',
      'WebSockets',
    ],
    image: '/api/placeholder/600/400',
    liveUrl: 'https://your-tradezella-clone.vercel.app',
    githubUrl: 'https://github.com/yourusername/tradezella-clone',
    category: 'Full Stack',
    completionDate: '2023-11-15',
  },
  {
    id: 2,
    title: 'Grocery Comparison App',
    description: 'Compare prices across stores for your shopping list.',
    longDescription:
      'An application that helps users save money by comparing grocery prices across different retailers. Features real-time price updates, shopping list creation and sharing, store locator integration, and personalized recommendations based on shopping habits. Includes a PWA for mobile shopping.',
    tech: [
      'React',
      'Firebase',
      'Google Maps API',
      'Material-UI',
      'Node.js',
      'PWA',
      'Jest',
    ],
    image: '/api/placeholder/600/400',
    liveUrl: 'https://your-grocery-app.vercel.app',
    githubUrl: 'https://github.com/yourusername/grocery-app',
    category: 'Frontend',
    completionDate: '2023-08-22',
  },
  {
    id: 3,
    title: 'Event Discovery Platform',
    description: 'All-in-one event management and ticketing solution.',
    longDescription:
      'A comprehensive platform for discovering, managing, and ticketing events. Includes features like QR code validation, secure payment processing, organizer dashboards with analytics, social sharing, and personalized event recommendations. Built with scalability in mind to handle large traffic spikes during popular event sales.',
    tech: [
      'Next.js',
      'Stripe',
      'MongoDB',
      'Auth0',
      'Framer Motion',
      'Redis',
      'Docker',
    ],
    image: '/api/placeholder/600/400',
    liveUrl: 'https://your-event-platform.vercel.app',
    githubUrl: 'https://github.com/yourusername/event-platform',
    category: 'Full Stack',
    completionDate: '2023-05-10',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    ...Array.from(new Set(projectsData.map((project) => project.category))),
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
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
            Featured{' '}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent creations that blend design with
            functionality and solve real-world problems.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image */}
                <div className="aspect-video w-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {selectedProject.title}
                  </span>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      About This Project
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Project Details
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar size={16} className="mr-2" />
                        Completed:{' '}
                        {new Date(
                          selectedProject.completionDate
                        ).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Code size={16} className="mr-2" />
                        {selectedProject.category} Project
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
