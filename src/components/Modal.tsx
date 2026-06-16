import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  // We can render HTML safely in the modal because our translations contain bullet points and links
  const renderContent = () => {
    return { __html: content };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 sm:p-8 shadow-2xl z-10 font-sans"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-lg p-1 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Title */}
            <h3 className="text-xl font-bold text-zinc-100 pr-8 border-b border-zinc-900 pb-3 mb-4 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {title}
            </h3>

            {/* Modal Content */}
            <div 
              className="text-zinc-300 text-sm leading-relaxed space-y-3 prose prose-invert max-w-none prose-sm
                [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 
                [&>a]:text-emerald-400 [&>a]:underline hover:[&>a]:text-emerald-300 [&>a]:transition-colors"
              dangerouslySetInnerHTML={renderContent()} 
            />

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-900/60 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 text-xs font-semibold font-mono border border-zinc-800/80 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
