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
            About Real Massage Embassy &amp; Spa
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
            At Real Massage Embassy &amp; Spa, we specialize in premium massage therapies and wellness treatments designed to restore balance, relieve tension, and enhance your overall well-being. From therapeutic body massages that ease stress and muscle tension to teeth whitening, rejuvenating facials, body exfoliation, pedicure, and manicure, every service is thoughtfully delivered with care, professionalism, and attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
