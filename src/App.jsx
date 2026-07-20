import Nav from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import TreatmentCarousel from './components/TreatmentCarousel'
import TeamSpotlight from './components/TeamSpotlight'
import FeatureGrid from './components/FeatureGrid'
import Amenities from './components/Amenities'
import HoursLocation from './components/HoursLocation'
import CrossLinks from './components/CrossLinks'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <TreatmentCarousel />
        <TeamSpotlight />
        <FeatureGrid />
        <Amenities />
        <HoursLocation />
        <CrossLinks />
      </main>
      <Footer />
    </>
  )
}
