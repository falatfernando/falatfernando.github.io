import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay } from 'lucide-react';
import type { TranslationSchema } from '../locales/translations';

interface VideoShowcaseProps {
  t: TranslationSchema;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ t }) => {
  const videos = [
    {
      embedUrl: 'https://www.youtube-nocookie.com/embed/8JS7gVspFUs',
      title: t.videos.video1.title,
      desc: t.videos.video1.desc,
    },
    {
      embedUrl: 'https://www.youtube-nocookie.com/embed/BVgkWyWvLqg',
      title: t.videos.video2.title,
      desc: t.videos.video2.desc,
    },
  ];

  return (
    <section className="py-16 border-t border-zinc-900 bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-mono">
            <span className="text-emerald-500 font-sans mr-2">#</span>
            {t.videos.title}
          </h2>
          <p className="mt-4 text-zinc-400 font-light">
            {t.videos.subtitle}
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass p-4 rounded-2xl border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-300"
            >
              {/* Responsive Iframe Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-zinc-900 shadow-inner group-hover:border-emerald-500/10 transition-colors">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={vid.embedUrl}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Text Caption */}
              <div className="mt-4 flex items-start gap-3 text-left px-1">
                <div className="mt-1 text-emerald-400 flex-shrink-0">
                  <MonitorPlay size={18} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors font-mono">
                    {vid.title}
                  </h3>
                  <p className="mt-1 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    {vid.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
