'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();

    const tabs = [
        { id: 'home', label: 'Home', icon: 'home', href: '/' },
        { id: 'portfolio', label: 'Work', icon: 'folder_open', href: '/portfolio' },
        { id: 'about', label: 'Story', icon: 'lightbulb', href: '/about' },
        { id: 'contact', label: 'Connect', icon: 'chat_bubble', href: '/contact' },
    ];

    const activeTab = tabs.find((t) => (t.href === '/' ? pathname === '/' : pathname.startsWith(t.href)))?.id || 'home';

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-[#101722]/95 backdrop-blur-lg px-4 pb-6 pt-3 flex items-center justify-between lg:hidden transition-all duration-300">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <Link
                        key={tab.id}
                        href={tab.href}
                        className={`flex flex-1 flex-col items-center justify-center gap-1 transition-all duration-300 ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined text-[24px] ${isActive ? 'fill-1' : ''}`}
                        >
                            {tab.icon}
                        </span>
                        <p className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</p>
                    </Link>
                );
            })}
        </nav>
    );
}
