import { motion } from 'framer-motion';
import { FaHandsWash, FaLeaf, FaUsers, FaAward } from 'react-icons/fa';

const values = [
  { title: 'Quality First', description: 'We never compromise on cleanliness. Every item is inspected before it leaves our store.', icon: FaAward },
  { title: 'Eco-Friendly', description: 'We use biodegradable, garment-safe detergents that are gentle on clothes and the planet.', icon: FaLeaf },
  { title: 'Community Roots', description: 'Proudly serving Florida, Roodepoort since our founding — we know and love our neighbours.', icon: FaUsers },
  { title: 'Hands-On Care', description: 'Every garment is handled by experienced professionals who take pride in their work.', icon: FaHandsWash },
];

export default function About() {
  return (
    <main className="pt-24">
      <section className="bg-gradient-to-br from-sky-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mt-2 mb-6">
              About BubbleZone
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-body text-text-light mb-4">
                BubbleZone Laundromat Services & Dry Cleaning is your trusted partner for all laundry needs in Florida, Roodepoort. We combine professional expertise with genuine care for your garments.
              </p>
              <p className="font-body text-text-light mb-4">
                Located at 28 Goldman Street, we offer a full range of services — from everyday wash and fold to delicate dry cleaning and large item care like blankets, duvets, and curtains.
              </p>
              <p className="font-body text-text-light">
                Our mission is simple: make laundry day effortless so you can focus on what matters most. With competitive pricing, fast turnaround, and a commitment to quality, we've earned the trust of the Roodepoort community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&q=70 400w, https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80 800w"
                sizes="(max-width: 768px) 400px, 800px"
                alt="Laundry interior"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-extrabold text-3xl text-center text-primary-dark mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-sky-light rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-accent text-xl" />
                </div>
                <h3 className="font-heading font-bold text-primary-dark mb-2">{v.title}</h3>
                <p className="text-text-light text-sm font-body">{v.description}</p>
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
              Ready to Experience the BubbleZone Difference?
            </h2>
            <p className="text-text-light font-body mb-6 max-w-lg mx-auto">
              Drop off your laundry today and let us take care of the rest.
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
