"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  ShieldAlert, MapPin, Search, Clock, CheckCircle2, 
  ArrowRight, Zap, Cpu, Globe 
} from 'lucide-react';

export default function Home() {
  const features = [
    { icon: ShieldAlert, title: 'Anti-Banned', desc: 'Sistem kami mensimulasikan perilaku manusia asli secara sempurna.' },
    { icon: MapPin, title: 'Geo-Targeting Presisi', desc: 'Targetkan audiens berdasarkan lokasi geografis spesifik.' },
    { icon: Search, title: 'Audit Link SEO', desc: 'Setiap link kampanye diaudit secara otomatis.' },
    { icon: Clock, title: 'Drip-Feed Execution', desc: 'Distribusi traffic dilakukan secara bertahap.' }
  ];

  return (
    <div className="bg-slate-950 text-slate-200 overflow-x-hidden min-h-screen">
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              GOING VIRAL WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-green">
                ELYSIA AI CORE
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light">
              Solusi traffic organik <span className="text-white font-medium">100% manusia nyata</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="px-10 py-5 bg-neon-cyan text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all flex items-center space-x-2">
                <span>MULAI SEKARANG</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ... (Gunakan sisa section dari Home.tsx sebelumnya) ... */}
    </div>
  );
}
