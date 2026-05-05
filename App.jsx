import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar      from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Login       from './pages/Login';
import Signup      from './pages/Signup';
import Home        from './pages/Home';
import Episodes    from './pages/Episodes';
import Predictions from './pages/Predictions';
import Reviews     from './pages/Reviews';

const STATIC_STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  size:  Math.random() * 3 + 1,
  top:   Math.random() * 100,
  left:  Math.random() * 100,
  delay: Math.random() * 6,
  dur:   Math.random() * 3 + 2,
}));

export default function App() {
  const [theme, setTheme] = useState('light');
  const [user,  setUser]  = useState(() => {
    const saved = localStorage.getItem('sp_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const login  = (data) => { setUser(data); localStorage.setItem('sp_user', JSON.stringify(data)); };
  const logout = ()     => { setUser(null); localStorage.removeItem('sp_user'); };
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <BrowserRouter>

      {/* ══ BACKGROUND SCENE ══ */}
      <div className="scene-bg">

        {/* ── LIGHT: Sun ── */}
        <div className="sun" />

        {/* ── LIGHT: Clouds (index 2-13 match nth-child selectors) ── */}
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />

        {/* ── DARK: Moon + craters ── */}
        <div className="moon">
          <div className="moon-crater" />
          <div className="moon-crater" />
          <div className="moon-crater" />
        </div>

        {/* ── DARK: Static twinkling stars ── */}
        {STATIC_STARS.map(s => (
          <div
            key={s.id}
            className="star-static"
            style={{
              width:           s.size + 'px',
              height:          s.size + 'px',
              top:             s.top  + '%',
              left:            s.left + '%',
              animationDelay:  s.delay + 's',
              animationDuration: s.dur + 's',
            }}
          />
        ))}

        {/* ── DARK: Shooting stars ── */}
        <div className="star-shoot" />
        <div className="star-shoot" />
        <div className="star-shoot" />
        <div className="star-shoot" />
        <div className="star-shoot" />
        <div className="star-shoot" />
        <div className="star-shoot" />
        <div className="star-shoot" />

      </div>
      {/* ══ END BACKGROUND SCENE ══ */}

      {user && <Navbar user={user} logout={logout} />}

      <Routes>
        <Route path="/"            element={user ? <Navigate to="/home" /> : <Login  onLogin={login} />} />
        <Route path="/signup"      element={user ? <Navigate to="/home" /> : <Signup onLogin={login} />} />
        <Route path="/home"        element={user ? <Home />        : <Navigate to="/" />} />
        <Route path="/episodes"    element={user ? <Episodes />    : <Navigate to="/" />} />
        <Route path="/predictions" element={user ? <Predictions /> : <Navigate to="/" />} />
        <Route path="/reviews"     element={user ? <Reviews user={user} /> : <Navigate to="/" />} />
      </Routes>

      <ThemeToggle theme={theme} toggle={toggleTheme} />

    </BrowserRouter>
  );
}