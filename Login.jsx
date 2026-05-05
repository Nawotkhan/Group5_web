import { useState } from 'react';
import { Link }     from 'react-router-dom';
import axios        from 'axios';
import './Auth.css';

export default function Login({ onLogin }) {
  const [form, setForm]   = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await axios.post('/api/auth/login', form);
      onLogin(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card fade-up">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1280px-The_Simpsons_yellow_logo.svg.png"
          alt="Simpsons Logo"
          className="auth-logo"
        />
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-sub">Sign in to explore Simpsons predictions</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={submit} className="auth-form">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />

          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handle} required placeholder="Enter password" />

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="auth-switch">
          No account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}