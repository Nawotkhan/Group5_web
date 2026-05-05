import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ user, logout }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const links = [
    { to: '/home',        label: 'Home'        },
    { to: '/episodes',    label: 'Episodes'    },
    { to: '/predictions', label: 'Predictions' },
    { to: '/reviews',     label: 'Reviews'     },
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink to="/home" className="nav-brand">
          SimPredictions
        </NavLink>

        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-menu ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <span className="nav-user">Hi, {user.username}</span>
          </li>
          <li>
            <button className="btn btn-outline nav-logout" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}