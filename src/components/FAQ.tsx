import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    textAlign: 'left',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                {question}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div style={{ marginTop: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

export const FAQ: React.FC = () => {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Your questions, answered</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>Have something else in mind? Contact us.</p>
                </div>

                <FAQItem
                    question="How does the free tier work?"
                    answer="You get 15 free enhancements every week, forever. No credit card required. Your credits reset every Sunday at midnight. Perfect for trying Efficynt or light usage."
                />
                <FAQItem
                    question="What happens when I run out of credits?"
                    answer="Free tier resets weekly. Lite/Pro users get monthly credits or unlimited. You can always upgrade anytime for more credits."
                />
                <FAQItem
                    question="Does it work on Windows and Mac?"
                    answer="Yes! Efficynt works on both macOS and Windows. System-wide hotkey (Cmd+E on Mac, Ctrl+E on Windows) works in any app."
                />
                <FAQItem
                    question="Is my data private?"
                    answer="Absolutely. Your text is processed securely and immediately discarded. We never store, log, or train AI models on your writing. Your words are private."
                />
                <FAQItem
                    question="How is this different from Grammarly?"
                    answer="Grammarly fixes grammar. Efficynt uses AI to completely rewrite your text to sound better. Plus, it works system-wide (not just browser) and is faster (one hotkey vs opening extension)."
                />
            </div>
        </section>
    );
};
