import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-primary-dark font-heading font-extrabold text-lg">B</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg leading-tight">BubbleZone</h3>
                  <p className="text-accent text-[10px] leading-tight">Laundromat Services</p>
                </div>
              </div>
              <p className="text-white/70 text-sm font-body italic">
                "Clean Clothes, Happy Life."
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Prices', path: '/prices' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-accent text-sm font-body transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-white" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white" />
                </a>
                <a
                  href="https://wa.me/27659468671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white" />
                </a>
              </div>
              <p className="text-white/60 text-xs font-body mt-4">
                Drop us a message on WhatsApp for quick responses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-dark text-white/70 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-body">
            © 2025 BubbleZone Laundromat Services & Dry Cleaning. All rights reserved.
          </p>
          <p className="text-xs font-body mt-1 text-white/50">
            28 Goldman Street, Florida, Roodepoort, 1710 | 065 946 8671
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/27659468671"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all z-40 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
}
