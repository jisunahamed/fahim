import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { Profile } from '@/types';

export default async function About() {
    const supabase = await createClient();
    const { data: profile } = await supabase.from('profile').select('*').single();

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#f5f7f8] dark:bg-[#101722] overflow-x-hidden pb-20 lg:pb-0">
            {/* Header */}
            <div className="flex items-center bg-[#f5f7f8] dark:bg-[#101722] p-4 pb-2 justify-between sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
                <Link href="/" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">About</h2>
            </div>

            {/* Main Content */}
            <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
                <div className="mb-8">
                    <h2 className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">My Journey</h2>
                    <h1 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">From Design to Intelligent Systems</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Bridging the gap between aesthetic excellence and computational efficiency. My journey reflects a transition from visual storytelling to building the invisible engines that power modern enterprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Column: Story */}
                    <div className="md:col-span-7 space-y-8">
                        <div className="whitespace-pre-wrap text-slate-600 dark:text-slate-400 leading-relaxed">
                            {profile?.about_story || 'Starting as a Graphic Designer (2023-2025), I focused on the "How it looks." I mastered visual hierarchy and human psychology. In 2025, I pivoted to AI Automation, focusing on "How it works." I now build systems that think, learn, and scale.'}
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                { icon: 'lightbulb', label: 'Creative Thinking' },
                                { icon: 'account_tree', label: 'System Architecture' },
                                { icon: 'rocket_launch', label: 'Automation Strategy' },
                                { icon: 'hub', label: 'AI Workflow Design' },
                            ].map((item) => (
                                <div key={item.label} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <span className="material-symbols-outlined text-blue-500 mb-2">{item.icon}</span>
                                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{item.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="md:col-span-5 relative pl-8 py-4">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 ml-4"></div>
                        <div className="absolute left-0 top-0 h-1/2 w-px bg-gradient-to-b from-blue-500 to-transparent ml-4"></div>

                        <div className="space-y-16 relative">
                            <div className="relative">
                                <div className="absolute -left-10 mt-1 size-4 rounded-full bg-blue-500 border-4 border-[#f5f7f8] dark:border-[#101722] ring-2 ring-blue-500/20"></div>
                                <span className="text-xs font-bold text-blue-500 tracking-widest uppercase">2025 — Present</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">AI Automation Specialist</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Developing autonomous agents and LLM-driven business logic for enterprise scalability.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-10 mt-1 size-4 rounded-full bg-blue-500/40 border-4 border-[#f5f7f8] dark:border-[#101722]"></div>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">Early 2025</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">The Convergence</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Merging design language with programmatic logic to create intelligent user experiences.</p>
                            </div>
                            <div className="relative opacity-60">
                                <div className="absolute -left-10 mt-1 size-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-[#f5f7f8] dark:border-[#101722]"></div>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">2023 — 2025</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">Graphic Designer</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Specializing in brand identity, UI/UX conceptualization, and digital storytelling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Nav */}
            <div className="fixed bottom-0 w-full flex gap-2 border-t border-slate-200 dark:border-slate-800 bg-[#f5f7f8]/80 dark:bg-[#101722]/80 backdrop-blur-md px-4 pb-6 pt-2 lg:hidden">
                <Link href="/" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                    <span className="material-symbols-outlined">home</span>
                </Link>
                <Link href="/about" className="flex flex-1 flex-col items-center justify-end gap-1 text-blue-500">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                </Link>
                <Link href="/portfolio" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                    <span className="material-symbols-outlined">work</span>
                </Link>
                <Link href="/contact" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                </Link>
            </div>
        </div>
    );
}
