"use client";
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (otp: string) => void;
}

export default function OTPModal({ isOpen, onClose, onConfirm }: OTPModalProps) {
  const [otp, setOtp] = React.useState("");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-sm w-full text-center relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white">
            <X size={20} />
          </button>
          
          <div className="w-16 h-16 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6 text-neon-cyan">
            <ShieldCheck size={32} />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">Verifikasi Keamanan</h3>
          <p className="text-slate-400 text-sm mb-6">Masukkan 4 digit kode OTP yang dikirim ke WhatsApp Anda.</p>
          
          <input 
            type="text" maxLength={4}
            value={otp} onChange={(e) => setOtp(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-center text-3xl tracking-[1em] font-black text-neon-cyan mb-6 focus:border-neon-cyan outline-none"
            placeholder="0000"
          />
          
          <button 
            onClick={() => onConfirm(otp)}
            className="w-full py-4 bg-neon-cyan text-slate-950 font-black rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
          >
            KONFIRMASI AKSES
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
