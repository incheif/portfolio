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

interface ScreenshotItem {
  src: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  category: 'DEVELOPMENT' | 'DESIGN';
  categories?: ('DEVELOPMENT' | 'DESIGN')[];
  role: string;
  stack: string;
  client: string;
  year: string;
  image: string;
  summary: string;
  content: string;
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  screenshots?: ScreenshotItem[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'aero',
    title: 'AERO: AGENTIC ROBOTIC OPERATIONS',
    category: 'DEVELOPMENT',
    categories: ['DEVELOPMENT'],
    role: 'Robotics & AI Architect',
    stack: 'ROS 2 / Google Gemini VLA / Three.js WebGL / Rapier3D / Python / FastAPI',
    client: 'Autonomous Robotics Lab',
    year: '2026',
    image: '/aero_studio_tower.png',
    badge: 'PHYSICAL AI',
    githubUrl: 'https://github.com/incheif/Aero',
    liveUrl: 'https://aero-studio.onrender.com/',
    summary: 'An end-to-end cognitive robotic manipulation platform combining Vision-Language-Action (VLA) multimodal reasoning, 3D tabletop spatial semantic mapping, 60 FPS physics kinematics, and an interactive Three.js WebGL studio.',
    content: 'AERO (Agentic Execution for Robotic Operations) bridges high-level multimodal reasoning with physical robotic execution. The platform translates natural-language commands into verified tabletop manipulation primitives using Google Gemini VLA models, persistent 3D spatial semantic memory, and active frontier exploration. Closed-loop Cartesian trajectory planning and geometric inverse kinematics execute against 60 FPS Rapier3D rigid-body dynamics, streaming continuous telemetry via WebSockets to a Three.js 3D WebGL digital twin studio and publishing to native ROS 2 topic bridges.',
    screenshots: [
      { src: '/aero_studio_tower.png', label: '3D WebGL Studio & Multi-Layer Tower Assembly' },
      { src: '/demo_aero_manipulation.webp', label: '60 FPS Live Kinematic Manipulation Demo' },
      { src: '/aero_execution_logs.png', label: 'Real-Time Telemetry & IK Execution Stream' }
    ]
  },
  {
    id: 'paperscope-ai',
    title: 'PAPERSCOPE_AI',
    category: 'DESIGN',
    categories: ['DEVELOPMENT', 'DESIGN'],
    role: 'Full-Stack AI Engineer & Creator',
    stack: 'Next.js 16 / FastAPI / Gemini 2.5 / Groq Llama 3.3 / PyMuPDF / Docker',
    client: 'Academic Intelligence',
    year: '2025',
    image: '/02-paper-synthesis.png',
    badge: 'ENTERPRISE RAG',
    githubUrl: 'https://github.com/incheif/PaperScope-AI',
    liveUrl: 'https://paperscope-ai.onrender.com/',
    summary: 'An enterprise-grade, full-stack Retrieval-Augmented Generation (RAG) platform purpose-built for academic literature synthesis, multi-document cross-examination, and verifiable citation interrogation.',
    content: 'Architected an academic literature interrogation platform featuring split-screen manuscript synthesis, multi-document cross-examination, and verifiable citation attribution. Implemented hybrid LLM routing between Google Gemini 2.5 and Groq-hosted Llama 3.3 70B with sub-second streaming. Developed an adaptive chunking engine (fine-grained passage, balanced paragraph, coarse context) with PyMuPDF extraction, alongside an interactive citation system with clickable [Page X] chips linking directly to verbatim archival manuscript excerpts.',
    screenshots: [
      { src: '/02-paper-synthesis.png', label: 'Split-Screen Academic Synthesis & Structured Monograph' },
      { src: '/03-chat-interrogation.png', label: 'Conversational RAG Interrogation & Verified Citations' },
      { src: '/01-landing-workspace.png', label: 'Multi-Document Ingestion & Semantic Chunking Profiles' }
    ]
  },
  {
    id: 'agentic-compliance',
    title: 'AGENTIC COMPLIANCE SYSTEM',
    category: 'DEVELOPMENT',
    categories: ['DEVELOPMENT'],
    role: 'Software Engineer',
    stack: 'Temporal / Python / LLMs / DOM Analysis',
    client: 'KYC Hub (Internal)',
    year: '2026',
    image: '/monolith_project.jpg',
    badge: 'AGENTIC INFRA',
    summary: 'An agentic system automating compliance source onboarding by analyzing DOM structures and dynamically generating schemas.',
    content: 'Developed an agentic solution to automate the onboarding of global compliance sources. The system autonomously analyzes DOM structures to generate execution plans, validation logic, and schema mappings for structured data extraction. Utilized Temporal to manage scalable, distributed activities and execution processes, ensuring high reliability.',
    screenshots: [
      { src: '/monolith_project.jpg', label: 'Distributed Schema & Execution State Topology' }
    ]
  },
  {
    id: 'automated-quality',
    title: 'AUTOMATED QUALITY SIGN-OFF',
    category: 'DEVELOPMENT',
    categories: ['DEVELOPMENT'],
    role: 'Software Developer Intern',
    stack: 'YOLOv8 / CNN / PyTorch / OpenCV',
    client: 'Hughes Communication India',
    year: '2024',
    image: '/kinetic_project.jpg',
    badge: 'COMPUTER VISION',
    summary: 'A deep learning computer vision model verifying correct satellite dish antenna placement from field imagery.',
    content: 'Developed a deep learning solution using CNN and YOLOv8 to detect and verify correct dish antenna installation from field photographs. Automated the quality sign-off pipeline through image-based analysis, reducing manual inspection time and improving operational efficiency.',
    screenshots: [
      { src: '/kinetic_project.jpg', label: 'Computer Vision Antenna Detection Pipeline' }
    ]
  },
  {
    id: 'candidate-matching',
    title: 'AI CANDIDATE MATCHING',
    category: 'DESIGN',
    categories: ['DESIGN', 'DEVELOPMENT'],
    role: 'Software Developer Intern',
    stack: 'Elasticsearch / Azure OpenAI / LlamaParse / Tesseract',
    client: 'Shorthills AI',
    year: '2025',
    image: '/bauhaus_project.jpg',
    badge: 'SEARCH & RANK',
    summary: 'AI recruiting matching system parsing multi-format CVs and ranking candidates using semantic embeddings.',
    content: 'Built an AI-driven candidate matching dashboard. Developed robust resume parsing pipelines using LlamaParse and Tesseract OCR, converting PDF/Docx documents to clean text. Computed semantic similarities using OpenAI text-embeddings, and indexed profiles with Elasticsearch for high-accuracy match ranking.',
    screenshots: [
      { src: '/bauhaus_project.jpg', label: 'Semantic Matching & Candidate Indexing Dashboard' }
    ]
  }
];

