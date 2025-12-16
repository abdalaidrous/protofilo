const socials = [
  { label: 'Dribbble', short: 'Db', href: '#' },
  { label: 'Behance', short: 'Be', href: '#' },
  { label: 'LinkedIn', short: 'in', href: '#' },
  { label: 'X', short: 'X', href: '#' },
];

export function SocialDock() {
  return (
    <aside className="fixed right-5 top-36 z-20 hidden flex-col gap-2 md:flex" aria-label="Social links">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          title={social.label}
          aria-label={social.label}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold uppercase text-white/80 transition hover:-translate-y-0.5 hover:border-purple/60 hover:text-white"
        >
          {social.short}
        </a>
      ))}
    </aside>
  );
}
