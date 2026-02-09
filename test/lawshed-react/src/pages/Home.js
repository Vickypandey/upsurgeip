import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
};

export default Home;
