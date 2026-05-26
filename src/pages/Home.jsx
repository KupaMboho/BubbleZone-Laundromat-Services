import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import PriceList from '../components/PriceList';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <PriceList />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
