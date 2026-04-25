import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SERVICES = [
  { id: 1, icon: '🔧', name: 'Plumbing', desc: 'Leaks, installations & repairs', color: '#2563EB', count: '240+ pros' },
  { id: 2, icon: '⚡', name: 'Electrical', desc: 'Wiring, panels & fixtures', color: '#D97706', count: '180+ pros' },
  { id: 3, icon: '🏠', name: 'Cleaning', desc: 'Deep clean & regular upkeep', color: '#059669', count: '320+ pros' },
  { id: 4, icon: '🌿', name: 'Gardening', desc: 'Lawn care & landscaping', color: '#16A34A', count: '150+ pros' },
  { id: 5, icon: '🎨', name: 'Painting', desc: 'Interior & exterior painting', color: '#DC2626', count: '200+ pros' },
  { id: 6, icon: '❄️', name: 'AC Repair', desc: 'Service, install & maintenance', color: '#0891B2', count: '130+ pros' },
  { id: 7, icon: '🪚', name: 'Carpentry', desc: 'Custom furniture & repairs', color: '#92400E', count: '90+ pros' },
  { id: 8, icon: '📦', name: 'Moving', desc: 'Packing, shifting & logistics', color: '#7C3AED', count: '110+ pros' },
]

const STATS = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '2K+', label: 'Verified Pros' },
  { value: '30+', label: 'Service Categories' },
  { value: '4.9★', label: 'Average Rating' },
]

const TESTIMONIALS = [
  { name: 'Priya Sharma', role: 'Homeowner', text: 'Found an amazing plumber in 10 minutes. Professional, quick and affordable!', rating: 5, avatar: 'PS' },
  { name: 'Arjun Mehta', role: 'Business Owner', text: 'Used the cleaning service for our office. Absolutely spotless. Will book again!', rating: 5, avatar: 'AM' },
  { name: 'Sneha Reddy', role: 'Apartment Resident', text: 'The AC technician was super professional. Fixed the issue in an hour!', rating: 4, avatar: 'SR' },
]

export default function Home() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/services?q=${search}&loc=${location}`)
  }

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="blob blob--1" />
          <div className="blob blob--2" />
          <div className="blob blob--3" />
          <div className="grid-overlay" />
        </div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="pulse-dot" />
            Trusted by 50,000+ households
          </div>
          <h1 className="hero__title">
            Find Skilled <br />
            <span className="gradient-text">Local Experts</span><br />
            Near You
          </h1>
          <p className="hero__sub">
            Book verified professionals for home services in minutes. Fast, reliable, and affordable.
          </p>
          <form className="search-bar" onSubmit={handleSearch}>
            <div className="search-bar__field">
              <span className="search-bar__icon">🔍</span>
              <input type="text" placeholder="What service do you need?" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="search-bar__divider" />
            <div className="search-bar__field">
              <span className="search-bar__icon">📍</span>
              <input type="text" placeholder="Your location" value={location} onChange={e => setLocation(e.target.value)} />
            </div>
            <button type="submit" className="btn btn--primary search-bar__btn">Search</button>
          </form>
          <div className="hero__tags">
            {['Plumbing', 'Electrical', 'Cleaning', 'AC Repair', 'Gardening'].map(t => (
              <button key={t} className="tag" onClick={() => navigate(`/services?q=${t}`)}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip">
        {STATS.map(s => (
          <div key={s.label} className="stat">
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">What We Offer</span>
            <h2 className="section__title">Popular Services</h2>
            <p className="section__sub">Choose from hundreds of skilled professionals</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <Link to={`/book/${s.id}`} key={s.id} className="service-card" style={{ '--accent': s.color, '--delay': `${i * 60}ms` }}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__name">{s.name}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <span className="service-card__count">{s.count}</span>
                <div className="service-card__arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Simple Process</span>
            <h2 className="section__title">How It Works</h2>
          </div>
          <div className="steps">
            {[
              { n: '01', icon: '🔍', title: 'Search', desc: 'Enter the service you need and your location.' },
              { n: '02', icon: '👤', title: 'Choose', desc: 'Browse profiles, ratings and reviews.' },
              { n: '03', icon: '📅', title: 'Book', desc: 'Schedule at your convenience instantly.' },
              { n: '04', icon: '✨', title: 'Done', desc: 'Get the job done and leave a review.' },
            ].map((step, i) => (
              <div key={i} className="step">
                <div className="step__num">{step.n}</div>
                <div className="step__icon">{step.icon}</div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Reviews</span>
            <h2 className="section__title">What Customers Say</h2>
          </div>
          <div className="testimonials">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="testimonial__stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                <p className="testimonial__text">"{t.text}"</p>
                <div className="testimonial__author">
                  <div className="avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial__name">{t.name}</div>
                    <div className="testimonial__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container cta-banner__content">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of happy customers today.</p>
          <div className="cta-banner__btns">
            <Link to="/register" className="btn btn--white">Create Account</Link>
            <Link to="/login" className="btn btn--outline-white">Sign In</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Link to="/" className="navbar__logo" style={{ color: 'white' }}>
              <span className="logo-mark">◈</span><span>LocalServe</span>
            </Link>
            <p>Connecting homes with trusted local professionals.</p>
          </div>
          <div className="footer__links">
            <div>
              <h4>Company</h4>
              <Link to="/">Home</Link>
              <Link to="/login">Sign In</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">© 2024 LocalServe. All rights reserved.</div>
      </footer>
    </div>
  )
}