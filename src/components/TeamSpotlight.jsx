import { motion } from 'framer-motion'

const therapists = [
  {
    name: 'Mara Reyes',
    specialty: 'Deep Tissue & Sports Recovery',
    bio: 'Twelve years of working with construction crews, distance runners, and anyone who spends their days hunched over a desk. Mara believes the best treatment plan is the one you actually stick with — so she meets you at your tolerance, not hers.',
    quote: '"I don\'t need to hurt you to help you. I need to listen to what your tissue is saying."',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  },
  {
    name: 'James Okonkwo',
    specialty: 'Swedish & Prenatal Massage',
    bio: 'Trained in both clinical massage and midwifery-adjacent bodywork. James brings a steady, unhurried presence to every session. His regulars say he has a gift for finding the exact pressure their body needs without being asked.',
    quote: '"A good massage changes how you sit in your body for the rest of the day. That\'s the goal."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Lena Park',
    specialty: 'Facials & Body Treatments',
    bio: 'Lena approaches skin and bodywork the same way: as a conversation, not a procedure. She spent five years at a destination spa before joining Real — and brought back a conviction that great treatments don\'t need a resort price tag.',
    quote: '"Your skin tells a story. I just help it read better."',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
  },
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
            The hands behind the work
          </h2>
          <p className="mt-2 text-stone/60 max-w-lg">
            Every therapist at Real Massage and Spa is a licensed practitioner who stays in the same studio — so they remember your last session, your preferences, and what changed since you came in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {therapists.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-[300px] overflow-hidden rounded-sm mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone/40 to-transparent" />
              </div>
              <h3 className="font-display text-xl text-stone">{t.name}</h3>
              <p className="text-xs font-mono text-sage uppercase tracking-wide mt-1">{t.specialty}</p>
              <p className="text-sm text-stone/70 mt-3 leading-relaxed">{t.bio}</p>
              <blockquote className="mt-4 text-sm italic text-stone/50 border-l-2 border-clay pl-3">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
