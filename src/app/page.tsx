import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';

export default async function Home() {
  const supabase = await createClient();
  const { data: profile } = await supabase.from('profile').select('*').single();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800/60 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full overflow-hidden border-2 border-primary/20 relative">
            {profile?.hero_image_url ? (
              <Image
                src={profile.hero_image_url}
                alt={profile.full_name || 'Fahim Faisal'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-200 animate-pulse" />
            )}
          </div>
          <span className="font-bold tracking-tight text-slate-900 dark:text-white">
            {profile?.full_name || 'Fahim Faisal'}
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 pr-4">
          <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Home</a>
          <a href="#work" className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Work</a>
          <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Main Content Assembled */}
      <main className="flex-1 flex flex-col items-center scroll-smooth pb-24">

        {/* =======================
            SECTION 1: HOME (HERO)
            ======================= */}
        <section id="home" className="w-full max-w-4xl px-6 py-12 flex flex-col items-center">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
            {/* Text Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 w-full lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                {profile?.full_name || 'Fahim Mohammad Faisal'}
              </h1>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-primary/80">
                  {profile?.short_title || 'AI Automation Engineer'} | <span className="text-slate-400 font-normal">Former Creative Designer (2023–2025)</span>
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                  {profile?.bio || 'I design intelligent systems that automate workflows, enhance business efficiency, and turn ideas into scalable digital solutions.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row w-full gap-4 mt-6">
                <a href="#contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95">
                    Connect With Me
                  </button>
                </a>
                <a href="#work" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-900 transition-all active:scale-95">
                    View My Work
                  </button>
                </a>
              </div>
            </div>

            {/* Portrait Area */}
            <div className="relative w-full lg:w-2/5 flex justify-center">
              {/* Soft Circular Glow Background */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75 animate-pulse"></div>

              <div className="relative z-10 size-64 md:size-80 rounded-full border-[8px] border-white dark:border-slate-900 shadow-2xl overflow-hidden bg-slate-100">
                {profile?.hero_image_url ? (
                  <Image
                    src={profile.hero_image_url}
                    alt="Professional portrait"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200" />
                )}
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-2 lg:right-0 z-20 glass-morphism border border-slate-200/50 dark:border-slate-700/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[180px]">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">smart_toy</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Expertise</span>
                  <span className="text-sm font-bold">AI Workflow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Section */}
          <div className="w-full mt-12 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
              <span className="text-slate-500 text-sm font-medium mb-1">Experience</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">2+ Years</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
              <span className="text-slate-500 text-sm font-medium mb-1">Projects</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">40+</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
              <span className="text-slate-500 text-sm font-medium mb-1">Clients</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">25+</span>
            </div>
          </div>

          {/* Skills/Expertise */}
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-default relative">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Automation</h3>
                <p className="text-slate-500 text-sm">Building custom agents and automated LLM workflows.</p>
              </div>
            </div>
            <div className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-default relative">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Creative Design</h3>
                <p className="text-slate-500 text-sm">Crafting clean, Apple-inspired user interfaces.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full max-w-4xl border-t border-slate-200 dark:border-slate-800 my-8"></div>


        {/* =======================
            SECTION 2: WORK (PORTFOLIO)
            ======================= */}
        <section id="work" className="w-full max-w-4xl px-4 py-8 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6 px-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined block">folder_open</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Work</h2>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-3 px-2 overflow-x-auto no-scrollbar pb-4">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary px-5 text-white shadow-sm transition-all hover:opacity-90">
              <span className="text-sm font-semibold">All Projects</span>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 px-5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
              <span className="text-sm font-medium">AI Agents</span>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 px-5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
              <span className="text-sm font-medium">Automation</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Card 1 */}
            <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">n8n</span>
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">API</span>
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">LLM</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">Python</span>
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">GPT-4</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">Pinecone</span>
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">Langchain</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">WebSockets</span>
                  <span className="px-2 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase">FastAPI</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="w-full max-w-4xl border-t border-slate-200 dark:border-slate-800 my-8"></div>


        {/* =======================
            SECTION 3: SERVICES (ABOUT)
            ======================= */}
        <section id="services" className="w-full max-w-4xl px-4 py-8 scroll-mt-20">
          <div className="mb-8 px-2">
            <h2 className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">lightbulb</span> Services & Journey
            </h2>
            <h1 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">From Design to Intelligent Systems</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {profile?.about_story || 'Bridging the gap between aesthetic excellence and computational efficiency. My journey reflects a transition from visual storytelling to building the invisible engines that power modern enterprise.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-2">
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
            </div>

            <div className="md:col-span-5 relative pl-8 py-4">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 ml-4"></div>
              <div className="absolute left-0 top-0 h-1/2 w-px timeline-gradient ml-4"></div>

              <div className="space-y-16 relative">
                <div className="relative">
                  <div className="absolute -left-10 mt-1 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark ring-2 ring-primary/20"></div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">2025 — Present</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">AI Automation Specialist</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Developing autonomous agents and LLM-driven business logic for enterprise scalability.</p>
                </div>
                <div className="relative opacity-60">
                  <div className="absolute -left-10 mt-1 size-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-background-light dark:border-background-dark"></div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">2023 — 2025</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">Graphic Designer</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Specializing in brand identity, UI/UX conceptualization, and digital storytelling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full max-w-4xl border-t border-slate-200 dark:border-slate-800 my-8"></div>


        {/* =======================
            SECTION 4: CONTACT
            ======================= */}
        <section id="contact" className="w-full max-w-4xl px-4 py-8 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <h3 className="text-lg font-bold tracking-tight">Automation &amp; AI Stack</h3>
              </div>
              <div className="flex gap-2 flex-wrap mb-10">
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-primary/10 px-4 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-[20px]">hub</span>
                  <p className="text-sm font-semibold">n8n</p>
                </div>
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-primary/10 px-4 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
                  <p className="text-sm font-semibold">OpenAI</p>
                </div>
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-primary/10 px-4 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-[20px]">code</span>
                  <p className="text-sm font-semibold">Python</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">palette</span>
                <h3 className="text-lg font-bold tracking-tight">Design &amp; Creative</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-[20px]">draw</span>
                  <p className="text-sm font-semibold">Illustrator</p>
                </div>
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-[20px]">grid_view</span>
                  <p className="text-sm font-semibold">Figma</p>
                </div>
              </div>
            </div>

            {/* Contact Form Details */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6">Let&apos;s Build Something Intelligent</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Name</label>
                  <input className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary py-3 px-4 outline-none" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</label>
                  <input className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary py-3 px-4 outline-none" placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Message</label>
                  <textarea className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary py-3 px-4 outline-none" placeholder="Tell me about your project..." rows={4}></textarea>
                </div>
                <button className="w-full bg-slate-900 dark:bg-primary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
