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
            href="https://wa.me/+2348133435521"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-vapor/40 text-vapor text-sm font-medium px-6 py-3 rounded-sm hover:bg-vapor/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.077 4.928A9.953 9.953 0 0012.003 2C6.485 2 2.006 6.479 2.006 11.997c0 2.099.547 4.159 1.588 5.965L2.017 22l4.165-1.533a9.962 9.962 0 005.821 1.865c5.518 0 10.003-4.479 10.003-9.997 0-2.669-1.043-5.179-2.929-7.072zm-7.074 15.394c-1.768 0-3.504-.473-5.019-1.367l-.36-.214-2.472.911.916-2.412-.234-.373a8.281 8.281 0 01-1.273-4.47c0-4.575 3.722-8.297 8.297-8.297 2.214 0 4.297.864 5.862 2.434a8.247 8.247 0 012.43 5.859c0 4.574-3.726 8.296-8.298 8.296zm4.551-6.21c-.249-.125-1.473-.727-1.701-.81-.229-.083-.395-.125-.561.125-.166.249-.644.81-.79.977-.146.166-.291.187-.54.062-.249-.125-1.052-.388-2.004-1.237-.74-.66-1.24-1.476-1.385-1.726-.146-.249-.015-.384.11-.506.117-.117.25-.292.376-.438.125-.146.167-.249.25-.415.084-.166.042-.312-.021-.437-.062-.125-.56-1.352-.77-1.852-.202-.48-.406-.416-.561-.416-.146 0-.312-.021-.479-.021-.166 0-.437.062-.666.312-.229.25-.875.855-.875 2.085 0 1.23.896 2.421 1.021 2.586.125.166 1.763 2.689 4.27 3.77 2.508 1.082 2.508.722 2.96.676.437-.046 1.407-.575 1.606-1.13.199-.556.199-1.033.146-1.132-.052-.1-.205-.166-.455-.292z"/></svg>
            WhatsApp
          </a>
          <a
            href="#book"
            className="bg-ember text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-ember/90 transition-colors focus-visible:outline-2 focus-visible:outline-white"
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
