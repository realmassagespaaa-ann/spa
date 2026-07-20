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

export default function HoursLocation() {
  return (
    <section id="hours" className="bg-vapor py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-stone">Hours</h2>
          <p className="text-sm text-stone/60 mt-2">Walk-ins welcome, but sessions are guaranteed with a booking.</p>

          <div className="mt-6 space-y-1.5">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-1.5 border-b border-stone/10">
                <span className="text-sm text-stone/80">{h.day}</span>
                <span className="text-sm font-mono text-stone/60">{h.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-stone">Location</h2>

          <div className="mt-6 space-y-2 text-stone/70 text-sm leading-relaxed">
            <p>342 Walnut Street, Suite 102</p>
            <p>Portland, OR 97204</p>
            <p className="font-mono text-xs mt-4">(503) 555–0142</p>
            <p>
              <a
                href="#"
                className="text-sage hover:text-stone transition-colors focus-visible:outline-2 focus-visible:outline-ember"
              >
                hello@realmassagespa.com
              </a>
            </p>
            <p className="mt-3 text-stone/50 max-w-sm">
              One block from the Morrison Bridge streetcar stop. Street parking free after 6pm. A bike rack is out front.
            </p>
          </div>

          {/* Map placeholder */}
          <div className="mt-6 h-[200px] bg-stone/5 rounded-sm flex items-center justify-center text-xs text-stone/30 font-mono border border-stone/10">
            Map — 342 Walnut St, Portland
          </div>
        </motion.div>
      </div>
    </section>
  )
}
