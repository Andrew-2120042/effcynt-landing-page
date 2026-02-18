import { Edit3, MousePointerClick, Sparkles } from 'lucide-react';
import React from 'react';

export const HowItWorks: React.FC = () => {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Write better in 3 seconds</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>It's really that simple.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '80px', background: '#f3f4f6', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'black' }}>
                            <Edit3 size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Write anything, anywhere</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>Type your rough thoughts in any app - email, Slack, docs, social media.</p>
                    </div>

                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '80px', background: '#f3f4f6', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'black' }}>
                            <MousePointerClick size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Highlight + press Cmd+E</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>Select the text you want to improve and hit the magic hotkey.</p>
                    </div>

                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '80px', background: '#f3f4f6', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'black' }}>
                            <Sparkles size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. AI makes it perfect</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>Your text is instantly rewritten to be clear, professional, and polished.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
