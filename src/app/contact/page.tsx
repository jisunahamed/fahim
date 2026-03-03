import { supabase } from '@/lib/supabase';
import { Skill, SocialLink } from '@/types';
import Link from 'next/link';

async function getSkills() {
    const { data } = await supabase.from('skills').select('*').order('level', { ascending: false });
    return data as Skill[];
}

async function getSocialLinks() {
    const { data } = await supabase.from('social_links').select('*');
    return data as SocialLink[];
}

export default async function Contact() {
    const skills = await getSkills();
    const socialLinks = await getSocialLinks();

    const automationSkills = skills?.filter(s => s.category === 'automation') || [];
    const designSkills = skills?.filter(s => s.category === 'design') || [];

    return (
        <div className="relative flex min-h-screen w-full flex-col max-w-2xl mx-auto shadow-sm bg-white dark:bg-[#101722]/50 pb-24">
            {/* Header */}
            <header className="flex items-center px-4 py-6 justify-between sticky top-0 bg-[#f5f7f8]/80 dark:bg-[#101722]/80 backdrop-blur-md z-10">
                <Link href="/" className="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center rounded-full bg-slate-200/50 dark:bg-slate-800/50">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-lg font-bold tracking-tight flex-1 text-center pr-10">Skills & Connect</h2>
            </header>

            <main className="flex-1 px-4">
                {/* Automation Section */}
                <section className="mt-4">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-blue-500">auto_awesome</span>
                        <h3 className="text-lg font-bold tracking-tight">Automation & AI</h3>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {automationSkills.length > 0 ? automationSkills.map(skill => (
                            <div key={skill.id} className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-blue-500/10 px-4 border border-blue-500/20">
                                <p className="text-sm font-semibold">{skill.name}</p>
                            </div>
                        )) : (
                            ['n8n', 'OpenAI', 'Python', 'Zapier', 'Airtable'].map(s => (
                                <div key={s} className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-blue-500/10 px-4 border border-blue-500/20">
                                    <p className="text-sm font-semibold">{s}</p>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* Design Section */}
                <section className="mt-10">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-blue-500">palette</span>
                        <h3 className="text-lg font-bold tracking-tight">Design & Creative</h3>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {designSkills.length > 0 ? designSkills.map(skill => (
                            <div key={skill.id} className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 border border-slate-200 dark:border-slate-700">
                                <p className="text-sm font-semibold">{skill.name}</p>
                            </div>
                        )) : (
                            ['Photoshop', 'Illustrator', 'Figma', 'After Effects'].map(s => (
                                <div key={s} className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 border border-slate-200 dark:border-slate-700">
                                    <p className="text-sm font-semibold">{s}</p>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-16 text-center">
                    <div className="relative overflow-hidden rounded-xl bg-slate-900 dark:bg-blue-500/20 p-8 text-white">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold leading-tight mb-4">Let’s Build Something Intelligent Together</h2>
                            <p className="text-slate-300 dark:text-slate-200 mb-8 max-w-md mx-auto">Ready to automate your workflow or create a stunning digital experience?</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {socialLinks?.length > 0 ? socialLinks.map(link => (
                                    <a key={link.id} href={link.url} target="_blank" className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">{link.icon_name || 'link'}</span>
                                        {link.platform}
                                    </a>
                                )) : (
                                    <>
                                        <a className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors" href="#">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                            Email Me
                                        </a>
                                        <a className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-lg backdrop-blur-sm transition-colors" href="#">
                                            <span className="material-symbols-outlined text-[20px]">share</span>
                                            LinkedIn
                                        </a>
                                        <a className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-lg backdrop-blur-sm transition-colors" href="#">
                                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                            Book a Call
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
                        <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="mt-12 mb-8">
                    <h3 className="text-lg font-bold mb-6">Quick Message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Name</label>
                                <input className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-lg focus:ring-2 focus:ring-blue-500 py-3 px-4 placeholder:text-slate-400" placeholder="John Doe" type="text" required />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</label>
                                <input className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-lg focus:ring-2 focus:ring-blue-500 py-3 px-4 placeholder:text-slate-400" placeholder="john@example.com" type="email" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Message</label>
                            <textarea hidden={false} className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-lg focus:ring-2 focus:ring-blue-500 py-3 px-4 placeholder:text-slate-400" placeholder="Tell me about your project..." rows={4} required></textarea>
                        </div>
                        <button className="w-full bg-slate-900 dark:bg-blue-500 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity" type="submit">
                            Send Message
                        </button>
                    </form>
                </section>
            </main>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 z-20 flex justify-center pb-6 px-4">
                <div className="flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 px-6 py-3 rounded-full shadow-lg max-w-sm w-full">
                    <Link href="/" className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                        <span className="material-symbols-outlined">home</span>
                        <p className="text-[10px] font-bold uppercase tracking-tight">Home</p>
                    </Link>
                    <Link href="/portfolio" className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                        <span className="material-symbols-outlined">folder_open</span>
                        <p className="text-[10px] font-bold uppercase tracking-tight">Work</p>
                    </Link>
                    <Link href="/contact" className="flex flex-1 flex-col items-center gap-1 text-blue-500">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                        <p className="text-[10px] font-bold uppercase tracking-tight">Connect</p>
                    </Link>
                    <Link href="/admin" className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                        <p className="text-[10px] font-bold uppercase tracking-tight">Login</p>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
