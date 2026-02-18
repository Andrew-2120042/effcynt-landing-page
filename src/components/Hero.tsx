import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const { count, error } = await supabase
                    .from('waitlist')
                    .select('*', { count: 'exact', head: true });

                if (!error) {
                    setWaitlistCount((count || 0) + 2871);
                }
            } catch (err) {
                console.error('Error fetching count:', err);
            }
        };

        fetchCount();

        // Subscribe to real-time changes
        const subscription = supabase
            .channel('waitlist_changes_hero')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'waitlist' }, () => {
                setWaitlistCount((prev) => (prev ? prev + 1 : 2872));
            })
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <section style={{
            padding: '8rem 0 6rem',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Write Better.<br />Instantly.<br />Everywhere.
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--muted-foreground)',
                        marginBottom: '2.5rem',
                        maxWidth: '500px',
                        lineHeight: 1.6
                    }}>
                        Your AI writing assistant that transforms messy text into polished prose with one keystroke. Works in email, Slack, docs, social media - anywhere you type.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => navigate('/waitlist')}
                                style={{
                                    background: 'black',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'transform 0.2s',
                                    cursor: 'pointer'
                                }}>
                                Join Waitlist <ArrowRight size={20} />
                            </button>
                            <button style={{
                                background: 'transparent',
                                color: 'black',
                                padding: '1rem 2rem',
                                borderRadius: '8px',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                border: '1px solid #e5e7eb',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                cursor: 'pointer'
                            }}>
                                <Play size={20} /> Watch Demo
                            </button>
                        </div>

                        <p style={{ marginTop: '1rem', fontSize: '1.1rem', fontWeight: 500, color: '#333' }}>
                            Join <b>{waitlistCount ? waitlistCount.toLocaleString() : '2,871'}</b> others on the waitlist.
                        </p>

                        <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>
                            "Like Grammarly, but powered by AI" • No credit card required
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 20px 60px -10px rgba(0,0,0,0.1)',
                        border: '1px solid var(--border)',
                        padding: '2rem',
                        aspectRatio: '4/3',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    {/* Simulated Text Editor */}
                    <div style={{
                        marginBottom: '1rem',
                        fontFamily: 'monospace',
                        fontSize: '1.2rem',
                        color: '#ef4444',
                        textDecoration: 'line-through',
                        opacity: 0.6
                    }}>
                        hey just wanted to check in on that thing we talked about last week let me know when u can
                    </div>

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        style={{
                            background: '#f3f4f6',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            borderLeft: '4px solid black'
                        }}
                    >
                        <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                            Hi [Name],
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                            I wanted to follow up on our discussion from last week. Could you provide an update when you have a moment?
                        </p>
                        <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Thank you!</p>
                    </motion.div>

                    <div style={{
                        position: 'absolute',
                        bottom: '2rem',
                        right: '2rem',
                        background: 'black',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span>Cmd + E</span>
                        <div style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }}></div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .container { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};
