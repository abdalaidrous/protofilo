'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BehanceLogo,
  Code,
  DeviceMobileCamera,
  DribbbleLogo,
  FigmaLogo,
  GithubLogo,
  Lightning,
  Sparkle,
  SquaresFour,
} from 'phosphor-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { Badge } from '@/components/Badge';
import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/data/projects';

const skills = ['Next.js', 'TypeScript', 'Framer Motion', 'Figma', 'Tailwind', 'Storybook'];

const stats = [
  { label: 'UX/UI cases', value: '28+' },
  { label: 'Web & mobile apps', value: '18' },
  { label: 'Happy clients', value: '35+' },
  { label: 'Motion systems', value: '07' },
];

const services = [
  {
    title: 'Product design',
    icon: <SquaresFour size={26} color="var(--accent)" weight="duotone" />,
    items: ['Web, SaaS & dash-boards', 'User research & flows', 'Design systems foundations'],
  },
  {
    title: 'Frontend development',
    icon: <Code size={26} color="var(--accent-2)" weight="duotone" />,
    items: ['Next.js + TypeScript', 'Micro-interactions & motion', 'Perf-minded implementation'],
  },
  {
    title: 'Mobile design',
    icon: <DeviceMobileCamera size={26} color="var(--accent-3)" weight="duotone" />,
    items: ['iOS & Android patterns', 'Interactive prototypes', 'Consistent multi-platform UI'],
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="grid-bg" aria-hidden />
      <Navbar />
      <section className="section-shell hero-shell" id="hero">
        <div className="section-content hero">
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <span className="tagline">
                <Lightning size={18} /> Portfolio 2024 · Abdul Moiz Ghani
              </span>
              <h1>
                Designer + frontend dev crafting high-performing, motion-rich experiences for SaaS, web, and mobile.
              </h1>
              <p>
                I design elevated dashboards, marketing sites, and mobile apps with a focus on clarity, aesthetics, and
                interaction details that feel fast and alive. Let&apos;s build a product users can&apos;t wait to use.
              </p>
              <div className="button-row">
                <a className="btn" href="#projects">
                  View projects <ArrowRight size={16} />
                </a>
                <a className="btn ghost" href="#contact">
                  Download resume
                </a>
              </div>
              <div className="social-row">
                <span>Follow me</span>
                <div className="social-links">
                  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubLogo size={22} weight="duotone" />
                  </a>
                  <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble">
                    <DribbbleLogo size={22} weight="duotone" />
                  </a>
                  <a href="https://www.behance.net" target="_blank" rel="noreferrer" aria-label="Behance">
                    <BehanceLogo size={22} weight="duotone" />
                  </a>
                  <a href="https://www.figma.com" target="_blank" rel="noreferrer" aria-label="Figma">
                    <FigmaLogo size={22} weight="duotone" />
                  </a>
                </div>
              </div>
              <div className="metrics">
                {stats.map((stat) => (
                  <div className="metric" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="profile-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <div className="profile-photo" aria-hidden>
                <div className="photo-glow" />
                <div className="photo-placeholder">AM</div>
              </div>
              <div className="profile-body">
                <span className="profile-role">Web designer & developer</span>
                <h3>Abdul Moiz Ghani</h3>
                <p>
                  Strategizing products through research, crafting atomic design systems, and delivering pixel-perfect,
                  animated interfaces for every screen.
                </p>
                <div className="badge-row">
                  <Badge>
                    <Sparkle size={16} color="var(--accent-2)" /> UX/UI Design
                  </Badge>
                  <Badge>
                    <Sparkle size={16} color="var(--accent-2)" /> Frontend build
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="summary">
        <div className="section-content">
          <SectionHeading
            eyebrow="Latest summary"
            title="Leading end-to-end product design for startups"
            description="I help founders and teams translate product goals into clean, performant experiences, from user flows to coded components."
          />
          <div className="summary-grid">
            <div className="summary-card">
              <h3>Product strategy</h3>
              <p>Research, market fit alignment, journey mapping, and measurable outcomes baked into every release.</p>
            </div>
            <div className="summary-card">
              <h3>Design systems</h3>
              <p>Tokens, documentation, and reusable patterns that keep teams consistent across web and mobile.</p>
            </div>
            <div className="summary-card">
              <h3>Launch readiness</h3>
              <p>Production-grade code with interactions, states, and accessibility covered for fast go-to-market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="services">
        <div className="section-content">
          <SectionHeading
            eyebrow="What I do"
            title="End-to-end design & development"
            description="A cross-functional partner taking products from early concepts to shippable interfaces."
          />
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-head">
                  {service.icon}
                  <h3>{service.title}</h3>
                </div>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="toolbelt">
            <p className="toolbelt-label">Tool belt</p>
            <div className="badges">
              {skills.map((skill) => (
                <Badge key={skill}>
                  <Sparkle size={16} color="var(--accent-2)" /> {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="projects">
        <div className="section-content">
          <SectionHeading
            eyebrow="Featured work"
            title="Projects that mix clarity and animation"
            description="Highlights from recent product builds, experiments, and templates you can draw inspiration from."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="contact">
        <div className="section-content contact-card">
          <div>
            <SectionHeading
              eyebrow="Let&apos;s collaborate"
              title="Ready to build your next launch?"
              description="Tell me about the next product, landing page, or design system you want to bring to life."
            />
            <div className="badges">
              {skills.map((skill) => (
                <Badge key={skill}>
                  <Sparkle size={16} color="var(--accent-2)" /> {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="cta-card">
            <p>Have a project in mind?</p>
            <h3>Let&apos;s build your next product together</h3>
            <div className="button-row" style={{ marginTop: '1rem' }}>
              <a className="btn" href="mailto:hello@portfolio.dev">
                Say hello
              </a>
              <a className="btn ghost" href="https://cal.com" target="_blank" rel="noreferrer">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
