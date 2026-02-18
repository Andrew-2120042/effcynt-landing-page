import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export const CTA: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="section" style={{ background: 'black', color: 'white', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Start writing better today</h2>
                <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '3rem' }}>Join the waitlist and be the first to try Efficynt when we launch.</p>

                <button
                    onClick={() => navigate('/waitlist')}
                    style={{
                        background: 'white',
                        color: 'black',
                        padding: '1rem 2rem',
                        borderRadius: '0.5rem',
                        fontWeight: 600,
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1.1rem'
                    }}>
                    Join Waitlist <ArrowRight size={20} />
                </button>

                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1.5rem' }}>
                    🎁 First 100 signups get Pro free for 1 month
                </p>
            </div>
        </section>
    );
};
