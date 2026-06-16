import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import type { TranslationSchema } from '../locales/translations';

interface FooterProps {
  t: TranslationSchema;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Contact Links Grid */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <a
            href="https://github.com/falatfernando"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-emerald-400 hover:scale-105 transition-all font-mono"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/fernandofalat/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-emerald-400 hover:scale-105 transition-all font-mono"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:fernandofalat@proton.me"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-emerald-400 hover:scale-105 transition-all font-mono"
            aria-label="Email"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>

        </div>

        {/* Lattes CNPq Link - Discreet */}
        <div className="mb-8">
          <a
            href="http://lattes.cnpq.br/9325530786682187"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-zinc-900 hover:border-zinc-800 text-xs text-zinc-500 hover:text-zinc-400 transition-colors font-mono cursor-pointer"
            title={t.footer.discreetLattes}
          >
            <FileText size={12} />
            <span>{t.footer.discreetLattes}</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-500 font-mono">
          &copy; {currentYear} Fernando Falat. {t.footer.text}
        </p>

      </div>
    </footer>
  );
};
