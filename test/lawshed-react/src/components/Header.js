import React from 'react';

const Header = () => {
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-sm">
        <span>24/7 Legal Response</span>
        <span>+1 (800) 458-9901</span>
        <span>contact@lawshed.com</span>
      </div>
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5">
        <span className="font-serif text-2xl font-bold">Lawshed</span>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a href="#about" className="hover:text-brass">About</a>
          <a href="#services" className="hover:text-brass">Practice Areas</a>
          <a href="#testimonials" className="hover:text-brass">Testimonials</a>
          <a href="#contact" className="rounded-full border border-white px-4 py-2 text-xs uppercase tracking-widest">
            Free Consultation
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
