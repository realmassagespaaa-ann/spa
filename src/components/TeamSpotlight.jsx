import { motion } from 'framer-motion'
import ceoImg from '../assets/images/team-ikayi-annah-ediri.webp'
import mirabelImg from '../assets/images/team-mirabel.webp'
import dorcasImg from '../assets/images/team-dorcas.webp'
import blessingImg from '../assets/images/team-blessing.webp'
import meritImg from '../assets/images/team-merit.webp'
import gloryImg from '../assets/images/team-glory.webp'
import giftImg from '../assets/images/team-gift.webp'

const ceo = {
  name: 'Ikayi Annah Ediri',
  role: 'CEO',
  image: ceoImg,
}

const therapists = [
  { name: 'Mirabel', role: 'Spa/Massage Therapist', image: mirabelImg },
  { name: 'Dorcas', role: 'Spa/Massage Therapist', image: dorcasImg },
  { name: 'Blessing', role: 'Spa/Massage Therapist', image: blessingImg },
  { name: 'Merit', role: 'Spa/Massage Therapist', image: meritImg },
  { name: 'Glory', role: 'Spa/Massage Therapist', image: gloryImg },
  { name: 'Gift', role: 'Spa/Massage Therapist', image: giftImg },
  { name: 'Miracle', role: 'Personal Assistant', image: null },
]

export default function TeamSpotlight() {
  return (
    <section id="team" className="bg-warmth/30 py-24 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl text-stone">
            Meet the Therapists
          </h2>
          <p className="mt-2 text-stone/60 max-w-lg">
            Our team of skilled professionals is here to help you look, feel, and live better.
          </p>
        </motion.div>

        {/* CEO card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-12 group"
        >
          <div className="relative aspect-[16/9] md:aspect-[4/1] overflow-hidden rounded-sm mb-4 bg-stone/20 flex items-center justify-center">
            {ceo.image ? (
              <img
                src={ceo.image}
                alt={ceo.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex flex-col items-center text-stone/30">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.4"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <span className="text-xs font-mono mt-1">{ceo.name}</span>
              </div>
            )}
          </div>
          <h3 className="font-display text-xl text-stone">{ceo.name}</h3>
          <p className="text-xs font-mono text-sage uppercase tracking-wide mt-1">{ceo.role}</p>
        </motion.div>

        {/* Therapists grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6">
          {therapists.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm mb-3 bg-stone/20 flex items-center justify-center">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-stone/30" opacity="0.4"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                )}
              </div>
              <h3 className="font-display text-base md:text-lg text-stone text-center">{t.name}</h3>
              <p className="text-xs font-mono text-sage text-center mt-0.5">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
