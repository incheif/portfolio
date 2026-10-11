import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ArrowUp, 
  Check, 
  Mail,
  ExternalLink,
  Globe
} from 'lucide-react';
import { Button } from './components/Button';
import { TextField } from './components/TextField';

// Clean SVG Github icon
const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2.2 6-7.5a5.6 5.6 0 0 0-1.3-3.8 5 5 0 0 0-.1-3.8s-.9-.3-3 1a17.9 17.9 0 0 0-9 0c-2.1-1.3-3-1-3-1a5 5 0 0 0-.1 3.8 5.6 5.6 0 0 0-1.3 3.8c0 5.3 3 7.5 6 7.5a4.8 4.8 0 0 0-1 3.5v4" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  category: 'DEVELOPMENT' | 'DESIGN';
  categories?: ('DEVELOPMENT' | 'DESIGN')[];
  role?: string;
  client?: string;
  stack: string;
  year: string;
  image: string;
  badge?: string;
  summary: string;
  content: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'aero',
    title: 'AERO: AGENTIC ROBOTIC OPERATIONS',
    category: 'DEVELOPMENT',
    categories: ['DEVELOPMENT'],
    stack: 'ROS 2 / Google Gemini VLA / Three.js WebGL / Rapier3D / Python / FastAPI',
    year: '2026',
    image: '/aero_studio_tower.png',
    badge: 'PHYSICAL AI',
    githubUrl: 'https://github.com/incheif/Aero',
    liveUrl: 'https://aero-studio.onrender.com/',
    summary: 'Connecting machine intelligence to the physical world through multimodal VLA reasoning, 3D tabletop spatial semantic mapping, and 60 FPS physics kinematics.',
    content: 'AERO is an independently architected robotic manipulation platform connecting multimodal intelligence to physical operations. Translates natural-language instructions into tabletop manipulation trajectories using Google Gemini VLA reasoning, 3D spatial semantic affordance memories, and active frontier exploration. Operates closed-loop Cartesian trajectory planning and geometric inverse kinematics in 60 FPS Rapier3D physics, synchronizing with ROS 2 native message bridges and streaming real-time telemetry over WebSockets to an interactive Three.js WebGL digital twin studio.',
    highlights: [
      'Gemini VLA reasoning & 3D tabletop spatial semantic mapping',
      '60 FPS Rapier3D physics kinematics with Cartesian trajectory interpolation',
      'Interactive Three.js 3D WebGL digital twin studio with native ROS 2 topic bridges'
    ]
  },
  {
    id: 'paperscope-ai',
    title: 'PAPERSCOPE_AI',
    category: 'DESIGN',
    categories: ['DEVELOPMENT', 'DESIGN'],
    stack: 'Next.js 16 / FastAPI / Gemini 2.5 / Groq Llama 3.3 / PyMuPDF / Docker',
    year: '2025',
    image: '/02-paper-synthesis.png',
    badge: 'ENTERPRISE RAG',
    githubUrl: 'https://github.com/incheif/PaperScope-AI',
    liveUrl: 'https://paperscope-ai.onrender.com/',
    summary: 'Building low-latency RAG architectures, multi-modal ingestion, and verifiable citation interrogation for academic literature synthesis.',
    content: 'An independently developed academic research synthesis platform featuring dual-pane split-screen manuscript analysis, multi-document cross-examination, and verifiable citation attribution. Implemented hybrid LLM routing between Google Gemini 2.5 and Groq-hosted Llama 3.3 70B with sub-second streaming. Developed an adaptive chunking engine (fine-grained passage, balanced paragraph, coarse context) with PyMuPDF extraction, alongside an interactive citation system with clickable [Page X] chips linking directly to verbatim archival manuscript excerpts.',
    highlights: [
      'Split-screen academic synthesis & verifiable citation attribution',
      'Sub-second hybrid LLM routing between Google Gemini 2.5 and Groq Llama 3.3 70B',
      'Adaptive tri-tier semantic chunking engine with PyMuPDF extraction'
    ]
  },
  {
    id: 'agentic-compliance',
    title: 'AGENTIC COMPLIANCE SYSTEM',
    category: 'DEVELOPMENT',
    categories: ['DEVELOPMENT'],
    role: 'Software Engineer',
    client: 'KYC Hub (Internal)',
    stack: 'Temporal / Python / LLMs / DOM Analysis / FastAPI',
    year: '2026',
    image: '/monolith_project.jpg',
    badge: 'AGENTIC INFRA',
    summary: 'Architected agentic AI for automating AML-based data source onboarding and data ingestion for maintaining a database of sanctioned, criminal, or politically exposed entities.',
    content: 'Architected an agentic AI system for automating AML-based data source onboarding and data ingestion to maintain a database for sanctioned, criminal, or politically exposed entities (PEPs). Deployed Temporal for distributed workflow orchestration to guarantee fault-tolerant, scalable execution. Engineered automated DOM extraction and web scraping pipelines that parse complex webpage structures and dynamically generate schema mappings for reliable data extraction.',
    highlights: [
      'Automated AML data source onboarding & ingestion for sanctioned, criminal, and PEP entities',
      'Deployed Temporal for distributed workflow orchestration & fault-tolerant execution',
      'Automated DOM extraction and web scraping pipelines for complex global sources'
    ]
  },
  {
    id: 'civiclens',
    title: 'CIVICLENS PLATFORM',
    category: 'DEVELOPMENT',
    categories: ['DEVELOPMENT', 'DESIGN'],
    stack: 'React / Next.js / Leaflet / Node.js / PostgreSQL / Geofencing',
    year: '2025',
    image: '/aether_project.jpg',
    badge: 'CIVIC TECH',
    githubUrl: 'https://github.com/incheif/civiclens',
    summary: 'A mobile-first democratic civic engagement platform uniting geospatial issue reporting, geofencing clustering, and transparent citizen prioritization.',
    content: 'An independently engineered civic engagement platform enabling citizens to report infrastructure hazards with coordinate-based geofencing and duplicate cluster aggregation. Features real-time geospatial maps via Leaflet, community voting mechanisms, and administrative triage workflows for municipal agencies.',
    highlights: [
      'Geospatial incident clustering & polygon geofencing logic for city hazard tracking',
      'Democratic community prioritization with real-time voting & transparency tallies',
      'Interactive mapping UI with Leaflet, OpenStreetMap, and responsive mobile architecture'
    ]
  },
  {
    id: 'automated-quality',
    title: 'AUTOMATED QUALITY SIGN-OFF',
    category: 'DEVELOPMENT',
    categories: ['DEVELOPMENT'],
    role: 'Software Developer Intern',
    client: 'Hughes Communication India',
    stack: 'YOLOv8 / CNN / PyTorch / OpenCV',
    year: '2024',
    image: '/kinetic_project.jpg',
    badge: 'COMPUTER VISION',
    summary: 'A deep learning computer vision model verifying correct satellite dish antenna placement from field imagery.',
    content: 'Developed a deep learning solution using CNN and YOLOv8 to detect and verify correct dish antenna installation from field photographs. Automated the quality sign-off pipeline through image-based analysis, reducing manual inspection time and improving operational efficiency.',
    highlights: [
      'Deep learning CNN & YOLOv8 models verifying antenna alignment and placement',
      'Automated quality sign-off pipeline reducing field inspection turnaround',
      'Real-time edge image inference with OpenCV and PyTorch'
    ]
  },
  {
    id: 'candidate-matching',
    title: 'AI CANDIDATE MATCHING',
    category: 'DESIGN',
    categories: ['DESIGN', 'DEVELOPMENT'],
    role: 'Software Developer Intern',
    client: 'Shorthills AI',
    stack: 'Elasticsearch / Azure OpenAI / LlamaParse / Tesseract',
    year: '2025',
    image: '/bauhaus_project.jpg',
    badge: 'SEARCH & RANK',
    summary: 'AI recruiting matching system parsing multi-format CVs and ranking candidates using semantic embeddings.',
    content: 'Built an AI-driven candidate matching dashboard. Developed robust resume parsing pipelines using LlamaParse and Tesseract OCR, converting PDF/Docx documents to clean text. Computed semantic similarities using OpenAI text-embeddings, and indexed profiles with Elasticsearch for high-accuracy match ranking.',
    highlights: [
      'Candidate-job semantic matching & ranking using Elasticsearch and Azure OpenAI',
      'Heterogeneous resume ingestion pipeline via LlamaParse and Tesseract OCR',
      'High-throughput vector search using OpenAI text embeddings'
    ]
  }
];

