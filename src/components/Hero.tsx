import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal, Play, Server, Cpu, Database } from 'lucide-react';
import type { TranslationSchema } from '../locales/translations';

interface HeroProps {
  t: TranslationSchema;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [pipelineStep, setPipelineStep] = useState(0);

  // Simulated data pipeline log steps to run in the terminal mockup
  const logs = [
    'Initializing bio_pipeline v2.4.1...',
    'Connecting to AWS cluster: eu-west-1 [OK]',
    'Loading WHO catalogue TB drug resistance profiles...',
    'Querying TBDashboard DB (PostgreSQL)... 1,420 entries found',
    'Executing ML model for protein stability (PreProt)...',
    'Feature extraction complete (shape=[482, 128])',
    'PreProt prediction: stability score = 0.942 [PASS]',
    'Syncing local workout cache to PANTHEON offline store...',
    'Optimizing web app bundle size... gzip: 42.1KB [PASS]',
    'Pipeline execution succeeded. Listening on port 8080...',
  ];

  useEffect(() => {
    if (pipelineStep < logs.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, logs[pipelineStep]]);
        setPipelineStep((prev) => prev + 1);
      }, 1200 + Math.random() * 800);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setTerminalLines([]);
        setPipelineStep(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [pipelineStep]);

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

          {/* Right Column: Code Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex flex-col justify-center"
          >
            <div className="w-full glass rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/60">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/40 border-b border-zinc-800/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <Terminal size={12} />
                  <span>fernando-pipeline.sh</span>
                </div>
                <div className="w-10"></div> {/* spacer */}
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs text-left h-[260px] sm:h-[300px] overflow-y-auto space-y-2 bg-zinc-950/80">
                
                {/* Console prompt */}
                <div className="flex items-center gap-2 text-zinc-500 mb-4">
                  <span className="text-emerald-500">~</span>
                  <span className="text-zinc-400">./run_pipeline.sh --deploy-analytics</span>
                  <Play size={10} className="text-emerald-400 fill-emerald-400 animate-pulse" />
                </div>

                {/* Animated log lines */}
                {terminalLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`leading-relaxed ${
                      line.includes('[OK]') || line.includes('[PASS]') 
                        ? 'text-emerald-400' 
                        : line.includes('prediction') 
                        ? 'text-cyan-400 font-semibold' 
                        : 'text-zinc-300'
                    }`}
                  >
                    <span className="text-zinc-600 mr-2">❯</span>
                    {line}
                  </motion.div>
                ))}

                {/* Cursor indicator */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 align-middle"
                ></motion.div>
              </div>

              {/* Terminal Stats Footer */}
              <div className="flex items-center justify-around px-4 py-3 bg-zinc-900/20 border-t border-zinc-800/40 text-[10px] sm:text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Server size={10} className="text-emerald-500" /> Cloud Sync
                </span>
                <span className="flex items-center gap-1">
                  <Cpu size={10} className="text-cyan-500" /> ML Predictor
                </span>
                <span className="flex items-center gap-1">
                  <Database size={10} className="text-emerald-500" /> PostgreSQL
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
