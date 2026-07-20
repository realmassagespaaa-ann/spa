import { motion } from 'framer-motion'

const links = [
  {
    title: 'Gift Cards',
    body: 'A real massage gifted without the awkward "spa day" font. Delivered instantly by email.',
    href: '#',
  },
  {
    title: 'Membership',
    body: 'One credit a month, rollover up to three, 15% off everything. Cancel anytime, no fee.',
    href: '#',
  },
  {
    title: 'Wellness Journal',
    body: 'We write about recovery, tension patterns, and why your left shoulder is always sore.',
    href: '#',
  },
]

export default function CrossLinks() {
  return (
    <section className="bg-stone py-24 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-vapor"
        >
          You may also like
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {links.map((l, i) => (
            <motion.a
              key={l.title}
              href={l.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="block p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors group focus-visible:outline-2 focus-visible:outline-ember"
            >
              <h3 className="font-display text-xl text-vapor group-hover:text-warmth transition-colors">
                {l.title}
              </h3>
              <p className="mt-2 text-sm text-vapor/60 leading-relaxed">
                {l.body}
              </p>
              <span className="inline-block mt-4 text-xs font-mono text-sage group-hover:text-vapor transition-colors">
                Explore &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
