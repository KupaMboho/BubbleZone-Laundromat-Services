import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBath, FaTshirt, FaUserTie, FaFire, FaBed, FaSync, FaCheck } from 'react-icons/fa';

const services = [
  {
    title: 'Wash, Dry & Iron',
    description: 'Our premium full-service option. We wash, dry, and professionally iron every item. Perfect for shirts, workwear, and anything that needs a crisp finish.',
    price: 'From R40 p/kg',
    features: ['Professional ironing', 'Garment-safe detergents', 'Same-day available'],
    icon: FaBath,
  },
  {
    title: 'Wash, Dry & Fold',
    description: 'The convenient everyday option. We wash and dry your laundry, then fold everything neatly ready for you to put away.',
    price: 'From R35 p/kg',
    features: ['Neat folding', 'Separated by item type', 'Quick turnaround'],
    icon: FaTshirt,
  },
  {
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for delicate fabrics and formal wear. Suits, dresses, coats, and curtains — treated with specialist care.',
    price: 'From R100',
    features: ['Solvent-based cleaning', 'Stain treatment', 'Garment steaming'],
    icon: FaUserTie,
  },
  {
    title: 'Ironing Only',
    description: 'Already clean but wrinkled? Drop off for professional ironing. We\'ll have your clothes looking sharp in no time.',
    price: 'R37 p/kg',
    features: ['Professional pressing', 'Crisp finishes', 'Quick service'],
    icon: FaFire,
  },
  {
    title: 'Blankets & Duvets',
    description: 'Big items need special attention. We handle large blankets, duvets, and comforters with care, using commercial-grade machines.',
    price: 'From R135',
    features: ['Large capacity washers', 'Deep cleaning', 'Fresh scent'],
    icon: FaBed,
  },
  {
    title: 'Wash & Spin',
    description: 'Need a quick wash? Drop off for a fast wash and spin cycle. Perfect for gym clothes, towels, and everyday items.',
    price: 'R80/load',
    features: ['Fast turnaround', 'Up to 8kg load', 'Eco-friendly wash'],
    icon: FaSync,
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <section className="bg-gradient-to-br from-sky-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mt-2 mb-4">
              Our Services
            </h1>
            <p className="text-text-light max-w-xl mx-auto font-body">
              From everyday laundry to specialist dry cleaning — we handle it all with professional care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl shadow-card hover:shadow-card-hover p-6 border border-gray-100 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-light flex items-center justify-center mb-4">
                  <svc.icon className="text-primary-light text-xl" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-dark mb-2">{svc.title}</h3>
                <p className="text-text-light font-body text-sm mb-4">{svc.description}</p>
                <ul className="space-y-2 mb-5">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-light">
                      <FaCheck className="text-accent text-xs flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-accent font-bold text-accent mb-4">{svc.price}</p>
                <Link
                  to="/contact"
                  className="block text-center bg-primary hover:bg-primary-dark text-white font-accent font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-extrabold text-3xl text-primary-dark mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-text-light font-body mb-6 max-w-lg mx-auto">
              Give us a call — we'll recommend the best option for your garments.
            </p>
            <a
              href="tel:0659468671"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-accent font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-xl"
            >
              Call 065 946 8671
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
