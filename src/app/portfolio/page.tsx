import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import { createClient } from '@/lib/supabase-server';
import { Project } from '@/types';

export default async function Portfolio() {
    const supabase = await createClient();
    const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false });

    return (
        <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark pb-24 lg:pb-0 transition-colors duration-300">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="p-2 bg-primary/10 rounded-lg text-primary">
                        <span className="material-symbols-outlined block">auto_awesome</span>
                    </Link>
                    <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">AI Portfolio</h1>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">search</span>
                    </button>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">more_vert</span>
                    </button>
                </div>
            </header>

            {/* Filter Chips */}
            <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar scroll-smooth">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary px-5 text-white shadow-sm transition-all hover:opacity-90">
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
                    {projects && projects.length > 0 ? projects.map((project: Project) => (
                        <div key={project.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                {project.thumbnail_url ? (
                                    <Image src={project.thumbnail_url} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform duration-500">hub</span>
                                    </div>
                                )}
                                {project.featured && (
                                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">Featured</div>
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
                                <button className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                                    <span>View Case Study</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-slate-500 dark:text-slate-400">No projects found. Add some from the admin panel!</p>
                        </div>
                    )}
                </div>
            </main>

            <MobileNav />
        </div>
    );
}
