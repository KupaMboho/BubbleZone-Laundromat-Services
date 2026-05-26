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
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
            Professional Laundry Services
          </h2>
          <p className="text-text-light max-w-xl mx-auto font-body text-sm sm:text-base">
            From everyday laundry to delicate dry cleaning, we handle everything with care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-card hover:shadow-card-hover p-4 sm:p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-sky-light flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="text-primary-light text-lg sm:text-xl group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-dark mb-2">
                {service.title}
              </h3>
              <p className="text-text-light font-body text-sm mb-3 flex-grow">
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
