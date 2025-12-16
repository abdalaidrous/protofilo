import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

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
        padding: '0.85rem 1rem',
        marginBottom: '1.5rem',
        borderRadius: 16,
        background: 'rgba(5,6,10,0.8)',
        border: '1px solid var(--card-border)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Link href="#">
        <span style={{ fontWeight: 700, letterSpacing: 0.4 }}>Protofilio</span>
      </Link>
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} style={{ color: 'var(--muted)', fontWeight: 600 }}>
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
