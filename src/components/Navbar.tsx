import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import type { TranslationSchema } from '../locales/translations';

interface NavbarProps {
  t: TranslationSchema;
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.services, href: '#services' },
  ];

  const socialLinks = [
    { icon: <GithubIcon size={18} />, href: 'https://github.com/falatfernando', label: 'GitHub' },
    { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/fernandofalat/', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:fernandofalat@proton.me', label: 'Email' },
    { icon: <FileText size={18} />, href: 'http://lattes.cnpq.br/9325530786682187', label: 'Lattes', title: t.footer.discreetLattes },
  ];


  const toggleLang = () => {
    const nextLang = lang === 'pt' ? 'en' : 'pt';
    setLang(nextLang);
    localStorage.setItem('user-lang', nextLang);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/40 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold tracking-tight">
              <span className="text-emerald-500">&lt;</span>
              <span className="text-zinc-100">Fernando Falat</span>
              <span className="text-emerald-500"> /&gt;</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-zinc-400">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Socials / Lang desktop */}
            <div className="flex items-center gap-4 border-l border-zinc-800/80 pl-6">
              <div className="flex items-center gap-3 text-zinc-400">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 hover:scale-105 transition-all duration-200"
                    title={link.title || link.label}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              {/* Language Switcher */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-zinc-300 hover:text-emerald-400 transition-all cursor-pointer"
                aria-label="Change language"
              >
                <Globe size={13} className="animate-pulse" />
                <span>{lang === 'pt' ? 'PT-BR' : 'EN-US'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Language toggle mobile */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 cursor-pointer"
              aria-label="Change language"
            >
              <Globe size={12} />
              <span>{lang === 'pt' ? 'PT' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-900 bg-zinc-950/95 backdrop-blur-2xl"
          >
            <div className="space-y-1 px-4 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-emerald-400 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-around text-zinc-400 px-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-center gap-1 hover:text-emerald-400 transition-colors"
                    title={link.title || link.label}
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span className="text-[10px] font-medium font-mono">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
