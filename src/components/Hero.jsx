import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-sky-light to-white">
      <div className="bubble bubble-1" />
      <div className="bubble bubble-2" />
      <div className="bubble bubble-3" />
      <div className="bubble bubble-4" />
      <div className="bubble bubble-5" />
      <div className="bubble bubble-6" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center md:text-left"
          >
            <span className="inline-block bg-accent/20 text-accent font-accent font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              Roodepoort's Trusted Laundromat
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-primary-dark mb-3 sm:mb-4">
              LAUNDRY DAY?
              <br />
              <span className="text-gradient">We've Got You Covered!</span>
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-text-light mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Professional Wash, Dry Cleaning & Ironing Services in Roodepoort — affordable, fast, and always fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="tel:0659468671"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-accent font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all hover:shadow-xl text-base sm:text-lg"
              >
                <FaPhone /> Call Now
              </a>
              <Link
                to="/prices"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary-dark hover:bg-primary hover:text-white font-accent font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all text-base sm:text-lg"
              >
                View Prices
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden sm:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&q=70 400w, https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80 800w, https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1200&q=80 1200w"
                sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
                alt="Modern laundromat with washing machines"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-white rounded-xl shadow-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold text-base sm:text-lg">✓</span>
              </div>
              <div>
                <p className="font-heading font-bold text-primary-dark text-xs sm:text-sm">Same-Day Service</p>
                <p className="text-text-light text-[10px] sm:text-xs">Available on request</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
