import { motion } from 'framer-motion'

const hours = [
  { day: 'Monday', time: '10am – 7pm' },
  { day: 'Tuesday', time: '10am – 7pm' },
  { day: 'Wednesday', time: '10am – 8pm' },
  { day: 'Thursday', time: '10am – 8pm' },
  { day: 'Friday', time: '10am – 6pm' },
  { day: 'Saturday', time: '9am – 5pm' },
  { day: 'Sunday', time: '10am – 4pm' },
]

const branches = [
  {
    name: 'Ugbolokposo Branch',
    address: 'King Jackson Hotel (opposite Bedouin Hotel), Ugbolokposo',
    phone: '+234 813 343 5521',
  },
  {
    name: 'Orerokpe Branch',
    address: 'Dorvile Hotel, Orerokpe',
    phone: '+234 813 343 5521',
  },
]

export default function HoursLocation() {
  return (
    <section id="hours" className="bg-vapor py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-stone text-center mb-14"
        >
          Hours &amp; Location
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {branches.map((branch, bIdx) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: bIdx * 0.1 }}
              className="border border-stone/10 rounded-sm p-6 md:p-8"
            >
              <h3 className="font-display text-xl md:text-2xl text-stone">{branch.name}</h3>
              <p className="text-sm text-stone/70 mt-2 leading-relaxed">{branch.address}</p>
              <p className="text-sm font-mono text-stone/50 mt-1">{branch.phone}</p>

              <div className="mt-6 space-y-1.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-1.5 border-b border-stone/10">
                    <span className="text-sm text-stone/80">{h.day}</span>
                    <span className="text-sm font-mono text-stone/60">{h.time}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-stone/40 mt-4">Walk-ins welcome, but sessions are guaranteed with a booking.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
