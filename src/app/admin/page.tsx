import { createClient } from '@/lib/supabase-server';
import Link from 'next/link';

export default async function AdminDashboard() {
    const supabase = await createClient();
    const { count: projectCount } = await supabase.from('projects').select('*', { count: 'exact', head: true });
    const { count: skillCount } = await supabase.from('skills').select('*', { count: 'exact', head: true });
    const { data: profile } = await supabase.from('profile').select('*').single();

    const stats = {
        projects: projectCount || 0,
        skills: skillCount || 0,
        profileStatus: profile ? 'Completed' : 'Empty'
    };

    const cards = [
        { title: 'Total Projects', value: stats.projects, icon: 'work', color: 'blue' },
        { title: 'Skills Listed', value: stats.skills, icon: 'bolt', color: 'yellow' },
        { title: 'Profile Data', value: stats.profileStatus, icon: 'person', color: 'green' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Portfolio Overview</h1>
                <p className="text-slate-500">Manage your digital presence and monitor your portfolio stats.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div key={card.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
                        <div className={`p-4 rounded-xl bg-blue-500/10 text-blue-600`}>
                            <span className="material-symbols-outlined text-4xl">{card.icon}</span>
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">{card.title}</p>
                            <h3 className="text-3xl font-bold text-slate-900">{card.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-500">edit</span>
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link href="/admin/projects" className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-left">
                            <span className="material-symbols-outlined mb-2 block text-blue-500">add_box</span>
                            <p className="font-bold text-slate-900">Add Project</p>
                            <p className="text-slate-500 text-xs">Create a new case study</p>
                        </Link>
                        <Link href="/admin/profile" className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:bg-purple-50 transition-all text-left">
                            <span className="material-symbols-outlined mb-2 block text-purple-500">article</span>
                            <p className="font-bold text-slate-900">Update Bio</p>
                            <p className="text-slate-500 text-xs">Edit hero and about story</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
