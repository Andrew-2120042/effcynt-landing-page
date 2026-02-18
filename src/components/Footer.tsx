import { Twitter, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer style={{ background: '#111827', color: 'white', padding: '5rem 0 3rem' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                        <div style={{ width: '24px', height: '24px', background: 'white', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Efficynt</span>
                    </div>
                    <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Your AI writing assistant.</p>
                    <div style={{ display: 'flex', gap: '1rem', color: '#9ca3af' }}>
                        <Twitter size={20} />
                        <Linkedin size={20} />
                        <Mail size={20} />
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Product</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#d1d5db' }}>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Company</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#d1d5db' }}>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #1f2937', color: '#6b7280', fontSize: '0.9rem' }}>
                © 2024 Efficynt. All rights reserved.
            </div>
        </footer>
    );
};
