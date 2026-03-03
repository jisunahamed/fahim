import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import { supabase } from '@/lib/supabase';
import { Profile, Skill } from '@/types';

async function getProfile() {
  const { data } = await supabase.from('profile').select('*').single();
  return data as Profile;
}

async function getExpertise() {
  const { data } = await supabase.from('skills').select('*').limit(2);
  return data as Skill[];
}

export default async function Home() {
  const profile = await getProfile();
  const expertise = await getExpertise();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-20 lg:pb-0">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-morphism border-b border-slate-200/50 dark:border-slate-800/50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full overflow-hidden border-2 border-blue-500/20">
            {profile?.hero_image_url ? (
              <Image
                src={profile.hero_image_url}
                alt={profile.full_name}
                width={40}
                height={40}
                className="object-cover h-full w-full"
              />
            ) : (
              <div className="w-full h-full bg-slate-200 animate-pulse" />
            )}
          </div>
          <span className="font-bold tracking-tight text-slate-900 dark:text-white">
            {profile?.full_name?.split(' ')[0] || 'Fahim'} {profile?.full_name?.split(' ')[2] || 'Faisal'}
          </span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              {profile?.full_name || 'Fahim Mohammad Faisal'}
            </h1>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-blue-500/80">
                {profile?.short_title || 'AI Automation Engineer'} | Former Creative Designer <span className="text-slate-400 font-normal">(2023–2025)</span>
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                {profile?.bio || 'I design intelligent systems that automate workflows, enhance business efficiency, and turn ideas into scalable digital solutions.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-4 mt-4">
              <Link href="/contact" className="flex-1 lg:flex-none">
                <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all active:scale-95">
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
            <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full scale-75 animate-pulse"></div>
            <div className="relative z-10 size-64 md:size-80 rounded-full border-[8px] border-white dark:border-slate-900 shadow-2xl overflow-hidden bg-slate-100">
              {profile?.hero_image_url ? (
                <Image
                  src={profile.hero_image_url}
                  alt="Portrait"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-200" />
              )}
            </div>
            <div className="absolute -bottom-4 -right-2 lg:right-0 z-20 glass-morphism border border-slate-200/50 dark:border-slate-700/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[180px]">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-blue-500">smart_toy</span>
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
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <span className="text-slate-500 text-sm font-medium mb-1">Experience</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">2+ Years</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <span className="text-slate-500 text-sm font-medium mb-1">Projects</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">40+</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
              <span className="text-slate-500 text-sm font-medium mb-1">Clients</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">25+</span>
            </div>
          </div>
        </section>

        {/* Skills/Expertise */}
        <section className="w-full max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center lg:text-left">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all cursor-default">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Automation</h3>
                <p className="text-slate-500 text-sm">Building custom agents and automated LLM workflows.</p>
              </div>
            </div>
            <div className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all cursor-default">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
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

      <MobileNav activeTab="home" />
    </div>
  );
}
