import { useState } from 'react';
import { Link }     from 'react-router-dom';
import axios        from 'axios';
import './Auth.css';

export default function Signup({ onLogin }) {
  const [form, setForm]   = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await axios.post('/api/auth/signup', form);
      onLogin(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
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
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-sub">Join the world of Simpsons prophecy</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={submit} className="auth-form">
          <label>Username</label>
          <input type="text" name="username" value={form.username} onChange={handle} required placeholder="ChooseAUsername" />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />

          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handle} required placeholder="Min 6 characters" minLength={6} />

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <p className="auth-switch">
          Already registered? <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
}