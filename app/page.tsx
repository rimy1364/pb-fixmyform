import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Transformations from "./components/Transformations";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CalendlyModal from "./components/CalendlyModal";

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
      </main>
      <Footer />
      <CalendlyModal />
    </>
  );
}
