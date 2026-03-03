import Link from 'next/link';

interface NavProps {
    activeTab: 'home' | 'portfolio' | 'services' | 'contact';
}

export default function MobileNav({ activeTab }: NavProps) {
    const tabs = [
        { id: 'home', label: 'Home', icon: 'home', href: '/' },
        { id: 'portfolio', label: 'Portfolio', icon: 'grid_view', href: '/portfolio' },
        { id: 'services', label: 'Services', icon: 'construction', href: '/services' },
        { id: 'contact', label: 'Contact', icon: 'alternate_email', href: '/contact' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 glass-morphism border-t border-slate-200/50 dark:border-slate-800/50 px-6 py-3 pb-8 md:pb-4 flex justify-between items-center lg:hidden">
            {tabs.map((tab) => (
                <Link
                    key={tab.id}
                    href={tab.href as any}
                    className={`flex flex-col items-center gap-1 transition-colors ${activeTab === tab.id ? 'text-blue-500' : 'text-slate-400 hover:text-blue-500'
                        }`}
                >
                    <span className={`material-symbols-outlined ${activeTab === tab.id ? 'fill-1' : ''}`}>
                        {tab.icon}
                    </span>
                    <span className="text-[10px] font-bold">{tab.label}</span>
                </Link>
            ))}
        </nav>
    );
}
