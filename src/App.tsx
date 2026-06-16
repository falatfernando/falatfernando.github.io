import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechSection } from './components/TechSection';
import { ProjectCard } from './components/ProjectCard';
import { ServiceCard } from './components/ServiceCard';
import { VideoShowcase } from './components/VideoShowcase';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { translations } from './locales/translations';

function App() {
  const [lang, setLang] = useState<'pt' | 'en'>(() => {
    const storedLang = localStorage.getItem('user-lang');
    if (storedLang === 'pt' || storedLang === 'en') {
      return storedLang;
    }

    const browserLangs = navigator.languages || [navigator.language || ''];
    for (const browserLang of browserLangs) {
      if (browserLang.toLowerCase().startsWith('pt')) {
        return 'pt';
      }
      if (browserLang.toLowerCase().startsWith('en')) {
        return 'en';
      }
    }

    return 'en';
  });

  const t = translations[lang];

  // 2. Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  // Apply html lang attribute reactively
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const openModal = (type: 'ml' | 'dashboards' | 'automation') => {
    if (type === 'ml') {
      setModalTitle(t.projects.list.ml.title);
      setModalContent(t.projects.list.ml.modalText);
    } else if (type === 'dashboards') {
      setModalTitle(t.projects.list.dashboards.title);
      setModalContent(t.projects.list.dashboards.modalText);
    } else if (type === 'automation') {
      setModalTitle(t.projects.list.automation.title);
      setModalContent(t.projects.list.automation.modalText);
    }
    setIsModalOpen(true);
  };

  // 3. Data mapping based on current translation dictionary
  interface ProjectItem {
    title: string;
    desc: string;
    iconPath: string;
    href?: string;
    modalType?: 'ml' | 'dashboards' | 'automation';
    tags: string[];
  }

  const projectsList: ProjectItem[] = [
    {
      title: t.projects.list.pantheon.title,
      desc: t.projects.list.pantheon.desc,
      iconPath: '/images/pantheon_logo.svg',
      href: 'https://www.pantheonworkout.app',
      tags: ['React Native', 'SQLite', 'TypeScript', 'Offline First'],
    },
    {
      title: t.projects.list.tbdashboard.title,
      desc: t.projects.list.tbdashboard.desc,
      iconPath: '/images/bacteria.png',
      href: 'https://tbdashboard.onrender.com/',
      tags: ['Python', 'Streamlit', 'AWS', 'Bioinformatics'],
    },
    {
      title: t.projects.list.mtbctree.title,
      desc: t.projects.list.mtbctree.desc,
      iconPath: '/images/terminal.png',
      href: 'https://github.com/falatfernando/mtbc_tree',
      tags: ['Nextflow', 'Bash', 'Docker', 'Phylogenetics'],
    },
    {
      title: t.projects.list.preprot.title,
      desc: t.projects.list.preprot.desc,
      iconPath: '/images/preprot_icon.png',
      href: 'https://preprot.streamlit.app',
      tags: ['Python', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
    },
    {
      title: t.projects.list.covid.title,
      desc: t.projects.list.covid.desc,
      iconPath: '/images/covid_icon.png',
      href: 'https://falat-covidpipeline.streamlit.app/',
      tags: ['Python', 'Streamlit', 'Virtual Screening', 'Cheminformatics'],
    },
    {
      title: t.projects.list.ml.title,
      desc: t.projects.list.ml.desc,
      iconPath: '/images/ml_icon.png',
      modalType: 'ml' as const,
      tags: ['Deep Learning', 'PyTorch', 'TensorFlow', 'Industrial A.I.'],
    },
    {
      title: t.projects.list.dashboards.title,
      desc: t.projects.list.dashboards.desc,
      iconPath: '/images/dashboard_icon.png',
      modalType: 'dashboards' as const,
      tags: ['Power BI', 'Plotly Dash', 'AWS S3/RDS', 'ETL'],
    },
    {
      title: t.projects.list.automation.title,
      desc: t.projects.list.automation.desc,
      iconPath: '/images/automation.png',
      modalType: 'automation' as const,
      tags: ['Python', 'Selenium', 'Web Scraping', 'Power Automate'],
    },
  ];

  const servicesList = [
    {
      title: t.services.items.webApps.title,
      desc: t.services.items.webApps.desc,
      features: t.services.items.webApps.features,
      icon: <Code size={24} />,
    },
    {
      title: t.services.items.biData.title,
      desc: t.services.items.biData.desc,
      features: t.services.items.biData.features,
      icon: <Database size={24} />,
    },
    {
      title: t.services.items.automations.title,
      desc: t.services.items.automations.desc,
      features: t.services.items.automations.features,
      icon: <Cpu size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* 1. Header Navigation */}
      <Navbar t={t} lang={lang} setLang={setLang} />

      {/* 2. Hero Section */}
      <Hero t={t} />

      {/* 3. About Section (Bento Grid Q1) */}
      <AboutSection t={t} />

      {/* 4. Tech Section (Bento Grid Q2) */}
      <TechSection t={t} />

      {/* 5. Featured Projects Section (Bento Grid Q3) */}
      <section id="projects" className="py-16 border-t border-zinc-900 bg-zinc-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-mono">
              <span className="text-emerald-500 font-sans mr-2">#</span>
              {t.projects.title}
            </h2>
            <p className="mt-4 text-zinc-400 font-light">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {projectsList.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full flex"
              >
                <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  iconPath={project.iconPath}
                  href={project.href}
                  onMoreInfo={project.modalType ? () => openModal(project.modalType!) : undefined}
                  tags={project.tags}
                  viewProjectText={t.projects.viewProject}
                  moreInfoText={t.projects.moreInfo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Services Section (Bento Grid Q4) */}
      <section id="services" className="py-16 border-t border-zinc-900 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-mono">
              <span className="text-emerald-500 font-sans mr-2">#</span>
              {t.services.title}
            </h2>
            <p className="mt-4 text-zinc-400 font-light">
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {servicesList.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full flex"
              >
                <ServiceCard
                  title={srv.title}
                  desc={srv.desc}
                  icon={srv.icon}
                  features={srv.features}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Video Showcase Section */}
      <VideoShowcase t={t} />

      {/* 8. Footer Section */}
      <Footer t={t} />

      {/* 9. Popup Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        content={modalContent}
      />
    </div>
  );
}

export default App;
