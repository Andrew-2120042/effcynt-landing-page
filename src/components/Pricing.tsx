import { Check } from 'lucide-react';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const PricingCard = ({ title, price, subtitle, features, isPopular }: { title: string, price: string, subtitle: string, features: string[], isPopular?: boolean }) => {
    const navigate = useNavigate();
    return (
        <div style={{
            padding: '2rem',
            borderRadius: '1rem',
            background: 'white',
            border: isPopular ? '2px solid black' : '1px solid var(--border)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transform: isPopular ? 'scale(1.05)' : 'none',
            zIndex: isPopular ? 10 : 1,
            boxShadow: isPopular ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
        }}>
            {isPopular && (
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'black',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600
                }}>
                    Most Popular
                </div>
            )}

            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{title}</h3>
                <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>{price}</span>
                    <span style={{ color: 'var(--muted-foreground)' }}>{subtitle}</span>
                </div>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Check size={18} color="black" />
                        <span style={{ color: '#374151' }}>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => navigate('/waitlist')}
                style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    background: isPopular ? 'black' : 'white',
                    color: isPopular ? 'white' : 'black',
                    border: isPopular ? 'none' : '1px solid black',
                    fontWeight: 600,
                    marginTop: 'auto',
                    cursor: 'pointer'
                }}>
                Join Waitlist
            </button>
        </div>
    );
};

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="section" style={{ background: '#fafafa' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple, transparent pricing</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>Start free forever. Upgrade when you need more.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                    <PricingCard
                        title="Free"
                        price="$0"
                        subtitle="/month"
                        features={[
                            '15 enhancements per week',
                            'Resets every Sunday',
                            'All writing styles',
                            'Works everywhere',
                            'No credit card required'
                        ]}

                    />
                    <PricingCard
                        title="Lite"
                        price="$6"
                        subtitle="/month"
                        features={[
                            '500 enhancements per month',
                            'Monthly reset',
                            'All writing styles',
                            'Works everywhere',
                            'Priority support',
                            'Rollover credits (100 max)'
                        ]}
                        isPopular
                    />
                    <PricingCard
                        title="Pro"
                        price="$12"
                        subtitle="/month"
                        features={[
                            'Unlimited enhancements',
                            'No limits, ever',
                            'All writing styles + custom',
                            'Works everywhere',
                            'Priority support',
                            'Early access to features'
                        ]}

                    />
                </div>
            </div>
        </section>
    );
};
