const practiceAreas = [
  {
    title: 'Corporate Law',
    description:
      'Strategic counsel for businesses navigating compliance, governance, and growth.'
  },
  {
    title: 'Family Law',
    description:
      'Compassionate representation for life-changing family matters and resolutions.'
  },
  {
    title: 'Real Estate',
    description:
      'Guidance through purchases, sales, leasing, and property disputes.'
  },
  {
    title: 'Litigation',
    description:
      'Focused advocacy to protect your interests in and out of the courtroom.'
  }
];

const attorneys = [
  {
    name: 'Elaine Carter',
    role: 'Managing Partner'
  },
  {
    name: 'Liam Brooks',
    role: 'Senior Counsel'
  },
  {
    name: 'Sophia Patel',
    role: 'Trial Attorney'
  }
];

const insights = [
  {
    title: 'Navigating Contract Disputes in 2024',
    date: 'March 18, 2024'
  },
  {
    title: 'Estate Planning Essentials for Growing Families',
    date: 'April 02, 2024'
  },
  {
    title: 'Commercial Leasing: What Tenants Should Know',
    date: 'April 16, 2024'
  }
];

export default function App() {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="top-bar__content">
          <span>24/7 Legal Response</span>
          <span>+1 (800) 458-9901</span>
          <span>contact@lawshed.com</span>
        </div>
      </header>

      <nav className="nav">
        <div className="nav__logo">Lawshed</div>
        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#practice">Practice Areas</a>
          <a href="#attorneys">Attorneys</a>
          <a href="#insights">Insights</a>
          <a href="#contact" className="button button--outline">
            Free Consultation
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">Trusted legal partners</p>
            <h1>Confidence in every case.</h1>
            <p className="hero__lead">
              Lawshed is a boutique firm delivering tailored counsel for individuals, families,
              and businesses. We combine decisive advocacy with a calm, collaborative approach.
            </p>
            <div className="hero__actions">
              <button className="button">Schedule Consultation</button>
              <button className="button button--ghost">View Practice Areas</button>
            </div>
            <div className="hero__stats">
              <div>
                <strong>98%</strong>
                <span>Client satisfaction</span>
              </div>
              <div>
                <strong>35+</strong>
                <span>Years of combined experience</span>
              </div>
              <div>
                <strong>1,200</strong>
                <span>Cases resolved</span>
              </div>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__image-card">
              <span>Since 1996</span>
              <h3>Modern advocacy with classic values.</h3>
              <p>
                Our team works side-by-side with you to understand the full story and build a
                winning strategy.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section__heading">
            <p className="eyebrow">About our firm</p>
            <h2>Legal counsel built on trust and clarity.</h2>
          </div>
          <div className="about__grid">
            <div>
              <p>
                We believe every client deserves clear guidance and a responsive legal partner.
                From the first consultation to the final resolution, we prioritize transparency,
                strategic planning, and results.
              </p>
            </div>
            <div className="about__highlights">
              <div>
                <h3>Client-first approach</h3>
                <p>Dedicated teams and direct attorney access throughout your case.</p>
              </div>
              <div>
                <h3>Collaborative strategy</h3>
                <p>We map every milestone and keep you informed at each step.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="section practice">
          <div className="section__heading">
            <p className="eyebrow">Practice areas</p>
            <h2>Focused expertise for complex matters.</h2>
          </div>
          <div className="card-grid">
            {practiceAreas.map((area) => (
              <article key={area.title} className="card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <a href="#contact">Learn more →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="attorneys" className="section attorneys">
          <div className="section__heading">
            <p className="eyebrow">Our attorneys</p>
            <h2>Experienced advocates ready to help.</h2>
          </div>
          <div className="attorneys__grid">
            {attorneys.map((attorney) => (
              <div key={attorney.name} className="attorney-card">
                <div className="attorney-card__photo" />
                <div>
                  <h3>{attorney.name}</h3>
                  <p>{attorney.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="insights" className="section insights">
          <div className="section__heading">
            <p className="eyebrow">Insights</p>
            <h2>Timely guidance and legal resources.</h2>
          </div>
          <div className="insights__grid">
            {insights.map((item) => (
              <article key={item.title} className="insight">
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <a href="#contact">Read article →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact__content">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Schedule a confidential consultation.</h2>
              <p>
                Tell us about your matter and a member of our team will reach out within one
                business day.
              </p>
              <div className="contact__details">
                <div>
                  <strong>Office</strong>
                  <span>410 Hudson Street, New York, NY</span>
                </div>
                <div>
                  <strong>Phone</strong>
                  <span>+1 (800) 458-9901</span>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>contact@lawshed.com</span>
                </div>
              </div>
            </div>
            <form className="contact__form">
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Phone number" />
              <textarea rows="4" placeholder="How can we help?" />
              <button className="button">Submit request</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h3>Lawshed</h3>
          <p>Resolute counsel for modern legal challenges.</p>
        </div>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#practice">Practice Areas</a>
          <a href="#attorneys">Attorneys</a>
          <a href="#insights">Insights</a>
        </div>
        <div>
          <p>© 2024 Lawshed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
