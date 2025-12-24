import Navbar from "./Components/Header/Navbar";
import HeroBanner from './Components/Banner/banner';
import Formations from './Components/Formations/formations';
import Services from './Components/Services/services';
import WhyChoose from './Components/Features/WhyChoose';
import Testimonials from './Components/Testimonials/testimonials';
import StatsSection from "./Components/Testimonials/StatsSection";
import NewsletterSection from './Components/Testimonials/NewsletterSection';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
      <Navbar />
      {/* Contenu du site */}
      <HeroBanner />
      <Formations />
      <Services />
      <WhyChoose />
      <Testimonials />
      <StatsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
