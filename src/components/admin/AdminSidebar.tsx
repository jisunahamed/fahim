'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminSidebar() {
    const pathname = usePathname();
    const supabase = createClientComponentClient();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    const menuItems = [
        { label: 'Overview', icon: 'dashboard', href: '/admin' },
        { label: 'Profile Settings', icon: 'person', href: '/admin/profile' },
        { label: 'Manage Projects', icon: 'work', href: '/admin/projects' },
        { label: 'Skills & Tools', icon: 'bolt', href: '/admin/skills' },
        { label: 'Social Links', icon: 'share', href: '/admin/socials' },
    ];

    return (
        <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col">
            <div className="p-6 border-b border-slate-100">
                <h1 className="font-bold text-xl text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500">settings</span>
                    Admin Dashboard
                </h1>
            </div>
            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${pathname === item.href
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-slate-100">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-medium text-red-500 hover:bg-red-50 transition-all"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </button>
            </div>
        </aside>
    );
}
