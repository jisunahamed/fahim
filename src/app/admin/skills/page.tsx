'use client';

import { createBrowserClient } from '@supabase/ssr';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SkillsManager() {
    const [skills, setSkills] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // New form state
    const [name, setName] = useState('');
    const [category, setCategory] = useState('automation'); // automation, design, other
    const [level, setLevel] = useState('80');
    const [isSaving, setIsSaving] = useState(false);

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_key'
    );
    const router = useRouter();

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        const { data, error } = await supabase.from('skills').select('*').order('category', { ascending: true }).order('created_at', { ascending: false });
        if (data) setSkills(data);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        const { error } = await supabase.from('skills').insert([
            { name, category, level: parseInt(level) }
        ]);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Skill added!');
            setName('');
            setLevel('80');
            fetchSkills();
            router.refresh();
        }
        setIsSaving(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this skill?')) return;
        const { error } = await supabase.from('skills').delete().eq('id', id);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Deleted successfully');
            fetchSkills();
            router.refresh();
        }
    };

    if (loading) return <div className="text-slate-500">Loading skills...</div>;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Skills & Tools</h1>
                <p className="text-slate-500">Manage your technical skills and tools.</p>
            </div>

            <form onSubmit={handleAdd} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-lg mb-4">Add New Skill</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Skill / Tool Name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. React, n8n, Python" required />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Category</label>
                        <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none">
                            <option value="automation">Automation & AI</option>
                            <option value="design">Design & Creative</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Proficiency Level (0-100)</label>
                        <input type="number" min="0" max="100" value={level} onChange={e => setLevel(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" disabled={isSaving} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all disabled:opacity-50">
                        {isSaving ? 'Adding...' : 'Add Skill'}
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['automation', 'design', 'other'].map(cat => {
                    const catSkills = skills.filter(s => s.category === cat);
                    if (catSkills.length === 0 && cat === 'other') return null;

                    return (
                        <div key={cat} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                                <h3 className="font-bold text-slate-900 capitalize">{cat === 'automation' ? 'Automation & AI' : cat === 'design' ? 'Design & Creative' : 'Other'}</h3>
                            </div>
                            <ul className="divide-y divide-slate-100">
                                {catSkills.length === 0 ? <li className="px-6 py-4 text-slate-500 text-sm">No skills added in this category.</li> : catSkills.map(skill => (
                                    <li key={skill.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <span className="font-medium text-slate-900">{skill.name}</span>
                                            <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-md">{skill.level}%</span>
                                        </div>
                                        <button onClick={() => handleDelete(skill.id)} className="text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded-md text-sm font-semibold transition-colors">Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
