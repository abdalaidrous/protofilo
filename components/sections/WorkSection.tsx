'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Creative Web Agency',
    subtitle: 'Landing + UI kit + motion',
    className: 'md:col-span-2 row-span-1 min-h-[200px]',
    background:
      "bg-[linear-gradient(135deg,rgba(23,255,210,0.2),rgba(139,44,255,0.15)),url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70')]",
  },
  {
    title: 'Transforming UX',
    subtitle: 'Product design system',
    className: 'row-span-2 min-h-[200px]',
    background:
      "bg-[linear-gradient(135deg,rgba(139,44,255,0.18),rgba(255,255,255,0.06)),url('https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=70')]",
  },
  {
    title: 'Podcast Platform',
    subtitle: 'Web + Mobile UI',
    className: 'row-span-2 min-h-[200px]',
    background:
      "bg-[linear-gradient(135deg,rgba(210,27,255,0.18),rgba(255,255,255,0.06)),url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=70')]",
  },
  {
    title: 'Mobile UI Pack',
    subtitle: '50+ screens',
    className: 'min-h-[150px]',
    background:
      "bg-[linear-gradient(135deg,rgba(139,44,255,0.22),rgba(0,0,0,0.2)),url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=70')]",
  },
  {
    title: 'NFT App',
    subtitle: 'UI design — part 2',
    className: 'min-h-[150px]',
    background:
      "bg-[linear-gradient(135deg,rgba(210,27,255,0.22),rgba(0,0,0,0.2)),url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&q=70')]",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="section-spacing">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-muted">RECENT WORK</p>
          <h2 className="text-3xl font-semibold leading-tight text-white">
            Take a look at my
            <br />
            recent <span className="rounded-full border border-purple/40 bg-purple/30 px-3 py-1 text-base">Design Ventures</span>
          </h2>
        </div>

        <div className="relative mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[190px]">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-glow ${project.className}`}
              whileHover={{ y: -6, rotateX: -2, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            >
              <div className={`absolute inset-0 bg-cover bg-center opacity-95 ${project.background}`} />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/15 bg-black/50 px-4 py-3 backdrop-blur">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-1 text-xs text-muted">{project.subtitle}</p>
              </div>
            </motion.article>
          ))}

          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 rounded-full border border-purple/60 bg-gradient-to-r from-purple to-purple2 p-4 text-xl shadow-pill transition hover:-translate-y-0"
            type="button"
            aria-label="Open showcase"
          >
            ↗
          </button>
        </div>
      </div>
    </section>
  );
}
