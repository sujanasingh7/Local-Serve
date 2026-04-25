import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
      </div>
      <div className="auth-card">
        <Link to="/" className="auth-card__logo">
          <span className="logo-mark">◈</span> LocalServe
        </Link>
        <h2>Welcome back</h2>
        <p className="auth-card__sub">Sign in to manage your bookings</p>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))} required />
          </div>
          <button type="submit" className="btn btn--primary" style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}>
            Sign In
          </button>
        </form>
        <p className="auth-card__footer">
          Don't have an account? <Link to="/register">Create one free</Link>
        </p>
      </div>
    </div>
  )
}