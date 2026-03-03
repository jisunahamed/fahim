'use client';

import { createBrowserClient } from '@supabase/ssr';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProjectsManager() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Form state
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [techStack, setTechStack] = useState(''); // Comma separated
    const [featured, setFeatured] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_key'
    );
    const router = useRouter();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
        if (data) setProjects(data);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        const stackList = techStack.split(',').map(s => s.trim()).filter(Boolean);

        const { error } = await supabase.from('projects').insert([
            {
                title,
                slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
                short_description: shortDesc,
                thumbnail_url: thumbnailUrl,
                tech_stack: stackList,
                featured
            }
        ]);

        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Project added!');
            setTitle('');
            setSlug('');
            setShortDesc('');
            setThumbnailUrl('');
            setTechStack('');
            setFeatured(false);
            fetchProjects();
            router.refresh();
        }
        setIsSaving(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;
        const { error } = await supabase.from('projects').delete().eq('id', id);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Deleted successfully');
            fetchProjects();
            router.refresh();
        }
    };

    if (loading) return <div className="text-slate-500">Loading projects...</div>;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Manage Projects</h1>
                <p className="text-slate-500">Add, edit, or remove projects shown on your portfolio.</p>
            </div>

            <form onSubmit={handleAdd} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col">
                <h3 className="font-bold text-lg mb-4">Add New Project</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Title</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">URL Slug (Optional)</label>
                        <input type="text" value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="auto-generated-if-empty" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Short Description</label>
                    <textarea value={shortDesc} onChange={e => setShortDesc(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" rows={2} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Thumbnail URL</label>
                        <input type="text" value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tech Stack (Comma Separated)</label>
                        <input type="text" value={techStack} onChange={e => setTechStack(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Next.js, Python, OpenAI" />
                    </div>
                </div>

                <div className="flex items-center gap-2 py-2">
                    <input type="checkbox" id="featured" checked={featured} onChange={e => setFeatured(e.target.checked)} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <label htmlFor="featured" className="text-sm font-medium text-slate-700">Feature this project prominently</label>
                </div>

                <div className="flex justify-end pt-2">
                    <button type="submit" disabled={isSaving} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all disabled:opacity-50">
                        {isSaving ? 'Adding...' : 'Add Project'}
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length === 0 ? (
                    <div className="col-span-full bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500">No projects found. Add your first one above!</div>
                ) : (
                    projects.map(project => (
                        <div key={project.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                            {project.thumbnail_url ? (
                                <div className="h-32 bg-slate-100 relative">
                                    <img src={project.thumbnail_url} alt={project.title} className="w-full h-full object-cover" />
                                    {project.featured && <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-md">FEATURED</span>}
                                </div>
                            ) : (
                                <div className="h-32 bg-slate-100 flex items-center justify-center relative">
                                    <span className="material-symbols-outlined text-4xl text-slate-300">image</span>
                                    {project.featured && <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-md">FEATURED</span>}
                                </div>
                            )}
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{project.title}</h3>
                                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{project.short_description}</p>
                                <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                                    {(project.tech_stack || []).map((t: string) => (
                                        <span key={t} className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold px-2 py-1 rounded">{t}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleDelete(project.id)} className="flex-1 bg-red-50 text-red-500 hover:bg-red-100 font-semibold py-2 rounded-lg text-sm transition-colors">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
