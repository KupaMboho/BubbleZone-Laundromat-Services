import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Prices', path: '/prices' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
    }`}>
      <div className="bg-primary-dark text-white text-sm py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-6">
          <a href="tel:0659468671" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <FaPhone size={12} /> 065 946 8671
          </a>
          <a href="https://wa.me/27659468671" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <FaWhatsapp size={14} /> WhatsApp
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
            <span className="text-primary-dark font-heading font-extrabold text-lg">B</span>
          </div>
          <div className="hidden sm:block">
            <h1 className={`font-heading font-bold text-lg leading-tight transition-colors ${
              scrolled ? 'text-white' : 'text-primary'
            }`}>
              BubbleZone
            </h1>
            <p className={`text-[10px] leading-tight transition-colors ${
              scrolled ? 'text-accent' : 'text-primary-light'
            }`}>
              Laundromat Services
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              className={`font-body font-semibold text-sm transition-colors relative group ${
                scrolled ? 'text-white' : 'text-primary-dark'
              } ${
                location.pathname === link.path ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-light text-primary-dark font-accent font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-white hover:bg-white/10' : 'text-primary-dark hover:bg-primary/10'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMobile}
                    className={`block px-4 py-3 rounded-lg font-body font-semibold transition-colors ${
                      location.pathname === link.path
                        ? 'bg-accent/20 text-accent'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="pt-2"
              >
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="block text-center bg-accent hover:bg-accent-light text-primary-dark font-accent font-semibold px-5 py-3 rounded-lg transition-all"
                >
                  Get a Quote
                </Link>
              </motion.div>
              <div className="pt-3 pb-2 flex items-center gap-3 text-white/80 text-sm">
                <a href="tel:0659468671" className="flex items-center gap-1.5 hover:text-accent">
                  <FaPhone size={12} /> 065 946 8671
                </a>
                <a href="https://wa.me/27659468671" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent">
                  <FaWhatsapp size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
