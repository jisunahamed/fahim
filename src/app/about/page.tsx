import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';

export default async function About() {
    const supabase = await createClient();
    const { data: profile } = await supabase.from('profile').select('*').single();

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            {/* Header */}
            <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
                <Link href="/" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">About</h2>
            </div>

            {/* Main Content Section */}
            <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
                <div className="mb-8">
                    <h2 className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">My Journey</h2>
                    <h1 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">From Design to Intelligent Systems</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        {profile?.about_story || 'Bridging the gap between aesthetic excellence and computational efficiency. My journey reflects a transition from visual storytelling to building the invisible engines that power modern enterprise.'}
                    </p>
                </div>

                {/* Two-Column Layout (Stack on mobile, side-by-side on md+) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Column: Story */}
                    <div className="md:col-span-7 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                The Creative Origin
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                Starting as a Graphic Designer (2023-2025), I focused on the "How it looks." I mastered visual hierarchy and human psychology, learning that design is not just about beauty—it's about communication and intent.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">psychology</span>
                                The Technical Pivot
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                In 2025, I realized that the most beautiful interfaces are limited by the manual processes behind them. I pivoted to AI Automation, focusing on "How it works." I now build systems that think, learn, and scale.
                            </p>
                        </div>

                        {/* Highlight Cards */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mb-2">lightbulb</span>
                                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">Creative Thinking</h4>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mb-2">account_tree</span>
                                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">System Architecture</h4>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mb-2">rocket_launch</span>
                                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">Automation Strategy</h4>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mb-2">hub</span>
                                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">AI Workflow Design</h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vertical Timeline */}
                    <div className="md:col-span-5 relative pl-8 py-4">
                        {/* Vertical Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 ml-4"></div>
                        <div className="absolute left-0 top-0 h-1/2 w-px timeline-gradient ml-4"></div>

                        <div className="space-y-16 relative">
                            {/* Present */}
                            <div className="relative">
                                <div className="absolute -left-10 mt-1 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark ring-2 ring-primary/20"></div>
                                <span className="text-xs font-bold text-primary tracking-widest uppercase">2025 — Present</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">AI Automation Specialist</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Developing autonomous agents and LLM-driven business logic for enterprise scalability.</p>
                            </div>
                            {/* Midpoint */}
                            <div className="relative">
                                <div className="absolute -left-10 mt-1 size-4 rounded-full bg-primary/40 border-4 border-background-light dark:border-background-dark"></div>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">Early 2025</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">The Convergence</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Merging design language with programmatic logic to create intelligent user experiences.</p>
                            </div>
                            {/* Past */}
                            <div className="relative opacity-60">
                                <div className="absolute -left-10 mt-1 size-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-background-light dark:border-background-dark"></div>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">2023 — 2025</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">Graphic Designer</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Specializing in brand identity, UI/UX conceptualization, and digital storytelling.</p>
                            </div>
                        </div>

                        {/* Abstract Timeline Image Decor */}
                        <div className="mt-12 rounded-xl overflow-hidden aspect-square border border-slate-200 dark:border-slate-800 shadow-lg">
                            <img
                                alt="Abstract visualization of neural networks and design patterns"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSbfaTfM8m8hOiq6HwW6_VM0Ub2Z2MaKa7hwyfCSBJk0jPtSXWFf7yOaYz_OBJkjxs2A5uxr3YJDL5wWHZnRNFFG6JT0-TrPBkOuFIle74DZoqRseKOQV7Iub0hBjjaH-ygKdxLe1-z11_5fajXIkOp4xg5j6d9YGTY2hyEF1_Tvyvy14SC5fuze3FbIqrr3D76o1mqCKbkGPI_WRYskB4A4sK3NFomm1h-A7OBd48EVKqyZLHJ04nZS5Y8d6cDgt14ouZaA9wi-E"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
