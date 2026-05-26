import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBath, FaTshirt, FaUserTie, FaFire, FaBed, FaSync } from 'react-icons/fa';

const services = [
  {
    title: 'Wash, Dry & Iron',
    description: 'Full care service — washed, dried, and professionally ironed',
    price: 'From R40 p/kg',
    icon: FaBath,
  },
  {
    title: 'Wash, Dry & Fold',
    description: 'Neatly folded and ready to put away',
    price: 'From R35 p/kg',
    icon: FaTshirt,
  },
  {
    title: 'Dry Cleaning',
    description: 'Suits, coats, curtains — expert care',
    price: 'From R100',
    icon: FaUserTie,
  },
  {
    title: 'Ironing Only',
    description: 'Crisp results for your garments',
    price: 'R37 p/kg',
    icon: FaFire,
  },
  {
    title: 'Blankets & Duvets',
    description: 'Big item specialists — deep cleaned',
    price: 'From R135',
    icon: FaBed,
  },
  {
    title: 'Wash & Spin',
    description: 'Quick turnaround — ready in no time',
    price: 'R80/load',
    icon: FaSync,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
            Professional Laundry Services
          </h2>
          <p className="text-text-light max-w-xl mx-auto font-body">
            From everyday laundry to delicate dry cleaning, we handle everything with care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-1 rounded-2xl overflow-hidden relative h-64 md:h-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              srcSet="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70 400w, https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80 800w"
              sizes="(max-width: 768px) 400px, 800px"
              alt="Clean folded laundry"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="p-8 md:p-12">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
                  Quality You Can Feel
                </h3>
                <p className="text-white/80 font-body max-w-md mb-4">
                  Every garment treated with care — from delicate fabrics to everyday wear.
                </p>
                <Link
                  to="/services"
                  className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-accent font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-card hover:shadow-card-hover p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-light flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="text-primary-light text-xl group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-dark mb-2">
                {service.title}
              </h3>
              <p className="text-text-light font-body text-sm mb-3">
                {service.description}
              </p>
              <p className="text-accent font-accent font-semibold text-sm">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