const EXPERIENCE_DATA = [
  {
    period: 'JAN 2026 — PRESENT',
    company: 'KYC HUB',
    role: 'Software Engineer (Remote)',
    description: 'Designed agentic onboarding systems for compliance sources. Managed scalable, long-running extraction processes with Temporal and engineered autonomous DOM-structure analyses.'
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
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setActiveModalImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveModalImage(project.image);
  };

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
          DHRUV GUPTA / AI & ROBOTICS
        </a>
        
        {/* Desktop Navigation */}
        <nav className="flex items-center gap-2 md:flex md:flex-row md:items-center">
          <span className="md:inline-flex flex items-center gap-2 flex-wrap" style={{ display: 'flex' }}>
            <a href="#about" className="nav-link focus-ring">01 / Index</a>
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
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase mb-4 block">
              EMBODIED AI, ROBOTICS & INTELLIGENT SYSTEMS
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

            <p className="text-3xl italic font-normal text-black mb-12 tracking-tight" style={{ maxWidth: '48rem', lineHeight: '1.3' }}>
              I'm Dhruv Gupta, an AI/ML Engineer and Software Engineer focused on building intelligent systems that connect software with the physical world.
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
                <span>[ LATITUDE : 28.6139° N ]</span>
                <span>[ STACK : PYTHON / ROS 2 / C++ / TYPESCRIPT ]</span>
                <span>[ FOCUS : PHYSICAL AI & INTELLIGENT SYSTEMS ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* HEAVY SECTION DIVIDER */}
        <hr className="hr-thick" />

        {/* ABOUT SECTION */}
        <section id="about" className="section-padding bg-white relative">
          <div className="container">
            <div className="grid grid-cols-12 gap-12 lg:grid-cols-2 md:grid-cols-1 md:gap-8">
              <div className="col-span-4 lg:col-span-12">
                <span className="font-mono text-xs tracking-widest text-muted block mb-4 uppercase">
                  01 / PHILOSOPHY
                </span>
                <h2 className="text-5xl font-bold tracking-tight uppercase leading-none text-black">
                  THE MECHANICS<br />OF COGNITION.
                </h2>
              </div>
              <div className="col-span-8 lg:col-span-12 flex flex-col gap-6">
                <p className="text-xl text-black drop-cap-box leading-relaxed font-normal">
                  I believe software achieves its highest leverage when it interfaces directly with the physical world. As an AI/ML and Software Engineer, my work centers on designing intelligent systems that bridge high-level multimodal cognition with physical actuators, real-time spatial memory, and robust distributed execution pipelines.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  From architecting <strong>AERO</strong>—an embodied robotic manipulation studio pairing Google Gemini VLA reasoning with 60 FPS physics and ROS 2—to developing <strong>PaperScope AI</strong> for verifiable academic RAG literature synthesis, to deploying agentic DOM extraction workflows with Temporal at KYC Hub, I build computational architectures that are resilient, mathematically grounded, and rigorously performant.
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
            <div className="grid grid-cols-4 md:grid-cols-2 gap-12 md:gap-8 text-left">
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 01 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">8.13</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">CUMULATIVE BTECH GPA (DTU)</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 02 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">05+</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">AI & ROBOTIC SYSTEMS</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 03 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">60 FPS</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">REAL-TIME PHYSICS KINEMATICS</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 04 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">08+</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">FRAMEWORKS & CLOUD PLATS</div>
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

            {/* Editorial Projects Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-12">
              {filteredProjects.map(project => (
                <div 
                  key={project.id} 
                  className="group cursor-pointer flex flex-col items-stretch text-left"
                  onClick={() => openProjectModal(project)}
                >
                  {/* Card Container for Image */}
                  <div className="relative border-2 border-black overflow-hidden aspect-[3/2] mb-6 transition-all duration-100 group-hover:border-[4px] bg-neutral-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-black text-white font-mono text-xs px-3 py-1 font-semibold">
                        {project.year}
                      </span>
                      {project.badge && (
                        <span className="bg-white text-black border border-black font-mono text-xs px-2.5 py-1 font-bold">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Live indicator if deployed */}
                    {project.liveUrl && (
                      <div className="absolute top-4 right-4 bg-black text-white font-mono text-xs px-3 py-1 flex items-center gap-2 font-bold">
                        <span className="live-pulse" />
                        <span>LIVE</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-baseline mb-4 py-2 border-b border-neutral-200">
                    <h3 className="text-3xl font-bold tracking-tight text-black">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-base text-muted mb-6 leading-relaxed flex-1">
                    {project.summary}
                  </p>

                  {/* Card Action Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
                    <div className="flex items-center gap-2 font-mono text-xs text-black uppercase font-medium group-hover:underline">
                      Analyze Specification <ArrowRight size={14} />
                    </div>

                    <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="font-mono text-xs font-bold text-black flex items-center gap-1 hover:underline"
                          title="Open Live App"
                        >
                          <Globe size={13} />
                          <span>Demo</span>
                          <ExternalLink size={11} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-black hover:opacity-70 flex items-center gap-1 font-mono text-xs font-semibold"
                          title="View GitHub Repository"
                        >
                          <GithubIcon size={14} />
                          <span>Code</span>
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
        <section id="experience" className="section-padding bg-muted relative">
          {/* Subtle Diagonal Lines Texture */}
          <div className="absolute inset-0 texture-diagonal opacity-5 pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-12 gap-12 lg:grid-cols-2 md:grid-cols-1 md:gap-8">
              <div className="col-span-4 lg:col-span-12">
                <span className="font-mono text-xs tracking-widest text-muted block mb-4 uppercase">
                  03 / TIMELINE
                </span>
                <h2 className="text-5xl font-bold uppercase tracking-tight leading-none text-black">
                  CHRONICLES OF<br />EXPERIENCE
                </h2>
              </div>
              <div className="col-span-8 lg:col-span-12 flex flex-col">
                <div className="border-l-2 border-black pl-8 md:pl-4 flex flex-col gap-12">
                  {EXPERIENCE_DATA.map((exp, idx) => (
                    <div key={idx} className="relative flex flex-col items-start text-left">
                      {/* Timeline dot */}
                      <div 
                        className="absolute bg-black border-2 border-black w-4 h-4"
                        style={{ left: '-41px', top: '4px', transform: 'translateX(-50%)' }}
                      />
                      
                      <span className="font-mono text-xs tracking-widest text-muted block mb-2 font-semibold">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-black uppercase tracking-tight mb-1">
                        {exp.company}
                      </h3>
                      <span className="font-mono text-xs text-black uppercase font-medium tracking-wide mb-4">
                        {exp.role}
                      </span>
                      <p className="text-base text-muted leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
                DHRUV GUPTA / EMBODIED AI & ROBOTICS
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
          onClick={() => {
            setSelectedProject(null);
            setActiveModalImage(null);
          }}
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
                  onClick={() => {
                    setSelectedProject(null);
                    setActiveModalImage(null);
                  }}
                  className="border border-black px-4 py-2 font-mono text-xs uppercase hover:bg-black hover:text-white cursor-pointer bg-transparent focus-ring font-bold"
                >
                  CLOSE
                </button>
              </div>

              {/* Title & Quick Actions */}
              <div className="flex justify-between items-start gap-4 mb-6 flex-wrap">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase leading-none">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-black px-3.5 py-2 font-mono text-xs uppercase bg-black text-white hover:bg-neutral-800 flex items-center gap-2 font-bold cursor-pointer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Globe size={13} />
                      Live Demo
                      <ExternalLink size={11} />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-black px-3.5 py-2 font-mono text-xs uppercase bg-white text-black hover:bg-neutral-100 flex items-center gap-2 font-bold cursor-pointer"
                      style={{ textDecoration: 'none' }}
                    >
                      <GithubIcon size={13} />
                      Repository
                    </a>
                  )}
                </div>
              </div>

              {/* Main Preview Image in Modal */}
              <div className="border-2 border-black w-full overflow-hidden aspect-[16/9] mb-4 bg-neutral-100">
                <img 
                  src={activeModalImage || selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover grayscale-0"
                />
              </div>

              {/* Screenshot Gallery Picker */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                  {selectedProject.screenshots.map((s, idx) => {
                    const isCurrent = (activeModalImage || selectedProject.image) === s.src;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImage(s.src)}
                        className={`border-2 p-1.5 bg-white cursor-pointer transition-all flex items-center gap-2 text-left ${
                          isCurrent ? 'border-black bg-neutral-100' : 'border-neutral-300 opacity-60 hover:opacity-100'
                        }`}
                        style={{ minWidth: '180px' }}
                      >
                        <img src={s.src} alt={s.label} className="w-16 h-10 object-cover border border-neutral-200" />
                        <span className="font-mono text-xs text-neutral-800 leading-tight block">
                          {s.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Specification Grid */}
              <div className="grid grid-cols-12 gap-8 md:grid-cols-1 md:gap-6">
                
                {/* Left Column: Metadata */}
                <div className="col-span-4 md:col-span-12 flex flex-col gap-4 font-mono text-xs border-r border-neutral-200 md:border-r-0 md:border-b md:pb-6 pr-4">
                  <div>
                    <span className="text-muted uppercase block">ROLE</span>
                    <span className="text-black font-semibold uppercase">{selectedProject.role}</span>
                  </div>
                  <div>
                    <span className="text-muted uppercase block">ORGANIZATION / CONTEXT</span>
                    <span className="text-black font-semibold uppercase">{selectedProject.client}</span>
                  </div>
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
                  <p className="text-base text-muted leading-relaxed">
                    By focusing on flat layout designs, heavy rules, and structured lines, we ensured that the work does not distract with transient decorations. The result is a highly functional, visual system built on pure grid theory.
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
                      onClick={() => {
                        setSelectedProject(null);
                        setActiveModalImage(null);
                      }}
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
