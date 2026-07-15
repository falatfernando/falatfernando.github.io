import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import type { TranslationSchema } from '../locales/translations';

interface HeroProps {
  t: TranslationSchema;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Colorful background glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-xs text-emerald-400 font-mono font-medium shadow-[0_0_15px_rgba(16,185,129,0.05)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              {t.hero.badge}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-zinc-100"
            >
              {t.hero.titleFirst}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-400">
                {t.hero.titleAccent}
              </span>{' '}
              {t.hero.titleSecond}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-light"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex pt-2"
            >
              <a
                href="mailto:fernandofalat@proton.me"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/15 cursor-pointer"
              >
                <Mail size={18} />
                <span>{t.hero.ctaEmail}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex justify-center items-center"
          >
            <div className="relative group max-w-sm w-full aspect-[3/4]">
              {/* Outer gradient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
              {/* Photo Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-800/60 bg-zinc-900 shadow-2xl">
                <img
                  src="/images/profile_picture.jpg"
                  alt="Hero Profile"
                  className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
