import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const HERO_POSTER_IMAGE = null // swap to "/images/hero-fallback.jpg" once available

export default function Hero() {
  const videoRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const handler = (e) => setReduceMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5
  }, [reduceMotion])

  return (
    <section className="relative h-dvh min-h-[560px] flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* hero-bg-02.mp4 available in /public/videos — reserved for A/B variant or alternate page */}
      {!reduceMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER_IMAGE || undefined}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg-01.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Trust signal */}
      <div className="absolute top-24 left-5 md:left-10 flex items-center gap-2 text-vapor/80 text-xs font-mono z-10">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage" />
        Rated 4.9 — 200+ reviews
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-vapor"
        >
          Massage that works
          <br />
          <span className="text-warmth">with how your body actually feels</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 text-base sm:text-lg text-vapor/80 max-w-xl mx-auto leading-relaxed"
        >
          A standalone massage studio built for people who need real relief, not platitudes. Same-room therapists, honest pricing, and a space that slows you down the second you walk in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#treatments"
            className="bg-ember text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-ember/90 transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            View Treatments
          </a>
          <a
            href="#book"
            className="border border-vapor/40 text-vapor text-sm font-medium px-6 py-3 rounded-sm hover:bg-vapor/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            Book Now
          </a>
          <a
            href="#hours"
            className="text-vapor/70 text-sm px-6 py-3 hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            Hours &amp; Location
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-vapor/50">
          <rect x="1.5" y="1.5" width="17" height="25" rx="8.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="9" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  )
}
