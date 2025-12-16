'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Lightning, Sparkle } from 'phosphor-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { Badge } from '@/components/Badge';
import { SectionHeading } from '@/components/SectionHeading';
import { projects } from '@/data/projects';

const skills = ['Next.js', 'TypeScript', 'Framer Motion', 'Design Systems', 'Tailwind', 'Storybook'];

export default function Home() {
  return (
    <main>
      <div className="grid-bg" aria-hidden />
      <Navbar />
      <section className="section-shell" id="hero">
        <div className="section-content hero">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <span className="tagline">
              <Lightning size={18} /> Portfolio ready for 2024
            </span>
            <h1>
              Hey, I&apos;m <span style={{ color: 'var(--accent)' }}>Your Name</span> — I craft clear, modern experiences
              with purposeful motion.
            </h1>
            <p>
              A product-minded frontend engineer who blends delightful interactions with pragmatic delivery. Explore a
              curated set of projects, experiments, and UI explorations below.
            </p>
            <div className="button-row">
              <a className="btn" href="#projects">
                View projects <ArrowRight size={16} />
              </a>
              <a className="btn secondary" href="#contact">
                Download resume
              </a>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>25+</strong>
                <p>Interfaces shipped for startups & founders.</p>
              </div>
              <div className="metric">
                <strong>4.8/5</strong>
                <p>Average satisfaction across freelance clients.</p>
              </div>
              <div className="metric">
                <strong>10 yrs</strong>
                <p>Building for web, mobile, and design systems.</p>
              </div>
            </div>
          </motion.div>
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

      <section className="section-shell" id="experience">
        <div className="section-content">
          <SectionHeading
            eyebrow="Experience"
            title="Blending design systems, product strategy, and front-end craft"
            description="From design systems to marketing sites and dashboards, I help teams ship polished experiences with speed."
          />
          <div className="timeline">
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.25 }}
            >
              <h3 style={{ margin: '0 0 0.35rem' }}>Lead Frontend · Studio One</h3>
              <p>Built a multi-brand design system, elevated performance, and created motion guidelines for faster launches.</p>
            </motion.div>
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              <h3 style={{ margin: '0 0 0.35rem' }}>Product Engineer · Freelance</h3>
              <p>Partnered with founders to prototype MVPs, set up analytics, and ship animated landing pages that convert.</p>
            </motion.div>
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.25, delay: 0.1 }}
            >
              <h3 style={{ margin: '0 0 0.35rem' }}>Design Technologist · Collective</h3>
              <p>Explored motion-first prototypes, micro-interactions, and accessibility to validate product directions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="contact">
        <div className="section-content">
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
          <div className="button-row" style={{ marginTop: '2rem' }}>
            <a className="btn" href="mailto:hello@portfolio.dev">
              Say hello
            </a>
            <a className="btn secondary" href="https://cal.com" target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
