import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <Link to="/" className="navbar__logo">
        <span className="logo-mark">◈</span>
        <span>LocalServe</span>
      </Link>
      <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/login" className="btn btn--outline" onClick={() => setMenuOpen(false)}>Sign In</Link>
        <Link to="/register" className="btn btn--primary" onClick={() => setMenuOpen(false)}>Join Free</Link>
      </div>
      <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  )
}