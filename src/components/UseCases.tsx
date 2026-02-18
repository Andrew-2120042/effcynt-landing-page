import { Briefcase, GraduationCap, Rocket, Globe, Smartphone, Users } from 'lucide-react';
import React from 'react';

const UseCaseCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div style={{
        padding: '2rem',
        borderRadius: '1rem',
        background: 'white',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem'
    }}>
        <div style={{
            background: '#f9fafb',
            padding: '1rem',
            borderRadius: '0.75rem',
            color: 'black'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{title}</h3>
        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{description}</p>
    </div>
);

export const UseCases: React.FC = () => {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Perfect for anyone who writes</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>Enhance your communication.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <UseCaseCard
                        icon={<Briefcase size={24} />}
                        title="Remote Workers"
                        description="Never send another awkward email. Write professional messages to colleagues and clients instantly."
                    />
                    <UseCaseCard
                        icon={<GraduationCap size={24} />}
                        title="Students"
                        description="Sound smarter in every email. Emails to professors, group chats, essays - always clear and polished."
                    />
                    <UseCaseCard
                        icon={<Rocket size={24} />}
                        title="Freelancers"
                        description="Impress clients effortlessly. Professional proposals, updates, and communication without the stress."
                    />
                    <UseCaseCard
                        icon={<Globe size={24} />}
                        title="Non-Native Speakers"
                        description="Perfect English every time. Write confidently in English, no matter your native language."
                    />
                    <UseCaseCard
                        icon={<Smartphone size={24} />}
                        title="Content Creators"
                        description="Better posts, tweets, captions. Engaging social media content that sounds natural and gets engagement."
                    />
                    <UseCaseCard
                        icon={<Users size={24} />}
                        title="Teams"
                        description="Consistent communication. Everyone writes professionally, maintaining your brand voice."
                    />
                </div>
            </div>
        </section>
    );
};
