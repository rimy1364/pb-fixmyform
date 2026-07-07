import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Transformations from "./components/Transformations";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import EbookPopup from "./components/EbookPopup";
import BlogSection from "./components/BlogSection";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CalendlyModal from "./components/CalendlyModal";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Transformations />
<Testimonials />
        <Plans />
        {/* <CTA /> */}
        <Contact />
        <BlogSection />
      </main>
      <Footer />
      <CalendlyModal />
      <EbookPopup />
      <WhatsAppButton />
    </>
  );
}
