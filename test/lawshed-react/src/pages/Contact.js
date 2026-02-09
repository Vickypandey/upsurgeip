import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-navy py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass">Get in touch</p>
          <h2 className="mt-4 font-serif text-3xl">Schedule a confidential consultation.</h2>
          <p className="mt-4 text-sm text-white/80">
            Tell us about your matter and a member of our team will reach out within one business
            day.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <p>410 Hudson Street, New York, NY</p>
            <p>+1 (800) 458-9901</p>
            <p>contact@lawshed.com</p>
          </div>
        </div>
        <form className="space-y-4 rounded-2xl bg-white/10 p-6">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60"
          />
          <textarea
            rows="4"
            placeholder="How can we help?"
            className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60"
          />
          <button className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
            Submit request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
