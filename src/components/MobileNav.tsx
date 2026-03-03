'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();

    // Do not show on admin pages
    if (pathname.startsWith('/admin')) {
        return null;
    }

    const tabs = [
        { id: 'home', label: 'Home', icon: 'home', href: '/' },
        { id: 'portfolio', label: 'Work', icon: 'grid_view', href: '/portfolio' },
        { id: 'about', label: 'Services', icon: 'lightbulb', href: '/about' },
        { id: 'contact', label: 'Contact', icon: 'chat_bubble', href: '/contact' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-4 pointer-events-none">
            <div className="flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 px-6 py-3 rounded-full shadow-lg max-w-sm w-full pointer-events-auto">
                {tabs.map((tab) => {
                    const isActive = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);

                    return (
                        <Link
                            key={tab.id}
                            href={tab.href}
                            className={`flex flex-1 flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 hover:text-primary dark:text-slate-500'
                                }`}
                        >
                            <span
                                className="material-symbols-outlined"
                                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                            >
                                {tab.icon}
                            </span>
                            <p className="text-[10px] font-bold uppercase tracking-tight">{tab.label}</p>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
