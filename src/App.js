import React from "react";
import "./App.scss";
import Navbar from "././Components/Navbar/Navbar";
import Hero from "././Components/Hero/Hero";
import Founder from '././Components/Founder/Founder';
import Carousel from '././Components/Carousel/Carousel';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Founder/>
      <Carousel/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
