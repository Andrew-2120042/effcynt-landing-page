import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      height: '60px' // Reduced height
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        <div
          onClick={handleLogoClick}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <div style={{ width: '28px', height: '28px', background: 'var(--primary)', borderRadius: '50%' }}></div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Efficynt</span>
        </div>

        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          <a href="/#comparison" style={{ fontWeight: 500, fontSize: '0.95rem', color: '#333', textDecoration: 'none' }}>Compare</a>
          <a href="/#pricing" style={{ fontWeight: 500, fontSize: '0.95rem', color: '#333', textDecoration: 'none' }}>Pricing</a>
          <button
            onClick={() => navigate('/waitlist')}
            style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Join Waitlist
          </button>
        </nav>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none' }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
