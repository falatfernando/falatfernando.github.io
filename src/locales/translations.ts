export interface TranslationSchema {
  nav: {
    about: string;
    skills: string;
    projects: string;
    services: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleAccent: string;
    titleSecond: string;
    subtitle: string;
    ctaEmail: string;
    ctaWhatsapp: string;
  };
  about: {
    title: string;
    subtitle: string;
    academicBg: string;
    items: {
      title: string;
      institution: string;
    }[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      systems: string;
      cloud: string;
      languages: string;
      ai: string;
      data: string;
      visualization: string;
      frameworks: string;
      integration: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    moreInfo: string;
    list: {
      pantheon: {
        title: string;
        desc: string;
      };
      tbdashboard: {
        title: string;
        desc: string;
      };
      mtbctree: {
        title: string;
        desc: string;
      };
      preprot: {
        title: string;
        desc: string;
      };
      covid: {
        title: string;
        desc: string;
      };
      ml: {
        title: string;
        desc: string;
        modalText: string;
      };
      dashboards: {
        title: string;
        desc: string;
        modalText: string;
      };
      automation: {
        title: string;
        desc: string;
        modalText: string;
      };
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      webApps: {
        title: string;
        desc: string;
        features: string[];
      };
      biData: {
        title: string;
        desc: string;
        features: string[];
      };
      automations: {
        title: string;
        desc: string;
        features: string[];
      };
    };
  };
  videos: {
    title: string;
    subtitle: string;
    video1: {
      title: string;
      desc: string;
    };
    video2: {
      title: string;
      desc: string;
    };
  };
  footer: {
    text: string;
    discreetLattes: string;
  };
}

export const translations: Record<'pt' | 'en', TranslationSchema> = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Stack',
      projects: 'Projetos',
      services: 'Serviços',
      contact: 'Contato',
    },
    hero: {
      badge: 'Disponível para Projetos & Consultoria Freela',
      titleFirst: 'Construindo o futuro com',
      titleAccent: 'Aplicações Web Modernas',
      titleSecond: '& Engenharia de Dados Robusta',
      subtitle: 'Desenvolvedor Full-Stack & Engenheiro de Dados. Uno Bioinformática, Ciência de Dados e Engenharia para criar softwares complexos, dashboards interativos de alto desempenho e pipelines de processamento escaláveis.',
      ctaEmail: 'Fale Comigo por E-mail',
      ctaWhatsapp: 'Conversar no WhatsApp',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Profissional sênior apaixonado por ciências da vida e tecnologia 🧬',
      academicBg: 'Formação Acadêmica & Destaques Profissionais',
      items: [
        {
          title: 'Engenheiro de Bioprocessos e Biotecnologia',
          institution: 'pela Universidade Positivo'
        },
        {
          title: 'Especialista em Data Science & Analytics',
          institution: 'pela USP/ESALQ'
        },
        {
          title: 'Mestrando em Ciências (Bioinformática aplicada à Microbiologia)',
          institution: 'pela USP/ICB'
        },
        {
          title: 'Certificado em Genomic Data Science',
          institution: 'pela Johns Hopkins University'
        },
        {
          title: 'Experiência Sênior em Papéis de Dados na Indústria',
          institution: 'com histórico em arquitetura e analytics corporativos (BRF S.A.)'
        },
        {
          title: 'Proficiência Avançada em Cloud (AWS)',
          institution: 'foco em infraestrutura escalável e automação de pipelines'
        }
      ]
    },
    skills: {
      title: 'Core Tech Stack',
      subtitle: 'Minhas ferramentas e tecnologias organizadas por especialidade',
      categories: {
        systems: 'Sistemas',
        cloud: 'Cloud & Infraestrutura',
        languages: 'Linguagens',
        ai: 'IA & Machine Learning',
        data: 'Dados & Bancos de Dados',
        visualization: 'Visualização de Dados',
        frameworks: 'Frameworks & Webdev',
        integration: 'Integração & APIs',
      },
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Aplicações e soluções analíticas desenvolvidas para ciência e negócios',
      viewProject: 'Acessar Projeto',
      moreInfo: 'Ver Detalhes',
      list: {
        pantheon: {
          title: 'PANTHEON',
          desc: 'Aplicativo de treino premium para musculação e calistenia. 100% offline, livre de anúncios, paywalls ou distrações.',
        },
        tbdashboard: {
          title: 'TBDashboard',
          desc: 'Analisador genômico de Tuberculose com perfil de resistência a drogas interpretado conforme o catálogo oficial da OMS.',
        },
        mtbctree: {
          title: 'MTBC Tree',
          desc: 'Pipeline automatizada desenvolvida em Python/Nextflow para análises filogenômicas completas de Mycobacterium spp.',
        },
        preprot: {
          title: 'PreProt',
          desc: 'Aplicativo web inteligente para predição de estabilidade e propriedades de proteínas de E. coli usando Machine Learning.',
        },
        covid: {
          title: 'Pipeline COVID',
          desc: 'Sistema com pipeline de triagem virtual rápida de medicamentos contra a COVID-19 baseada em modelos preditivos de ML.',
        },
        ml: {
          title: 'Modelos de I.A.',
          desc: 'Criação e implementação de modelos preditivos e deep learning voltados para fins industriais, corporativos e científicos.',
          modalText: 'Desenvolvimento de algoritmos e modelos avançados de Machine Learning e Deep Learning. Inclui implementações na BRF S.A., pipelines de triagem para compostos terapêuticos (COVID-19) e predições biológicas complexas como a estabilidade estrutural de proteínas bacterianas.',
        },
        dashboards: {
          title: 'Dashboards Interativos',
          desc: 'Transformação de dados brutos e complexos em insights práticos usando Power BI, Streamlit e Dash Plotly.',
          modalText: 'Desenvolvimento de painéis dinâmicos e intuitivos para visualização analítica. Vasta experiência no desenho de arquiteturas de dados na nuvem (AWS/Azure) para suportar atualizações em tempo real, atendendo desde alta liderança corporativa até equipes técnicas de laboratório.',
        },
        automation: {
          title: 'Automações & Scraping',
          desc: 'Desenvolvimento de web scrapers e bots de automação de processos repetitivos usando Python e APIs.',
          modalText: 'Criação de scripts robustos para coleta automatizada de dados de fontes públicas ou privadas (Web Scraping com Selenium/Scrapy), automação de relatórios diários e integração de ferramentas corporativas com Power Automate, gerando economia drástica de tempo.',
        },
      },
    },
    services: {
      title: 'Serviços Freelance',
      subtitle: 'Soluções sob medida para acelerar seu negócio ou projeto científico',
      items: {
        webApps: {
          title: 'Aplicações Web & SaaS',
          desc: 'Plataformas web responsivas de alta performance, focadas em entregar uma excelente experiência de uso (UX/UI).',
          features: ['Single Page Applications (SPAs)', 'Painéis Admin & Control Centers', 'Integração de APIs REST/GraphQL', 'Otimização de Performance & SEO'],
        },
        biData: {
          title: 'BI & Engenharia de Dados',
          desc: 'Criação de arquiteturas modernas para consolidar seus dados, estruturando pipelines ETL automatizados e criando dashboards interativos.',
          features: ['Modelagem de Bancos de Dados', 'Pipelines ETL em Nuvem (AWS/Azure)', 'Dashboards em Power BI & Streamlit', 'Transformação de Dados Brutos em Insights'],
        },
        automations: {
          title: 'Automações & Web Scraping',
          desc: 'Elimine tarefas manuais repetitivas com robôs inteligentes que coletam dados e automatizam rotinas operacionais.',
          features: ['Extração de Dados em Larga Escala', 'Automação de Relatórios & E-mails', 'Integração de APIs e Ferramentas', 'Scripts Customizados em Python'],
        },
      },
    },
    videos: {
      title: 'Showcase e Demonstrações',
      subtitle: 'Assista a demonstrações de painéis corporativos e explicações técnicas',
      video1: {
        title: 'Dashboard Industrial em Power BI',
        desc: 'Visão geral da arquitetura de fluxo de dados de um dashboard industrial fictício com painéis refinados de análise operacional.',
      },
      video2: {
        title: 'Bioinformática & Distribuições Linux',
        desc: 'Vídeo técnico sobre o impacto da escolha de distribuições Linux no workflow de Bioinformática e análise de dados genômicos.',
      },
    },
    footer: {
      text: 'Desenhado e desenvolvido por Fernando Falat.',
      discreetLattes: 'Curriculum Lattes oficial do CNPq',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Stack',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for Freelance Projects & Consulting',
      titleFirst: 'Building the future with',
      titleAccent: 'Modern Web Applications',
      titleSecond: '& Robust Data Engineering',
      subtitle: 'Full-Stack Developer & Data Engineer. I bridge Bioinformatics, Data Science, and Software Engineering to build complex web applications, high-performance interactive dashboards, and scalable data processing pipelines.',
      ctaEmail: 'Get in Touch via Email',
      ctaWhatsapp: 'Chat on WhatsApp',
    },
    about: {
      title: 'About Me',
      subtitle: 'Senior professional passionate about life sciences and technology 🧬',
      academicBg: 'Academic Career & Professional Highlights',
      items: [
        {
          title: 'Bioprocess and Biotechnology Engineer',
          institution: 'by Positivo University'
        },
        {
          title: 'Data Science & Analytics Specialist',
          institution: 'by USP/ESALQ'
        },
        {
          title: 'Master of Sciences Student (Bioinformatics applied to Microbiology)',
          institution: 'at USP/ICB'
        },
        {
          title: 'Genomic Data Science Certificate',
          institution: 'by Johns Hopkins University'
        },
        {
          title: 'Senior Experience on Industry Data Roles',
          institution: 'with a history in enterprise architecture and analytics (BRF S.A.)'
        },
        {
          title: 'Advanced Cloud Proficiency (AWS)',
          institution: 'focused on scalable infrastructure and data pipeline automation'
        }
      ]
    },
    skills: {
      title: 'Core Tech Stack',
      subtitle: 'My tools and technologies organized by field of expertise',
      categories: {
        systems: 'Systems',
        cloud: 'Cloud & Infrastructure',
        languages: 'Languages',
        ai: 'AI & Machine Learning',
        data: 'Data & Databases',
        visualization: 'Data Visualization',
        frameworks: 'Frameworks & Webdev',
        integration: 'Integration & APIs',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Applications and analytical solutions developed for science and business',
      viewProject: 'Visit Project',
      moreInfo: 'Details',
      list: {
        pantheon: {
          title: 'PANTHEON',
          desc: 'Premium workout application for gym and calisthenics. 100% offline, free of ads, paywalls, or distractions.',
        },
        tbdashboard: {
          title: 'TBDashboard',
          desc: 'Tuberculosis genomic analyzer with drug resistance profile interpretation matching the official WHO catalogue.',
        },
        mtbctree: {
          title: 'MTBC Tree',
          desc: 'Automated pipeline written in Python/Nextflow for complete phylogenomic analysis of Mycobacterium spp.',
        },
        preprot: {
          title: 'PreProt',
          desc: 'Smart web application for predicting stability and properties of E. coli proteins using Machine Learning.',
        },
        covid: {
          title: 'COVID Pipeline',
          desc: 'Web app with an automated pipeline for rapid virtual drug screening against COVID-19 based on predictive ML models.',
        },
        ml: {
          title: 'A.I. Models',
          desc: 'Creation and deployment of predictive and deep learning models for industrial, corporate, and scientific targets.',
          modalText: 'Development of advanced Machine Learning and Deep Learning algorithms. Includes implementations at BRF S.A., virtual screening pipelines for therapeutic compounds (COVID-19), and complex biological predictions such as bacterial protein structural stability.',
        },
        dashboards: {
          title: 'Interactive Dashboards',
          desc: 'Transforming raw, complex data into actionable insights using Power BI, Streamlit, and Dash Plotly.',
          modalText: 'Development of dynamic and intuitive analytical dashboards. Broad experience designing cloud data architectures (AWS/Azure) to support real-time updates, serving everyone from senior corporate leadership to laboratory teams.',
        },
        automation: {
          title: 'Automations & Scraping',
          desc: 'Development of web scrapers and automation bots for repetitive tasks using Python and APIs.',
          modalText: 'Creation of robust scripts for automated data extraction from public or private sources (Web Scraping with Selenium/Scrapy), automated daily reporting, and corporate integration using Power Automate, generating massive time savings.',
        },
      },
    },
    services: {
      title: 'Freelance Services',
      subtitle: 'Tailored solutions to accelerate your business or scientific project',
      items: {
        webApps: {
          title: 'Web Apps & SaaS Development',
          desc: 'High-performance responsive web platforms, focused on delivering an outstanding user experience (UX/UI).',
          features: ['Single Page Applications (SPAs)', 'Admin Panels & Control Centers', 'REST/GraphQL API Integration', 'Performance & SEO Optimization'],
        },
        biData: {
          title: 'BI & Data Engineering',
          desc: 'Modern data architectures to consolidate your data, automating ETL pipelines, and creating interactive, real-time dashboards.',
          features: ['Database Modeling', 'Cloud ETL Pipelines (AWS/Azure)', 'Power BI & Streamlit Dashboards', 'Turning Raw Data into Actionable Insights'],
        },
        automations: {
          title: 'Automations & Web Scraping',
          desc: 'Eliminate repetitive manual tasks with smart bots that collect data and automate your daily workflows.',
          features: ['Large-scale Web Data Extraction', 'Automated Reports & Notifications', 'API & SaaS Tool Integration', 'Custom Python Automation Scripts'],
        },
      },
    },
    videos: {
      title: 'Showcase & Demos',
      subtitle: 'Watch video demos of corporate dashboards and technical walkthroughs',
      video1: {
        title: 'Industrial Dashboard in Power BI',
        desc: 'Architectural overview and walkthrough of an industrial dashboard with refined operations analytics.',
      },
      video2: {
        title: 'Bioinformatics & Linux Distros',
        desc: 'Technical walkthrough exploring the impact of Linux distributions on Bioinformatics and genomics analysis workflows.',
      },
    },
    footer: {
      text: 'Designed and developed by Fernando Falat.',
      discreetLattes: 'Official CNPq Lattes CV (Brazil)',
    },
  },
};
