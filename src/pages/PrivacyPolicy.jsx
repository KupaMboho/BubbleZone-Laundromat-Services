import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="pt-24">
      <section className="bg-gradient-to-br from-sky-light to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Legal</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary-dark mt-2 mb-6">
              Privacy Policy
            </h1>
            <p className="text-text-light text-sm sm:text-base font-body mb-8">
              Last updated: May 2025
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8 md:p-10 space-y-6 text-text-dark font-body text-sm sm:text-base leading-relaxed">
            <p>
              BubbleZone Laundromat Services & Dry Cleaning ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Information:</strong> Name, phone number, email address, and service preferences when you submit our contact form.</li>
              <li><strong>Service Information:</strong> Details about items you drop off for cleaning (garment types, quantities, special instructions).</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage data collected automatically when you visit our website.</li>
            </ul>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">2. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and manage our laundry and dry cleaning services</li>
              <li>To communicate with you regarding your orders and inquiries</li>
              <li>To improve our website and customer service</li>
              <li>To send service-related updates and promotional offers (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">3. Data Protection</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">4. Third-Party Services</h2>
            <p>
              We use third-party services including EmailJS for contact form submissions and Google Maps for location embedding. These services have their own privacy policies governing the use of your data. We do not sell, trade, or rent your personal information to third parties.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time by contacting us.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your personal data held by us</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with the Information Regulator (South Africa)</li>
            </ul>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <p>
              <strong>BubbleZone Laundromat Services & Dry Cleaning</strong><br />
              28 Goldman Street, Florida, Roodepoort, 1710<br />
              Phone: 065 946 8671
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
