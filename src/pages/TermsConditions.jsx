import { motion } from 'framer-motion';

export default function TermsConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-text-light text-sm sm:text-base font-body mb-8">
              Last updated: May 2025
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8 md:p-10 space-y-6 text-text-dark font-body text-sm sm:text-base leading-relaxed">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">1. Services</h2>
            <p>
              BubbleZone Laundromat Services & Dry Cleaning provides professional laundry, dry cleaning, ironing, and related garment care services. By using our services, you agree to these Terms & Conditions.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">2. Pricing & Payment</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>All prices are quoted in South African Rand (ZAR) and include VAT where applicable.</li>
              <li>Prices are subject to change without prior notice. Confirmed orders will be charged at the rates quoted at the time of drop-off.</li>
              <li>Payment is required upon collection of cleaned items unless prior arrangements have been made.</li>
              <li>We accept cash, card payments, and electronic funds transfer.</li>
            </ul>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">3. Service Guarantee</h2>
            <p>
              We take great care in handling your garments. However, we cannot be held responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Normal wear and tear from the cleaning process</li>
              <li>Pre-existing damage, stains, or defects not disclosed at drop-off</li>
              <li>Colour bleeding or shrinkage on garments not labelled as dry clean only when dry cleaning was not selected</li>
              <li>Items with manufacturer's defects or improper care labels</li>
            </ul>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">4. Lost or Damaged Items</h2>
            <p>
              In the unlikely event that an item is lost or damaged due to our negligence, our liability is limited to the actual cash value of the item, up to a maximum of R500 per item, unless a higher value was declared and agreed upon at drop-off. We recommend that valuable or sentimental items be brought to our attention at the time of drop-off.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">5. Collection of Items</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Items must be collected within 14 days of completion.</li>
              <li>Items not collected after 30 days may be subject to a storage fee.</li>
              <li>Items unclaimed after 90 days will be considered abandoned and may be disposed of or donated.</li>
            </ul>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">6. Special Instructions</h2>
            <p>
              Any special care instructions must be communicated at the time of drop-off. We will make every effort to accommodate reasonable requests. We are not liable for damage resulting from instructions that conflict with standard garment care labels.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">7. Website Use</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>This website is provided for informational purposes and to facilitate communication with our customers.</li>
              <li>We reserve the right to modify or discontinue any part of the website without notice.</li>
              <li>Unauthorised use of this website may give rise to a claim for damages.</li>
            </ul>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BubbleZone Laundromat Services & Dry Cleaning shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">9. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of the courts of South Africa.
            </p>

            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary-dark">10. Contact</h2>
            <p>
              For any questions regarding these Terms & Conditions, please contact us:
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
