import React from 'react';
import { motion } from 'framer-motion';
import type { TranslationSchema } from '../locales/translations';

interface TechSectionProps {
  t: TranslationSchema;
}

interface ToolItem {
  name: string;
  icon: string;
}

export const TechSection: React.FC<TechSectionProps> = ({ t }) => {
  const webDevTools: ToolItem[] = [
    { name: 'React', icon: '/images/react.png' },
    { name: 'TypeScript', icon: '/images/typescript.png' },
    { name: 'PHP', icon: '/images/php.png' },
    { name: 'JavaScript', icon: '/images/javascript.png' },
    { name: 'Django', icon: '/images/django.png' },
    { name: 'HTML/CSS', icon: '/images/html_css.png' },
    { name: 'REST APIs', icon: '/images/api.png' },
    { name: 'OAuth2', icon: '/images/oauth.png' },
  ];

  const cloudInfraTools: ToolItem[] = [
    { name: 'AWS', icon: '/images/aws.png' },
    { name: 'Azure', icon: '/images/azure.png' },
    { name: 'Docker', icon: '/images/docker.png' },
    { name: 'Linux', icon: '/images/linux.png' },
    { name: 'Windows', icon: '/images/windows.png' },
  ];

  const dataScienceTools: ToolItem[] = [
    { name: 'Python', icon: '/images/python.png' },
    { name: 'R', icon: '/images/r.png' },
    { name: 'Nextflow', icon: '/images/nextflow.png' },
    { name: 'Bash', icon: '/images/bash.png' },
    { name: 'PostgreSQL', icon: '/images/postgresql.png' },
    { name: 'MySQL', icon: '/images/mysql.png' },
    { name: 'BigQuery', icon: '/images/bigquery.png' },
    { name: 'SQL Server', icon: '/images/sql-server.png' },
    { name: 'Databricks', icon: '/images/databricks.png' },
    { name: 'Power BI', icon: '/images/power-bi.png' },
    { name: 'Plotly', icon: '/images/plotly.png' },
    { name: 'Streamlit', icon: '/images/streamlit.png' },
    { name: 'DAX', icon: '/images/dax.png' },
    { name: 'M (Power Query)', icon: '/images/m.png' },
    { name: 'TensorFlow', icon: '/images/tensorflow.png' },
    { name: 'PyTorch', icon: '/images/pytorch.png' },
    { name: 'Scikit-learn', icon: '/images/scikit.png' },
    { name: 'Hugging Face', icon: '/images/huggingface.png' },
  ];

  const categories = [
    {
      title: 'Full-Stack & Interface Engineering',
      tools: webDevTools,
      borderColor: 'border-emerald-500/20',
      glowColor: 'group-hover:border-emerald-500/40',
    },
    {
      title: 'Cloud Computing & DevOps Systems',
      tools: cloudInfraTools,
      borderColor: 'border-cyan-500/20',
      glowColor: 'group-hover:border-cyan-500/40',
    },
    {
      title: 'Data Engineering, AI & Genomics Pipelines',
      tools: dataScienceTools,
      borderColor: 'border-emerald-500/20',
      glowColor: 'group-hover:border-emerald-500/40',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="py-16 border-t border-zinc-900 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-mono">
            <span className="text-emerald-500 font-sans mr-2">#</span>
            {t.skills.title}
          </h2>
          <p className="mt-4 text-zinc-400 font-light">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`group flex flex-col justify-between p-6 rounded-2xl border ${category.borderColor} ${category.glowColor} bg-zinc-900/30 backdrop-blur-sm transition-all duration-300`}
            >
              <div>
                {/* Category Title */}
                <h3 className="text-sm font-bold text-zinc-200 mb-6 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {category.title}
                </h3>

                {/* Tools Grid */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-3"
                >
                  {category.tools.map((tool, toolIdx) => (
                    <motion.div
                      key={toolIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-800/60 bg-zinc-950/60 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200"
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-5 h-5 object-contain flex-shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/favicon.svg';
                        }}
                      />
                      <span className="text-[11px] font-medium text-zinc-300 tracking-wide font-mono truncate">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
