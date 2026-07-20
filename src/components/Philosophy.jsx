import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-vapor py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-stone leading-tight">
            Your body keeps score.
            <br />
            <span className="text-clay">We listen.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5 text-stone/80 leading-relaxed"
        >
          <p>
            Real Massage and Spa started with a simple observation: most massage studios treat every body like it has the same knots, the same stress, the same schedule. Ours doesn't.
          </p>
          <p>
            Every session begins with a conversation about how you actually feel today — not a script. Our therapists stay in the same room for the whole year, so they build a real picture of your body over time. The space itself is designed to shed the noise of the street the moment you walk in: dim lighting, warm wood, nothing beeping or buzzing.
          </p>
          <p>
            We charge what the work is worth, we show prices before you book, and we never rush the cooldown. You leave when your body says you're ready, not when the clock says you're done.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
