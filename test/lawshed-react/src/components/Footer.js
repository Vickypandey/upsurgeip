import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl">Lawshed</h3>
          <p className="mt-2 text-sm text-white/80">
            Resolute counsel for modern legal challenges.
          </p>
        </div>
        <div className="text-sm text-white/80">
          <p className="font-semibold text-white">Practice Areas</p>
          <ul className="mt-3 space-y-2">
            <li>Corporate Law</li>
            <li>Family Law</li>
            <li>Real Estate</li>
            <li>Litigation</li>
          </ul>
        </div>
        <div className="text-sm text-white/80">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-3">410 Hudson Street, New York, NY</p>
          <p className="mt-2">+1 (800) 458-9901</p>
          <p className="mt-2">contact@lawshed.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
