import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import API from '../services/api'

export default function Services() {
  const [searchParams] = useSearchParams()
  const [providers, setProviders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const q = searchParams.get('q') || ''

  useEffect(() => {
    setLoading(true)
    API.get(`/api/services?q=${q}`)
      .then(res => {
        setProviders(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load services.')
        setLoading(false)
      })
  }, [q])

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h2>Results for "<strong>{q}</strong>"</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && providers.length === 0 && (
        <p>No services found. <Link to="/">Try another search</Link></p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        {providers.map(p => (
          <div key={p._id} style={{ border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1rem 1.5rem' }}>
            <h3>{p.name}</h3>
            <p style={{ color: '#666' }}>{p.description}</p>
            <p>₹{p.price}/hr</p>
            <Link to={`/book/${p._id}`} className="btn btn--primary">Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  )
}