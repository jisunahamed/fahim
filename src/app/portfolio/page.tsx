import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Project } from '@/types';

async function getProjects() {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    return data as Project[];
}

export default async function Portfolio() {
    const projects = await getProjects() || [];

    return (
        <div className="relative flex min-h-screen flex-col bg-[#f5f7f8] dark:bg-[#101722] pb-20">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-[#101722]/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                        <span className="material-symbols-outlined block">auto_awesome</span>
                    </Link>
                    <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">AI Portfolio</h1>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">search</span>
                    </button>
                </div>
            </header>

            {/* Filter Chips (Static for now, can be dynamic from tech_stack) */}
            <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar scroll-smooth">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-blue-500 px-5 text-white shadow-sm transition-all hover:opacity-90">
                    <span className="text-sm font-semibold">All Projects</span>
                </button>
                {['AI Agents', 'Automation', 'LLM Solutions'].map(filter => (
                    <button key={filter} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 px-5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
                        <span className="text-sm font-medium">{filter}</span>
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <main className="flex-1 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {projects.length > 0 ? projects.map((project) => (
                        <Link key={project.id} href={`/projects/${project.slug}`} className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                {project.thumbnail_url ? (
                                    <Image src={project.thumbnail_url} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-6xl text-blue-500/40">hub</span>
                                    </div>
                                )}
                                {project.featured && (
                                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-blue-500 border border-blue-500/20">Featured</div>
                                )}
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {project.short_description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech_stack?.slice(0, 4).map(tech => (
                                        <span key={tech} className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">{tech}</span>
                                    ))}
                                </div>
                                <div className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                                    <span>View Case Study</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    )) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-slate-500">No projects found. Add some from the admin panel!</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#101722]/95 backdrop-blur-lg px-4 pb-6 pt-3 flex gap-2 lg:hidden">
                <Link href="/portfolio" className="flex flex-1 flex-col items-center justify-center gap-1 text-blue-500">
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>folder_open</span>
                    <p className="text-[10px] font-bold uppercase tracking-wider">Projects</p>
                </Link>
                <Link href="/about" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500">
                    <span className="material-symbols-outlined text-[24px]">lightbulb</span>
                    <p className="text-[10px] font-semibold uppercase tracking-wider">About</p>
                </Link>
                <Link href="/contact" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500">
                    <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
                    <p className="text-[10px] font-semibold uppercase tracking-wider">Contact</p>
                </Link>
                <Link href="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500">
                    <span className="material-symbols-outlined text-[24px]">home</span>
                    <p className="text-[10px] font-semibold uppercase tracking-wider">Home</p>
                </Link>
            </nav>
        </div>
    );
}
