import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-sky-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-accent font-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-text-light max-w-xl mx-auto font-body text-sm sm:text-base">
            Ready for fresh, clean laundry? Reach out today — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-card p-5 sm:p-8 space-y-5 sm:space-y-6"
          >
            <h3 className="font-heading font-bold text-lg sm:text-xl text-primary-dark">Visit Us</h3>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sky-light flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-accent text-sm sm:text-base" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary-dark text-sm sm:text-base">Address</p>
                  <p className="text-text-light text-xs sm:text-sm font-body">28 Goldman Street, Florida<br />Roodepoort, 1710</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sky-light flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-accent text-sm sm:text-base" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary-dark text-sm sm:text-base">Phone</p>
                  <a href="tel:0659468671" className="text-text-light text-xs sm:text-sm font-body hover:text-accent transition-colors">065 946 8671</a>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sky-light flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-accent text-sm sm:text-base" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary-dark text-sm sm:text-base">Business Hours</p>
                  <div className="text-text-light text-xs sm:text-sm font-body space-y-0.5">
                    <p>Mon–Fri: 7:00 AM – 5:30 PM</p>
                    <p>Saturday: 7:00 AM – 4:00 PM</p>
                    <p>Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card h-64 sm:h-80"
          >
            <iframe
              title="BubbleZone Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1!2d27.9286!3d-26.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950eb0a8f7a9b5%3A0x9b8c7e1f1e6f3a4!2sFlorida%2C%20Roodepoort!5e0!3m2!1sen!2sza!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
