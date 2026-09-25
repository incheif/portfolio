import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ArrowUp, 
  Check, 
  Mail 
} from 'lucide-react';
import { Button } from './components/Button';
import { TextField } from './components/TextField';

interface Project {
  id: string;
  title: string;
  category: 'DEVELOPMENT' | 'DESIGN';
  role: string;
  stack: string;
  client: string;
  year: string;
  image: string;
  summary: string;
  content: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'agentic-compliance',
    title: 'AGENTIC COMPLIANCE SYSTEM',
    category: 'DEVELOPMENT',
    role: 'Software Engineer',
    stack: 'Temporal / Python / LLMs / DOM Analysis',
    client: 'KYC Hub (Internal)',
    year: '2026',
    image: '/monolith_project.jpg',
    summary: 'An agentic system automating compliance source onboarding by analyzing DOM structures and dynamically generating schemas.',
    content: 'Developed an agentic solution to automate the onboarding of global compliance sources. The system autonomously analyzes DOM structures to generate execution plans, validation logic, and schema mappings for structured data extraction. Utilized Temporal to manage scalable, distributed activities and execution processes, ensuring high reliability.'
  },
  {
    id: 'quantum-chatbot',
    title: 'QUANTUM PHYSICS CHATBOT',
    category: 'DESIGN',
    role: 'Creator & Developer',
    stack: 'LangChain / Groq / Gemini / FAISS Vector Embeddings',
    client: 'Personal Project',
    year: '2025',
    image: '/aether_project.jpg',
    summary: 'A RAG-powered cognitive chat system queryable over complex physics research papers with multi-modal parsing capabilities.',
    content: 'Engineered a Retrieval-Augmented Generation (RAG) system using LangChain and Groq for high-speed inference. Implemented semantic search pipelines with Google Gemini embeddings and FAISS vector stores to provide context-aware document analysis. The modular architecture parses mathematical notation and diagrams, translating intricate papers into accessible text.'
  },
  {
    id: 'automated-quality',
    title: 'AUTOMATED QUALITY SIGN-OFF',
    category: 'DEVELOPMENT',
    role: 'Software Developer Intern',
    stack: 'YOLOv8 / CNN / PyTorch / OpenCV',
    client: 'Hughes Communication India',
    year: '2024',
    image: '/kinetic_project.jpg',
    summary: 'A deep learning computer vision model verifying correct satellite dish antenna placement from field imagery.',
    content: 'Developed a deep learning solution using CNN and YOLOv8 to detect and verify correct dish antenna installation from field photographs. Automated the quality sign-off pipeline through image-based analysis, reducing manual inspection time and improving operational efficiency.'
  },
  {
    id: 'candidate-matching',
    title: 'AI CANDIDATE MATCHING',
    category: 'DESIGN',
    role: 'Software Developer Intern',
    stack: 'Elasticsearch / Azure OpenAI / LlamaParse / Tesseract',
    client: 'Shorthills AI',
    year: '2025',
    image: '/bauhaus_project.jpg',
    summary: 'AI recruiting matching system parsing multi-format CVs and ranking candidates using semantic embeddings.',
    content: 'Built an AI-driven candidate matching dashboard. Developed robust resume parsing pipelines using LlamaParse and Tesseract OCR, converting PDF/Docx documents to clean text. Computed semantic similarities using OpenAI text-embeddings, and indexed profiles with Elasticsearch for high-accuracy match ranking.'
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map id to state keys
    const key = id.includes('name') ? 'name' : id.includes('email') ? 'email' : 'message';
    setFormState(prev => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const filteredProjects = PROJECTS_DATA.filter(
    p => activeCategory === 'ALL' || p.category === activeCategory
  );

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
          DHRUV GUPTA / ENGINEER
        </a>
        
        {/* Desktop Navigation */}
        <nav className="flex items-center gap-2 md:flex md:flex-row md:items-center">
          <div className="flex md:flex-row flex-row gap-2" style={{ display: 'none' }}></div>
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
          style={{ display: 'none' }} /* Hidden as navigation collapses inline or wraps cleanly */
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </header>

      {/* MOBILE NAV OVERLAY (Clean backup for mobile breakpoints) */}
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
              COGNITIVE ARCHITECTURES & DECISION TREES
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

            <p className="text-3xl italic font-normal text-black mb-12 tracking-tight" style={{ maxWidth: '44rem', lineHeight: '1.25' }}>
              AI/ML Engineer and Software Engineer building cognitive decision trees with mathematical structure. Currently diving into robotics engineering.
            </p>

            <div className="flex flex-wrap gap-8 w-full justify-between items-end md:flex-col md:items-start md:gap-6 mt-4">
              <div className="flex gap-4 flex-wrap">
                <Button variant="primary" showArrow onClick={() => {
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  View Catalog
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
                <span>[ STACK : PYTHON / C++ / JAVASCRIPT ]</span>
                <span>[ STATUS : SOFTWARE ENGINEER @ KYC HUB ]</span>
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
                  I believed that software systems were logical structures of automation. My work focused on agentic systems and AI architectures. I engineered resilient distributed execution pipelines and automated document retrieval systems using LLMs. By designing code with strict mathematical alignments, we optimized operational efficiency and eliminated manual engineering overhead.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  My engineering approach was architecturally structured around data flows and cognitive systems. From implementing real-time geospatial terminal trackers in Python at Hughes, to indexing multi-format candidate resumes in Elasticsearch at Shorthills AI, I built digital architectures that scaled cleanly and operated with absolute reliability.
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
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">03</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">SOFTWARE ENGINEERING ROLES</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 03 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">03</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">AI & COGNITIVE PIPELINES</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-widest text-neutral-400 mb-2">[ METRIC 04 ]</div>
                <div className="text-7xl font-bold tracking-tighter leading-none mb-2 font-display">06+</div>
                <div className="font-mono text-xs tracking-widest text-neutral-300 uppercase">DEV TOOLS & CLOUD PLATS</div>
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
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Container for Image */}
                  <div className="relative border-2 border-black overflow-hidden aspect-[3/2] mb-6 transition-all duration-100 group-hover:border-[4px]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 bg-black text-white font-mono text-xs px-3 py-1">
                      {project.year}
                    </div>
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

                  <div className="flex items-center gap-2 font-mono text-xs text-black uppercase font-medium group-hover:underline">
                    Analyze Specification <ArrowRight size={14} />
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
                  Have a system configuration, structural redesign, or editorial project requiring strict discipline? Let us align. File your contact metrics and project details below to trigger an immediate connection loop.
                </p>
                <div className="flex flex-col gap-4 font-mono text-xs text-neutral-300">
                  <div className="flex items-center gap-3">
                    <Mail size={16} strokeWidth={1.5} className="text-white" />
                    <a href="mailto:guptadhruv959@gmail.com" className="text-white focus-ring-light hover:underline">
                      guptadhruv959@gmail.com
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
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2.2 6-7.5a5.6 5.6 0 0 0-1.3-3.8 5 5 0 0 0-.1-3.8s-.9-.3-3 1a17.9 17.9 0 0 0-9 0c-2.1-1.3-3-1-3-1a5 5 0 0 0-.1 3.8 5.6 5.6 0 0 0-1.3 3.8c0 5.3 3 7.5 6 7.5a4.8 4.8 0 0 0-1 3.5v4" />
                    </svg>
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
                      placeholder="Detail your request or layout query..." 
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
                DHRUV GUPTA / AUTOMATION ARCHITECTURE
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
              <div className="flex justify-between items-baseline mb-8 pb-4 border-b-2 border-black">
                <span className="font-mono text-xs tracking-widest text-muted uppercase">
                  CASE SPECIFICATION / {selectedProject.category}
                </span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border border-black px-4 py-2 font-mono text-xs uppercase hover:bg-black hover:text-white cursor-pointer bg-transparent focus-ring"
                >
                  CLOSE
                </button>
              </div>

              {/* Title */}
              <h2 className="text-5xl font-bold tracking-tight uppercase leading-none mb-8">
                {selectedProject.title}
              </h2>

              {/* Image in Modal */}
              <div className="border border-black w-full overflow-hidden aspect-[16/9] mb-8">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover grayscale-0"
                />
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-12 gap-8 md:grid-cols-1 md:gap-6">
                
                {/* Left Column: Metadata */}
                <div className="col-span-4 md:col-span-12 flex flex-col gap-4 font-mono text-xs border-r border-neutral-200 md:border-r-0 md:border-b md:pb-6 pr-4">
                  <div>
                    <span className="text-muted uppercase block">ROLE</span>
                    <span className="text-black font-semibold uppercase">{selectedProject.role}</span>
                  </div>
                  <div>
                    <span className="text-muted uppercase block">CLIENT</span>
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
                </div>

                {/* Right Column: Case Details */}
                <div className="col-span-8 md:col-span-12 flex flex-col gap-6 text-left">
                  <p className="text-lg text-black drop-cap-box leading-relaxed font-normal">
                    {selectedProject.content}
                  </p>
                  <p className="text-base text-muted leading-relaxed">
                    By focusing on flat layout designs, heavy rules, and structured lines, we ensured that the work does not distract with transient decorations. The result is a highly functional, visual system built on pure grid theory.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="primary" showArrow onClick={() => {
                      alert('TRANSMITTING OUTBOUND: Connection to production endpoint simulates link redirection.');
                    }}>
                      Deploy Portal
                    </Button>
                    <Button variant="secondary" onClick={() => setSelectedProject(null)}>
                      Return
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
