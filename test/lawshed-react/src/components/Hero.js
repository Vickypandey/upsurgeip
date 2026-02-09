import React from 'react';

const Hero = () => {
  return (
    <section className="bg-sand py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass">Trusted legal partners</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-navy md:text-5xl">
            Confidence in every case.
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-700">
            Lawshed is a boutique firm delivering tailored counsel for individuals, families, and
            businesses. We combine decisive advocacy with a calm, collaborative approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
              Schedule Consultation
            </button>
            <button className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy">
              View Practice Areas
            </button>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-navy">98%</p>
              <p>Client satisfaction</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-navy">35+</p>
              <p>Years of experience</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-navy">1,200</p>
              <p>Cases resolved</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-3xl bg-navy p-8 text-white shadow-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Since 1996</p>
            <h3 className="mt-4 font-serif text-2xl">Modern advocacy with classic values.</h3>
            <p className="mt-4 text-sm text-white/80">
              Our team works side-by-side with you to understand the full story and build a
              winning strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
