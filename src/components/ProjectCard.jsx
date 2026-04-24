import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block relative overflow-hidden bg-gray-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`View ${project.title} project`}
      >
        {/* Image / placeholder */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full h-full"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : null}
            {/* Always visible placeholder background */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: project.color || '#e8e8e8' }}
            >
              <span className="text-5xl font-black text-gray-300 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center"
          >
            <span className="text-white text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              View Project <span>→</span>
            </span>
          </motion.div>
        </div>

        {/* Card content */}
        <div className="p-6">
          <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">
            {project.subtitle}
          </p>
          <h3 className="text-xl font-bold text-black mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs border border-gray-200 px-2 py-0.5 text-gray-400"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-gray-300 px-2 py-0.5">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
