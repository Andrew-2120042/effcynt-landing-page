import { X, Check } from 'lucide-react';
import React from 'react';

const ComparisonItem = ({ title, cons, pros }: { title: string, cons: string[], pros: string[] }) => (
    <div style={{ flex: 1, padding: '2rem', border: '1px solid var(--border)', borderRadius: '1rem', background: 'white' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>{title}</h3>
        <div style={{ marginBottom: '2rem' }}>
            {cons.map((con, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#ef4444' }}>
                    <X size={18} /> <span style={{ color: 'var(--muted-foreground)' }}>{con}</span>
                </div>
            ))}
        </div>
        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            {pros.map((pro, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#22c55e' }}>
                    <Check size={18} /> <span style={{ color: 'black', fontWeight: 500 }}>{pro}</span>
                </div>
            ))}
        </div>
    </div>
);

export const Comparison: React.FC = () => {
    return (
        <section id="comparison" className="section" style={{ background: '#fafafa' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Why Efficynt beats the rest</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>See the difference.</p>
                </div>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <ComparisonItem
                        title="Grammarly"
                        cons={['Just fixes grammar', 'Browser-only', 'No AI enhancement']}
                        pros={['AI-powered rewriting', 'Works everywhere', 'Makes you sound smarter']}
                    />
                    <ComparisonItem
                        title="ChatGPT / Claude"
                        cons={['Copy-paste workflow', 'Switch between apps', 'Takes 30+ seconds']}
                        pros={['Works in-place', 'One keystroke', '2 seconds total']}
                    />
                    <ComparisonItem
                        title="Other AI Tools"
                        cons={['Web apps only', 'Single purpose', 'Slow interface']}
                        pros={['System-wide hotkey', 'Any writing task', 'Instant results']}
                    />
                </div>
            </div>
        </section>
    );
};
