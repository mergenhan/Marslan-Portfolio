import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

const skills = [
  'Product Strategy',
  'Go-to-Market',
  'Agile / Scrum',
  'OKRs & KPIs',
  'Cybersecurity',
  'SaaS',
  'B2B & B2C',
  'User Research',
  'Roadmapping',
  'Cross-functional Leadership',
  'Revenue Growth',
  'Stakeholder Management',
];

export default function About() {
  const { photo } = siteConfig.about;

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left: bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">About</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black mb-8">
            Who I Am
          </h2>

          {/* Optional about photo */}
          {photo && (
            <motion.img
              src={photo}
              alt="Murat Arslan"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-[4/3] object-cover mb-8 grayscale"
            />
          )}
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Results-driven Product Manager with 7+ years of experience leading
              cross-functional teams to deliver successful B2B and B2C
              cybersecurity products.
            </p>
            <p>
              Proven ability to drive product strategy, execute go-to-market plans,
              and exceed revenue targets. My expertise spans cybersecurity, SaaS
              platforms, and Agile methodologies.
            </p>
            <p>
              Passionate about building products that solve real customer problems
              and deliver exceptional user experiences.
            </p>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/pm-muratarslan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors duration-200"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/mergenhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-gray-300 px-5 py-2.5 text-gray-600 hover:border-black hover:text-black transition-colors duration-200"
            >
              GitHub →
            </a>
          </div>
        </motion.div>

        {/* Right: skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="text-sm border border-gray-200 px-3 py-1.5 text-gray-600 hover:border-black hover:text-black transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
