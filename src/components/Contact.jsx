import { useState } from 'react';
import { motion } from 'framer-motion';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formsubmit.co/ajax/YOUR_EMAIL_HERE';

const NAME_MAX = 100;
const EMAIL_MAX = 254;
const MESSAGE_MAX = 2000;

function sanitizeInput(value) {
  return value.trim().slice(0, MESSAGE_MAX);
}

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = sanitizeInput(form.name.value);
    const email = sanitizeInput(form.email.value);
    const message = sanitizeInput(form.message.value);

    if (!name || !email || !message) return;

    // Basic email format check beyond browser validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="border-t border-gray-200 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Contact</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Have a project in mind or just want to connect? Send me a message.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 text-center border border-gray-200"
            >
              <p className="text-lg font-semibold text-black mb-1">Message sent.</p>
              <p className="text-sm text-gray-400">Thanks for reaching out — I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs tracking-widest uppercase text-gray-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={NAME_MAX}
                    autoComplete="name"
                    className="border-b border-gray-300 pb-2 text-sm text-black bg-transparent outline-none focus:border-black transition-colors placeholder:text-gray-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs tracking-widest uppercase text-gray-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={EMAIL_MAX}
                    autoComplete="email"
                    className="border-b border-gray-300 pb-2 text-sm text-black bg-transparent outline-none focus:border-black transition-colors placeholder:text-gray-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs tracking-widest uppercase text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={MESSAGE_MAX}
                  autoComplete="off"
                  className="border-b border-gray-300 pb-2 text-sm text-black bg-transparent outline-none focus:border-black transition-colors placeholder:text-gray-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500" role="alert">
                  Something went wrong. Please check your input and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

