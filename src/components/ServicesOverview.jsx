import { motion } from 'framer-motion'

import pedicureBasic from '../assets/images/services-pedicure-basic.webp'
import pedicureJelly from '../assets/images/services-pedicure-jelly.webp'
import teethWhitening from '../assets/images/services-teeth-whitening.webp'
import facialBasic from '../assets/images/services-facial-basic.webp'
import facialDermaplaning from '../assets/images/services-facial-dermaplaning.webp'
import facialGold from '../assets/images/services-facial-gold.webp'
import waxingChin from '../assets/images/services-waxing-chin.webp'
import waxingBikini from '../assets/images/services-waxing-bikini.webp'
import waxingUnderarm from '../assets/images/services-waxing-underarm.webp'
import waxingFullbody from '../assets/images/services-waxing-fullbody.webp'
import massageSwedish from '../assets/images/services-massage-swedish.webp'
import massageDeepTissue from '../assets/images/services-massage-deep-tissue.webp'
import massageCouple from '../assets/images/services-massage-couple.webp'
import massageLignamStone from '../assets/images/services-massage-lignam-stone.webp'
import massageDoubleHand from '../assets/images/services-massage-double-hand.webp'
import massageFourHandRelaxation from '../assets/images/services-massage-four-hand-relaxation.webp'
import massageFourHandPremium from '../assets/images/services-massage-four-hand-premium.webp'

const categories = [
  {
    name: 'Pedicure & Manicure',
    tagline: 'Polish, pamper, perfected',
    services: [
      { name: 'Basic Pedicure', slug: 'basic-pedicure', image: pedicureBasic },
      { name: 'Jelly Pedicure', slug: 'jelly-pedicure', image: pedicureJelly },
      { name: 'Teeth Whitening & Scaling', slug: 'teeth-whitening', image: teethWhitening },
    ],
  },
  {
    name: 'Facials',
    tagline: 'Skin deep, naturally',
    services: [
      { name: 'Basic Facials', slug: 'basic-facial', image: facialBasic },
      { name: 'Dermaplaning Facials', slug: 'dermaplaning-facial', image: facialDermaplaning },
      { name: 'Gold Facials', slug: 'gold-facial', image: facialGold },
    ],
  },
  {
    name: 'Waxing',
    tagline: 'Smooth, precise, quick',
    services: [
      { name: 'Chin Waxing', slug: 'waxing-chin', image: waxingChin },
      { name: 'Bikini Waxing', slug: 'waxing-bikini', image: waxingBikini },
      { name: 'Underarm Waxing', slug: 'waxing-underarm', image: waxingUnderarm },
      { name: 'Full Body Waxing', slug: 'waxing-fullbody', image: waxingFullbody },
    ],
  },
  {
    name: 'Body Massage',
    tagline: 'Deep work, warm hands, real relief',
    services: [
      { name: 'Swedish / Relaxation Massage', slug: 'swedish-relaxation-massage', image: massageSwedish },
      { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage', image: massageDeepTissue },
      { name: 'Couple Massage', slug: 'couple-massage', image: massageCouple },
      { name: 'Lignam Stone Massage', slug: 'lignam-stone-massage', image: massageLignamStone },
      { name: 'Double Hand Massage', slug: 'double-hand-massage', image: massageDoubleHand },
      { name: 'Deep Relaxation Four-Hand Massage', slug: 'four-hand-relaxation-massage', image: massageFourHandRelaxation },
      { name: 'Premium Four-Hand Massage', slug: 'four-hand-premium-massage', image: massageFourHandPremium },
    ],
  },
]

function ServiceCard({ s, categoryLabel }) {
  return (
    <a
      href={'/services/' + s.slug}
      onClick={(e) => e.preventDefault()}
      className="group relative block rounded-sm overflow-hidden shadow-[0_4px_20px_rgba(61,50,43,0.15)] focus-visible:outline-2 focus-visible:outline-stone"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={s.image}
          alt={s.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone/80 via-stone/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-vapor">
          <span className="text-xs uppercase tracking-wider opacity-60">{categoryLabel}</span>
          <h3 className="font-display text-lg leading-tight mt-0.5">{s.name}</h3>
        </div>
      </div>
    </a>
  )
}

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-vapor pb-20">
      <div className="max-w-7xl mx-auto px-5 pt-20 pb-2">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-stone"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-stone/60 max-w-lg"
        >
          Every treatment delivered with care, professionalism, and attention to detail.
        </motion.p>
      </div>

      {categories.map((cat) => (
        <section key={cat.name} className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-stone">{cat.name}</h3>
            <p className="text-sm text-stone/60 mt-1">{cat.tagline}</p>
          </div>

          <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {cat.services.map((s) => (
              <ServiceCard key={s.slug} s={s} categoryLabel={cat.name} />
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}
