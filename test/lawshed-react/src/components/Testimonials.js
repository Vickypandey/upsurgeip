import React from 'react';

const testimonials = [
  {
    quote:
      'The team at Lawshed guided us through a complex acquisition with clarity and confidence.',
    name: 'Jordan Lee'
  },
  {
    quote: 'Professional, responsive, and deeply knowledgeable. We felt supported at every step.',
    name: 'Amira Khan'
  },
  {
    quote: 'Their litigation strategy was decisive and helped us reach a fair resolution quickly.',
    name: 'Marcus Reed'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-brass">Testimonials</p>
        <h2 className="mt-4 font-serif text-3xl text-navy">Clients who trust our counsel.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-[#ece5da] bg-sand p-6">
              <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
