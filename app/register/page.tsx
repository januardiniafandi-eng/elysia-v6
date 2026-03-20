"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import OTPModal from '../../components/OTPModal';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ fullName: '', whatsapp: '' });
  const [isOtpOpen, setIsOtpOpen] = useState(false);

  const handleOtpConfirm = (otp: string) => {
    setIsOtpOpen(false);
    router.push('/client/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-32 px-4">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="max-w-md mx-auto p-8 bg-slate-900 rounded-3xl border border-slate-800">
        <h2 className="text-3xl font-black text-white text-center mb-8 italic">JOIN ELYSIA</h2>
        <form onSubmit={(e) => { e.preventDefault(); setIsOtpOpen(true); }} className="space-y-4">
          <input required placeholder="Nama Lengkap" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white" 
            onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
          <input required placeholder="Nomor WhatsApp (62...)" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white" 
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
          <button className="w-full py-4 bg-neon-cyan text-slate-950 font-black rounded-xl mt-4">DAFTAR SEKARANG</button>
        </form>
      </motion.div>
      <OTPModal isOpen={isOtpOpen} onClose={() => setIsOtpOpen(false)} onConfirm={handleOtpConfirm} />
    </div>
  );
}