const EXPERIENCE_DATA = [
  {
    period: 'JAN 2026 — PRESENT',
    company: 'KYC HUB',
    role: 'Software Engineer (Remote)',
    description: 'Architected agentic AI for automating AML based data sources onboarding and data ingestion for maintaining a database for sanctioned, criminal or politically exposed entities; deployed Temporal for distributed workflow orchestration and automated DOM extraction pipelines.'
  },
  {
    period: 'FEB 2025 — AUG 2025',
    company: 'SHORTHILLS AI',
    role: 'Software Developer Intern',
    description: 'Built AI candidate match rank systems using Elasticsearch and OpenAI. Created resume parsing tools using LlamaParse, Tesseract OCR, and semantic similarity embeddings.'
  },
  {
    period: 'JUNE 2024 — AUG 2024',
    company: 'HUGHES COMMUNICATION INDIA',
    role: 'Software Development Intern',
    description: 'Developed Python geospatial tracking terminal systems. Engineered radii geofencing logic and designed interactive SQL-backed maps using OpenStreetMap.'
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'DEVELOPMENT' | 'DESIGN'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id.includes('name') ? 'name' : id.includes('email') ? 'email' : 'message';
    setFormState(prev => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const filteredProjects = PROJECTS_DATA.filter(p => {
    if (activeCategory === 'ALL') return true;
    if (p.categories) return p.categories.includes(activeCategory);
    return p.category === activeCategory;
  });

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Global Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-30 texture-lines"></div>

      {/* STICKY NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white border-b border-black w-full flex items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="font-mono text-xs font-bold tracking-widest text-black focus-ring" style={{ textDecoration: 'none' }}>
          DHRUV GUPTA / AI/ML & SYSTEMS ARCHITECT
        </a>
        
        {/* Desktop Navigation */}
        <nav className="flex items-center gap-2 md:flex md:flex-row md:items-center">
          <span className="md:inline-flex flex items-center gap-2 flex-wrap" style={{ display: 'flex' }}>
            <a href="#about" className="nav-link focus-ring">01 / About</a>
            <a href="#projects" className="nav-link focus-ring">02 / Works</a>
            <a href="#experience" className="nav-link focus-ring">03 / Timeline</a>
            <a href="#contact" className="nav-link focus-ring">04 / CTA</a>
            <a href="/Dhruv_Gupta_Resume.pdf" target="_blank" rel="noreferrer" className="nav-link focus-ring">05 / Resume</a>
          </span>
        </nav>

        {/* Mobile Nav Trigger */}
        <button 
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex items-center justify-center p-2 focus-ring text-black bg-transparent border-none cursor-pointer"
          aria-label="Open Navigation Menu"
          style={{ display: 'none' }}
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </header>

      {/* MOBILE NAV OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-100 bg-white flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-mono text-xs font-bold tracking-widest uppercase">MENU</span>
            <button 
              onClick={() => setMenuOpen(false)} 
              className="p-2 border-none bg-transparent cursor-pointer text-black focus-ring"
              aria-label="Close Navigation Menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-8 items-start justify-center flex-1">
            <a 
              href="#about" 
              onClick={() => setMenuOpen(false)} 
              className="text-4xl font-bold tracking-tight text-black focus-ring"
              style={{ textDecoration: 'none' }}
            >
              01 / ABOUT
            </a>
            <a 
              href="#projects" 
              onClick={() => setMenuOpen(false)} 
              className="text-4xl font-bold tracking-tight text-black focus-ring"
              style={{ textDecoration: 'none' }}
            >
              02 / PORTFOLIO
            </a>
            <a 
              href="#experience" 
              onClick={() => setMenuOpen(false)} 
              className="text-4xl font-bold tracking-tight text-black focus-ring"
              style={{ textDecoration: 'none' }}
            >
              03 / MILESTONES
            </a>
            <a 
              href="#contact" 
              onClick={() => setMenuOpen(false)} 
              className="text-4xl font-bold tracking-tight text-black focus-ring"
              style={{ textDecoration: 'none' }}
            >
              04 / TRANSMIT
            </a>
            <a 
              href="/Dhruv_Gupta_Resume.pdf" 
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)} 
              className="text-4xl font-bold tracking-tight text-black focus-ring"
              style={{ textDecoration: 'none' }}
            >
              05 / RESUME
            </a>
          </nav>
          <div className="border-t border-black py-6 flex justify-between font-mono text-xs">
            <span>28.6139° N, 77.2090° E</span>
            <span>©2026</span>
          </div>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <main id="main">
        {/* HERO SECTION */}
        <section id="top" className="section-padding bg-white relative overflow-hidden" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
          {/* Subtle Grid Texture in Hero */}
          <div className="absolute inset-0 texture-grid opacity-5 pointer-events-none"></div>
          
          <div className="container relative z-10 w-full flex flex-col items-start text-left">
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase mb-4 block font-semibold">
              AI/ML ENGINEER & SYSTEMS ARCHITECT · DELHI TECHNOLOGICAL UNIVERSITY (DTU)
            </span>
            <h1 className="text-9xl uppercase font-bold tracking-tighter leading-none mb-6">
              DHRUV<br />
              GUPTA
            </h1>
            
            {/* Visual Punctuation (Thick rule with small bordered square) */}
            <div className="relative w-full mb-10" style={{ height: '8px' }}>
              <div className="hr-thick"></div>
              <div 
                className="absolute bg-white px-4 flex items-center justify-center"
                style={{ 
                  top: '50%', 
                  left: '10%', 
                  transform: 'translateY(-50%)',
                  height: '32px'
                }}
              >
                <div className="w-6 h-6 border-2 border-black bg-white"></div>
              </div>
            </div>

            <p className="text-3xl italic font-normal text-black mb-12 tracking-tight" style={{ maxWidth: '52rem', lineHeight: '1.3' }}>
              I am an Applied AI Engineer. I design AI workflows that self-plan, validate, and execute complex operations. Currently diving into physical AI and robotics.
            </p>

            <div className="flex flex-wrap gap-8 w-full justify-between items-end md:flex-col md:items-start md:gap-6 mt-4">
              <div className="flex gap-4 flex-wrap">
                <Button variant="primary" showArrow onClick={() => {
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  View Works Catalog
                </Button>
                <Button variant="secondary" onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Transmit Signal
                </Button>
                <a href="/Dhruv_Gupta_Resume.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary">View Resume</Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 font-mono text-xs text-muted py-2 border-t border-black w-full justify-between mt-8">
                <span>[ ALMA MATER : DELHI TECHNOLOGICAL UNIVERSITY (DTU) ]</span>
                <span>[ FOCUS : AGENTIC SYSTEMS, PHYSICAL AI & ROBOTICS ]</span>
                <span>[ STACK : PYTHON / ROS 2 / FASTAPI / JAVASCRIPT ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* HEAVY SECTION DIVIDER */}
        <hr className="hr-thick" />

        {/* ABOUT / CAPABILITIES SECTION */}
        <section id="about" className="section-padding bg-white relative">
          <div className="container">
            <div className="mb-12 text-left">
              <span className="font-mono text-xs tracking-widest text-muted block mb-4 uppercase">
                01 / ABOUT ME
              </span>
              <p className="text-2xl md:text-xl text-neutral-900 leading-relaxed font-normal max-w-4xl text-left" style={{ lineHeight: '1.4' }}>
                I specialize in architecting production AI systems where models are grounded in deterministic execution logic. My engineering discipline spans designing agentic workflows that self-plan and validate complex tasks, building low-latency retrieval pipelines, and connecting machine intelligence to the physical world through robotics and spatial computing.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-6">
              <div className="capability-card">
                <span className="capability-title">01 / AGENTIC WORKFLOWS</span>
                <p className="capability-desc">
                  Designing agentic AI workflows that self-plan, validate, and execute complex operations.
                </p>
              </div>
              <div className="capability-card">
                <span className="capability-title">02 / PHYSICAL AI & ROBOTICS</span>
                <p className="capability-desc">
                  Connecting machine intelligence to the physical world through robotics and spatial AI.
                </p>
              </div>
              <div className="capability-card">
                <span className="capability-title">03 / LOW-LATENCY RAG</span>
                <p className="capability-desc">
                  Building low-latency RAG architectures, multi-modal ingestion, and neural search engines.
                </p>
              </div>
              <div className="capability-card">
                <span className="capability-title">04 / DISTRIBUTED BACKENDS</span>
                <p className="capability-desc">
                  Engineering fault-tolerant distributed backends with Temporal, FastAPI, and Docker.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HEAVY SECTION DIVIDER */}
        <hr className="hr-thick" />

        {/* STATS SECTION (INVERTED) */}
        <section className="section-padding bg-black text-white relative overflow-hidden">
          {/* Subtle Vertical Line Texture */}
          <div className="absolute inset-0 texture-vertical-white opacity-5 pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-12 md:gap-8 text-left">
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 01 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">8.13</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">CUMULATIVE BTECH GPA (DTU)</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 02 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">06+</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">SHIPPED ARCHITECTURES & SYSTEMS</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 03 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">08+</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">DEV TOOLS, ROBOTICS & CLOUD PLATS</div>
              </div>
            </div>
          </div>
        </section>

        {/* HEAVY SECTION DIVIDER */}
        <hr className="hr-thick" />

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-padding bg-white relative">
          <div className="container">
            <div className="flex justify-between items-end md:flex-col md:items-start md:gap-6 mb-16">
              <div>
                <span className="font-mono text-xs tracking-widest text-muted block mb-4 uppercase">
                  02 / PORTFOLIO CATALOG
                </span>
                <h2 className="text-5xl font-bold uppercase tracking-tight leading-none text-black">
                  SHIPPED WORKS
                </h2>
              </div>
              
              {/* Category Filter Controls */}
              <div className="flex gap-2 border border-black p-1">
                {(['ALL', 'DEVELOPMENT', 'DESIGN'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border-none cursor-pointer focus-ring transition-colors duration-100 ${
                      activeCategory === cat 
                        ? 'bg-black text-white' 
                        : 'bg-transparent text-black hover:bg-neutral-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Editorial Project Placards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id} 
                  className="project-placard text-left"
                >
                  {/* Top Placard Badge Bar: Clean Specimen Index & Category (NO repeated links) */}
                  <div className="placard-badge-bar">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-neutral-500 tracking-wider">
                        [ SPECIMEN 0{idx + 1} ]
                      </span>
                      <span className="bg-black text-white font-mono text-xs px-2 py-0.5 font-semibold">
                        {project.year}
                      </span>
                      {project.badge && (
                        <span className="bg-neutral-100 text-black border border-black font-mono text-xs px-2 py-0.5 font-bold">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs text-muted tracking-widest font-semibold uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Specimen Frame (Single Image) */}
                  <div 
                    className="placard-specimen-frame cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="placard-specimen-img"
                    />
                  </div>

                  {/* Placard Title */}
                  <h3 
                    className="placard-title cursor-pointer hover:underline"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  {/* Tech Stack Chips */}
                  <div className="placard-tech-list">
                    {project.stack.split(' / ').map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Placard Summary */}
                  <p className="placard-summary">
                    {project.summary}
                  </p>

                  {/* Key Architectural Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="placard-highlights">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="highlight-item">
                          <span className="text-black font-bold">▪</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Placard Footer Action Row: All outbound links are located here at the bottom */}
                  <div className="placard-footer">
                    <button 
                      className="placard-action-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      Analyze Specification <ArrowRight size={13} />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="placard-pill-btn primary"
                          title="Open Live Deployment"
                        >
                          <Globe size={11} />
                          <span>Live Demo</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="placard-pill-btn"
                          title="View GitHub Repository"
                        >
                          <GithubIcon size={12} />
                          <span>GitHub ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEAVY SECTION DIVIDER */}
        <hr className="hr-thick" />

        {/* TIMELINE / EXPERIENCE SECTION */}
        <section id="experience" className="py-16 md:py-12 bg-muted relative border-y border-neutral-300">
          {/* Subtle Diagonal Lines Texture */}
          <div className="absolute inset-0 texture-diagonal opacity-5 pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="flex justify-between items-end md:flex-col md:items-start md:gap-2 mb-10">
              <div>
                <span className="font-mono text-xs tracking-widest text-muted block mb-1 uppercase">
                  03 / TIMELINE
                </span>
                <h2 className="text-4xl md:text-3xl font-bold uppercase tracking-tight leading-none text-black">
                  CHRONICLES OF EXPERIENCE
                </h2>
              </div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                3 STAGES • 2024 — PRESENT
              </span>
            </div>

            {/* Compact 3-Column Grid */}
            <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="timeline-card text-left"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3 pb-2 border-b border-neutral-200">
                      <span className="font-mono text-xs font-bold text-neutral-600 tracking-wider">
                        {exp.period}
                      </span>
                      <span className="font-mono text-xs bg-black text-white px-2 py-0.5 font-bold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black uppercase tracking-tight mb-1">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-xs text-neutral-700 block mb-3 font-semibold">
                      {exp.role}
                    </span>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEAVY SECTION DIVIDER */}
        <hr className="hr-thick" />

        {/* CONTACT / CTA SECTION (INVERTED) */}
        <section id="contact" className="section-padding bg-black text-white relative overflow-hidden">
          {/* Spotlight Texture */}
          <div className="absolute inset-0 texture-radial-white opacity-10 pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-12 gap-12 lg:grid-cols-2 md:grid-cols-1 md:gap-8">
              
              <div className="col-span-5 lg:col-span-12 text-left">
                <span className="font-mono text-xs tracking-widest text-neutral-400 block mb-4 uppercase">
                  04 / COMMUNICATIONS
                </span>
                <h2 className="text-6xl font-bold uppercase tracking-tighter leading-none text-white mb-6">
                  TRANSMIT<br />A SIGNAL.
                </h2>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Have an intelligent system design, robotics manipulation inquiry, or engineering collaboration requiring strict discipline? Let us align. File your contact metrics and details below to trigger an immediate connection loop.
                </p>
                <div className="flex flex-col gap-4 font-mono text-xs text-neutral-300">
                  <div className="flex items-center gap-3">
                    <Mail size={16} strokeWidth={1.5} className="text-white" />
                    <a href="mailto:guptadhruv959@gmail.com" className="text-white focus-ring-light hover:underline">
                      guptadhruv959@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <GithubIcon size={16} className="text-white" />
                    <a href="https://github.com/incheif" target="_blank" rel="noreferrer" className="text-white focus-ring-light hover:underline">
                      github.com/incheif
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <a href="https://linkedin.com/in/dhruv-gupta45" target="_blank" rel="noreferrer" className="text-white focus-ring-light hover:underline">
                      linkedin.com/in/dhruv-gupta45
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-7 lg:col-span-12 text-left bg-white text-black p-8 border-thin">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-6">
                      <Check size={24} strokeWidth={2} />
                    </div>
                    <h3 className="font-mono text-sm tracking-widest uppercase font-bold mb-2">
                      TRANSMISSION EXECUTED
                    </h3>
                    <p className="font-sans italic text-muted">
                      Your metrics have been logged successfully. We will align shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                    <TextField 
                      label="Identifier Name" 
                      id="form-name"
                      placeholder="e.g. ALBERT SCHULZ" 
                      required 
                      value={formState.name}
                      onChange={handleInputChange}
                    />
                    <TextField 
                      label="Digital Endpoint (Email)" 
                      id="form-email"
                      type="email" 
                      placeholder="e.g. albert@schulz-labs.de" 
                      required 
                      value={formState.email}
                      onChange={handleInputChange}
                    />
                    <TextField 
                      label="Signal Content (Message)" 
                      id="form-message"
                      multiline 
                      placeholder="Detail your request or engineering query..." 
                      required 
                      value={formState.message}
                      onChange={handleInputChange}
                    />
                    <Button type="submit" variant="primary" showArrow className="mt-4">
                      Submit Transmission
                    </Button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* HEAVY SECTION DIVIDER */}
        <hr className="hr-thick" />
      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-white relative">
        <div className="container">
          <div className="flex flex-row justify-between items-center md:flex-col md:gap-6 md:items-start text-left">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest block uppercase mb-1">
                DHRUV GUPTA / AI/ML & SYSTEMS ARCHITECT
              </span>
              <p className="font-mono text-xs text-muted">
                COMPILED VIA VITE / REACT / TS / VANILLA CSS. ALL SYSTEM SHARP.
              </p>
            </div>
            
            <div className="flex items-center gap-6 font-mono text-xs">
              <span className="text-muted">©2026 RESTRAINT STUDIO</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 border border-black px-4 py-2 hover:bg-black hover:text-white cursor-pointer bg-transparent focus-ring"
                aria-label="Scroll to top of page"
              >
                TOP <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* DETAILED PROJECT MODAL (GRID-BASED CASE STUDY DRAWER) */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-70 p-6 md:p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Content */}
          <div 
            className="bg-white border-2 border-black w-full max-w-4xl p-8 md:p-6 relative text-left overflow-y-auto max-h-full"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grid pattern overlay in modal */}
            <div className="absolute inset-0 texture-grid opacity-5 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex justify-between items-baseline mb-6 pb-4 border-b-2 border-black">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-widest text-muted uppercase">
                    CASE SPECIFICATION / {selectedProject.category}
                  </span>
                  {selectedProject.badge && (
                    <span className="bg-black text-white font-mono text-xs px-2 py-0.5 font-bold">
                      {selectedProject.badge}
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border border-black px-4 py-2 font-mono text-xs uppercase hover:bg-black hover:text-white cursor-pointer bg-transparent focus-ring font-bold"
                >
                  CLOSE
                </button>
              </div>

              {/* Title */}
              <div className="mb-6">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase leading-none">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Single Image Viewport Frame in Modal */}
              <div className="modal-image-frame">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="modal-image"
                />
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-12 gap-8 md:grid-cols-1 md:gap-6">
                
                {/* Left Column: Metadata */}
                <div className="col-span-4 md:col-span-12 flex flex-col gap-4 font-mono text-xs border-r border-neutral-200 md:border-r-0 md:border-b md:pb-6 pr-4">
                  {/* Conditionally render Role only if present */}
                  {selectedProject.role && (
                    <div>
                      <span className="text-muted uppercase block">ROLE</span>
                      <span className="text-black font-semibold uppercase">{selectedProject.role}</span>
                    </div>
                  )}

                  {/* Conditionally render Organization only if present */}
                  {selectedProject.client && (
                    <div>
                      <span className="text-muted uppercase block">ORGANIZATION</span>
                      <span className="text-black font-semibold uppercase">{selectedProject.client}</span>
                    </div>
                  )}

                  {/* For independent architectures (no role, no client) */}
                  {!selectedProject.role && !selectedProject.client && (
                    <div>
                      <span className="text-muted uppercase block">DEVELOPMENT MODEL</span>
                      <span className="text-black font-semibold uppercase">Independent Architecture</span>
                    </div>
                  )}

                  <div>
                    <span className="text-muted uppercase block">CHRONOLOGY</span>
                    <span className="text-black font-semibold">{selectedProject.year}</span>
                  </div>
                  <div>
                    <span className="text-muted uppercase block">INTEGRATION LAYERS</span>
                    <span className="text-black font-semibold">{selectedProject.stack}</span>
                  </div>
                  {selectedProject.liveUrl && (
                    <div>
                      <span className="text-muted uppercase block">DEPLOYED ENDPOINT</span>
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-black font-semibold hover:underline block truncate"
                      >
                        {selectedProject.liveUrl}
                      </a>
                    </div>
                  )}
                  {selectedProject.githubUrl && (
                    <div>
                      <span className="text-muted uppercase block">SOURCE REPOSITORY</span>
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-black font-semibold hover:underline block truncate"
                      >
                        {selectedProject.githubUrl.replace('https://', '')}
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Case Details */}
                <div className="col-span-8 md:col-span-12 flex flex-col gap-6 text-left">
                  <p className="text-lg text-black drop-cap-box leading-relaxed font-normal">
                    {selectedProject.content}
                  </p>

                  {/* Highlights Specification in Modal */}
                  {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                    <div className="border border-black p-4 bg-neutral-50 text-left">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider block mb-2 text-black">
                        Key Architectural Specifications:
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {selectedProject.highlights.map((h, i) => (
                          <div key={i} className="font-mono text-xs text-neutral-700 flex items-start gap-2">
                            <span className="text-black font-bold">▪</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-base text-muted leading-relaxed">
                    Designed with strict spatial geometry and mathematical structure to eliminate transient decoration. Built for high operational performance and cognitive clarity.
                  </p>

                  <div className="mt-4 flex gap-4 flex-wrap">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ textDecoration: 'none' }}
                      >
                        <Button variant="primary" showArrow>
                          Launch Live Studio
                        </Button>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ textDecoration: 'none' }}
                      >
                        <Button variant="secondary">
                          GitHub Repository ↗
                        </Button>
                      </a>
                    )}
                    <Button 
                      variant="secondary" 
                      onClick={() => setSelectedProject(null)}
                    >
                      Return to Catalog
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
