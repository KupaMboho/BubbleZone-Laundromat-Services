import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah M.',
    review: 'Best laundry service in Roodepoort! My clothes come back perfectly folded and smelling amazing. The same-day turnaround is a lifesaver.',
    rating: 5,
  },
  {
    name: 'John D.',
    review: "I've been using BubbleZone for my dry cleaning for months. They handle my suits with care and the prices are very reasonable.",
    rating: 5,
  },
  {
    name: 'Priya K.',
    review: 'The wash, dry and fold service is incredible. So convenient — I drop off on my way to work and pick up on my way home. Highly recommend!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-text-light max-w-xl mx-auto font-body">
            Don't just take our word for it — hear from the Roodepoort community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sky-light rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-accent text-sm" />
                ))}
              </div>
              <p className="text-text-light font-body text-sm mb-4 italic">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-heading font-semibold text-primary-dark text-sm">
                  {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
