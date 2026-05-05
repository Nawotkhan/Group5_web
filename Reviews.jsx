import { useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css';

const EXAMPLE_REVIEWS = [
  { username: 'DoughnutDave', rating: 5, title: 'Absolutely mind-blowing',        body: 'I always assumed the Simpsons predictions were just internet myths. After going through every breakdown on this site, I am genuinely shaken. The Osaka Flu alone is worth the visit. Incredibly well-researched.' },
  { username: 'YellowFamilyFan', rating: 5, title: 'Best Simpsons resource online', body: 'The Predictions page is spectacular. Every episode is broken down with dates, references and actual source links. This is not a conspiracy site, it is a documented archive.' },
  { username: 'ChalkboardKid',  rating: 4, title: 'Impressive work',               body: 'The Homer physics equation section genuinely surprised me. Brought a physicist friend and she confirmed the formula analysis was accurate. Four stars only because I want even more episodes added.' },
  { username: 'Springfielder99', rating: 5, title: 'Cannot stop reading',          body: 'Started with the Disney-Fox episode and ended up on the site for three hours. Genuinely impressive.' },
  { username: 'BartOnABoard',   rating: 3, title: 'Good, speed up the mobile video player pls',     body: 'Love the content. Would be perfect if the video section loaded a bit faster on mobile though. Keep building.' },
];

const Stars = ({ value, onChange }) => (
  <div className="star-row">
    {[1,2,3,4,5].map(s => (
      <button
        key={s}
        type="button"
        className={`star ${s <= value ? 'filled' : ''}`}
        onClick={() => onChange && onChange(s)}
      >
        {s <= value ? '★' : '☆'}
      </button>
    ))}
  </div>
);

export default function Reviews({ user }) {
  const [reviews, setReviews]     = useState([]);
  const [form, setForm]           = useState({ rating: 0, title: '', body: '' });
  const [editing, setEditing]     = useState(null);
  const [editForm, setEditForm]   = useState({});
  const [error, setError]         = useState('');
  const [success, setSuccess]     = useState('');
  const [loading, setLoading]     = useState(false);

  const token = user?.token;
  const headers = { Authorization: `Bearer ${token}` };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get('/api/reviews');
      setReviews(data);
    } catch { /* silent */ }
  };

  useEffect(() => { fetchReviews(); }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.rating) return setError('Please select a star rating.');
    setError(''); setSuccess(''); setLoading(true);
    try {
      await axios.post('/api/reviews', form, { headers });
      setSuccess('Review submitted. Thank you!');
      setForm({ rating: 0, title: '', body: '' });
      fetchReviews();
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed');
    } finally { setLoading(false); }
  };

  const startEdit = (r) => {
    setEditing(r._id);
    setEditForm({ rating: r.rating, title: r.title, body: r.body });
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(`/api/reviews/${id}`, editForm, { headers });
      setEditing(null);
      fetchReviews();
    } catch { setError('Update failed'); }
  };

  const deleteReview = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    try {
      await axios.delete(`/api/reviews/${id}`, { headers });
      fetchReviews();
    } catch { setError('Delete failed'); }
  };

  return (
    <div className="page-wrapper reviews-page">
      <h1 className="section-title">Reviews</h1>

      {/* FORM */}
      <div className="review-form-wrap fade-up">
        <h2 className="form-title">Share Your Experience</h2>
        <p className="form-sub">Tell the community what you found, what surprised you, what you think.</p>

        {error   && <div className="rv-error">{error}</div>}
        {success && <div className="rv-success">{success}</div>}

        <form onSubmit={handleSubmit} className="rv-form">
          <label>Your Rating</label>
          <Stars value={form.rating} onChange={v => setForm({ ...form, rating: v })} />

          <label>Review Title</label>
          <input
            type="text"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required placeholder="Sum it up in a few words..."
          />

          <label>Your Review</label>
          <textarea
            value={form.body}
            onChange={e => setForm({ ...form, body: e.target.value })}
            required rows={4}
            placeholder="What did you think? What stood out? What should we improve?"
          />

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>

      {/* EXAMPLE REVIEWS */}
      <h2 className="subsection-title">What People Are Saying</h2>
      <div className="reviews-grid">
        {EXAMPLE_REVIEWS.map((r, i) => (
          <div className="rv-card fade-up" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="rv-header">
              <div className="rv-avatar">{r.username[0].toUpperCase()}</div>
              <div>
                <div className="rv-username">{r.username}</div>
                <Stars value={r.rating} />
              </div>
            </div>
            <h4 className="rv-title">{r.title}</h4>
            <p className="rv-body">{r.body}</p>
            <div className="rv-badge">Verified User</div>
          </div>
        ))}
      </div>

      {/* LIVE REVIEWS FROM DB */}
      {reviews.length > 0 && (
        <>
          <h2 className="subsection-title">Community Reviews</h2>
          <div className="reviews-grid">
            {reviews.map(r => (
              <div className="rv-card live-card fade-up" key={r._id}>
                {editing === r._id ? (
                  <div className="edit-form">
                    <Stars value={editForm.rating} onChange={v => setEditForm({ ...editForm, rating: v })} />
                    <input value={editForm.title} onChange={e => setEditForm({ ...editForm, title: e.target.value })} />
                    <textarea rows={3} value={editForm.body} onChange={e => setEditForm({ ...editForm, body: e.target.value })} />
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-primary" onClick={() => saveEdit(r._id)}>Save</button>
                      <button className="btn btn-outline" onClick={() => setEditing(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="rv-header">
                      <div className="rv-avatar" style={{ background: 'var(--accent)' }}>{r.username[0].toUpperCase()}</div>
                      <div>
                        <div className="rv-username">{r.username}</div>
                        <Stars value={r.rating} />
                      </div>
                    </div>
                    <h4 className="rv-title">{r.title}</h4>
                    <p className="rv-body">{r.body}</p>
                    {r.userId === user?.id && (
                      <div className="rv-actions">
                        <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }} onClick={() => startEdit(r)}>Edit</button>
                        <button className="btn btn-danger"  style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }} onClick={() => deleteReview(r._id)}>Delete</button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}