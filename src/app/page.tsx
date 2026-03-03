import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';

export default async function Home() {
  const supabase = await createClient();
  const { data: profile } = await supabase.from('profile').select('*').single();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-morphism border-b border-slate-200/50 dark:border-slate-800/50 px-4 py-3 flex items-center justify-between">
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
          <span className="font-bold tracking-tight text-slate-900 dark:text-white">Fahim Faisal</span>
        </div>
        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-4xl px-6 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">
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

            <div className="flex flex-col sm:flex-row w-full gap-4 mt-4">
              <Link href="/contact" className="flex-1 lg:flex-none">
                <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95">
                  Connect With Me
                </button>
              </Link>
              <Link href="/portfolio" className="flex-1 lg:flex-none">
                <button className="w-full px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-900 transition-all active:scale-95">
                  View My Work
                </button>
              </Link>
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
        </section>

        {/* Quick Stats Section */}
        <section className="w-full max-w-4xl px-4 py-8">
          <div className="grid grid-cols-3 gap-4">
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
        </section>

        {/* Skills/Expertise */}
        <section className="w-full max-w-4xl px-6 py-12 pb-32">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center lg:text-left">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </main>

      {/* Bottom Navigation Bar (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-morphism border-t border-slate-200/50 dark:border-slate-800/50 px-6 py-3 pb-8 md:pb-4 flex justify-between items-center bg-white/50 dark:bg-slate-900/50">
        <Link className="flex flex-col items-center gap-1 text-primary" href="/">
          <span className="material-symbols-outlined fill-1">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="/portfolio">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-bold">Portfolio</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="/about">
          <span className="material-symbols-outlined">construction</span>
          <span className="text-[10px] font-bold">Services</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="/contact">
          <span className="material-symbols-outlined">alternate_email</span>
          <span className="text-[10px] font-bold">Contact</span>
        </Link>
      </nav>
    </div>
  );
}
