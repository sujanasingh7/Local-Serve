import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import API from '../services/api'

export default function Book() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [booking, setBooking] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    API.get(`/api/services/${id}`)
      .then(res => {
        setService(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Service not found.')
        setLoading(false)
      })
  }, [id])

  const handleBook = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }
    setBooking(true)
    try {
      await API.post('/api/bookings', { service: id }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setSuccess(true)
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed!')
    } finally {
      setBooking(false)
    }
  }

  if (loading) return <div className="container" style={{ padding: '4rem' }}>Loading...</div>
  if (error) return <div className="container" style={{ padding: '4rem', color: 'red' }}>{error}</div>

  if (success) return (
    <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
      <div className="success-icon">🎉</div>
      <h2>Booking Confirmed!</h2>
      <p style={{ color: '#666', margin: '1rem 0' }}>Your booking for <strong>{service?.name}</strong> has been placed.</p>
      <button className="btn btn--primary" onClick={() => navigate('/')}>Go Home</button>
    </div>
  )

  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        <h2 style={{ marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Book Service</h2>

        <div className="booking-form">
          <div className="booking-summary">
            <div className="summary-row">
              <span>Service</span>
              <strong>{service?.name}</strong>
            </div>
            <div className="summary-row">
              <span>Description</span>
              <strong>{service?.description}</strong>
            </div>
            <div className="summary-row">
              <span>Price</span>
              <strong>₹{service?.price}/hr</strong>
            </div>
            <div className="summary-row">
              <span>Status</span>
              <strong>Pending confirmation</strong>
            </div>
          </div>

          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

          <div className="form-btns">
            <button className="btn btn--outline" onClick={() => navigate(-1)}>
              ← Go Back
            </button>
            <button className="btn btn--primary" onClick={handleBook} disabled={booking}>
              {booking ? 'Booking...' : 'Confirm Booking'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}