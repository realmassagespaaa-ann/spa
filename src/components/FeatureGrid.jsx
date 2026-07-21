import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'The Couples Suite',
    body: 'Side-by-side treatment tables in a private room with shared steam. Both partners get the same therapist quality — same pressure, same timing, same undivided attention. No second-class massage for the person on the left.',
    video: '/videos/couples-suite.mp4',
    alt: 'Couples massage suite with side-by-side treatment tables in a softly lit room',
    reversed: false,
  },
  {
    title: 'The Signature Ritual',
    body: 'A 90-minute sequence that moves from heated stone placement through a full-body massage to a scalp and shoulder finish. No decisions, no add-ons to weigh — just one arc designed to take you from tense to fully off the clock.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
    alt: 'Heated stones arranged on a draped massage table with candles',
    reversed: true,
  },
  {
    title: 'Membership That Makes Sense',
    body: 'One credit a month, rollover up to three, 15% off any additional sessions and all retail. No annual contract, no initiation fee, no "first month free then surprise you" pricing. Just a lower rate for people who come back.',
    video: '/videos/membership-that-makes-sense.mp4',
    alt: 'Membership That Makes Sense promotional video',
    reversed: false,
  },
]

function FeatureMedia({ f }) {
  const videoRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const handler = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (f.video) {
    const show = !reduceMotion && !videoFailed
    return (
      <>
        {show && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={f.video} type="video/mp4" />
          </video>
        )}
      </>
    )
  }

  return (
    <img
      src={f.image}
      alt={f.alt}
      width="800" height="533"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}

export default function FeatureGrid() {
  return (
    <section className="bg-vapor py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
          >
            <div className={`${f.reversed ? 'md:order-2' : ''}`}>
              <div className="relative h-[320px] md:h-[400px] overflow-hidden rounded-sm">
                <FeatureMedia f={f} />
                <div className="absolute inset-0 bg-stone/10" />
              </div>
            </div>

            <div className={`${f.reversed ? 'md:order-1' : ''}`}>
              <h3 className="font-display text-2xl md:text-3xl text-stone leading-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-stone/70 leading-relaxed">{f.body}</p>
              <a
                href="#"
                className="inline-block mt-5 text-sm font-medium text-ember hover:text-stone transition-colors focus-visible:outline-2 focus-visible:outline-ember"
              >
                Learn more &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
