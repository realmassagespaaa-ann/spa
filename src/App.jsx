import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'

const TreatmentCarousel = lazy(() => import('./components/TreatmentCarousel'))
const TeamSpotlight = lazy(() => import('./components/TeamSpotlight'))
const FeatureGrid = lazy(() => import('./components/FeatureGrid'))
const Amenities = lazy(() => import('./components/Amenities'))
const HoursLocation = lazy(() => import('./components/HoursLocation'))
const CrossLinks = lazy(() => import('./components/CrossLinks'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Suspense fallback={null}>
          <TreatmentCarousel />
          <TeamSpotlight />
          <FeatureGrid />
          <Amenities />
          <HoursLocation />
          <CrossLinks />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/+2348133435521"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus-visible:outline-2 focus-visible:outline-white"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M19.077 4.928A9.953 9.953 0 0012.003 2C6.485 2 2.006 6.479 2.006 11.997c0 2.099.547 4.159 1.588 5.965L2.017 22l4.165-1.533a9.962 9.962 0 005.821 1.865c5.518 0 10.003-4.479 10.003-9.997 0-2.669-1.043-5.179-2.929-7.072zm-7.074 15.394c-1.768 0-3.504-.473-5.019-1.367l-.36-.214-2.472.911.916-2.412-.234-.373a8.281 8.281 0 01-1.273-4.47c0-4.575 3.722-8.297 8.297-8.297 2.214 0 4.297.864 5.862 2.434a8.247 8.247 0 012.43 5.859c0 4.574-3.726 8.296-8.298 8.296zm4.551-6.21c-.249-.125-1.473-.727-1.701-.81-.229-.083-.395-.125-.561.125-.166.249-.644.81-.79.977-.146.166-.291.187-.54.062-.249-.125-1.052-.388-2.004-1.237-.74-.66-1.24-1.476-1.385-1.726-.146-.249-.015-.384.11-.506.117-.117.25-.292.376-.438.125-.146.167-.249.25-.415.084-.166.042-.312-.021-.437-.062-.125-.56-1.352-.77-1.852-.202-.48-.406-.416-.561-.416-.146 0-.312-.021-.479-.021-.166 0-.437.062-.666.312-.229.25-.875.855-.875 2.085 0 1.23.896 2.421 1.021 2.586.125.166 1.763 2.689 4.27 3.77 2.508 1.082 2.508.722 2.96.676.437-.046 1.407-.575 1.606-1.13.199-.556.199-1.033.146-1.132-.052-.1-.205-.166-.455-.292z"/></svg>
      </a>
    </>
  )
}
