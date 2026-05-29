import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Transformations from "./components/Transformations";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Transformations />
        <Plans />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
