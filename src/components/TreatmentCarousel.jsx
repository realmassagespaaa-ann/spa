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
const CYCLE_MS = 2800

const BG_SLOTS_DESKTOP = [
  { x: '-70%', y: '-28%', scale: 0.44, opacity: 0.4, blur: 2, zIndex: 5 },
  { x: '70%', y: '-28%', scale: 0.44, opacity: 0.4, blur: 2, zIndex: 5 },
  { x: '-55%', y: '32%', scale: 0.38, opacity: 0.35, blur: 3, zIndex: 4 },
  { x: '55%', y: '32%', scale: 0.38, opacity: 0.35, blur: 3, zIndex: 4 },
]

const BG_SLOTS_MOBILE = [
  { x: '-45%', y: '-22%', scale: 0.32, opacity: 0.35, blur: 2, zIndex: 5 },
  { x: '45%', y: '-22%', scale: 0.32, opacity: 0.35, blur: 2, zIndex: 5 },
  { x: '-35%', y: '28%', scale: 0.26, opacity: 0.3, blur: 3, zIndex: 4 },
  { x: '35%', y: '28%', scale: 0.26, opacity: 0.3, blur: 3, zIndex: 4 },
]

function getBgSlot(cardIndex, activeIndex, isMobile) {
  const offset = (cardIndex - activeIndex + TOTAL_CARDS) % TOTAL_CARDS
  if (offset === 0) return null
  const slots = isMobile ? BG_SLOTS_MOBILE : BG_SLOTS_DESKTOP
  return slots[offset - 1]
}

function Card({ t, isFeatured, bgSlot, isMobile }) {
  const w = isMobile ? '55vw' : '280px'
  const h = isMobile ? '66vw' : '340px'

  return (
    <motion.div
      className="absolute inset-0 m-auto rounded-sm overflow-hidden"
      style={{ width: w, height: h }}
      animate={{
        scale: isFeatured ? 1 : bgSlot.scale,
        x: isFeatured ? 0 : bgSlot.x,
        y: isFeatured ? 0 : bgSlot.y,
        opacity: isFeatured ? 1 : bgSlot.opacity,
        zIndex: isFeatured ? 10 : bgSlot.zIndex,
        filter: isFeatured ? 'blur(0px)' : `blur(${bgSlot.blur}px)`,
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="relative w-full h-full rounded-sm overflow-hidden shadow-[0_4px_20px_rgba(61,50,43,0.15)]">
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

export default function TreatmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_CARDS)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [reducedMotion])

  const showTreatmentsHeader = false
  const effectiveIndex = reducedMotion ? 0 : activeIndex

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
        <section key={cat.name} className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-5 mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-stone">{cat.name}</h2>
            <p className="text-sm text-stone/60 mt-1">{cat.tagline}</p>
          </div>

          <div className="relative max-w-4xl mx-auto h-[380px] md:h-[480px]">
            {cat.treatments.map((t, i) => {
              const isFeatured = i === effectiveIndex
              const bgSlot = isFeatured ? null : getBgSlot(i, effectiveIndex, isMobile)
              return (
                <Card key={t.name} t={t} isFeatured={isFeatured} bgSlot={bgSlot} isMobile={isMobile} />
              )
            })}
          </div>
        </section>
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
