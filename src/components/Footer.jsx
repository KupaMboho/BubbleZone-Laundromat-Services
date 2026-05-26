import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
                <img src="/logo_1.png" alt="BubbleZone Logo" className="h-8 sm:h-10 w-auto" />
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg leading-tight">BubbleZone</h3>
                  <p className="text-accent text-[8px] sm:text-[10px] leading-tight">Laundromat Services</p>
                </div>
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-body italic">
                "Clean Clothes, Happy Life."
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Prices', path: '/prices' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-accent text-xs sm:text-sm font-body transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex gap-3 justify-center sm:justify-start">
                <a
                  href="https://wa.me/27659468671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white text-sm sm:text-base" />
                </a>
              </div>
              <p className="text-white/60 text-[10px] sm:text-xs font-body mt-3 sm:mt-4">
                Drop us a message on WhatsApp for quick responses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-dark text-white/70 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[9px] sm:text-xs mb-1.5 sm:mb-2">
            <Link to="/privacy-policy" className="text-white/50 hover:text-accent transition-colors">Privacy Policy</Link>
            <span className="text-white/30">|</span>
            <Link to="/terms-and-conditions" className="text-white/50 hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
          <p className="text-[10px] sm:text-sm font-body">
            © 2025 BubbleZone Laundromat Services & Dry Cleaning. All rights reserved.
          </p>
          <p className="text-[8px] sm:text-xs font-body mt-0.5 sm:mt-1 text-white/50">
            28 Goldman Street, Florida, Roodepoort, 1710 | 065 946 8671
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/27659468671"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all z-40 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} className="sm:hidden" />
        <FaWhatsapp size={28} className="hidden sm:block" />
      </a>
    </footer>
  );
}
