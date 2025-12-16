'use client';

import { useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
];

export function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-30 px-3">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border border-stroke/80 bg-white/5 px-4 py-3 shadow-glow glass-panel">
        <a href="#home" className="flex items-center gap-2 font-semibold" aria-label="Logo">
          <span className="grid h-9 w-9 place-items-center rounded-[12px] bg-gradient-to-br from-purple via-purple2 to-purple shadow-pill text-lg">
            ✦
          </span>
          <span className="leading-tight">
            <strong className="block text-sm">Intuitive</strong>
            <small className="text-xs text-muted">pixel</small>
          </span>
        </a>

        <nav
          className={`hidden items-center gap-4 text-sm md:flex ${open ? 'flex' : ''}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 transition-colors ${
                active === link.href ? 'border border-purple/50 bg-purple/20 text-white' : 'opacity-80 hover:opacity-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="relative hidden h-10 items-center justify-center gap-2 rounded-full border border-purple/40 bg-gradient-to-r from-purple to-purple2 px-4 text-sm font-semibold shadow-pill transition hover:-translate-y-0.5 md:inline-flex">
            Hire me
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-stroke bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded bg-white/80" />
              <span className="block h-0.5 w-5 rounded bg-white/80" />
              <span className="block h-0.5 w-5 rounded bg-white/80" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-stroke bg-black/80 px-4 py-3 text-sm shadow-glow backdrop-blur md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-full px-3 py-2 ${
                active === link.href ? 'border border-purple/40 bg-purple/25' : 'opacity-80 hover:opacity-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button className="relative mt-1 h-10 rounded-full border border-purple/40 bg-gradient-to-r from-purple to-purple2 px-4 text-sm font-semibold shadow-pill transition">
            Hire me
          </button>
        </div>
      )}
    </header>
  );
}
