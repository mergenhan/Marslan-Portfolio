import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-400 mb-4">Project not found.</p>
        <Link to="/" className="text-sm underline hover:text-black transition-colors">
          ← Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-28 pb-24 px-6 md:px-10 max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors mb-12"
          >
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
            {project.subtitle}
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-none mb-6">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-gray-200 px-3 py-1 text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full aspect-video mb-14 overflow-hidden"
          style={{ backgroundColor: project.color || '#e8e8e8' }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          )}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-8xl font-black text-gray-300 select-none">
              {String(projects.indexOf(project) + 1).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl"
        >
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {project.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* Divider + nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-gray-200 flex items-center justify-between"
        >
          <Link
            to="/#projects"
            className="text-sm font-semibold hover:text-gray-400 transition-colors"
          >
            ← All Projects
          </Link>
          {/* Next project */}
          {(() => {
            const idx = projects.indexOf(project);
            const next = projects[(idx + 1) % projects.length];
            return (
              <Link
                to={`/projects/${next.slug}`}
                className="text-sm font-semibold hover:text-gray-400 transition-colors"
              >
                Next: {next.title} →
              </Link>
            );
          })()}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
