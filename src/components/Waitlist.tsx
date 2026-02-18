import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2, CheckCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export const Waitlist: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchCount = async () => {
            try {
                const { count, error } = await supabase
                    .from('waitlist')
                    .select('*', { count: 'exact', head: true });

                if (error) {
                    console.error('Error fetching count:', error);
                } else {
                    setWaitlistCount((count || 0) + 2871);
                }
            } catch (err) {
                console.error('Error fetching count:', err);
            }
        };

        fetchCount();

        // Subscribe to real-time changes
        const subscription = supabase
            .channel('waitlist_changes')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'waitlist' }, () => {
                setWaitlistCount((prev) => (prev ? prev + 1 : 2872));
            })
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');
        setErrorMessage('');

        if (!email || !email.includes('@')) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) {
                if (error.code === '23505') { // Unique violation
                    setStatus('success'); // Treat as success for the user
                } else {
                    throw error;
                }
            } else {
                setStatus('success');
            }
            setEmail('');
        } catch (error: any) {
            console.error('Error adding to waitlist:', error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section style={{
            minHeight: '100vh',
            background: 'white',
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative'
        }}>
            <Link to="/" style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#666',
                textDecoration: 'none',
                fontSize: '0.9rem'
            }}>
                <ArrowLeft size={18} />
                Back
            </Link>

            <div className="container" style={{ maxWidth: '600px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Logo & Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
                >
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'white',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: '1px solid #f3f4f6'
                    }}>
                        <div style={{ width: '32px', height: '32px', background: 'black', borderRadius: '50%' }}></div>
                    </div>

                    <div style={{
                        padding: '0.5rem 1rem',
                        background: '#f3f4f6',
                        borderRadius: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{ width: '6px', height: '6px', background: 'black', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', color: '#333' }}>AVAILABLE IN EARLY 2026</span>
                    </div>
                </motion.div>

                {/* Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(3rem, 5vw, 4rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        color: 'black'
                    }}
                >
                    Get early access
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem', maxWidth: '400px', lineHeight: 1.6 }}
                >
                    Be amongst the first to experience Efficynt. Sign up to be notified when we launch.
                </motion.p>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ width: '100%', marginBottom: '3rem' }}
                >
                    {status === 'success' ? (
                        <div style={{
                            padding: '1.5rem',
                            background: '#f0fdf4',
                            borderRadius: '12px',
                            border: '1px solid #dcfce7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem'
                        }}>
                            <CheckCircle size={24} color="#16a34a" />
                            <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#16a34a' }}>You're on the list!</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    padding: '1.25rem 1.5rem',
                                    paddingRight: '140px', // Space for button
                                    borderRadius: '12px',
                                    background: '#f9fafb',
                                    border: '1px solid #e5e7eb',
                                    fontSize: '1rem',
                                    color: 'black',
                                    outline: 'none',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'black';
                                    e.target.style.background = 'white';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#e5e7eb';
                                    e.target.style.background = '#f9fafb';
                                }}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '8px',
                                    bottom: '8px',
                                    background: 'black',
                                    color: 'white',
                                    padding: '0 1.5rem',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    fontSize: '0.9rem',
                                    opacity: loading ? 0.8 : 1
                                }}
                            >
                                {loading ? <Loader2 className="animate-spin" size={18} /> : 'Join waitlist'}
                            </button>
                        </form>
                    )}
                    {status === 'error' && (
                        <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '1rem' }}>{errorMessage}</p>
                    )}
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <div style={{ display: 'flex', marginLeft: '10px' }}>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '2px solid white',
                                overflow: 'hidden',
                                marginLeft: '-10px',
                                background: '#f3f4f6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#9ca3af'
                            }}>
                                <User size={16} />
                            </div>
                        ))}
                    </div>
                    <span style={{ color: '#666', fontSize: '0.95rem' }}>
                        Join <span style={{ color: 'black', fontWeight: 600 }}>{waitlistCount ? waitlistCount.toLocaleString() : '2,871'}+</span> others on the waitlist!
                    </span>
                </motion.div>

            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </section>
    );
};
