import { motion } from 'framer-motion'

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

const kenBurnsVariants = [
  { target: { scale: 1.1, x: '-1.5%', y: '-1%' }, duration: 18 },
  { target: { scale: 1.1, x: '1.5%', y: '0.5%' }, duration: 20 },
  { target: { scale: 1.08, x: '-0.5%', y: '1.5%' }, duration: 22 },
  { target: { scale: 1.1, x: '1.5%', y: '0.5%' }, duration: 19 },
  { target: { scale: 1.1, x: '-1.5%', y: '-1%' }, duration: 21 },
]

function Card({ t, index }) {
  const v = kenBurnsVariants[index % kenBurnsVariants.length]
  return (
    <div className="relative group">
      <div className="relative h-[340px] rounded-sm overflow-hidden shadow-[0_2px_8px_rgba(61,50,43,0.08)] transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_24px_rgba(61,50,43,0.15)]">
        <motion.img
          src={t.image}
          alt={t.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ border: '6px solid red' }}
          initial={{ scale: 1, x: '0%', y: '0%' }}
          animate={v.target}
          transition={{ duration: v.duration, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone/80 via-stone/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-vapor">
          <p style={{ color: 'red', fontWeight: 'bold' }}>DEBUG-CARD-V2</p>
          <h3 className="font-display text-lg leading-tight">{t.name}</h3>
        </div>
      </div>
    </div>
  )
}

function CategorySection({ cat, index }) {
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
              <Card t={t} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TreatmentCarousel() {
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

      {categories.map((cat, i) => (
        <CategorySection key={cat.name} cat={cat} index={i} />
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
