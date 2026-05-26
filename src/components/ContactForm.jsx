import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaClock, FaPaperPlane, FaCheck } from 'react-icons/fa';

const schema = yup.object({
  name: yup.string().trim().min(2, 'Name must be at least 2 characters').max(100).required('Name is required'),
  phone: yup.string().trim().matches(/^[0-9+\-\s()]{7,20}$/, 'Please enter a valid phone number').required('Phone number is required'),
  email: yup.string().trim().email('Please enter a valid email').required('Email is required'),
  service: yup.string().required('Please select a service'),
  message: yup.string().trim().min(10, 'Message must be at least 10 characters').max(1000).required('Message is required'),
});

const serviceOptions = [
  'Wash, Dry & Iron',
  'Wash, Dry & Fold',
  'Dry Cleaning',
  'Ironing Only',
  'Blankets & Duvets',
  'Wash & Spin',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data, event) => {
    const form = event?.target;
    const honeypot = form?.querySelector('input[name="honeypot"]');
    if (honeypot?.value) return;

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      alert('Email service not configured. Please add VITE_EMAILJS_* environment variables.');
      return;
    }

    try {
      emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });
      setSubmitted(true);
      reset();
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
        setSubmitted(false);
      }, 30000);
    } catch {
      alert('Something went wrong. Please try again or call us directly.');
    }
  }, [reset]);

  return (
    <section id="contact" className="py-20 bg-sky-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-dark mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-text-light max-w-xl mx-auto font-body">
            Ready for fresh, clean laundry? Reach out today — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-card p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-green-600 text-2xl" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-primary-dark mb-2">Message Sent!</h3>
                <p className="text-text-light font-body">
                  Thank you! We'll get back to you shortly. You can also call us directly at <strong>065 946 8671</strong>.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl shadow-card p-6 md:p-8 space-y-5"
              >
                <input
                  type="text"
                  name="honeypot"
                  aria-hidden="true"
                  className="absolute -left-[9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-semibold text-primary-dark mb-1 block">Name *</label>
                    <input
                      {...register('name')}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all font-body`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-primary-dark mb-1 block">Phone *</label>
                    <input
                      {...register('phone')}
                      placeholder="065 946 8671"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-200'} focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all font-body`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-semibold text-primary-dark mb-1 block">Email *</label>
                    <input
                      {...register('email')}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all font-body`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-primary-dark mb-1 block">Service *</label>
                    <select
                      {...register('service')}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-400' : 'border-gray-200'} focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all font-body bg-white`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-semibold text-primary-dark mb-1 block">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us about your laundry needs..."
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:border-primary-light focus:ring-2 focus:ring-primary-light/20 outline-none transition-all font-body resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || cooldown}
                  className="w-full bg-accent hover:bg-accent-light disabled:bg-gray-300 disabled:cursor-not-allowed text-primary-dark font-accent font-semibold px-6 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <FaPaperPlane />
                  {cooldown ? 'Please wait 30s...' : isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 space-y-6">
              <h3 className="font-heading font-bold text-xl text-primary-dark">Visit Us</h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sky-light flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary-dark">Address</p>
                    <p className="text-text-light text-sm font-body">28 Goldman Street, Florida<br />Roodepoort, 1710</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sky-light flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary-dark">Phone</p>
                    <a href="tel:0659468671" className="text-text-light text-sm font-body hover:text-accent transition-colors">065 946 8671</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sky-light flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary-dark">Business Hours</p>
                    <div className="text-text-light text-sm font-body space-y-0.5">
                      <p>Mon–Fri: 7:00 AM – 5:30 PM</p>
                      <p>Saturday: 7:00 AM – 4:00 PM</p>
                      <p>Sunday & Public Holidays: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card h-64">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
