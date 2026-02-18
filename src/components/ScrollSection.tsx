import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

interface ScrollItem {
    id: string;
    title: string;
    content: string;
    image: React.ReactNode;
}

const items: ScrollItem[] = [
    {
        id: 'email',
        title: 'Professional Email',
        content: 'Turn casual notes into polished professional communication instantly. Perfect for client updates and leadership correspondence.',
        image: (
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 w-full h-full flex flex-col justify-center text-left">
                <div style={{ textDecoration: 'line-through', color: '#ef4444', fontFamily: 'monospace', marginBottom: '1rem', opacity: 0.6 }}>
                    "hey just wanted to check in on that thing we talked about last week let me know when u can"
                </div>
                <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid black' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Hi [Name],</p>
                    <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>I wanted to follow up on our discussion from last week. Could you provide an update when you have a moment?</p>
                    <p style={{ fontWeight: 600 }}>Thank you!</p>
                </div>
            </div>
        )
    },
    {
        id: 'slack',
        title: 'Slack Messages',
        content: 'Clarify your thoughts before hitting send. Avoid misunderstandings and keep projects moving forward efficiently.',
        image: (
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 w-full h-full flex flex-col justify-center text-left">
                <div style={{ textDecoration: 'line-through', color: '#ef4444', fontFamily: 'monospace', marginBottom: '1rem', opacity: 0.6 }}>
                    "the api is broken bc we didnt check for null values need to fix asap"
                </div>
                <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6' }}>
                    <p style={{ fontWeight: 500, color: '#1e3a8a' }}>The API is down due to missing null value validation. I'm investigating now and will have a fix deployed shortly.</p>
                </div>
            </div>
        )
    },
    {
        id: 'social',
        title: 'Social Media',
        content: 'Engage your audience with compelling posts. From LinkedIn thought leadership to Twitter threads.',
        image: (
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 w-full h-full flex flex-col justify-center text-left">
                <div style={{ textDecoration: 'line-through', color: '#ef4444', fontFamily: 'monospace', marginBottom: '1rem', opacity: 0.6 }}>
                    "just launched my new product check it out pretty cool i think"
                </div>
                <div style={{ background: '#faf5ff', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #9333ea' }}>
                    <p style={{ color: '#581c87' }}>Excited to announce the launch of [Product]! After months of development, we've built something that solves [problem]. Check it out and let me know what you think! 🚀</p>
                </div>
            </div>
        )
    },
    {
        id: 'docs',
        title: 'Formal Documents',
        content: 'Elevate your reports and proposals. Ensure your writing reflects your expertise and attention to detail.',
        image: (
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 w-full h-full flex flex-col justify-center text-left">
                <div style={{ textDecoration: 'line-through', color: '#ef4444', fontFamily: 'monospace', marginBottom: '1rem', opacity: 0.6 }}>
                    "we should probably focus on getting more users and keeping them around so the business grows"
                </div>
                <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #1f2937' }}>
                    <p style={{ lineHeight: 1.8 }}>Our growth strategy should prioritize two key objectives: <strong>user acquisition</strong> through targeted marketing channels, and <strong>retention</strong> through enhanced onboarding experiences.</p>
                </div>
            </div>
        )
    }
];

export const ScrollSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                rootMargin: '-40% 0px -40% 0px', // Trigger when element is in the middle 20% of viewport
                threshold: 0
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section ref={containerRef} style={{ position: 'relative', padding: '4rem 0' }}>
            <div className="container" style={{ display: 'flex', position: 'relative', gap: '4rem' }}>
                <div style={{ width: '40%', paddingBottom: '20vh' }}>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => { sectionRefs.current[index] = el; }}
                            style={{
                                height: '80vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                opacity: activeIndex === index ? 1 : 0.3,
                                transition: 'opacity 0.5s',
                            }}
                        >
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>{item.content}</p>
                        </div>
                    ))}
                </div>

                <div style={{
                    width: '50%',
                    height: '100vh',
                    position: 'sticky',
                    top: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            style={{ width: '100%', height: 'auto', maxHeight: '70vh' }}
                        >
                            {items[activeIndex].image}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
