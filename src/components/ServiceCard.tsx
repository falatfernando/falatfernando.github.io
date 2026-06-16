import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, icon, features }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-zinc-800/40 hover:border-emerald-500/30 bg-zinc-900/20 hover:bg-emerald-500/5 transition-all duration-300 text-left"
    >
      <div>
        {/* Header Icon */}
        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:text-emerald-300 flex items-center justify-center mb-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)]">
          {icon}
        </div>

        {/* Title & Desc */}
        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors font-mono mb-3">
          {title}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      {/* Feature Bullet Points */}
      <ul className="space-y-3 border-t border-zinc-900/60 pt-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
            <span className="mt-0.5 rounded-full p-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Check size={10} />
            </span>
            <span className="font-light leading-tight">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
