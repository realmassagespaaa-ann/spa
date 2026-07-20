export default function Footer() {
  return (
    <footer id="book" className="bg-stone text-vapor/70">
      {/* Repeat booking CTA */}
      <div className="border-b border-white/10 py-14 px-5 text-center">
        <h3 className="font-display text-2xl md:text-3xl text-vapor">
          Ready to feel better?
        </h3>
        <p className="mt-2 text-vapor/60 max-w-md mx-auto">
          Book a session in under a minute. No account needed.
        </p>
        <a
          href="#"
          className="inline-block mt-6 bg-ember text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-ember/90 transition-colors focus-visible:outline-2 focus-visible:outline-white"
        >
          Book Now
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-display text-vapor text-lg mb-3">Real Massage &amp; Spa</h4>
          <p className="text-sm leading-relaxed">
            342 Walnut Street, Suite 102<br />
            Portland, OR 97204
          </p>
        </div>

        <div>
          <h4 className="font-medium text-vapor text-sm mb-3">Book &amp; Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">(503) 555–0142</a></li>
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">hello@realmassagespa.com</a></li>
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Book Online</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-vapor text-sm mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Membership Terms</a></li>
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Gift Card Terms</a></li>
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-vapor text-sm mb-3">Social</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Instagram</a></li>
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Facebook</a></li>
            <li><a href="#" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-vapor/40">
        &copy; {new Date().getFullYear()} Real Massage and Spa. All rights reserved.
      </div>
    </footer>
  )
}
