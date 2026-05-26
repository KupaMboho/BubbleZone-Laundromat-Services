import { motion } from 'framer-motion';
import { FaBoxOpen, FaSoap, FaTshirt } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    title: 'Drop Off Your Laundry',
    description: 'Bring your laundry to our store at 28 Goldman Street. We\'ll weigh and tag your items.',
    icon: FaBoxOpen,
  },
  {
    number: '02',
    title: 'We Wash, Dry & Fold',
    description: 'Our team professionally cleans your garments with premium products.',
    icon: FaSoap,
  },
  {
    number: '03',
    title: 'Pick Up Fresh & Clean',
    description: 'Collect your fresh, neatly folded laundry — ready to wear or put away.',
    icon: FaTshirt,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-sky-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
            Three Simple Steps
          </h2>
          <p className="text-text-light max-w-xl mx-auto font-body text-sm sm:text-base">
            Getting fresh, clean laundry has never been easier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80"
              srcSet="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=70 400w, https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80 800w"
              sizes="(max-width: 768px) 400px, 800px"
              alt="Person dropping off laundry"
              loading="lazy"
              className="w-full h-56 sm:h-80 md:h-full object-cover"
            />
          </motion.div>

          <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-3 sm:gap-5 items-start bg-white rounded-xl p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <step.icon className="text-accent text-base sm:text-xl" />
                </div>
                <div>
                  <span className="text-accent font-accent font-bold text-[10px] sm:text-xs">{step.number}</span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-primary-dark">{step.title}</h3>
                  <p className="text-text-light font-body text-xs sm:text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
