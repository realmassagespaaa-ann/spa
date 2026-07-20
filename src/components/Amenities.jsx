import { motion } from 'framer-motion'

const amenities = [
  {
    name: 'Relaxation Lounge',
    description: 'Low chairs, warm tea, nothing that dings or flashes.',
    image: 'https://images.unsplash.com/photo-1488312022048-c5a1ac5ff336?w=600&q=80',
  },
  {
    name: 'Steam Room',
    description: 'Shared steam with eucalyptus oil. Available before or after any treatment.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
  },
  {
    name: 'Retail Boutique',
    description: 'The oils, balms, and tools we actually use in sessions — nothing overpackaged.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80',
  },
  {
    name: 'Robe & Refreshment Service',
    description: 'Heated robe, cucumber water, and a quiet place to land before you head back out.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80',
  },
]

export default function Amenities() {
  return (
    <section className="bg-warmth/20 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-stone"
        >
          The space
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-stone/60 max-w-lg"
        >
          Things that make the difference between a quick appointment and an actual reset.
        </motion.p>
      </div>

      <div
        className="flex gap-5 overflow-x-auto px-5 scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {amenities.map((a) => (
          <div
            key={a.name}
            className="flex-shrink-0 w-[300px] md:w-[340px] group cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative h-[240px] overflow-hidden rounded-sm">
              <img
                src={a.image}
                alt={a.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-vapor">
                <h3 className="font-display text-lg">{a.name}</h3>
                <p className="text-sm text-vapor/70 mt-1">{a.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
