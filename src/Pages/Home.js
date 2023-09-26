import { useState } from 'react';
import Header from "../Components/Header";
import Carousel from "../Components/Home/carousel/Carousal.jsx";
import Certifications from "../Components/Home/Certifications";
import AppLinks from "../Components/Home/AppLinks";
import PageLinks from "../Components/Home/PageLinks";
import Testimonials from "../Components/Home/Testminals";
import Footer from "../Components/Footer";
import PreLoader from "../Components/Preloader/index.js";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <Header />
      <Carousel />
      <PreLoader isOpen={isModalOpen} closeModal={closeModal} />
      <br /> <br />
      <AppLinks />
      <br /> <br />
      <PageLinks />
      <br /> <br />
      <Testimonials />
      <br /> <br />
      <Certifications />
      <Footer />
    </main>
  );
}

export default Home;
