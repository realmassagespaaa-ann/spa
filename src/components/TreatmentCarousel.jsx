import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Massages',
    tagline: 'Deep work, warm hands, real relief',
    treatments: [
      { name: 'Deep Tissue', duration: '60 / 90 min', price: '$95 / $135', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
      { name: 'Swedish', duration: '60 / 90 min', price: '$85 / $125', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80' },
      { name: 'Hot Stone', duration: '75 min', price: '$120', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80' },
      { name: 'Prenatal', duration: '60 min', price: '$95', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' },
      { name: 'Sports Recovery', duration: '60 / 90 min', price: '$105 / $145', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
    ],
  },
  {
    name: 'Body Treatments',
    tagline: 'Scrub, wrap, reset',
    treatments: [
      { name: 'Salt & Oil Scrub', duration: '60 min', price: '$110', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80' },
      { name: 'Herbal Wrap', duration: '75 min', price: '$125', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80' },
      { name: 'Detox Mud Wrap', duration: '75 min', price: '$135', image: 'https://images.unsplash.com/photo-1488312022048-c5a1ac5ff336?w=600&q=80' },
    ],
  },
  {
    name: 'Facials',
    tagline: 'Skin that looks like you slept',
    treatments: [
      { name: 'Classic Facial', duration: '60 min', price: '$95', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
      { name: 'HydraGlow', duration: '75 min', price: '$130', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
      { name: 'Acne Rescue', duration: '60 min', price: '$105', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' },
    ],
  },
  {
    name: 'Add-On Rituals',
    tagline: 'Small upgrades, noticeable difference',
    treatments: [
      { name: 'Scalp Massage', duration: '15 min', price: '$25', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80' },
      { name: 'Cupping', duration: '20 min', price: '$40', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
      { name: 'Aromatherapy Boost', duration: '—', price: '$15', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80' },
      { name: 'Hot Towel Neck Wrap', duration: '10 min', price: '$18', image: 'https://images.unsplash.com/photo-1488312022048-c5a1ac5ff336?w=600&q=80' },
    ],
  },
]

function Card({ t, isCenter }) {
  return (
    <div
      className={`relative flex-shrink-0 w-[260px] sm:w-[280px] group cursor-pointer transition-all duration-500 ease-out ${
        isCenter ? 'scale-[1.02] z-10' : 'scale-100 z-0'
      }`}
    >
      <div
        className={`relative h-[340px] rounded-sm overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-1.5 ${
          isCenter
            ? 'shadow-[0_8px_30px_rgba(193,127,89,0.25)]'
            : 'shadow-[0_2px_8px_rgba(61,50,43,0.08)] group-hover:shadow-[0_8px_24px_rgba(61,50,43,0.15)]'
        }`}
      >
        <img
          src={t.image}
          alt={t.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone/80 via-stone/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-vapor">
          <h3 className="font-display text-lg leading-tight">{t.name}</h3>
          <div className="mt-1 flex items-center gap-3 text-xs font-mono text-vapor/70">
            <span>{t.duration}</span>
            <span className="text-ember font-medium">{t.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CategorySection({ cat, index }) {
  const scrollRef = useRef(null)
  const [centerIndex, setCenterIndex] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const containerRect = el.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2
      const cards = el.querySelectorAll('.card-wrapper')
      let closestIdx = 0
      let closestDist = Infinity

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const dist = Math.abs(cardCenter - containerCenter)
        if (dist < closestDist) {
          closestDist = dist
          closestIdx = i
        }
      })

      setCenterIndex(closestIdx)
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-16 md:py-20 first:pt-0">
      <div className="max-w-7xl mx-auto px-5 mb-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-stone">{cat.name}</h2>
            <p className="text-sm text-stone/60 mt-1">{cat.tagline}</p>
          </div>
          <button className="text-xs font-mono text-sage hover:text-stone transition-colors focus-visible:outline-2 focus-visible:outline-ember">
            View all &rarr;
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-5 overflow-x-auto px-5 scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cat.treatments.map((t, i) => (
          <div key={t.name} className="card-wrapper" style={{ scrollSnapAlign: 'center' }}>
            <Card t={t} isCenter={i === centerIndex} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default function TreatmentCarousel() {
  return (
    <section id="treatments" className="bg-vapor pb-8">
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

      {categories.map((cat, i) => (
        <CategorySection key={cat.name} cat={cat} index={i} />
      ))}

      {/* Booking CTA at end of treatments */}
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
