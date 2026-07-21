import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import deepTissueImg from '../assets/images/treatments-massage-deep-tissue.webp'
import swedishImg from '../assets/images/treatments-massage-swedish.webp'
import hotStoneImg from '../assets/images/treatments-massage-hot-stone.webp'
import prenatalImg from '../assets/images/treatments-massage-prenatal.webp'
import sportsRecoveryImg from '../assets/images/treatments-massage-sports-recovery.webp'

const categories = [
  {
    name: 'Massages',
    tagline: 'Deep work, warm hands, real relief',
    treatments: [
      { name: 'Deep Tissue', duration: '60 / 90 min', price: '$95 / $135', image: deepTissueImg },
      { name: 'Swedish', duration: '60 / 90 min', price: '$85 / $125', image: swedishImg },
      { name: 'Hot Stone', duration: '75 min', price: '$120', image: hotStoneImg },
      { name: 'Prenatal', duration: '60 min', price: '$95', image: prenatalImg },
      { name: 'Sports Recovery', duration: '60 / 90 min', price: '$105 / $145', image: sportsRecoveryImg },
    ],
  },
]

const TOTAL_CARDS = 5
const CYCLE_MS = 2500

function Card({ t, isActive }) {
  return (
    <motion.div
      className="relative group"
      animate={{
        scale: isActive ? 1.2 : 0.95,
        opacity: isActive ? 1 : 0.55,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="relative h-[340px] rounded-sm overflow-hidden shadow-[0_2px_8px_rgba(61,50,43,0.08)]">
        <img
          src={t.image}
          alt={t.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone/80 via-stone/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-vapor">
          <h3 className="font-display text-lg leading-tight">{t.name}</h3>
        </div>
      </div>
    </motion.div>
  )
}

function CategorySection({ cat, activeIndex }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 mb-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-stone">{cat.name}</h2>
          <p className="text-sm text-stone/60 mt-1">{cat.tagline}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
          {cat.treatments.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card t={t} isActive={i === activeIndex} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TreatmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_CARDS)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [reducedMotion])

  const showTreatmentsHeader = false

  return (
    <section id="treatments" className="bg-vapor pb-8">
      {showTreatmentsHeader && (
        <div className="max-w-7xl mx-auto px-5 pt-20 pb-2">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-stone"
          >
            Treatments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-stone/60 max-w-lg"
          >
            Every price is what you pay. No upsell, no surprise fees.
          </motion.p>
        </div>
      )}

      {categories.map((cat) => (
        <CategorySection key={cat.name} cat={cat} activeIndex={activeIndex} />
      ))}

      <div className="text-center py-12">
        <a
          href="#book"
          className="bg-ember text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-ember/90 transition-colors focus-visible:outline-2 focus-visible:outline-stone"
        >
          Book a Treatment
        </a>
      </div>
    </section>
  )
}
