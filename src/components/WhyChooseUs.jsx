import { motion } from 'framer-motion';
import { FaCheckCircle, FaHandsWash, FaClock, FaHeart } from 'react-icons/fa';

const reasons = [
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden fees — quality service you can afford.',
    icon: FaCheckCircle,
  },
  {
    title: 'Professional Care',
    description: 'Every garment treated with expertise and premium cleaning products.',
    icon: FaHandsWash,
  },
  {
    title: 'Fast Turnaround',
    description: 'Same-day service available — drop off in the morning, pick up by afternoon.',
    icon: FaClock,
  },
  {
    title: 'Locally Trusted',
    description: 'Proudly serving Roodepoort & surrounding areas with reliable service.',
    icon: FaHeart,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-sky-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
              Why BubbleZone?
            </h2>
            <p className="text-text-light font-body text-sm sm:text-base mb-6 sm:mb-8">
              We believe in making laundry day effortless. Here's why our customers keep coming back.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-3 sm:gap-4 items-start"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <reason.icon className="text-accent text-base sm:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary-dark text-sm sm:text-base">{reason.title}</h3>
                    <p className="text-text-light text-xs sm:text-sm font-body">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80"
              srcSet="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=400&q=70 400w, https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80 800w"
              sizes="(max-width: 768px) 400px, 800px"
              alt="Clean clothes on a rack"
              loading="lazy"
              className="w-full h-64 sm:h-80 md:h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
