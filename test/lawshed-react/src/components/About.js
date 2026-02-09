import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-sand py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brass">About our firm</p>
          <h2 className="mt-4 font-serif text-3xl text-navy">
            Legal counsel built on trust and clarity.
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            We believe every client deserves clear guidance and a responsive legal partner. From
            the first consultation to the final resolution, we prioritize transparency, strategic
            planning, and results.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#ece5da] bg-white p-5">
            <h3 className="font-serif text-lg text-navy">Client-first approach</h3>
            <p className="mt-2 text-sm text-slate-600">
              Dedicated teams and direct attorney access throughout your case.
            </p>
          </div>
          <div className="rounded-2xl border border-[#ece5da] bg-white p-5">
            <h3 className="font-serif text-lg text-navy">Collaborative strategy</h3>
            <p className="mt-2 text-sm text-slate-600">
              We map every milestone and keep you informed at each step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
