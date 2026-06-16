import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Dna, Cloud } from 'lucide-react';
import type { TranslationSchema } from '../locales/translations';

interface AboutSectionProps {
  t: TranslationSchema;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GraduationCap size={18} className="text-emerald-400" />;
      case 1:
        return <Award size={18} className="text-cyan-400" />;
      case 2:
        return <Dna size={18} className="text-emerald-400" />;
      case 3:
        return <GraduationCap size={18} className="text-cyan-400" />;
      case 4:
        return <Briefcase size={18} className="text-emerald-400" />;
      case 5:
        return <Cloud size={18} className="text-cyan-400" />;
      default:
        return <GraduationCap size={18} className="text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-16 border-t border-zinc-900 bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-mono">
            <span className="text-emerald-500 font-sans mr-2">#</span>
            {t.about.title}
          </h2>
          <p className="mt-4 text-emerald-400 font-mono text-sm font-medium">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Profile Card / Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col items-center lg:sticky lg:top-24"
          >
            <div className="relative group">
              {/* Outer gradient glow */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-45 blur group-hover:opacity-75 transition duration-300"></div>
              {/* Profile Image container */}
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-zinc-950 bg-zinc-900">
                <img
                  src="/images/profile_picture.jpg"
                  alt="Fernando Falat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-lg font-bold text-zinc-100 font-mono">Fernando Falat</h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Full-Stack Developer & Data Engineer
              </p>
            </div>
          </motion.div>

          {/* Biography Highlights / Right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-8 text-left"
          >
            <h4 className="text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {t.about.academicBg}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.about.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="flex gap-4 p-4 rounded-xl border border-zinc-800/60 hover:border-emerald-500/30 bg-zinc-900/10 hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <div className="mt-0.5 rounded-xl p-2 bg-zinc-950 border border-zinc-850 flex-shrink-0 h-10 w-10 flex items-center justify-center group-hover:border-emerald-500/20 group-hover:bg-zinc-900 transition-colors shadow-sm">
                    {getIcon(idx)}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors font-mono tracking-wide leading-snug">
                      {item.title}
                    </h5>
                    <p className="text-zinc-400 text-xs mt-1.5 font-light leading-relaxed">
                      {item.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
