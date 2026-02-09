import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-sand">
      <Header />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
