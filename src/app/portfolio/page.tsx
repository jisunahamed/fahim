import Link from 'next/link';

export default function Portfolio() {
    return (
        <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <span className="material-symbols-outlined block">auto_awesome</span>
                    </div>
                    <h1 className="text-lg font-bold tracking-tight">AI Portfolio</h1>
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
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 px-5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="text-sm font-medium">AI Agents</span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 px-5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="text-sm font-medium">Automation</span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 px-5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="text-sm font-medium">LLM Solutions</span>
                </button>
            </div>

            {/* Project Grid */}
            <main className="flex-1 p-4 @container">
                <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform duration-500">hub</span>
                            </div>
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">Active Agent</div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Autonomous Lead Gen</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                End-to-end automated pipeline for identifying and qualifying high-intent prospects using custom-trained agents and multi-stage filtering.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">n8n</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">API</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">LLM</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">AI</span>
                            </div>
                            <button className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                                <span>View Case Study</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform duration-500">neurology</span>
                            </div>
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">Generation Engine</div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Neural Content Engine</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                Multi-modal content generation system that maintains specific brand voice and consistency across all digital marketing channels.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">Python</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">GPT-4</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">AI</span>
                            </div>
                            <button className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                                <span>View Case Study</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform duration-500">database</span>
                            </div>
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">Data RAG</div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Smart Doc Analyzer</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                Vector-based knowledge retrieval system for massive technical documentation sets with zero-hallucination guardrails.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">Pinecone</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">Langchain</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">React</span>
                            </div>
                            <button className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                                <span>View Case Study</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-l from-orange-500/10 to-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-6xl text-primary/40 group-hover:scale-110 transition-transform duration-500">voice_chat</span>
                            </div>
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">Realtime Voice</div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI Sales Assistant</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                Real-time voice processing agent capable of handling complex customer inquiries with low latency and human-like inflection.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">WebSockets</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">ElevenLabs</span>
                                <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">FastAPI</span>
                            </div>
                            <button className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                                <span>View Case Study</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Spacer for nav */}
            <div className="h-20"></div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg px-4 pb-6 pt-3 flex gap-2">
                <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="/portfolio">
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>folder_open</span>
                    <p className="text-[10px] font-bold uppercase tracking-wider">Projects</p>
                </Link>
                <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" href="/about">
                    <span className="material-symbols-outlined text-[24px]">lightbulb</span>
                    <p className="text-[10px] font-semibold uppercase tracking-wider">Insights</p>
                </Link>
                <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" href="/contact">
                    <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
                    <p className="text-[10px] font-semibold uppercase tracking-wider">Contact</p>
                </Link>
                <Link className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" href="/">
                    <span className="material-symbols-outlined text-[24px]">person</span>
                    <p className="text-[10px] font-semibold uppercase tracking-wider">Profile</p>
                </Link>
            </nav>
        </div>
    );
}
