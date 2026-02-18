import { ArrowRight } from 'lucide-react';
import React from 'react';

export const CTA: React.FC = () => {
    return (
        <section className="section" style={{ background: 'black', color: 'white', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Start writing better today</h2>
                <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '3rem' }}>Join the waitlist and be the first to try Efficynt when we launch.</p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '500px' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: '1rem 1.5rem',
                                borderRadius: '0.5rem',
                                border: 'none',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <button style={{
                            whiteSpace: 'nowrap',
                            background: '#2563eb',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem',
                            fontWeight: 600,
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            Join Waitlist <ArrowRight size={20} />
                        </button>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        🎁 First 100 signups get Pro free for 1 month
                    </p>
                </form>
            </div>
        </section>
    );
};
