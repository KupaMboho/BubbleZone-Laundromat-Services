import { motion } from 'framer-motion';

const priceCategories = [
  {
    title: 'Wash & Dry Service',
    items: [
      { name: 'Wash, Dry & Iron', price: 'R40 p/kg' },
      { name: 'Wash, Dry & Fold', price: 'R35 p/kg' },
      { name: 'Ironing Only', price: 'R37 p/kg' },
      { name: 'Wash & Spin', price: 'R80 p/load' },
      { name: 'Normal Dresses', price: 'R140' },
    ],
  },
  {
    title: 'Suits',
    items: [
      { name: 'Suit 2 Pieces', price: 'R170' },
      { name: 'Suit 3 Pieces', price: 'R190' },
      { name: 'Trouser', price: 'R100' },
      { name: 'Suit Jacket', price: 'R120' },
      { name: 'Blazer (School)', price: 'R100' },
    ],
  },
  {
    title: 'Blankets & Duvets',
    items: [
      { name: 'Big Blanket', price: 'R190' },
      { name: 'Big Duvet', price: 'R150' },
      { name: 'Small Blanket', price: 'R160' },
      { name: 'Small Duvets', price: 'R135' },
    ],
  },
  {
    title: 'Curtains',
    items: [
      { name: 'Wash, Dry & Iron', price: 'R60 p/kg' },
      { name: 'Wash, Dry & Fold', price: 'R60 p/kg' },
      { name: 'Iron Only', price: 'R55 p/kg' },
    ],
  },
  {
    title: 'Coats',
    items: [
      { name: 'Long Coats', price: 'R160' },
      { name: 'Mid Coats', price: 'R140' },
      { name: 'Normal Coats', price: 'R120' },
    ],
  },
];

export default function PriceList() {
  return (
    <section id="prices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">Our Prices</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-text-light max-w-xl mx-auto font-body">
            No hidden fees — just honest, affordable rates for every garment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden hover:shadow-card-hover transition-shadow"
            >
              <div className="bg-gradient-primary px-6 py-4">
                <h3 className="font-heading font-bold text-white text-lg">{category.title}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {category.items.map((item, i) => (
                  <div key={i} className="px-6 py-3.5 flex items-center justify-between hover:bg-sky-light/50 transition-colors">
                    <span className="font-body text-primary-dark">{item.name}</span>
                    <span className="font-accent font-bold text-accent">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
