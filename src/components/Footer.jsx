import logoSrc from '../assets/images/logo-real-massage-embassy-spa.webp'

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
          <a href="#" className="block mb-3">
            <img src={logoSrc} alt="Real Massage Embassy & Spa" className="h-10 w-auto" />
          </a>
          <p className="text-sm leading-relaxed">
            King Jackson Hotel (opposite Bedouin Hotel), Ugbolokposo<br />
            Dorvile Hotel, Orerokpe
          </p>
        </div>

        <div>
          <h4 className="font-medium text-vapor text-sm mb-3">Book &amp; Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+2348133435521" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">+234 813 343 5521</a></li>
            <li><a href="https://wa.me/+2348133435521" target="_blank" rel="noopener noreferrer" className="hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember">Chat on WhatsApp</a></li>
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
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://wa.me/+2348133435521"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.077 4.928A9.953 9.953 0 0012.003 2C6.485 2 2.006 6.479 2.006 11.997c0 2.099.547 4.159 1.588 5.965L2.017 22l4.165-1.533a9.962 9.962 0 005.821 1.865c5.518 0 10.003-4.479 10.003-9.997 0-2.669-1.043-5.179-2.929-7.072zm-7.074 15.394c-1.768 0-3.504-.473-5.019-1.367l-.36-.214-2.472.911.916-2.412-.234-.373a8.281 8.281 0 01-1.273-4.47c0-4.575 3.722-8.297 8.297-8.297 2.214 0 4.297.864 5.862 2.434a8.247 8.247 0 012.43 5.859c0 4.574-3.726 8.296-8.298 8.296zm4.551-6.21c-.249-.125-1.473-.727-1.701-.81-.229-.083-.395-.125-.561.125-.166.249-.644.81-.79.977-.146.166-.291.187-.54.062-.249-.125-1.052-.388-2.004-1.237-.74-.66-1.24-1.476-1.385-1.726-.146-.249-.015-.384.11-.506.117-.117.25-.292.376-.438.125-.146.167-.249.25-.415.084-.166.042-.312-.021-.437-.062-.125-.56-1.352-.77-1.852-.202-.48-.406-.416-.561-.416-.146 0-.312-.021-.479-.021-.166 0-.437.062-.666.312-.229.25-.875.855-.875 2.085 0 1.23.896 2.421 1.021 2.586.125.166 1.763 2.689 4.27 3.77 2.508 1.082 2.508.722 2.96.676.437-.046 1.407-.575 1.606-1.13.199-.556.199-1.033.146-1.132-.052-.1-.205-.166-.455-.292z"/></svg>
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@bestspainwarri?_r=1&_t=ZS-98BzaBlMRgQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-vapor transition-colors focus-visible:outline-2 focus-visible:outline-ember"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.6 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.89c.24 0 .48.04.71.08V8.01a6.19 6.19 0 00-.71-.05A6.34 6.34 0 003.27 14.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.9a8.16 8.16 0 004.77 1.52v-3.4a4.84 4.84 0 01-1.13-1.33z"/></svg>
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-vapor/40">
        &copy; {new Date().getFullYear()} Real Massage Embassy &amp; Spa. All rights reserved.
      </div>
    </footer>
  )
}
