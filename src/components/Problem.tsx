
import { Meh, Watch, HelpCircle } from 'lucide-react';
import React from 'react';

const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
    return (
        <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '1.5rem',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem'
        }}>
            <div style={{
                background: '#f3f4f6',
                color: 'black',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{title}</h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', lineHeight: 1.6 }}>{description}</p>
        </div>
    );
};

export const Problem: React.FC = () => {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Tired of sounding unprofessional?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>The struggle is real.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    <Card
                        icon={<Meh size={32} />}
                        title="Awkward Emails"
                        description={`"hey can u send that file plz thx"\nSound professional without the effort`}
                    />
                    <Card
                        icon={<Watch size={32} />}
                        title="Wasting Time Rewriting"
                        description={`Copy to ChatGPT → Wait → Copy back\nGet perfect text in 2 seconds instead`}
                    />
                    <Card
                        icon={<HelpCircle size={32} />}
                        title="Never Know What to Say"
                        description={`Staring at blank screens\nAI writes it for you, in your voice`}
                    />
                </div>
            </div>
        </section>
    );
};
