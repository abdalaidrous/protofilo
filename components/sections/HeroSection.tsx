'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { label: 'Years of experience', value: 5, suffix: '+' },
  { label: 'Award Winner', value: 14 },
  { label: 'Project completed', value: 300, suffix: '+' },
  { label: 'Happy Clients', value: 177, suffix: '+' },
];

export function HeroSection() {
  const statRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(statRef, { margin: '-30% 0px' });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCounts(stats.map((stat) => Math.round(eased * stat.value)));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView]);

  const heroTitle = useMemo(
    () => (
      <h1 className="text-[clamp(38px,4.6vw,64px)] leading-none tracking-tight text-white">
        UI/UX and
        <br />
        graphic Designer
      </h1>
    ),
    []
  );

  return (
    <section id="home" className="relative mx-auto mt-6 max-w-6xl px-4 pt-8 lg:pt-10">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-[clamp(66px,10vw,132px)] font-bold uppercase tracking-[10px] text-white/10">
        HELLO
      </div>

      <div className="grid items-center gap-6 rounded-2xl border border-stroke/70 bg-white/5 p-6 shadow-glow glass-panel lg:grid-cols-[1.2fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-sm text-muted">This is Nataliya Rossi</p>
          {heroTitle}
          <p className="text-base text-muted">With 5+ years of experience</p>
          <div className="flex flex-wrap gap-3">
            <a
              className="relative inline-flex h-11 items-center justify-center gap-2 rounded-full border border-purple/40 bg-gradient-to-r from-purple to-purple2 px-5 text-sm font-semibold shadow-pill transition hover:-translate-y-0.5"
              href="#contact"
            >
              Say Hello
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-black/30 px-5 text-sm font-semibold text-white/80 transition hover:text-white"
              href="#work"
            >
              Work Demo
            </a>
          </div>

          <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 glass-panel">
            <div className="flex -space-x-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-black/30 bg-gradient-to-br from-purple to-purple2 saturate-150"
                />
              ))}
            </div>
            <div className="leading-tight">
              <strong className="block text-sm">44+</strong>
              <small className="text-xs text-muted">Recent client</small>
            </div>
          </div>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,44,255,0.45),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(210,27,255,0.25),transparent_60%)] blur-2xl" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,rgba(255,255,255,0.2),transparent_40%),linear-gradient(135deg,rgba(139,44,255,0.18),rgba(210,27,255,0.12)),url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=70')] bg-cover bg-center [mask-image:radial-gradient(circle_at_55%_55%,black_0_65%,transparent_78%)]"
            role="img"
            aria-label="Portrait placeholder"
          />
        </div>
      </div>

      <div
        ref={statRef}
        className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-stroke/60 bg-white/5 p-4 text-center shadow-glow glass-panel sm:grid-cols-4"
      >
        {stats.map((stat, idx) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-black/40 px-3 py-3">
            <div className="text-3xl font-bold text-white">
              {counts[idx]}
              {stat.suffix ?? ''}
            </div>
            <p className="mt-1 text-xs text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
