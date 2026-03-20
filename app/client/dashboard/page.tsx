"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link as LinkIcon, Globe, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

export default function ClientDashboard() {
  const [nodes, setNodes] = useState(1000);
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('youtube');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalPrice = nodes * 1500;

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    try {
      const response = await fetch(webhookUrl || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_url: url,
          platform,
          nodes_quantity: nodes,
          total_price: totalPrice
        }),
      });
      if (response.ok) setShowSuccess(true);
    } catch (error) {
      alert("Koneksi gagal!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black mb-8">COMMAND CENTER</h1>
        
        {showSuccess ? (
          <motion.div initial={{scale:0.9}} animate={{scale:1}} className="bg-green-500/10 border border-green-500 p-12 rounded-3xl text-center">
            <CheckCircle2 className="mx-auto text-green-500 mb-4" size={64} />
            <h2 className="text-2xl font-bold">PESANAN DITERIMA!</h2>
            <p className="text-slate-400 mt-2">Sistem n8n sedang memproses pasukan Anda.</p>
            <button onClick={() => setShowSuccess(false)} className="mt-8 text-neon-cyan underline">Buat Pesanan Baru</button>
          </motion.div>
        ) : (
          <form onSubmit={handleOrderSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
            <div>
              <label className="block text-sm text-slate-400 mb-2">TARGET URL</label>
              <input required type="url" value={url} onChange={(e)=>setUrl(e.target.value)} className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl outline-none focus:border-neon-cyan" placeholder="https://..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">PLATFORM</label>
                <select value={platform} onChange={(e)=>setPlatform(e.target.value)} className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl">
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">JUMLAH NODES ({nodes})</label>
                <input type="range" min="100" max="50000" step="100" value={nodes} onChange={(e)=>setNodes(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-neon-cyan mt-4" />
              </div>
            </div>
            <div className="pt-6 border-t border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-400">ESTIMASI BIAYA</span>
                <span className="text-2xl font-black text-neon-cyan">Rp {totalPrice.toLocaleString()}</span>
              </div>
              <button disabled={isSubmitting} className="w-full py-5 bg-neon-cyan text-slate-950 font-black rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
                {isSubmitting ? <Loader2 className="animate-spin mx-auto" /> : "BAYAR & EKSEKUSI SEKARANG"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
