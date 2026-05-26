import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="pt-24">
      <section className="bg-gradient-to-br from-sky-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary-dark mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-text-light max-w-xl mx-auto font-body">
              Have a question or ready to drop off your laundry? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
