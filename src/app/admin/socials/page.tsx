'use client';

import { createBrowserClient } from '@supabase/ssr';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SocialLinksManager() {
    const [links, setLinks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // New form state
    const [platform, setPlatform] = useState('');
    const [url, setUrl] = useState('');
    const [iconName, setIconName] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_key'
    );
    const router = useRouter();

    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        const { data, error } = await supabase.from('social_links').select('*').order('created_at', { ascending: true });
        if (data) setLinks(data);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        const { error } = await supabase.from('social_links').insert([
            { platform, url, icon_name: iconName }
        ]);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Social link added!');
            setPlatform('');
            setUrl('');
            setIconName('');
            fetchLinks();
            router.refresh();
        }
        setIsSaving(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this link?')) return;
        const { error } = await supabase.from('social_links').delete().eq('id', id);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Deleted successfully');
            fetchLinks();
            router.refresh();
        }
    };

    if (loading) return <div className="text-slate-500">Loading social links...</div>;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Social Links</h1>
                <p className="text-slate-500">Manage your social media presence.</p>
            </div>

            <form onSubmit={handleAdd} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-lg mb-4">Add New Link</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Platform Name</label>
                        <input type="text" value={platform} onChange={e => setPlatform(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. LinkedIn" required />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">URL</label>
                        <input type="url" value={url} onChange={e => setUrl(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://" required />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Icon Name (Google Material)</label>
                        <input type="text" value={iconName} onChange={e => setIconName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. share" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" disabled={isSaving} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all disabled:opacity-50">
                        {isSaving ? 'Adding...' : 'Add Link'}
                    </button>
                </div>
            </form>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Icon</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Platform</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">URL</th>
                            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {links.length === 0 ? (
                            <tr><td colSpan={4} className="px-6 py-8 text-center text-slate-500">No social links found. Add one above.</td></tr>
                        ) : (
                            links.map(link => (
                                <tr key={link.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="material-symbols-outlined text-slate-400">{link.icon_name || 'link'}</span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-900">{link.platform}</td>
                                    <td className="px-6 py-4 text-slate-500"><a href={link.url} target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:underline">{link.url}</a></td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => handleDelete(link.id)} className="text-red-500 hover:text-red-700 bg-red-50 px-3 py-1 rounded-lg text-sm font-semibold transition-colors">Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
