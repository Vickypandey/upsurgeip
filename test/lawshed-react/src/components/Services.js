import React from 'react';

const services = [
  {
    title: 'Corporate Law',
    description: 'Strategic counsel for businesses navigating compliance and growth.'
  },
  {
    title: 'Family Law',
    description: 'Compassionate representation for life-changing family matters.'
  },
  {
    title: 'Real Estate',
    description: 'Guidance through purchases, sales, leasing, and property disputes.'
  },
  {
    title: 'Litigation',
    description: 'Focused advocacy to protect your interests in and out of court.'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-brass">Practice areas</p>
        <h2 className="mt-4 font-serif text-3xl text-navy">Focused expertise for complex matters.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-[#ece5da] bg-sand p-6">
              <h3 className="font-serif text-xl text-navy">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-brass">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
