"use client";

import { useState, useEffect } from 'react';

export default function MobileNav() {
    const [activeTab, setActiveTab] = useState('home');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Check if current path is not home, hide nav
        if (window.location.pathname.startsWith('/admin')) {
            return;
        }

        const handleScroll = () => {
            const sections = ['home', 'work', 'services', 'contact'];
            let currentSection = 'home';

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Adjust threshold - if the top of the section is somewhat near the middle of screen
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
                        currentSection = section;
                    }
                }
            }
            setActiveTab(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isMounted) return null;
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/admin')) return null;

    const tabs = [
        { id: 'home', label: 'HOME', icon: 'home', href: '#home' },
        { id: 'work', label: 'WORK', icon: 'grid_view', href: '#work' },
        { id: 'services', label: 'SERVICES', icon: 'lightbulb', href: '#services' },
        { id: 'contact', label: 'CONTACT', icon: 'chat_bubble', href: '#contact' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-[100] flex justify-center pb-6 px-4 pointer-events-none">
            <div className="flex items-center justify-between gap-2 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800/60 px-6 py-2 rounded-full shadow-2xl max-w-sm w-full pointer-events-auto">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <a
                            key={tab.id}
                            href={tab.href}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-1 flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                        >
                            <span
                                className="material-symbols-outlined text-[24px]"
                                style={isActive ? { fontVariationSettings: "'FILL' 1" } : { fontVariationSettings: "'FILL' 0" }}
                            >
                                {tab.icon}
                            </span>
                            <p className="text-[10px] font-bold uppercase tracking-wider mt-1">{tab.label}</p>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
