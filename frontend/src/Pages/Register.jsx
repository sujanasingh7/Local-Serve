import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../services/api'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'customer' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await API.post('/api/auth/register', form)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed!')
    } finally {
      setLoading(false)
    }
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
        <h2>Create Account</h2>
        <p className="auth-card__sub">Join thousands of happy users</p>
        <div className="role-toggle">
          <button type="button" className={form.role === 'customer' ? 'active' : ''}
            onClick={() => setForm(f => ({ ...f, role: 'customer' }))}>👤 I need services</button>
          <button type="button" className={form.role === 'provider' ? 'active' : ''}
            onClick={() => setForm(f => ({ ...f, role: 'provider' }))}>🔧 I offer services</button>
        </div>

        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

        <form onSubmit={submit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your name" value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Min 8 characters" value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))} required minLength={8} />
          </div>
          <button type="submit" className="btn btn--primary"
            style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
            disabled={loading}>
            {loading ? 'Creating...' : 'Create Account →'}
          </button>
        </form>
        <p className="auth-card__footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}