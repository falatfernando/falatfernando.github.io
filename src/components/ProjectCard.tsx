import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  desc: string;
  iconPath: string;
  href?: string;
  onMoreInfo?: () => void;
  tags?: string[];
  viewProjectText: string;
  moreInfoText: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  iconPath,
  href,
  onMoreInfo,
  tags = [],
  viewProjectText,
  moreInfoText,
}) => {
  const cardContent = (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800/80 p-2 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/30 transition-all duration-300">
            <img
              src={iconPath}
              alt={title}
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback icon
                (e.target as HTMLImageElement).src = '/favicon.svg';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors truncate font-mono">
              {title}
            </h3>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-3">
          {desc}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between border-t border-zinc-900/60 pt-4 mt-auto">
        {href && href !== '#' ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors font-mono cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <span>{viewProjectText}</span>
            <ExternalLink size={12} />
          </a>
        ) : (
          <div />
        )}

        {onMoreInfo && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onMoreInfo();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors font-mono cursor-pointer"
          >
            <Info size={12} />
            <span>{moreInfoText}</span>
          </button>
        )}
      </div>
    </div>
  );

  const cardClasses = "group w-full h-full glass p-5 sm:p-6 rounded-2xl hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.04)] hover:scale-[1.015] transition-all duration-300 text-left flex flex-col justify-between";

  if (href && href !== '#' && !onMoreInfo) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      onClick={onMoreInfo ? onMoreInfo : undefined}
      className={`${cardClasses} ${onMoreInfo ? 'cursor-pointer' : ''}`}
    >
      {cardContent}
    </motion.div>
  );
};
