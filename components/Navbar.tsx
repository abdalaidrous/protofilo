import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: { pathname: '/', hash: 'work' }, label: 'Projects' },
  { href: { pathname: '/', hash: 'resume' }, label: 'Experience' },
  { href: { pathname: '/', hash: 'contact' }, label: 'Contact' },
] as const;

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'sticky',
        top: 14,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.95rem 1.1rem',
        marginBottom: '1.75rem',
        borderRadius: 18,
        background: 'linear-gradient(120deg, rgba(8, 40, 48, 0.85), rgba(7, 32, 40, 0.8))',
        border: '1px solid var(--card-border)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Link href={{ pathname: '/', hash: 'home' }}>
        <span style={{ fontWeight: 800, letterSpacing: 0.6 }}>Protofilio</span>
      </Link>
      <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
        {links.map((link) => (
          <Link key={link.label} href={link.href} style={{ color: 'var(--muted)', fontWeight: 700 }}>
            {link.label}
          </Link>
        ))}
        <a className="btn" href="#contact">
          Let&apos;s talk
        </a>
      </div>
    </motion.nav>
  );
}
