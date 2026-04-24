import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-6xl mx-auto">
      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-8"
      >
        Senior Product Manager · Cybersecurity
      </motion.p>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tighter text-black mb-8"
      >
        Murat
        <br />
        Arslan
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-xl text-base md:text-lg text-gray-500 leading-relaxed mb-12"
      >
        Results-driven Product Manager with 7+ years of experience leading
        cross-functional teams in B2B &amp; B2C cybersecurity. Passionate about
        building products that solve real customer problems.
      </motion.p>

      {/* CTA links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex flex-wrap gap-4 items-center"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors duration-200"
        >
          View Projects
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-gray-500 hover:text-black transition-colors duration-200"
        >
          Get in touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-6 md:left-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gray-300"
        />
      </motion.div>
    </section>
  );
}
